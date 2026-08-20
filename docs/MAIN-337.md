# Main 337 – liveness and readiness probes

Main 337 separates application liveness from news-system readiness.

## New endpoints
- `/api/news-health/live` returns HTTP 200 when the application can execute the probe
- `/api/news-health/ready` evaluates the Nyhetsradar health model and returns HTTP 503 only when status is ÅTGÄRD

## Why
A running application and a healthy news pipeline are different operational questions. Separate probes let uptime tools detect application failure without confusing it with degraded or unavailable news data.
