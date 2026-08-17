import Link from 'next/link';
import { LatestNewsFeed } from '../../components/Newsroom';
import { latestNews } from '../../content/news';

export const metadata = {
  title: 'Senaste',
  description: 'Senaste publicerade briefingarna, analyserna och fördjupningarna från NackaSidan.',
};

export default function LatestPage() {
  return (
    <main>
      <div className="shell">
        <section className="page-hero latest-page-hero">
          <div className="kicker">Senaste</div>
          <h1>Vad är nytt?</h1>
          <p>En kronologisk översikt över det som publicerats och uppdaterats i NackaSidans redaktionella innehåll.</p>
        </section>
        <LatestNewsFeed items={latestNews} />
        <aside className="latest-note">
          <strong>Om flödet</strong>
          <p>Flödet visar NackaSidans senaste publiceringar och uppdateringar. Tidsstämplar och redaktionell status ska göra det tydligt vad som är nytt och vad som har förändrats.</p>
        </aside>
        <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}>
          <div className="kicker">Fortsätt</div>
          <h2>Vill du ha sammanhang i stället för kronologi?</h2>
          <p className="lead">Nacka Daily samlar dagens viktigaste, medan Sverige och Världen ger fördjupning inom de största bevakningsområdena.</p>
          <div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/daily">Nacka Daily</Link><Link className="text-link" href="/sverige">Sverige →</Link><Link className="text-link" href="/varlden">Världen →</Link></div>
        </section>
      </div>
    </main>
  );
}
