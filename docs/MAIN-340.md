# Main 340 – deployment identity

Main 340 makes the running deployment identifiable from health and probe responses.

## Changes
- adds a shared deployment identity helper using Vercel runtime metadata
- exposes commit SHA, short commit SHA, environment, deployment URL and Git ref in JSON responses
- adds `X-NackaSidan-Commit` and `X-NackaSidan-Environment` headers to health, liveness and readiness responses
- preserves all existing health semantics and probe contract version 1

## Why
When monitoring reports a problem, operators need to know exactly which deployment produced the response. Deployment identity makes incident diagnosis, rollback verification and production checks much faster.
