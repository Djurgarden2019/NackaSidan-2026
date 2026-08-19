import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';

export const revalidate = 900;

export async function GET() {
  const radar = await getLiveNews();
  const {
    unavailable,
    alerts,
    reasons,
    status,
    newestPublishedAt,
    newestAgeHours,
    staleAfterHours,
    sourceFreshness,
    staleSources,
    sourceStaleAfterHours,
  } = getNewsHealth(radar);

  return NextResponse.json({
    status,
    reasons,
    checkedAt: radar.fetchedAt,
    newestPublishedAt,
    newestAgeHours: newestAgeHours === null ? null : Math.round(newestAgeHours * 10) / 10,
    staleAfterHours,
    sourceStaleAfterHours,
    staleSources: staleSources.map(source => source.name),
    sourceFreshness: sourceFreshness.map(source => ({
      ...source,
      ageHours: source.ageHours === null ? null : Math.round(source.ageHours * 10) / 10,
    })),
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
