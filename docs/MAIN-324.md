# Main 324 – machine-readable news health

Main 324 exposes Nyhetsradarn health as structured JSON.

## Endpoint
`/api/news-health`

## Includes
- overall `STABIL`, `BEVAKA` or `ÅTGÄRD` status
- article count and Nacka/Lokalt count
- high-priority article count
- connected and unavailable source counts
- names of unavailable sources
- live category counts
- current alert messages
- timestamp from the same 15-minute radar cache window

## Why
Main 323 made warnings visible to editors. Main 324 makes the same operational state usable by monitoring, diagnostics and future automation without scraping the Driftpanel HTML.

## Next checkpoint
Verify the endpoint response in preview and production, then decide whether to add external uptime/health monitoring.
