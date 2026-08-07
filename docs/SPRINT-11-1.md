# Sprint 11.1 – Vercel buildfix

LIVE-sidan körs nu explicit dynamiskt i Next.js. Det förhindrar att Vercel försöker prerendera `/live` statiskt när sidan använder `searchParams` för kategorifiltret.

Ändring: `app/live/page.tsx` har `export const dynamic = 'force-dynamic'`.
