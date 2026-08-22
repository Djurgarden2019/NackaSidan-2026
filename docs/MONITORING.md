# NackaSidan monitoring contract

This document is the operational contract for external monitoring.

## Endpoints

| Endpoint | Purpose | Healthy response |
| --- | --- | --- |
| `/api/news-health/live` | Application liveness | HTTP 200 |
| `/api/news-health/ready` | News radar readiness | HTTP 200 unless status is ÅTGÄRD |
| `/api/incident-status` | Incident state and recommended next action | HTTP 200 for severity 0/1; HTTP 503 for severity 2 |
| `/api/news-health` | Full news-health diagnostics | HTTP 200 unless status is ÅTGÄRD |
| `/api/deployment` | Production deployment provenance | HTTP 200 when provenance is approved |

All operational endpoints support GET. Liveness, readiness, incident status and deployment provenance also support HEAD for low-overhead monitoring.

## Stable headers

Operational endpoints expose stable NackaSidan headers where applicable:

- `X-NackaSidan-Health`
- `X-NackaSidan-Severity`
- `X-NackaSidan-Probe-Version`
- `X-NackaSidan-Incident-Open`
- `X-NackaSidan-Incident-Severity`
- `X-NackaSidan-Next-Action`
- `X-NackaSidan-Commit`
- `X-NackaSidan-Environment`
- `X-NackaSidan-Deployment-Id`
- `X-NackaSidan-Deployment-Provenance`

## Severity contract

- `0` = STABIL
- `1` = BEVAKA
- `2` = ÅTGÄRD or a blocking deployment-provenance failure in incident status

Only severity 2 is treated as unavailable by incident status. BEVAKA remains HTTP 200 so monitoring can alert without declaring the service unavailable.

## Incident action contract

`/api/incident-status` exposes a stable next-action code:

- `VERIFY_DEPLOYMENT`
- `OPEN_FULL_DIAGNOSTICS`
- `INVESTIGATE_WARNINGS`
- `NO_ACTION`

These codes are intended for alert routing, runbooks and incident automation. Human-readable labels may evolve without changing the action code.

## Correlation

Incident records should capture commit SHA and `X-NackaSidan-Deployment-Id`. Together they identify the exact code revision and Vercel deployment involved.

## Contract versioning

Probe JSON includes `contractVersion`. Breaking changes require a new contract version; additive fields may be introduced without changing the version.
