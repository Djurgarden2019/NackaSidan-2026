# Main 323 – feed health alerts

Main 323 turns the live Driftpanel from passive metrics into an actionable operations view.

## Changes
- adds an overall `STABIL`, `BEVAKA` or `ÅTGÄRD` status
- raises explicit warnings for unavailable RSS feeds
- warns when Nacka/Lokalt has no current articles
- warns if the entire radar has no current content
- surfaces categories that currently have zero articles
- keeps the existing source-health, category-balance and 15-minute revalidation views

## Editorial principle
An empty category is not automatically an error, but it should be visible. A failed source or completely empty radar requires stronger attention. Local coverage remains strict rather than filling Nacka/Lokalt with unrelated Stockholm stories.

## Next checkpoint
Verify the alert block against live production data after deployment and tune thresholds only from observed behaviour.
