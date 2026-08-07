# Sprint 16 – permanent publicering

- Gemensamt arkiv via Vercel Blob.
- Server-side API för läsning, publicering och avpublicering.
- Dubblettskydd på både käll-URL och normaliserad rubrik.
- Startsida och artikelsidor läser samma centrala arkiv.
- Max 500 arkiverade autopublicerade artiklar i denna version.

## Vercel
Skapa en Blob Store under Storage och koppla den till projektet. Vercel skapar då BLOB_READ_WRITE_TOKEN. Deploya därefter på nytt.
