# Main 354 – explicit release gate

Main 354 turns release verification into a concrete go/no-go decision for operational release handling.

## Changes
- adds `releaseGate` to `/api/release-verification`
- gate values: `ALLOW`, `ALLOW_WITH_WARNING`, `BLOCK`
- adds `releaseAllowed` and `warningAcknowledgementRequired`
- adds `X-NackaSidan-Release-Gate` and `X-NackaSidan-Release-Allowed` headers
- HTTP 503 is now explicitly tied to the `BLOCK` gate

## Semantics
- `VERIFIED` → `ALLOW`
- `BEVAKA` → `ALLOW_WITH_WARNING`
- `FAILED` → `BLOCK`

## Why
The previous verification signal described release health. Main 354 makes the operational decision explicit so release tooling does not need to infer whether a deployment should proceed.
