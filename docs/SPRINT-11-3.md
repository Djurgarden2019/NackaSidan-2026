# NackaSidan 2026 – Sprint 11.3

Sprint 11.3 gör LIVE oberoende av Vercels build.

## Arkitektur
- `/live` är en ren statiskt exporterbar sida.
- Ingen `force-dynamic`.
- Inga `searchParams`.
- Ingen RSS-fetch körs under `next build`.
- Ingen Next.js API-route krävs.
- Efter sidladdning försöker klienten hämta RSS via en CORS-kompatibel RSS-till-JSON-tjänst.
- Om den externa tjänsten eller en originalkälla ligger nere visas ett tydligt felläge, men webbplatsen fortsätter fungera.
- Medan LIVE-sidan är öppen görs en ny kontroll var 15:e minut.
- Manuell knapp “Uppdatera nu” finns.

## Redaktionell princip
En livesignal är fortfarande inte en publicerad NackaSidan-artikel. Varje signal markeras som ej verifierad tills redaktionen granskat materialet.

## Nästa arkitektursteg
För produktion bör den externa RSS-mellanhanden ersättas med en egen liten feed-tjänst eller genom att NackaSidan lämnar `output: 'export'` och använder Vercel Functions/ISR.
