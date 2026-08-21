# Main 345 – deployment ID across health probes

Main 345 propagates the unique Vercel deployment ID across all operational health endpoints.

## Changes
- adds `X-NackaSidan-Deployment-Id` to `/api/news-health`
- adds the same header to liveness GET/HEAD
- adds the same header to readiness GET/HEAD
- JSON payloads already include the shared deployment identity, including the deployment ID from Main 344

## Why
During incidents, monitoring records should identify the exact Vercel deployment without requiring a second lookup or correlation by commit alone.
