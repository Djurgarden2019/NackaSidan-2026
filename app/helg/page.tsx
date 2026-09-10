import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import type { Metadata } from 'next';
import Link from 'next/link';
import { weekendPermanentArticles } from '../../content/weekendPermanent';
import './helg.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Helg', description: 'NackaSidans helgmagasin med längre artiklar om mat och vin, Stockholm, politik, kultur, ekonomi, psykologi, filosofi och historia.' };

const sectionIds: Record<string,string> = {
 'Stockholmskrogar':'stockholmskrogar','Mat & vin':'mat-och-vin','Stockholm':'stockholm','Kulturdebatt':'kulturdebatt','USA':'usa','EU':'eu','Nya trender':'nya-trender','Politisk debatt':'politisk-debatt','Makroekonomi':'makroekonomi','Böcker':'bocker','Psykologi':'psykologi','Filosofi':'filosofi','Historisk långläsning':'historisk-handelser','Miljö':'miljo','Forskning och framsteg':'forskning-och-framsteg','Resor':'resor','Kultur':'kultur'
};

function expandedReadingTime(value:string){return Math.round((Number.parseInt(value,10)||12)*2);}

export default function WeekendPage() {
 const shuffledArticles=[...weekendPermanentArticles].sort(()=>Math.random()-0.5);
 const [lead, ...articles] = shuffledArticles;
 return <main><div className="shell weekend-desk">
  <header className="weekend-head">
   <div><div className="kicker">Uppdaterad 9 september 2026</div><h1>Helg</h1><p className="lead">NackaSidans stora helgmagasin. Längre artiklar, tydliga analyser och öppna källor om samhället, maten, kulturen och idéerna som formar vår tid.</p></div>
   <div className="weekend-date"><span>Onsdag</span><strong>9</strong><span>september 2026</span></div>
  </header>

  <nav className="weekend-index" aria-label="Helgs fasta avdelningar">
   {shuffledArticles.map((article,index)=><a key={article.section} href={`#${sectionIds[article.section]}`}><span>{index+1}</span>{article.section}</a>)}
  </nav>

  <section id={sectionIds[lead.section]} className="weekend-cover">
   <div><div className="kicker">{lead.section} · {expandedReadingTime(lead.readingTime)} min läsning</div><h2><Link href={`/helg/${lead.slug}`}>{lead.title}</Link></h2><p className="lead">{lead.intro}</p><Link className="button" href={`/helg/${lead.slug}`}>Läs hela artikeln</Link></div>
  </section>

  <section className="weekend-magazine-grid" aria-label="Helgens långa artiklar">
   {articles.map((article,index)=><article id={sectionIds[article.section]} key={article.slug} className={index===0?'weekend-feature-card weekend-feature-card-wide':'weekend-feature-card'}>
    <div className="kicker">{String(index+2).padStart(2,'0')} · {article.section}</div>
    <h2><Link href={`/helg/${article.slug}`}>{article.title}</Link></h2>
    <p>{article.intro}</p>
    <div className="weekend-card-footer"><span>{expandedReadingTime(article.readingTime)} min läsning</span><Link className="text-link" href={`/helg/${article.slug}`}>Läs långläsningen →</Link></div>
   </article>)}
  </section>

  <section className="weekend-promise"><div className="kicker">Helgs fasta innehåll</div><h2>17 avdelningar i varje utgåva</h2><p>Böcker, EU, filosofi, forskning och framsteg, historisk långläsning, kultur, kulturdebatt, makroekonomi, mat och vin, miljö, nya trender, politisk debatt, psykologi, resor, Stockholm, Stockholmskrogar och USA ska alltid finnas med.</p></section>
 </div><DailyDeskUpdate desk="helg"/></main>;
}
