# Main 347 – incident response runbook

Main 347 turns the monitoring contract into an actionable incident workflow.

## Changes
- adds `docs/INCIDENT-RUNBOOK.md`
- defines the order liveness → readiness → diagnostics → deployment provenance
- defines actions for STABIL, BEVAKA and ÅTGÄRD
- requires correlation by commit SHA and Vercel deployment ID
- adds recovery and incident-closure verification criteria

## Why
Monitoring signals are useful only when responders know what to do with them. The runbook provides a repeatable path from alert to verified recovery.
