# Main 355 – release gate on driftstatus

Main 355 makes the operational release gate visible to humans.

## Changes
- adds a prominent release-gate card to `/driftstatus`
- shows `ALLOW`, `ALLOW_WITH_WARNING` or `BLOCK`
- explains the meaning of each gate in Swedish
- aligns the visible gate with the release-verification status
- updates the driftstatus checkpoint marker to Main 355

## Why
Main 354 added the machine-readable go/no-go gate. Main 355 ensures operators see the same decision immediately without opening JSON.
