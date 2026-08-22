# NackaSidan release verification

Use this checklist after every merge to `main` before declaring a release verified.

## Production identity

1. Confirm the newest Vercel production deployment is `READY`.
2. Confirm its Git ref is `main`.
3. Confirm its commit SHA matches the intended merge commit.
4. Record the Vercel deployment ID.

## Operational probes

5. Check `/api/news-health/live` and require HTTP 200.
6. Check `/api/news-health/ready`; HTTP 503 means the release is not operationally ready.
7. Check `/api/deployment` and require approved production provenance.
8. Check `/api/incident-status`; record `incidentOpen`, severity and `nextAction`.

## Human verification

9. Open `/driftstatus` and confirm the displayed commit, environment, Git ref and deployment ID match production.
10. Confirm the visible incident guidance agrees with `/api/incident-status`.

## Release outcome

A release is **VERIFIED** only when production is READY, provenance is approved, liveness succeeds and readiness is not HTTP 503.

A BEVAKA state may still be released, but the warning and affected sources must be recorded. An ÅTGÄRD state must not be declared operationally verified.

## Incident correlation

For every failed verification, capture:

- merge commit SHA
- Vercel deployment ID
- health status and severity
- incident next-action code
- failing endpoint or build/runtime error

Then follow `docs/INCIDENT-RUNBOOK.md`.
