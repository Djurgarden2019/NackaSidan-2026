# Main 357 – release gate reason on driftstatus

Main 357 makes the release-gate reason visible to operators.

## Changes
- shows the primary release-gate reason code directly inside `/driftstatus`
- adds a Swedish explanation for each stable reason code
- aligns the visual gate reason with `/api/release-verification`
- updates the driftstatus release marker to Main 357

## Why
Main 356 made release decisions explainable to machines. Main 357 gives operators the same explanation at a glance, reducing ambiguity during verification and incident response.
