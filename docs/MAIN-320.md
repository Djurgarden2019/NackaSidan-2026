# Main 320 – culture classification precision

Follow-up after Main 319 on 18 August 2026.

## Finding
Production QA exposed an ambiguous keyword failure: a local wildlife story with the phrase `fångades på film` was classified as Kultur only because the title contained the word `film`.

## Change
- culture source URLs such as `/kultur/` now classify directly as Kultur
- the ambiguous standalone keyword `film` is no longer enough on its own to force Kultur
- the remaining stronger culture keywords stay active
- sport and foreign-news URL classification from Main 319 remains unchanged

## Expected result
Fewer false Kultur labels while preserving true culture stories from trusted culture sections and stronger title signals.
