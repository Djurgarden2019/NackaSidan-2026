# NackaSidan incident runbook

Use this runbook when monitoring reports a warning or outage.

## 1. Check liveness

Request `/api/news-health/live`.

- HTTP 200: the application runtime is alive. Continue to readiness.
- Non-200 or unreachable: investigate the active Vercel deployment and runtime/build logs first.

Record `X-NackaSidan-Commit`, `X-NackaSidan-Environment` and `X-NackaSidan-Deployment-Id`.

## 2. Check readiness

Request `/api/news-health/ready`.

- HTTP 200 with severity 0: service is STABIL.
- HTTP 200 with severity 1: service is BEVAKA; investigate degraded/stale news sources but do not classify the site as unavailable.
- HTTP 503 with severity 2: service is ÅTGÄRD; open full health diagnostics.

## 3. Open full diagnostics

Request `/api/news-health` and inspect:

- `status`
- `reasons`
- `alerts`
- unavailable sources
- stale/undated sources
- newest article age
- deployment identity

Use the reason codes to identify whether the failure is source-specific, local-news-specific or radar-wide.

## 4. Verify deployment provenance

Request `/api/deployment`.

Production should report approved provenance and originate from `main`. Capture the commit SHA and deployment ID. If provenance is a warning, treat release verification as failed even when liveness is healthy.

## 5. Correlate in Vercel

Use the captured deployment ID to locate the exact deployment. Review build logs for build failures and runtime logs for server-side failures. Do not troubleshoot against a different deployment.

## 6. Recovery decision

- Source degradation only: keep the site online, investigate affected feeds, and monitor BEVAKA.
- Readiness failure with healthy runtime: prioritize news-data/source recovery.
- Runtime failure: prioritize deployment/runtime recovery.
- Bad production provenance: correct the release/deployment path before declaring recovery.

## 7. Close the incident

Before closing, confirm all of the following:

1. liveness returns HTTP 200
2. readiness no longer returns HTTP 503
3. deployment provenance is approved
4. commit and deployment ID match the intended production release
5. `/driftstatus` reflects the expected state

Record the triggering reason, affected deployment ID, commit SHA, recovery action and verification result.
