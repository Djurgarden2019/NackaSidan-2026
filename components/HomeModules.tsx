import Link from 'next/link';
import type { Article } from '../content/articles';

export function NewsDashboard({ articles }: { articles: Article[] }) {
  const recommended = [...articles].slice(0, 5);
  const latest = [...articles].sort((a,b)=>Date.parse(b.updatedAt)-Date.parse(a.updatedAt)).slice(0, 3);
  return (
    <section className="section home-dashboard">
      <div className="dashboard-column">
        <div className="kicker">Redaktionens urval</div>
        <h2>Fem texter att börja med</h2>
        <ol className="ranking-list">
          {recommended.map((article, index) => <li key={article.slug}><span>{String(index + 1).padStart(2, '0')}</span><Link href={`/artikel/${article.slug}`}>{article.title}</Link></li>)}
        </ol>
        <p className="meta" style={{marginTop:16}}>Urvalet är redaktionellt och bygger inte på påhittad läsarstatistik.</p>
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
    <section className="newsletter-section" aria-labelledby="newsletter-title">
      <div>
        <div className="kicker">NackaSidan Briefing</div>
        <h2 id="newsletter-title">Förstå veckan – utan att jaga rubriker</h2>
        <p>En kommande veckobriefing med det viktigaste inom Sverige, världen, ekonomi, vetenskap och kultur. Vi öppnar e-postprenumerationen när utskicksfunktionen är färdig och integritetstestad.</p>
        <div className="meta" style={{marginTop:12}}>Ingen e-post samlas in ännu · Gratis när tjänsten öppnar</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',gap:12}}>
        <Link className="button" href="/senaste">Se senaste nytt</Link>
        <Link className="text-link" href="/integritet">Så tänker vi om integritet →</Link>
      </div>
    </section>
  );
}
