import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';

export const revalidate = 900;

export async function GET() {
  const radar = await getLiveNews();
  const { unavailable, alerts, reasons, status, newestPublishedAt, newestAgeHours, staleAfterHours } = getNewsHealth(radar);

  return NextResponse.json({
    status,
    reasons,
    checkedAt: radar.fetchedAt,
    newestPublishedAt,
    newestAgeHours: newestAgeHours === null ? null : Math.round(newestAgeHours * 10) / 10,
    staleAfterHours,
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
