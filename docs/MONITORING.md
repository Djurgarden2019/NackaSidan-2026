# NackaSidan monitoring contract

This document is the operational contract for external monitoring.

## Endpoints

| Endpoint | Purpose | Healthy response |
| --- | --- | --- |
| `/api/news-health/live` | Application liveness | HTTP 200 |
| `/api/news-health/ready` | News radar readiness | HTTP 200 unless status is ÅTGÄRD |
| `/api/news-health` | Full news-health diagnostics | HTTP 200 unless status is ÅTGÄRD |
| `/api/deployment` | Production deployment provenance | HTTP 200 when provenance is approved |

All probe endpoints support GET. Liveness, readiness and deployment provenance also support HEAD for low-overhead monitoring.

## Stable headers

Operational endpoints expose stable NackaSidan headers where applicable:

- `X-NackaSidan-Health`
- `X-NackaSidan-Severity`
- `X-NackaSidan-Probe-Version`
- `X-NackaSidan-Commit`
- `X-NackaSidan-Environment`
- `X-NackaSidan-Deployment-Id`
- `X-NackaSidan-Deployment-Provenance`

## Severity contract

- `0` = STABIL
- `1` = BEVAKA
- `2` = ÅTGÄRD

Only ÅTGÄRD is treated as unavailable by readiness/full health and returns HTTP 503. BEVAKA remains HTTP 200 so monitoring can alert without declaring the service unavailable.

## Correlation

Incident records should capture commit SHA and `X-NackaSidan-Deployment-Id`. Together they identify the exact code revision and Vercel deployment involved.

## Contract versioning

Probe JSON includes `contractVersion`. Breaking changes require a new contract version; additive fields may be introduced without changing the version.
