# Main 325 – visual health status page

Main 325 adds a lightweight visual status page for Nyhetsradarn at `/driftstatus`.

## Changes
- reuses the same live data as Driftpanelen and `/api/news-health`
- shows STABIL / BEVAKA / ÅTGÄRD prominently
- shows article count, Nacka/Lokalt count, high-priority count and source availability
- lists current drift warnings
- keeps the same 15-minute revalidation window

## Why
The machine-readable endpoint is useful for monitoring, while this page gives editors and production checks a fast visual snapshot without reading the full Driftpanel.
