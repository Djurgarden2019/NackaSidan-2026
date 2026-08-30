import type { Metadata } from 'next';
import './globals.css';
import './live-frontpage-overrides.css';
import './live-frontpage-polish.css';
import './mobile-polish.css';
import './accessibility.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import CurrentDeskUpdate from '../components/CurrentDeskUpdate';

export const metadata: Metadata = {
  metadataBase: new URL('https://nacka-sidan-2026-delta.vercel.app'),
  title: { default: 'NackaSidan 2026 | Nyheter, analys och perspektiv', template: '%s | NackaSidan 2026' },
  description: 'NackaSidan förklarar Sverige, Stockholm och världen med nyheter, analys, ekonomi, vetenskap, sport och kultur.',
  applicationName: 'NackaSidan 2026',
  keywords: ['NackaSidan','nyheter','analys','Stockholm','Sverige','världen','ekonomi','vetenskap','sport','kultur'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'sv_SE', siteName: 'NackaSidan 2026', title: 'NackaSidan 2026 | Förstå världen. Inte bara nyheterna.', description: 'Nyheter, analys och perspektiv från Stockholm och Sverige till världen.', url: '/' },
  twitter: { card: 'summary_large_image', title: 'NackaSidan 2026', description: 'Förstå världen. Inte bara nyheterna.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="sv"><body><Header /><div id="main-content" tabIndex={-1}><CurrentDeskUpdate />{children}</div><Footer /></body></html>;
}
