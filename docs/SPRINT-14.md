# Sprint 14 – Autopublicering (pilot)

Sprint 14 introducerar en säker autopubliceringspilot utan att bryta projektets statiska Vercel-arkitektur.

- Grön: hög poäng + minst två liknande signaler, kan pilotpubliceras automatiskt.
- Gul: kräver mer källstöd.
- Röd: känsliga ämnen (bl.a. brott/anklagelser/dödsfall) stoppas för mänsklig kontroll.
- Autopublicering kan slås på/av.
- Pilotpublicerade artiklar lagras i localStorage och visas på `/autopublicerat`.
- Pilotartiklar kan avpubliceras.
- Artikeln tillför inte fakta som saknas i signalunderlaget.

## Viktig begränsning
Detta är ännu inte permanent server-side publicering. Eftersom sajten använder `output: 'export'` och saknar databas/CMS kan webbläsaren inte skapa nya publika sidor för alla besökare. För verklig autonom publicering behövs nästa steg: server/API + persistent databas/CMS + schemalagd körning.
