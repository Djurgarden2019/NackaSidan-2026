import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import type { Metadata } from 'next';
import Link from 'next/link';
import { weekendPermanentArticles } from '../../content/weekendPermanent';

export const metadata: Metadata = { title: 'Helg', description: 'NackaSidans helgmagasin med längre artiklar om mat, vin, Stockholm, politik, kultur, ekonomi, psykologi, filosofi och historia.' };

const sectionIds: Record<string,string> = {
 'Stockholmskrogar':'stockholmskrogar','Mat':'mat','Vin':'vin','Stockholm':'stockholm','Kulturdebatt':'kulturdebatt','USA':'usa','EU':'eu','Nya trender':'nya-trender','Politisk debatt':'politisk-debatt','Makroekonomi':'makroekonomi','Böcker':'bocker','Psykologi':'psykologi','Filosofi':'filosofi','Historisk långläsning':'historisk-handelser'
};

export default function WeekendPage() {
 const [lead, ...articles] = weekendPermanentArticles;
 return <main><div className="shell weekend-desk">
  <header className="weekend-head">
   <div><div className="kicker">Uppdaterad 8 september 2026</div><h1>Helg</h1><p className="lead">NackaSidans stora helgmagasin. Längre artiklar, tydliga analyser och öppna källor om samhället, maten, kulturen och idéerna som formar vår tid.</p></div>
   <div className="weekend-date"><span>Tisdag</span><strong>8</strong><span>september 2026</span></div>
  </header>

  <nav className="weekend-index" aria-label="Helgs fasta avdelningar">
   {weekendPermanentArticles.map((article,index)=><a key={article.section} href={`#${sectionIds[article.section]}`}><span>{index+1}</span>{article.section}</a>)}
  </nav>

  <section id={sectionIds[lead.section]} className="weekend-cover">
   <div><div className="kicker">{lead.section} · {lead.readingTime}</div><h2><Link href={`/helg/${lead.slug}`}>{lead.title}</Link></h2><p className="lead">{lead.intro}</p><Link className="button" href={`/helg/${lead.slug}`}>Läs hela artikeln</Link></div>
   <blockquote>“Helg ska ge varje ämne den tid som krävs för bakgrund, motargument och konsekvenser.”</blockquote>
  </section>

  <section className="weekend-magazine-grid" aria-label="Helgens långa artiklar">
   {articles.map((article,index)=><article id={sectionIds[article.section]} key={article.slug} className={index===0?'weekend-feature-card weekend-feature-card-wide':'weekend-feature-card'}>
    <div className="kicker">{String(index+2).padStart(2,'0')} · {article.section}</div>
    <h2><Link href={`/helg/${article.slug}`}>{article.title}</Link></h2>
    <p>{article.intro}</p>
    <div className="weekend-card-footer"><span>{article.readingTime} läsning</span><Link className="text-link" href={`/helg/${article.slug}`}>Läs långläsningen →</Link></div>
   </article>)}
  </section>

  <section className="weekend-promise"><div className="kicker">Helgs fasta innehåll</div><h2>14 avdelningar i varje utgåva</h2><p>Stockholmskrogar, mat, vin, Stockholm, kulturdebatt, USA, EU, nya trender, politisk debatt, makroekonomi, böcker, psykologi, filosofi och en historisk långläsning ska alltid finnas med. Varje artikel följer samma ordning: artikel, analys och konsekvenser, längre fördjupning och klickbara källor sist.</p></section>
 </div><DailyDeskUpdate desk="helg"/></main>;
}
