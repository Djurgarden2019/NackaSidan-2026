# Main 319 – balance live-news classification

Follow-up to Main 318 after production verification on 18 August 2026.

## Production findings after Main 318
- the broad Stockholm-feed false-positive problem was fixed: general Stockholm stories no longer automatically appear as Nacka/Lokalt
- the result became too conservative for some topic categories
- several sport stories and explicit foreign-news stories fell back to Sverige because their titles lacked the exact keyword set
- economy and culture also missed obvious items such as profit/electricity-price and artist/festival stories

## Main 319 change
- use trusted source URL paths as a strong classification signal for `/sport/` and `/utrikes/`
- expand economy keywords with profit/loss and electricity-price terms
- expand culture keywords with artist, album and festival
- expand sport keywords with swimming and skiing terms
- retain strict Nacka/Lokalt matching so Stockholm-wide stories are not falsely presented as Nacka news

## Editorial principle
A zero count for Nacka/Lokalt is acceptable when the current feeds contain no explicit Nacka-area headline. Precision is preferred over manufacturing a local feed from unrelated Stockholm stories.
