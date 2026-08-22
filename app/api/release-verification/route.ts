import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';
import { getDeploymentIdentity } from '../../../lib/deploymentIdentity';

export const revalidate = 900;

type VerificationStatus = 'VERIFIED' | 'BEVAKA' | 'FAILED';
type ReleaseGate = 'ALLOW' | 'ALLOW_WITH_WARNING' | 'BLOCK';
type ReleaseGateReason =
  | 'PROVENANCE_FAILED'
  | 'READINESS_FAILED'
  | 'HEALTH_WARNING'
  | 'PRODUCTION_IDENTITY_WARNING'
  | 'ALL_CHECKS_PASSED';

async function buildReleaseVerification() {
  const radar = await getLiveNews();
  const health = getNewsHealth(radar);
  const deployment = getDeploymentIdentity();

  const livenessOk = true;
  const readinessOk = health.status !== 'ÅTGÄRD';
  const provenanceOk = deployment.provenanceOk;
  const productionIdentityOk = deployment.isProduction ? deployment.isMainRef : true;

  let status: VerificationStatus = 'VERIFIED';
  if (!provenanceOk || !readinessOk) status = 'FAILED';
  else if (health.status === 'BEVAKA') status = 'BEVAKA';

  const gate: ReleaseGate = status === 'FAILED' ? 'BLOCK' : status === 'BEVAKA' ? 'ALLOW_WITH_WARNING' : 'ALLOW';
  const gateReasons: ReleaseGateReason[] = [];

  if (!provenanceOk) gateReasons.push('PROVENANCE_FAILED');
  if (!readinessOk) gateReasons.push('READINESS_FAILED');
  if (health.status === 'BEVAKA') gateReasons.push('HEALTH_WARNING');
  if (!productionIdentityOk) gateReasons.push('PRODUCTION_IDENTITY_WARNING');
  if (gateReasons.length === 0) gateReasons.push('ALL_CHECKS_PASSED');

  const checks = {
    liveness: { ok: livenessOk },
    readiness: { ok: readinessOk, healthStatus: health.status },
    provenance: { ok: provenanceOk, gitRef: deployment.gitRef },
    productionIdentity: {
      ok: productionIdentityOk,
      environment: deployment.environment,
      commitSha: deployment.commitSha,
      shortCommitSha: deployment.shortCommitSha,
      deploymentId: deployment.deploymentId,
    },
  };

  return {
    contractVersion: 1,
    verificationStatus: status,
    releaseGate: gate,
    releaseGateReasons: gateReasons,
    primaryReleaseGateReason: gateReasons[0],
    releaseAllowed: gate !== 'BLOCK',
    warningAcknowledgementRequired: gate === 'ALLOW_WITH_WARNING',
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

function headersFor(payload: Awaited<ReturnType<typeof buildReleaseVerification>>) {
  return {
    'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
    'X-NackaSidan-Release-Verification': payload.verificationStatus,
    'X-NackaSidan-Release-Gate': payload.releaseGate,
    'X-NackaSidan-Release-Gate-Reason': payload.primaryReleaseGateReason,
    'X-NackaSidan-Release-Allowed': payload.releaseAllowed ? 'true' : 'false',
    'X-NackaSidan-Release-Verified': payload.verified ? 'true' : 'false',
    'X-NackaSidan-Severity': String(payload.severity),
    'X-NackaSidan-Deployment-Id': payload.deployment.deploymentId ?? 'unknown',
    'X-NackaSidan-Commit': payload.deployment.shortCommitSha ?? 'unknown',
  };
}

export async function GET() {
  const payload = await buildReleaseVerification();
  return NextResponse.json(payload, {
    status: payload.releaseGate === 'BLOCK' ? 503 : 200,
    headers: headersFor(payload),
  });
}

export async function HEAD() {
  const payload = await buildReleaseVerification();
  return new Response(null, {
    status: payload.releaseGate === 'BLOCK' ? 503 : 200,
    headers: headersFor(payload),
  });
}
