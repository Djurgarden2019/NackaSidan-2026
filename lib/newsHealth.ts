import type { getLiveNews } from './liveNews';

type LiveNewsData = Awaited<ReturnType<typeof getLiveNews>>;
export type NewsHealthStatus = 'STABIL' | 'BEVAKA' | 'ÅTGÄRD';

export function getNewsHealth(radar: LiveNewsData) {
  const unavailable = radar.feeds.filter(feed => feed.status !== 'Ansluten');
  const emptySections = radar.sections.filter(section => section !== 'Alla' && (radar.sectionCounts[section] ?? 0) === 0);
  const alerts = [
    ...unavailable.map(feed => `${feed.name} är tillfälligt otillgänglig.`),
    ...(radar.localCount === 0 ? ['Nacka/Lokalt har inga aktuella artiklar.'] : []),
    ...(radar.items.length === 0 ? ['Nyhetsradarn saknar aktuellt innehåll.'] : []),
    ...(emptySections.length ? [`Tomma kategorier: ${emptySections.join(', ')}.`] : []),
  ];
  const status: NewsHealthStatus = alerts.length === 0 ? 'STABIL' : unavailable.length || radar.items.length === 0 ? 'ÅTGÄRD' : 'BEVAKA';

  return { unavailable, emptySections, alerts, status };
}
