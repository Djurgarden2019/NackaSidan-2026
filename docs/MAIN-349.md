# Main 349 – incident status API

Main 349 makes the incident guidance from `/driftstatus` available as a machine-readable operational endpoint.

## Changes
- adds `/api/incident-status` with GET and HEAD support
- exposes whether an incident is open, severity 0/1/2 and the current health status
- returns a stable next-action code: `VERIFY_DEPLOYMENT`, `OPEN_FULL_DIAGNOSTICS`, `INVESTIGATE_WARNINGS` or `NO_ACTION`
- includes health reasons, alerts and deployment correlation fields
- returns HTTP 503 for severity 2 and HTTP 200 for severity 0/1
- exposes incident state, severity and next action in response headers

## Why
Main 348 gave operators contextual guidance in the UI. Main 349 lets uptime tools, automation and incident integrations consume the same operational decision directly.
