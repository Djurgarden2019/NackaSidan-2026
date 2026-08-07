# Sprint 15 — automatiskt nyhetsflöde

Sprint 15 flyttar pilotpublicerade artiklar från ett separat arkiv in i NackaSidans ordinarie startsida.

- De senaste autopublicerade artiklarna visas på startsidan under **Senaste från Nyhetsradarn**.
- Varje artikel får en egen läsvy via `/autonyhet?id=...`.
- Artikelsidan visar rubrik, ingress, brödtext, sektion, publiceringstid, poäng och tydlig originalkälla.
- Dubblettspärren och riskklassningen från Sprint 14 behålls.
- Röda och gula signaler autopubliceras inte.

## Viktig arkitekturgräns
Publiceringslagret använder fortfarande webbläsarens localStorage. Det gör Sprint 15 till ett komplett gränssnitts- och flödestest, men inte ett permanent gemensamt CMS. Nästa produktionssteg är serverlagring/databas så att samma artiklar syns för alla besökare och överlever enheter/webbläsare.
