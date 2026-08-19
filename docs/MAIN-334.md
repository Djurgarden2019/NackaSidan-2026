# Main 334 – source state classification

Main 334 makes per-source diagnostics easier to understand by classifying each RSS source into one explicit operational state.

## States
- `AKTIV`: connected and has recent dated content
- `GAMMAL`: connected, but its latest dated article is older than the source freshness threshold
- `INGEN_DATERAD_DATA`: connected, but no usable dated article is available
- `NERE`: source fetch is unavailable

## Changes
- adds a stable source-state model to `lib/newsHealth.ts`
- exposes source-state counts and undated-source names through `/api/news-health`
- updates `/driftstatus` with summary counters and clearer per-source labels

## Why
A source that is down is operationally different from one that still responds but has stopped publishing fresh dated content. The drift view should make that distinction immediate.
