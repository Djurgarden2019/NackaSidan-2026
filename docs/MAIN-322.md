# Main 322 – live driftpanel

## Goal
Replace the old static Main 34 driftpanel examples with real health data from Nyhetsradarn.

## Changed
- Driftpanelen now calls `getLiveNews()` directly on the server
- shows current deduplicated article count
- shows Nacka/Lokalt count and high-priority count
- shows connected/total feed health
- lists every configured feed with status and parsed item count
- shows live category balance across Nacka/Lokalt, Sverige, Världen, Ekonomi, Kultur, Vetenskap and Sport
- uses the same 15-minute revalidation window as the news feeds

## Why
Main 321 added official Nacka sources. The next operational step is to make source health and category balance visible so broken feeds or classification drift can be spotted quickly.
