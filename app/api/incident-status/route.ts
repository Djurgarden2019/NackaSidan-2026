import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { getNewsHealth } from '../../../lib/newsHealth';
import { getDeploymentIdentity } from '../../../lib/deploymentIdentity';

export const dynamic = 'force-dynamic';
export const revalidate = 900;

type ActionCode = 'VERIFY_DEPLOYMENT' | 'OPEN_FULL_DIAGNOSTICS' | 'INVESTIGATE_WARNINGS' | 'NO_ACTION';

function getNextAction(status: string, provenanceOk: boolean): { code: ActionCode; label: string } {
  if (!provenanceOk) return { code: 'VERIFY_DEPLOYMENT', label: 'Verifiera production-deployens provenance och Git-ref.' };
  if (status === 'ÅTGÄRD') return { code: 'OPEN_FULL_DIAGNOSTICS', label: 'Öppna full health-diagnostik och åtgärda blockerande fel.' };
  if (status === 'BEVAKA') return { code: 'INVESTIGATE_WARNINGS', label: 'Undersök varningar och degraderade eller inaktuella källor.' };
  return { code: 'NO_ACTION', label: 'Ingen akut åtgärd krävs. Fortsätt normal övervakning.' };
}

async function buildIncidentStatus() {
  const radar = await getLiveNews();
  const health = getNewsHealth(radar);
  const deployment = getDeploymentIdentity();
  const nextAction = getNextAction(health.status, deployment.provenanceOk);
  const incidentOpen = !deployment.provenanceOk || health.status !== 'STABIL';
  const severity = !deployment.provenanceOk || health.status === 'ÅTGÄRD' ? 2 : health.status === 'BEVAKA' ? 1 : 0;

  return {
    contractVersion: 1,
    incidentOpen,
    severity,
    healthStatus: health.status,
    provenanceOk: deployment.provenanceOk,
    nextAction,
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
  const payload = await buildIncidentStatus();
  return NextResponse.json(payload, {
    status: payload.severity === 2 ? 503 : 200,
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      'X-NackaSidan-Incident-Open': payload.incidentOpen ? 'true' : 'false',
      'X-NackaSidan-Incident-Severity': String(payload.severity),
      'X-NackaSidan-Next-Action': payload.nextAction.code,
      'X-NackaSidan-Deployment-Id': payload.deployment.deploymentId ?? 'unknown',
      'X-NackaSidan-Commit': payload.deployment.shortCommitSha ?? 'unknown',
    },
  });
}

export async function HEAD() {
  const payload = await buildIncidentStatus();
  return new Response(null, {
    status: payload.severity === 2 ? 503 : 200,
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      'X-NackaSidan-Incident-Open': payload.incidentOpen ? 'true' : 'false',
      'X-NackaSidan-Incident-Severity': String(payload.severity),
      'X-NackaSidan-Next-Action': payload.nextAction.code,
      'X-NackaSidan-Deployment-Id': payload.deployment.deploymentId ?? 'unknown',
      'X-NackaSidan-Commit': payload.deployment.shortCommitSha ?? 'unknown',
    },
  });
}
