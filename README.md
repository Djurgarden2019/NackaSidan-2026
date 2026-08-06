# NackaSidan 2026 – Sprint 1

En klickbar Next.js-prototyp för ett svenskt digitalt veckomagasin.

## Innehåll
- Ny, bred och luftig startsida
- Återanvändbart designsystem
- Sverige-sida
- Kultur-sida i ordningen böcker, film, TV, musik, kulturdebatt
- Artikelmallar
- Statisk export för GitHub Pages
- GitHub Actions-workflow för automatisk publicering

## Lokalt
```bash
npm install
npm run dev
```
Öppna `http://localhost:3000`.

## GitHub Pages
1. Ladda upp allt i repositoryt `NackaSidan-2026`.
2. Öppna Settings → Pages.
3. Under Source, välj **GitHub Actions**.
4. En push till `main` bygger och publicerar webbplatsen.

> Om repositoryts exakta URL-namn skiljer sig från `NackaSidan-2026`, ändra `basePath` och `assetPrefix` i `next.config.mjs` till det exakta repositorynamnet.
