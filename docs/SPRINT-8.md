# Sprint 8 – Live Editorial Layer

## Byggt
- Ny sida `/senaste` med kronologiskt publiceringsflöde.
- Kompakt "Senaste från redaktionen" på startsidan.
- Tydlig märkning att flödet bygger på NackaSidans redaktionella register och inte är en extern livewire.
- Ny artikelrad för uppdateringstid, antal källor, ämnen och källstatus.
- Transparensruta i Nacka Daily.
- Publiceringsflöde även i Nacka Studio `/redaktion`.
- Headern har nu en direktlänk till Senaste.
- Naturlig rubrikbrytning utan automatisk avstavning.

## Arkitektur
Sprint 8 bygger fortfarande utan externa API- eller CMS-beroenden. `content/news.ts` fungerar som redaktionellt publiceringslager ovanpå det centrala artikelregistret. Det gör att ett framtida CMS eller nyhets-API kan ersätta datakällan utan att läsargränssnittet behöver byggas om.
