# Main 321 – official Nacka RSS sources

Main 321 strengthens the local-news layer by adding official Nacka municipality RSS feeds instead of widening heuristic Stockholm matching.

## Changes
- added Nacka kommun general-news RSS
- added Nacka kommun stadsutveckling/trafik RSS
- trusted those feeds to fall back to `Nacka/Lokalt`
- boosted official Nacka sources in editorial ranking
- preserved strict Stockholm handling so broad regional stories are not mislabeled as Nacka

## Why
Main 318–320 improved classification precision, but the local bucket could still be empty when no headline explicitly contained a Nacka place name. Official Nacka feeds provide a safer source-level local signal.
