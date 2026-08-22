# Main 352 – machine-readable release verification

Main 352 exposes the Main 351 release checklist as an operational API.

## Changes
- adds `/api/release-verification` with GET and HEAD support
- returns `VERIFIED`, `BEVAKA` or `FAILED`
- checks readiness, deployment provenance and production identity
- includes commit SHA, Vercel deployment ID, health reasons and alerts
- returns HTTP 503 only for failed verification
- exposes stable release-verification headers for external monitoring

## Why
Release verification should be repeatable by both people and monitoring systems. Main 352 turns the documented checklist into a single machine-readable release signal.
