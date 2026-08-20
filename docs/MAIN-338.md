# Main 338 – probe visibility and HEAD support

Main 338 makes the liveness and readiness probes easier to use with external monitoring services.

## Changes
- adds HEAD support to `/api/news-health/live`
- adds HEAD support to `/api/news-health/ready`
- readiness exposes severity through `X-NackaSidan-Severity`
- `/driftstatus` links directly to both probes and explains their purpose

## Why
Many uptime services use HEAD requests for lightweight checks. The probes should also be easy to discover and understand without reading implementation code.
