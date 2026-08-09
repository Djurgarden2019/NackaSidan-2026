# Main 19 – redaktionell intelligens

Main 19 lägger ett redaktionellt beslutslager ovanpå Nyhetsradarn.

## Nytt

- Liknande nyhetssignaler grupperas.
- Kandidater poängsätts efter aktualitet, lokal relevans, ämne, prioritet och källstöd.
- Risknivå: Grön, Gul eller Röd.
- Kandidater med känsliga uppgifter markeras Röd och kräver manuell granskning.
- En kandidat med bara en källa markeras som i behov av en andra källa.
- `/api/editorial-candidates` exponerar de högst rankade kandidaterna.
- `/api/editorial-draft` skapar ett kontrollerat arbetsutkast och en obligatorisk checklista.
- Ny sektion på `/live`: **Redaktionens toppkandidater**.

## Viktig princip

Main 19 publicerar inte automatiskt på basis av en AI-/regelpoäng. Grön betyder att kandidaten kan gå vidare till redaktionell slutkontroll, inte att den är verifierad eller publiceringsklar utan mänskligt beslut.

## Flöde

RSS → färskhetsfilter → klassificering → gruppering → poäng → risk → källkrav → artikelutkast → faktakontroll → redaktionellt beslut.
