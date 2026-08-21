# Main 343 – deployment provenance API

Main 343 makes deployment provenance independently monitorable.

## Changes
- adds `/api/deployment` with GET and HEAD support
- returns HTTP 200 when provenance is approved and 503 on provenance warning
- exposes commit, environment, Git ref and deployment identity in JSON
- adds stable provenance, commit and environment response headers
- links the endpoint directly from `/driftstatus`

## Why
Main 342 made provenance visible to humans. Main 343 turns the same signal into a dedicated machine-readable probe for release verification and external monitoring.
