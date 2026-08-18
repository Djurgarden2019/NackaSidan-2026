import type { MetadataRoute } from 'next';

export default function robots():MetadataRoute.Robots{
 return {
  rules:{
   userAgent:'*',
   allow:'/',
   disallow:[
    '/redaktion',
    '/inloggning',
    '/artikelverkstaden',
    '/forhandsgranskning',
    '/driftpanel',
    '/behorigheter',
    '/live',
    '/api/',
   ],
  },
  sitemap:'https://nacka-sidan-2026-delta.vercel.app/sitemap.xml',
  host:'https://nacka-sidan-2026-delta.vercel.app',
 };
}
