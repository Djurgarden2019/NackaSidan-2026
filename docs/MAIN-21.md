# Main 21 – Källjägaren

Main 21 arbetar vidare på de kandidater som Main 20 inte kan verifiera med de fasta RSS-källorna.

## Funktion
- Sorterar bort generiska rubriker som "Nyheter från dagen".
- Tar konkreta, olösta signaler från Nyhetsradarn.
- Skapar en koncentrerad sökfråga från rubriken.
- Söker efter liknande publiceringar i ett externt nyhets-RSS-sökflöde.
- Räknar endast andra källfamiljer än ursprungskällan.
- Visar upp till tre tänkbara stödkällor med rubrikmatchning.
- API: `/api/source-hunt`.
- Ny sektion på `/live`: **Aktiv jakt på andra källan**.

## Säkerhetsprincip
En sökträff är inte ett bevis på oberoende verifiering. Två medier kan återge samma byråtelegram, pressmeddelande eller myndighetsuppgift. Därför krävs fortsatt kontroll av ursprung och originalmaterial före publicering.
