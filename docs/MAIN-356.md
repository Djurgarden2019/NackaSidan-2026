# Main 356 – release gate reason codes

Main 356 makes the release gate explainable to both operators and automation.

## Changes
- adds `releaseGateReasons` to `/api/release-verification`
- adds `primaryReleaseGateReason` for simple integrations
- adds stable reason codes for provenance, readiness, health warnings and production identity
- adds `X-NackaSidan-Release-Gate-Reason` response header
- returns `ALL_CHECKS_PASSED` when no blocking or warning condition exists

## Why
A go/no-go signal is more useful when the reason is explicit. Stable reason codes let monitoring and release tooling route directly to the correct remediation path without parsing free text.
