# Main 339 – probe contract versioning

Main 339 gives the liveness and readiness probes an explicit versioned contract.

## Changes
- adds `contractVersion: 1` to GET responses from both probes
- adds `X-NackaSidan-Probe-Version: 1` to GET and HEAD responses
- keeps existing status codes and probe semantics unchanged

## Why
External monitoring can now pin integrations to a known probe contract. Future incompatible response changes can increment the contract version instead of silently breaking consumers.
