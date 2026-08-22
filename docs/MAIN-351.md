# Main 351 – release verification

Main 351 closes the loop between deployment, monitoring and incident response with a repeatable post-merge verification checklist.

## Changes
- adds `docs/RELEASE-VERIFICATION.md`
- requires production READY plus exact `main` commit/deployment identity
- verifies liveness, readiness, deployment provenance and incident status
- adds human cross-checks on `/driftstatus`
- defines VERIFIED, BEVAKA and failed-verification outcomes
- links failed verification to the incident runbook

## Why
A successful build is not the same as a verified release. Main 351 defines the final checks required before production is considered operationally verified.
