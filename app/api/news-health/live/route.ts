import { NextResponse } from 'next/server';
import { getDeploymentIdentity } from '../../../../lib/deploymentIdentity';

export const dynamic = 'force-dynamic';

const CONTRACT_VERSION = 1;

function getHeaders() {
  const deployment = getDeploymentIdentity();
  return {
    'Cache-Control': 'no-store',
    'X-NackaSidan-Probe': 'live',
    'X-NackaSidan-Probe-Version': String(CONTRACT_VERSION),
    ...(deployment.shortCommitSha ? { 'X-NackaSidan-Commit': deployment.shortCommitSha } : {}),
    ...(deployment.deploymentId ? { 'X-NackaSidan-Deployment-Id': deployment.deploymentId } : {}),
    'X-NackaSidan-Environment': deployment.environment,
  };
}

export async function GET() {
  const deployment = getDeploymentIdentity();

  return NextResponse.json({
    contractVersion: CONTRACT_VERSION,
    live: true,
    service: 'NackaSidan',
    checkedAt: new Date().toISOString(),
    deployment,
  }, {
    status: 200,
    headers: getHeaders(),
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: getHeaders(),
  });
}
