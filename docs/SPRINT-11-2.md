# NackaSidan 2026 – Sprint 11.2

Sprint 11.2 rättar kompatibiliteten mellan Nyhetsradarn och projektets `output: 'export'`.

## Fix
- `/live` använder inte längre `searchParams`.
- `force-dynamic` är borttaget.
- Kategorifiltrering sker i en klientkomponent med knappar.
- `/live` kan därför prerenderas och exporteras statiskt.
- API-routen tas bort eftersom en statisk export inte har en permanent Next.js-server.
- RSS-data hämtas vid Vercel-bygget.

## Viktig teknisk konsekvens
I statiskt exportläge kan Vercel inte uppdatera RSS-flöden var 15:e minut utan en ny deployment.
Sprint 11.2 prioriterar därför en stabil publicering. Automatisk återkommande liveuppdatering kräver
senare att `output: 'export'` tas bort eller att en separat extern datatjänst används.
