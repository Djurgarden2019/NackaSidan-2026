# Main 336 – machine-readable health severity

Main 336 makes `/api/news-health` easier to use with external uptime and monitoring tools.

## Changes
- adds numeric `severity`: 0 = STABIL, 1 = BEVAKA, 2 = ÅTGÄRD
- adds boolean `healthy`
- returns HTTP 503 only for ÅTGÄRD; STABIL and BEVAKA remain HTTP 200
- adds `X-NackaSidan-Health` and `X-NackaSidan-Severity` response headers

## Why
Monitoring systems should not need to parse Swedish status strings. Severity, health boolean, HTTP status and headers provide stable machine-readable signals while preserving the existing human-readable model.
