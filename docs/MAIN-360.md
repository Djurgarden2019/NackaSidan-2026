# Main 360 – final production audit

Main 360 is the launch-readiness checkpoint for the operational hardening sequence through Main 359.

## Audit scope
- production deployment must be READY and originate from `main`
- production commit SHA must match the intended merge commit
- `/api/news-health/live` must answer successfully
- `/api/news-health/ready` must not report a blocking state
- `/api/deployment` must report approved provenance
- `/api/incident-status` must expose severity and next action
- `/api/release-verification` must expose verification status, release gate, reason and remediation code
- `/driftstatus` must present the same operator decision path
- build logs must contain no blocking errors

## Release decision
- `ALLOW`: launch-ready
- `ALLOW_WITH_WARNING`: usable, but warning must be documented and monitored
- `BLOCK`: not launch-ready; follow remediation and incident runbook

## Main 360 checkpoint
The platform-level deployment, monitoring, provenance, incident and release-gate work is considered feature-complete at Main 360. Future work should prioritize editorial content, live-news quality, reader experience and product features unless this audit finds a blocking defect.
