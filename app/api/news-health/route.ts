import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';

export const revalidate = 900;

export async function GET() {
  const radar = await getLiveNews();
  const unavailable = radar.feeds.filter(feed => feed.status !== 'Ansluten');
  const emptySections = radar.sections.filter(section => section !== 'Alla' && (radar.sectionCounts[section] ?? 0) === 0);
  const alerts = [
    ...unavailable.map(feed => `${feed.name} är tillfälligt otillgänglig.`),
    ...(radar.localCount === 0 ? ['Nacka/Lokalt har inga aktuella artiklar.'] : []),
    ...(radar.items.length === 0 ? ['Nyhetsradarn saknar aktuellt innehåll.'] : []),
    ...(emptySections.length ? [`Tomma kategorier: ${emptySections.join(', ')}.`] : []),
  ];
  const status = alerts.length === 0 ? 'STABIL' : unavailable.length || radar.items.length === 0 ? 'ÅTGÄRD' : 'BEVAKA';

  return NextResponse.json({
    status,
    checkedAt: radar.fetchedAt,
    articleCount: radar.items.length,
    localCount: radar.localCount,
    highPriority: radar.highPriority,
    sourceCount: radar.feeds.length,
    connectedSources: radar.feeds.length - unavailable.length,
    unavailableSources: unavailable.map(feed => feed.name),
    sectionCounts: radar.sectionCounts,
    alerts,
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
    },
  });
}
