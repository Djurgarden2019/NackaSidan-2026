# Main 331 – news freshness health check

Main 331 adds freshness monitoring to the Nyhetsradar health model.

## Changes
- determines the newest valid publication timestamp in the current radar
- adds `NEWS_STALE` when the newest dated article is older than 36 hours
- exposes `newestPublishedAt`, `newestAgeHours` and `staleAfterHours` through `/api/news-health`
- stale content produces BEVAKA rather than being mistaken for a healthy radar

## Why
A radar can contain articles and have connected RSS sources while still serving old information. Freshness is therefore a separate operational health signal.
