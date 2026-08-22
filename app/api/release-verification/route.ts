import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';
import { getDeploymentIdentity } from '../../../lib/deploymentIdentity';

export const revalidate = 900;

type VerificationStatus = 'VERIFIED' | 'BEVAKA' | 'FAILED';

async function buildReleaseVerification() {
  const radar = await getLiveNews();
  const health = getNewsHealth(radar);
  const deployment = getDeploymentIdentity();

  const livenessOk = true;
  const readinessOk = health.status !== 'ÅTGÄRD';
  const provenanceOk = deployment.provenanceOk;

  let status: VerificationStatus = 'VERIFIED';
  if (!provenanceOk || !readinessOk) status = 'FAILED';
  else if (health.status === 'BEVAKA') status = 'BEVAKA';

  const checks = {
    liveness: { ok: livenessOk },
    readiness: { ok: readinessOk, healthStatus: health.status },
    provenance: { ok: provenanceOk, gitRef: deployment.gitRef },
    productionIdentity: {
      ok: deployment.isProduction ? deployment.isMainRef : true,
      environment: deployment.environment,
      commitSha: deployment.commitSha,
      shortCommitSha: deployment.shortCommitSha,
      deploymentId: deployment.deploymentId,
    },
  };

  return {
    contractVersion: 1,
    verificationStatus: status,
    verified: status === 'VERIFIED',
    operationallyReady: readinessOk && provenanceOk,
    healthStatus: health.status,
    severity: !provenanceOk || health.status === 'ÅTGÄRD' ? 2 : health.status === 'BEVAKA' ? 1 : 0,
    checks,
    reasons: health.reasons,
    alerts: health.alerts,
    deployment: {
      commitSha: deployment.commitSha,
      shortCommitSha: deployment.shortCommitSha,
      deploymentId: deployment.deploymentId,
      environment: deployment.environment,
      gitRef: deployment.gitRef,
      deploymentUrl: deployment.deploymentUrl,
    },
    checkedAt: new Date().toISOString(),
  };
}

export async function GET() {
  const payload = await buildReleaseVerification();
  return NextResponse.json(payload, {
    status: payload.verificationStatus === 'FAILED' ? 503 : 200,
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      'X-NackaSidan-Release-Verification': payload.verificationStatus,
      'X-NackaSidan-Release-Verified': payload.verified ? 'true' : 'false',
      'X-NackaSidan-Severity': String(payload.severity),
      'X-NackaSidan-Deployment-Id': payload.deployment.deploymentId ?? 'unknown',
      'X-NackaSidan-Commit': payload.deployment.shortCommitSha ?? 'unknown',
    },
  });
}

export async function HEAD() {
  const payload = await buildReleaseVerification();
  return new Response(null, {
    status: payload.verificationStatus === 'FAILED' ? 503 : 200,
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      'X-NackaSidan-Release-Verification': payload.verificationStatus,
      'X-NackaSidan-Release-Verified': payload.verified ? 'true' : 'false',
      'X-NackaSidan-Severity': String(payload.severity),
      'X-NackaSidan-Deployment-Id': payload.deployment.deploymentId ?? 'unknown',
      'X-NackaSidan-Commit': payload.deployment.shortCommitSha ?? 'unknown',
    },
  });
}
