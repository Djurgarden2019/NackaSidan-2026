# Main 17 – gemensam innehållsmodell

Main 17 flyttar startsidans huvudartiklar från separata hårdkodade teaser-objekt till samma artikelregister som artikelsidorna använder.

## Vad som är nytt

- `content/articles.ts` är primär källa för publicerade artiklar.
- Varje artikel har nu maskinläsbara `publishedAt`, `updatedAt` och `status`.
- `homepage` anger om en artikel ska vara `lead`, `top` eller `feature`, samt ordning.
- `teaserTitle` och `teaserSummary` kan användas när startsidan behöver en kortare rubrik eller ingress än artikelsidan.
- `content/home.ts` omvandlar artiklar till kort på startsidan. Startsidan innehåller därför inte längre egna kopior av huvudnyheternas rubrik, ingress och bild.
- `GET /api/articles` ger en läsbar lista över publicerade artiklar och är förberedelsen för nästa steg med extern/dynamisk innehållshantering.

## Arbetsflöde

För en ny artikel:
1. Lägg artikeln i `content/articles.ts`.
2. Sätt `status: 'published'` när den är klar.
3. Sätt `homepage: { role: 'top', order: 1 }` om den ska visas under Veckans viktigaste.
4. Startsidan hämtar därefter teaserdata från samma artikelobjekt.

## Avgränsning

Main 17 använder fortfarande projektets TypeScript-fil som lagring. Ingen automatisk nyhetsinhämtning eller databas-write ingår ännu. Det är avsiktligt för att göra migreringen stabil innan Main 18 kopplar på ett dynamiskt flöde.
