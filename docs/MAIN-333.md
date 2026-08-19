# Main 333 – source freshness diagnostics

Main 333 adds freshness diagnostics per RSS source.

## Changes
- calculates the latest dated article per source from the current radar
- marks connected sources as stale when their latest dated article is older than 168 hours
- exposes per-source freshness and stale source names through `/api/news-health`
- shows source-by-source age and stale markers on `/driftstatus`

## Why
The overall radar can be fresh while one individual source has silently stopped publishing useful updates. Source-level freshness makes that degradation visible without treating every slow source as a full outage.
