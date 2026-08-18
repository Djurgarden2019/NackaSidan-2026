# Main 326 – status navigation

Main 326 connects the operational views so editors can move from a quick status check to deeper diagnostics without hunting for routes.

## Changes
- adds direct links from `/driftstatus` to `/driftpanel`, `/api/news-health` and the homepage
- keeps the lightweight STABIL / BEVAKA / ÅTGÄRD summary
- lists unavailable feeds separately when action is needed
- keeps all views on the same Nyhetsradarn live data and 15-minute cache window

## Why
The operational tools now form one troubleshooting flow: quick status → detailed panel → machine-readable JSON.

## Next checkpoint
Verify the navigation and live status in production after deployment.
