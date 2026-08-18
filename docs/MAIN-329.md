# Main 329 – health reason codes

Main 329 adds machine-readable reason codes to the news-health model.

## Codes
- `SOURCE_DEGRADED` – one or more RSS sources are unavailable
- `LOCAL_EMPTY` – Nacka/Lokalt has no current articles
- `RADAR_EMPTY` – the entire news radar has no current articles
- `CATEGORY_EMPTY` – one or more editorial categories are empty
- `ALL_SOURCES_DOWN` – every configured source is unavailable
- `ALL_LOCAL_SOURCES_DOWN` – every configured Nacka/Lokalt source is unavailable

## Why
The API can now say both how severe the current state is and why. This makes alerting, dashboards and future monitoring rules easier to automate without parsing Swedish alert text.
