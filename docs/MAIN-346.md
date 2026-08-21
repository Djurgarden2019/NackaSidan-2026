# Main 346 – monitoring contract

Main 346 consolidates the operational interfaces introduced in Main 336–345 into one stable monitoring contract.

## Changes
- adds `docs/MONITORING.md`
- documents liveness, readiness, full health and deployment-provenance endpoints
- documents stable response headers and severity semantics
- defines incident correlation using commit SHA plus Vercel deployment ID
- records the compatibility rule for `contractVersion`

## Why
The monitoring endpoints are now mature enough to be treated as a public operational interface. A single contract reduces ambiguity when configuring uptime tools, alerts and incident response.
