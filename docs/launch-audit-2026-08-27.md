# NackaSidan 2026 – launch audit 27 augusti 2026

## Status
Editorial 542 är mergad till main. Innehållsfasen är därmed avslutad och projektet går över i lanseringskontroll.

## Kontrollerad struktur
- Next.js App Router finns under `app/`.
- Redaktionellt material finns under `content/`.
- Tillgänglighets-CSS finns i `app/accessibility.css`.
- Säkerhets- och routinglager finns i `middleware.ts` och `next.config.mjs`.
- Projektet har `package.json`, README och dokumentation.

## Kontrollpunkter före publik lansering
1. Kör produktionsbuild och kontrollera TypeScript/build-fel.
2. Kontrollera startsidan i desktop och mobil.
3. Kontrollera att färska nyheter prioriteras och att äldre/dubbla puffar inte dominerar.
4. Klicktesta externa länkar och interna artikelvägar.
5. Kontrollera navigation, tangentbordsfokus, skip-link och reduced-motion.
6. Kontrollera metadata, favicon/manifest, sitemap och robots.
7. Kontrollera driftstatus, API-rutter och miljövariabler i produktionsmiljön.
8. Gör en sista redaktionell kontroll av datum, rubriker och källhänvisningar.

## GitHub Actions
Ingen PR-triggerad workflow-run hittades för merge-commit för Editorial 537–542. Produktionsbuild behöver därför verifieras i deploymentmiljön eller med separat CI innan slutlig lanseringsmarkering.

## Nästa checkpoint
Launch Finish 544: verifiera deployment/build och åtgärda eventuella fel. Därefter slutlig visuell och redaktionell QA.
