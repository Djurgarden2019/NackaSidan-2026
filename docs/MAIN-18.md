# Main 18 – levande NackaSidan

Main 18 kopplar startsidan till den befintliga serverbaserade nyhetsradarn.

## Funktion

- RSS hämtas på servern via `lib/liveNews.ts`.
- Startsidan uppdateras högst var 15:e minut (`revalidate = 900`).
- Nyheter äldre än 72 timmar filtreras bort från liveflödet.
- Dubbletter stoppas före visning.
- Rubriker klassificeras automatiskt i Nacka/Lokalt, Sverige, Världen, Ekonomi, Kultur, Vetenskap eller Sport.
- Ett nytt block, **Senaste från nyhetsradarn**, visas på startsidan.
- Live-rubriker länkar direkt till originalkällan. NackaSidan påstår inte att dessa rubriker är egna artiklar.
- Det redaktionella Main-17-innehållet ligger kvar som stabil reserv och fördjupningslager.

## Nu anslutna RSS-källor

Källorna definieras i `lib/liveNews.ts` / `content/liveFeeds.ts` och omfattar bland annat SVT Stockholm, Sveriges Radio Ekot och Riksbanken.

## Arkitektur

`RSS → serverhämtning → klassificering → färskhetsfilter → dubblettfilter → startsida/API`

`GET /api/live-news` fortsätter att exponera samma liveflöde för Nyhetsradarn.

## Säkerhetsprincip

Main 18 autopublicerar inte omskrivna nyhetsartiklar till huvudredaktionen. Det automatiska blocket visar endast källans rubrik och länkar till originalet. Redaktionellt material och faktakontrollerade artiklar ligger fortsatt i NackaSidans artikelmodell.
