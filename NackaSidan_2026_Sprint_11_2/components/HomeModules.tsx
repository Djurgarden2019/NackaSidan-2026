import Link from 'next/link';
import type { Article } from '../content/articles';

export function NewsDashboard({ articles }: { articles: Article[] }) {
  const ranked = [...articles].slice(0, 5);
  const latest = [...articles].reverse().slice(0, 3);
  return (
    <section className="section home-dashboard">
      <div className="dashboard-column">
        <div className="kicker">Mest läst</div>
        <h2>Läsarnas väg in i veckan</h2>
        <ol className="ranking-list">
          {ranked.map((article, index) => <li key={article.slug}><span>{String(index + 1).padStart(2, '0')}</span><Link href={`/artikel/${article.slug}`}>{article.title}</Link></li>)}
        </ol>
      </div>
      <div className="dashboard-column latest-column">
        <div className="kicker">Senast uppdaterat</div>
        <h2>Nya analyser och fördjupningar</h2>
        {latest.map((article) => <article key={article.slug}><div className="meta">{article.updated}</div><h3><Link href={`/artikel/${article.slug}`}>{article.title}</Link></h3><p>{article.intro}</p></article>)}
      </div>
    </section>
  );
}

export function NewsletterSignup() {
  return (
    <section className="newsletter-section">
      <div><div className="kicker">NackaSidan Briefing</div><h2>Förstå veckan i din inkorg</h2><p>En redaktionell sammanfattning av det viktigaste, med bakgrund, analys och kultur.</p></div>
      <form className="newsletter-form"><label><span>E-postadress</span><input type="email" placeholder="namn@exempel.se" /></label><button type="button">Prenumerera gratis</button></form>
    </section>
  );
}
