import type { getLiveNews } from './liveNews';

type LiveNewsData = Awaited<ReturnType<typeof getLiveNews>>;
export type NewsHealthStatus = 'STABIL' | 'BEVAKA' | 'ÅTGÄRD';

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

  const requiresAction = allSourcesDown || allLocalFeedsDown || radar.items.length === 0;
  const needsWatching = unavailable.length > 0 || radar.localCount === 0 || emptySections.length > 0;
  const status: NewsHealthStatus = requiresAction ? 'ÅTGÄRD' : needsWatching ? 'BEVAKA' : 'STABIL';

  return { unavailable, unavailableLocalFeeds, emptySections, alerts, status };
}
