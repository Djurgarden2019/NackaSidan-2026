# Main 318 – tighter live-news classification

Main 318 improves the automatic classification used by the live news radar.

## Changed
- Stockholm-wide feed items no longer default to `Nacka/Lokalt`
- `Nacka/Lokalt` is now reserved for titles that explicitly mention Nacka or nearby named local areas
- generic `Stockholm`, `Region Stockholm` and `Slussen` no longer force Nacka classification
- topic keywords are matched as normalized words or phrases instead of arbitrary substrings
- broad Stockholm feed items fall back to `Sverige` when no stronger topic rule matches

## Why
Production QA in Main 316–317 showed that the old fallback treated every unclassified Stockholm-feed item as local to Nacka. Simple substring matching could also create unrelated Sport, Kultur or other topic labels.

## Expected result
The local count should become smaller but more trustworthy, while topic labels should have fewer accidental substring matches. The live radar remains automatic and should still be treated as a classification aid rather than authoritative editorial tagging.
