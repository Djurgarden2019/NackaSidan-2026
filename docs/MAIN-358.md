# Main 358 – release remediation codes

Main 358 turns release-gate reasons into stable machine-readable remediation instructions.

## Changes
- adds `remediationCode` to `/api/release-verification`
- maps each primary gate reason to one stable remediation code
- exposes `X-NackaSidan-Remediation-Code` for HEAD/monitoring integrations
- keeps successful releases explicit with `NO_REMEDIATION_REQUIRED`

## Remediation codes
- `PROVENANCE_FAILED` → `VERIFY_DEPLOYMENT_PROVENANCE`
- `READINESS_FAILED` → `OPEN_HEALTH_DIAGNOSTICS`
- `HEALTH_WARNING` → `INVESTIGATE_HEALTH_WARNINGS`
- `PRODUCTION_IDENTITY_WARNING` → `VERIFY_PRODUCTION_IDENTITY`
- `ALL_CHECKS_PASSED` → `NO_REMEDIATION_REQUIRED`

## Why
Main 356 explained why the release gate was in its current state. Main 358 makes that explanation actionable for automated tooling without requiring clients to implement their own reason-to-action mapping.
