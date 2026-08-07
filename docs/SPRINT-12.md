# Sprint 12 — Redaktionell AI-motor

Sprint 12 bygger ett redaktionellt beslutsstöd ovanpå Nyhetsradarn utan att ändra den build-säkra arkitekturen från Sprint 11.3.

- Redaktionell poäng 0–100 med extra vikt för lokal relevans, aktualitet och prioritet.
- Enkel gruppering av liknande rubriker och sammanställning av källkort.
- Förklaring av varför signalen är relevant och föreslagen journalistisk vinkel.
- Redaktionellt arbetsflöde: Ny, Bevaka, Skriv, Kontrollera, Avfärda.
- Artikelutkast i separat arbetsvy med tydlig märkning "Ej publicerat".
- Faktakontrollsteg och länk till originaluppgiften.
- Ingen automatisk publicering och ingen AI-bedömning av sanningshalt.

All bearbetning i denna prototyp sker i webbläsaren efter att RSS-signalerna hämtats. Därmed kan externa RSS-fel fortfarande inte stoppa Vercels statiska build.
