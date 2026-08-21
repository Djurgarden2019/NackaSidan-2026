import { NextResponse } from 'next/server';
import { getDeploymentIdentity } from '../../../lib/deploymentIdentity';

export const dynamic = 'force-dynamic';

export async function GET() {
  const deployment = getDeploymentIdentity();

  return NextResponse.json({
    contractVersion: 1,
    status: deployment.provenanceOk ? 'GODKÄND' : 'VARNING',
    deployment,
    checkedAt: new Date().toISOString(),
  }, {
    status: deployment.provenanceOk ? 200 : 503,
    headers: {
      'Cache-Control': 'no-store',
      'X-NackaSidan-Deployment-Provenance': deployment.provenanceOk ? 'ok' : 'warning',
      'X-NackaSidan-Commit': deployment.shortCommitSha ?? 'unknown',
      'X-NackaSidan-Environment': deployment.environment,
    },
  });
}

export async function HEAD() {
  const deployment = getDeploymentIdentity();
  return new Response(null, {
    status: deployment.provenanceOk ? 200 : 503,
    headers: {
      'Cache-Control': 'no-store',
      'X-NackaSidan-Deployment-Provenance': deployment.provenanceOk ? 'ok' : 'warning',
      'X-NackaSidan-Commit': deployment.shortCommitSha ?? 'unknown',
      'X-NackaSidan-Environment': deployment.environment,
    },
  });
}
