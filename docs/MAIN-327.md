# Main 327 – shared news health model

Main 327 removes duplicated health-status logic between the visual drift status page and the machine-readable API.

## Changes
- adds `lib/newsHealth.ts` as the single health evaluator
- `/driftstatus` and `/api/news-health` now use the same status and alert rules
- prevents wording or severity rules from drifting apart as monitoring evolves

## Operational result
A given live-news snapshot now produces the same STABIL, BEVAKA or ÅTGÄRD state in both human and machine-readable views.
