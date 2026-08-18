import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';

export const revalidate = 900;

export async function GET() {
  const radar = await getLiveNews();
  const { unavailable, alerts, status } = getNewsHealth(radar);

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
