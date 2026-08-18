# Main 316 – production verification

Production verification completed against the deployed NackaSidan URL on 18 August 2026.

## Verified
- production deployment for Main 315 is READY on Vercel
- homepage responds with HTTP 200
- current Stockholm-local update date is rendered in the masthead
- skip link and `#main-content` target are present
- live news radar renders current items and an update timestamp
- baseline security headers are active, including HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`
- public footer exposes About, editorial principles, corrections, privacy, accessibility and contact pages
- sitemap responds with HTTP 200 and includes About and accessibility pages
- robots policy responds with HTTP 200 and keeps internal newsroom surfaces and `/api/` out of search
- an unknown route returns HTTP 404 with the editorial recovery page and navigation back to useful public sections

## Editorial observation
The live radar is operational, but automatic topic classification remains a quality-sensitive surface. Misclassified feed items should be treated as an editorial/data-quality issue rather than presented as authoritative categorisation.

## Release status
The deployed Main 315 build passes the production smoke checks that can be verified remotely. Visual responsive behaviour, keyboard focus order and interactive form behaviour should continue to be checked in a real browser as part of ongoing release QA.

Main 316 records this production verification checkpoint.