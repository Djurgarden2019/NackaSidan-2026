# Launch Finish 546

## Problem
Startsidesrubrikerna i sektionerna "Senaste nytt från Nacka" och "Just nu i Nacka" renderades som vanlig text. Endast den mindre källraden var klickbar, vilket gjorde nyhetskorten missvisande.

## Åtgärd
Rubrikerna länkar nu till samma verifierade källmål som respektive källrad. Externa mål öppnas i en ny flik med säkra länk-attribut.

## Verifiering
- Huvudnavigationen klicktestades i produktion och navigerade korrekt till `/sverige/`.
- Alla granskade länkar var synliga och hade aktiverad pekarinteraktion.
- De två startsidessektionernas rubriker innehåller nu riktiga ankarlänkar.

## Nästa checkpoint
Kontrollera den nya produktionsdeployen och klicktesta en nyhetsrubrik efter publicering.
