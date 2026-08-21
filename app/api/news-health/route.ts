import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';
import { getDeploymentIdentity } from '../../../lib/deploymentIdentity';

export const revalidate = 900;

export async function GET() {
  const radar = await getLiveNews();
  const deployment = getDeploymentIdentity();
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
    undatedSources,
    activeSources,
    downSources,
    sourceStaleAfterHours,
  } = getNewsHealth(radar);
  const severity = status === 'ÅTGÄRD' ? 2 : status === 'BEVAKA' ? 1 : 0;
  const healthy = status === 'STABIL';

  return NextResponse.json({
    status,
    severity,
    healthy,
    deployment,
    reasons,
    checkedAt: radar.fetchedAt,
    newestPublishedAt,
    newestAgeHours: newestAgeHours === null ? null : Math.round(newestAgeHours * 10) / 10,
    staleAfterHours,
    sourceStaleAfterHours,
    sourceStateCounts: {
      active: activeSources.length,
      stale: staleSources.length,
      undated: undatedSources.length,
      down: downSources.length,
    },
    staleSources: staleSources.map(source => source.name),
    undatedSources: undatedSources.map(source => source.name),
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
    status: status === 'ÅTGÄRD' ? 503 : 200,
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      'X-NackaSidan-Health': status,
      'X-NackaSidan-Severity': String(severity),
      ...(deployment.shortCommitSha ? { 'X-NackaSidan-Commit': deployment.shortCommitSha } : {}),
      ...(deployment.deploymentId ? { 'X-NackaSidan-Deployment-Id': deployment.deploymentId } : {}),
      'X-NackaSidan-Environment': deployment.environment,
    },
  });
}
