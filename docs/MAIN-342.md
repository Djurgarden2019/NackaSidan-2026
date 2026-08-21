# Main 342 – deployment provenance

Main 342 adds an explicit provenance check for running deployments.

## Changes
- deployment identity now exposes `isProduction`, `isMainRef` and `provenanceOk`
- production is considered provenance-safe only when its Git ref is `main`
- `/driftstatus` displays a clear GODKÄND/VARNING provenance signal
- preview and development environments are shown without applying the production-only `main` requirement

## Why
A healthy application can still be the wrong deployment. Provenance makes it obvious when production is serving code from an unexpected branch and improves rollback and release verification.
