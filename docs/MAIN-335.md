# Main 335 – source health signals

Main 335 promotes per-source freshness classification into the overall health decision.

## Changes
- adds `SOURCE_STALE` when one or more connected sources are classified as GAMMAL
- adds `SOURCE_UNDATED` when connected sources have no dated article in the current radar
- both states now produce BEVAKA and human-readable alerts
- `/driftstatus` explains the new reason codes and the expanded BEVAKA rule

## Why
Main 334 made source states visible. Main 335 makes those states operational: connected-but-stale or undated feeds can no longer hide behind an otherwise healthy global radar status.
