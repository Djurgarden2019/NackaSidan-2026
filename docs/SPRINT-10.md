# NackaSidan 2026 – Sprint 10

Sprint 10 kopplar in de första riktiga externa källorna server-side.

## Live
- `/live` visar inkommande rubriker direkt från originalkällornas RSS.
- `/api/live-news` ger samma normaliserade flöde som JSON.
- RSS hämtas på servern och återvalideras ungefär var 15:e minut.
- Anslutningsfel ger tomt/markerat flöde – aldrig fabricerade poster.
- Liveposter märks tydligt som **ej redaktionellt verifierade**.
- Originalkälla länkas för varje post.

## Första anslutningar
- SVT Nyheter Stockholm RSS
- Riksbanken Nyheter RSS
- Riksbanken Pressmeddelanden RSS

## Redaktionell princip
Automatisk inhämtning är inte automatisk publicering. NackaSidan ska verifiera, välja vinkel, redovisa källor och fatta publiceringsbeslut innan material blir en egen artikel.
