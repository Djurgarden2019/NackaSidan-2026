import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'NackaSidan 2026',
  description: 'Ett digitalt veckomagasin för nyheter, analys och kultur.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
