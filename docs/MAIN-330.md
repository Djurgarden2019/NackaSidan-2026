# Main 330 – visual health reason codes

Main 330 brings the machine-readable health reasons into the human drift-status view.

## Changes
- `/driftstatus` now shows active reason codes such as `SOURCE_DEGRADED`, `LOCAL_EMPTY` and `ALL_LOCAL_SOURCES_DOWN`
- every code is paired with a short Swedish explanation
- the visual status and `/api/news-health` therefore expose the same diagnosis model

## Verification note
The `NACKASIDAN · SPRINT 259` text visible in the supplied screenshot belongs to the Vercel toolbar overlay, not the site's public header. The public header already uses a dynamic updated date and was intentionally left unchanged.
