import { NextResponse } from 'next/server';
import { auth } from './auth';

const editorialPrefixes = [
  '/redaktion',
  '/redaktionskon',
  '/publiceringsmotor',
  '/artikelverkstaden',
  '/forhandsgranskning',
  '/publicering',
  '/publicerade',
  '/driftpanel',
  '/larm',
  '/halsokontroll',
];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = req.auth?.user?.role;

  if (pathname.startsWith('/behorigheter')) {
    if (!req.auth) {
      return NextResponse.redirect(new URL(`/inloggning?callbackUrl=${encodeURIComponent(pathname)}`, req.url));
    }
    if (role !== 'ADMINISTRATOR') {
      return NextResponse.redirect(new URL('/redaktion', req.url));
    }
  }

  if (editorialPrefixes.some(prefix => pathname.startsWith(prefix))) {
    if (!req.auth) {
      return NextResponse.redirect(new URL(`/inloggning?callbackUrl=${encodeURIComponent(pathname)}`, req.url));
    }
    if (role !== 'REDAKTOR' && role !== 'ADMINISTRATOR') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/redaktion/:path*',
    '/redaktionskon/:path*',
    '/publiceringsmotor/:path*',
    '/artikelverkstaden/:path*',
    '/forhandsgranskning/:path*',
    '/publicering/:path*',
    '/publicerade/:path*',
    '/driftpanel/:path*',
    '/larm/:path*',
    '/halsokontroll/:path*',
    '/behorigheter/:path*',
  ],
};
