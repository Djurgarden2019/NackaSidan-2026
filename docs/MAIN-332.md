# Main 332 – freshness visibility

Main 332 makes the freshness monitoring from Main 331 visible to operators.

## Changes
- adds a Swedish label for `NEWS_STALE`
- shows the age of the newest dated article directly on `/driftstatus`
- shows the configured 36-hour freshness threshold
- shows the newest dated publication time in Stockholm time

## Why
Freshness should be diagnosable without opening raw JSON. The drift status page now explains both the current freshness and the threshold that triggers BEVAKA.
