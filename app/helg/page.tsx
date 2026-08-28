import type { Metadata } from 'next';
import Link from 'next/link';
import { weekendArticles } from '../../content/weekend';

export const metadata: Metadata = { title: 'Helg', description: 'NackaSidans längre fredagsläsning: reportage, essäer, idéer, vetenskap och sport.' };

export default function WeekendPage() {
  const [lead, ...articles] = weekendArticles;
  return <main><div className="shell weekend-desk">
    <header className="weekend-head"><div><div className="kicker">Nytt varje fredag · Nummer 1</div><h1>Helg</h1><p className="lead">Längre läsning för en långsammare stund. Reportage, samhälle, kultur, vetenskap och sport med analys och öppna källor.</p></div><div className="weekend-date"><span>Fredag</span><strong>28</strong><span>augusti 2026</span></div></header>
    <section className="weekend-cover"><div><div className="kicker">{lead.section} · {lead.readingTime}</div><h2><Link href={`/helg/${lead.slug}`}>{lead.title}</Link></h2><p className="lead">{lead.intro}</p><Link className="button" href={`/helg/${lead.slug}`}>Läs helgens huvudreportage</Link></div><blockquote>“Miljonstrecket är början på en ny planeringsfas, inte slutet på Stockholms tillväxtberättelse.”</blockquote></section>
    <section className="weekend-grid" aria-label="Helgens artiklar">{articles.map((article, index) => <article key={article.slug} className={index === 0 ? 'weekend-card weekend-card-wide' : 'weekend-card'}><div className="kicker">{article.section} · {article.readingTime}</div><h2><Link href={`/helg/${article.slug}`}>{article.title}</Link></h2><p>{article.intro}</p><Link className="text-link" href={`/helg/${article.slug}`}>Läs långläsningen →</Link></article>)}</section>
    <section className="weekend-promise"><div className="kicker">Helglöftet</div><h2>Ny fördjupning varje fredag</h2><p>Helg samlar texter som får ta mer plats än den dagliga nyhetsrapporteringen. Fakta, redaktionell analys och möjliga konsekvenser hålls tydligt åtskilda. Alla externa källor är klickbara.</p></section>
  </div></main>;
}
