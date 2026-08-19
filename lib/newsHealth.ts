import type { getLiveNews } from './liveNews';

type LiveNewsData = Awaited<ReturnType<typeof getLiveNews>>;
export type NewsHealthStatus = 'STABIL' | 'BEVAKA' | 'ÅTGÄRD';
export type NewsHealthReason = 'SOURCE_DEGRADED' | 'LOCAL_EMPTY' | 'RADAR_EMPTY' | 'CATEGORY_EMPTY' | 'ALL_SOURCES_DOWN' | 'ALL_LOCAL_SOURCES_DOWN' | 'NEWS_STALE';
export type SourceHealthState = 'AKTIV' | 'GAMMAL' | 'INGEN_DATERAD_DATA' | 'NERE';

const STALE_AFTER_HOURS = 36;
const SOURCE_STALE_AFTER_HOURS = 168;

export function getNewsHealth(radar: LiveNewsData) {
  const unavailable = radar.feeds.filter(feed => feed.status !== 'Ansluten');
  const emptySections = radar.sections.filter(section => section !== 'Alla' && (radar.sectionCounts[section] ?? 0) === 0);
  const localFeeds = radar.feeds.filter(feed => feed.section === 'Nacka/Lokalt');
  const unavailableLocalFeeds = localFeeds.filter(feed => feed.status !== 'Ansluten');
  const allLocalFeedsDown = localFeeds.length > 0 && unavailableLocalFeeds.length === localFeeds.length;
  const allSourcesDown = radar.feeds.length > 0 && unavailable.length === radar.feeds.length;
  const datedItems = radar.items.map(item => Date.parse(item.published)).filter(time => Number.isFinite(time));
  const newestPublishedAt = datedItems.length ? new Date(Math.max(...datedItems)).toISOString() : null;
  const newestAgeHours = newestPublishedAt ? Math.max(0, (Date.now() - Date.parse(newestPublishedAt)) / 3600000) : null;
  const newsStale = radar.items.length > 0 && newestAgeHours !== null && newestAgeHours > STALE_AFTER_HOURS;

  const sourceFreshness = radar.feeds.map(feed => {
    const sourceDates = radar.items
      .filter(item => item.source === feed.name)
      .map(item => Date.parse(item.published))
      .filter(time => Number.isFinite(time));
    const latestPublishedAt = sourceDates.length ? new Date(Math.max(...sourceDates)).toISOString() : null;
    const ageHours = latestPublishedAt ? Math.max(0, (Date.now() - Date.parse(latestPublishedAt)) / 3600000) : null;
    const stale = feed.status === 'Ansluten' && ageHours !== null && ageHours > SOURCE_STALE_AFTER_HOURS;
    const state: SourceHealthState = feed.status !== 'Ansluten' ? 'NERE' : ageHours === null ? 'INGEN_DATERAD_DATA' : stale ? 'GAMMAL' : 'AKTIV';
    return { name: feed.name, section: feed.section, status: feed.status, latestPublishedAt, ageHours, stale, state };
  });
  const staleSources = sourceFreshness.filter(source => source.state === 'GAMMAL');
  const undatedSources = sourceFreshness.filter(source => source.state === 'INGEN_DATERAD_DATA');
  const activeSources = sourceFreshness.filter(source => source.state === 'AKTIV');
  const downSources = sourceFreshness.filter(source => source.state === 'NERE');

  const alerts = [
    ...unavailable.map(feed => `${feed.name} är tillfälligt otillgänglig.`),
    ...(radar.localCount === 0 ? ['Nacka/Lokalt har inga aktuella artiklar.'] : []),
    ...(radar.items.length === 0 ? ['Nyhetsradarn saknar aktuellt innehåll.'] : []),
    ...(newsStale ? [`Nyaste daterade artikeln är äldre än ${STALE_AFTER_HOURS} timmar.`] : []),
    ...(emptySections.length ? [`Tomma kategorier: ${emptySections.join(', ')}.`] : []),
  ];

  const reasons: NewsHealthReason[] = [];
  if (unavailable.length > 0) reasons.push('SOURCE_DEGRADED');
  if (radar.localCount === 0) reasons.push('LOCAL_EMPTY');
  if (radar.items.length === 0) reasons.push('RADAR_EMPTY');
  if (newsStale) reasons.push('NEWS_STALE');
  if (emptySections.length > 0) reasons.push('CATEGORY_EMPTY');
  if (allSourcesDown) reasons.push('ALL_SOURCES_DOWN');
  if (allLocalFeedsDown) reasons.push('ALL_LOCAL_SOURCES_DOWN');

  const requiresAction = allSourcesDown || allLocalFeedsDown || radar.items.length === 0;
  const needsWatching = unavailable.length > 0 || radar.localCount === 0 || emptySections.length > 0 || newsStale;
  const status: NewsHealthStatus = requiresAction ? 'ÅTGÄRD' : needsWatching ? 'BEVAKA' : 'STABIL';

  return {
    unavailable,
    unavailableLocalFeeds,
    emptySections,
    alerts,
    reasons,
    status,
    newestPublishedAt,
    newestAgeHours,
    staleAfterHours: STALE_AFTER_HOURS,
    sourceFreshness,
    staleSources,
    undatedSources,
    activeSources,
    downSources,
    sourceStaleAfterHours: SOURCE_STALE_AFTER_HOURS,
  };
}
