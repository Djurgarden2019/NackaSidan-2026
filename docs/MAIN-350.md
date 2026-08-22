# Main 350 – incident status integration

Main 350 connects the machine-readable incident signal to the human-facing drift workflow and monitoring contract.

## Changes
- links `/api/incident-status` directly from `/driftstatus`
- adds incident status to the visible investigation sequence
- documents incident headers and next-action codes in `docs/MONITORING.md`
- updates the driftstatus checkpoint label to Main 350

## Why
Main 349 introduced the incident-status API. Main 350 makes it part of the canonical operating path so humans, monitors and runbooks use the same incident model.
