# NackaSidan 2026 – Sprint 3

Sprint 3 bygger vidare på den fungerande Vercel-versionen och lägger till:

- premium-artikelsida med metadata, kunskapskort, fakta, analys, konsekvenser och källtransparens
- första temasidan: `/tema/ai`
- centralt artikelregister i `content/articles.ts`
- redaktionell innehållsöversikt på `/redaktion`
- automatisk generering av artikelsidor från artikelregistret

## Publicera en ny artikel

1. Öppna `content/articles.ts`.
2. Kopiera ett befintligt artikelobjekt.
3. Ändra slug, rubrik, ingress, text, kunskapskort, fakta, källor och relaterade artiklar.
4. Ladda upp ändringen till GitHub.
5. Vercel bygger och publicerar automatiskt.

Detta är ett kodbaserat mini-CMS. Nästa steg är att koppla samma innehållsmodell till ett visuellt CMS som Sanity när redaktionens fält och arbetsflöde är godkända.

## Sprint 4
Sprint 4 lägger till sökning, ämnessidor, författarsida, delning och läsprogress. Se `docs/SPRINT-4.md`.
