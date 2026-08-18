import type { getLiveNews } from './liveNews';

type LiveNewsData = Awaited<ReturnType<typeof getLiveNews>>;
export type NewsHealthStatus = 'STABIL' | 'BEVAKA' | 'ÅTGÄRD';
export type NewsHealthReason = 'SOURCE_DEGRADED' | 'LOCAL_EMPTY' | 'RADAR_EMPTY' | 'CATEGORY_EMPTY' | 'ALL_SOURCES_DOWN' | 'ALL_LOCAL_SOURCES_DOWN';

export function getNewsHealth(radar: LiveNewsData) {
  const unavailable = radar.feeds.filter(feed => feed.status !== 'Ansluten');
  const emptySections = radar.sections.filter(section => section !== 'Alla' && (radar.sectionCounts[section] ?? 0) === 0);
  const localFeeds = radar.feeds.filter(feed => feed.section === 'Nacka/Lokalt');
  const unavailableLocalFeeds = localFeeds.filter(feed => feed.status !== 'Ansluten');
  const allLocalFeedsDown = localFeeds.length > 0 && unavailableLocalFeeds.length === localFeeds.length;
  const allSourcesDown = radar.feeds.length > 0 && unavailable.length === radar.feeds.length;

  const alerts = [
    ...unavailable.map(feed => `${feed.name} är tillfälligt otillgänglig.`),
    ...(radar.localCount === 0 ? ['Nacka/Lokalt har inga aktuella artiklar.'] : []),
    ...(radar.items.length === 0 ? ['Nyhetsradarn saknar aktuellt innehåll.'] : []),
    ...(emptySections.length ? [`Tomma kategorier: ${emptySections.join(', ')}.`] : []),
  ];

  const reasons: NewsHealthReason[] = [];
  if (unavailable.length > 0) reasons.push('SOURCE_DEGRADED');
  if (radar.localCount === 0) reasons.push('LOCAL_EMPTY');
  if (radar.items.length === 0) reasons.push('RADAR_EMPTY');
  if (emptySections.length > 0) reasons.push('CATEGORY_EMPTY');
  if (allSourcesDown) reasons.push('ALL_SOURCES_DOWN');
  if (allLocalFeedsDown) reasons.push('ALL_LOCAL_SOURCES_DOWN');

  const requiresAction = allSourcesDown || allLocalFeedsDown || radar.items.length === 0;
  const needsWatching = unavailable.length > 0 || radar.localCount === 0 || emptySections.length > 0;
  const status: NewsHealthStatus = requiresAction ? 'ÅTGÄRD' : needsWatching ? 'BEVAKA' : 'STABIL';

  return { unavailable, unavailableLocalFeeds, emptySections, alerts, reasons, status };
}
