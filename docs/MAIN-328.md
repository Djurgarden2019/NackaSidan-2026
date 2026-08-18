# Main 328 – health severity refinement

Main 328 makes drift severity more useful operationally.

## Change
A single unavailable RSS source no longer automatically escalates the whole system to ÅTGÄRD.

- STABIL: no detected monitoring issues
- BEVAKA: one or more sources are unavailable, local coverage is empty, or a category is empty
- ÅTGÄRD: the full radar has no current articles, all configured sources are down, or all configured Nacka/Lokalt feeds are down

## Why
Partial source failure is worth watching but should not look like a full outage. Local-source failure remains critical because Nacka coverage is a core purpose of the site.
