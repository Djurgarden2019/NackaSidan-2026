import type { Metadata } from 'next';
import Link from 'next/link';
import { weekendArticles } from '../../content/weekend';
import { weekendPermanentArticles } from '../../content/weekendPermanent';
import './helg.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
 title: 'Helg',
 description: 'NackaSidans svenska helgmagasin med 18 längre artiklar, analyser, fördjupningar och ett arkiv med tidigare publiceringar.'
};

function weekendDate(){
 const now=new Date();
 return {
  full:new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(now),
  weekday:new Intl.DateTimeFormat('sv-SE',{weekday:'long',timeZone:'Europe/Stockholm'}).format(now),
  day:new Intl.DateTimeFormat('sv-SE',{day:'numeric',timeZone:'Europe/Stockholm'}).format(now),
  monthYear:new Intl.DateTimeFormat('sv-SE',{month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(now)
 };
}

function expandedReadingTime(value:string){
 return Math.round((Number.parseInt(value,10)||12)*2);
}

export default function WeekendPage() {
 const issue=weekendDate();
 const currentArticles=[...weekendPermanentArticles].sort(()=>Math.random()-.5);
 const [lead,...articles]=currentArticles;
 const archive=[...weekendArticles].sort((a,b)=>b.published.localeCompare(a.published,'sv'));

 return <main><div className="shell weekend-desk">
  <header className="weekend-head">
   <div>
    <div className="kicker">Helgmagasinet · {issue.full}</div>
    <h1>Helg</h1>
    <p className="lead">18 svenska långläsningar om mat och vin, kultur, samhälle, ekonomi, forskning, idéer och resor.</p>
   </div>
   <div className="weekend-date"><span>{issue.weekday}</span><strong>{issue.day}</strong><span>{issue.monthYear}</span></div>
  </header>

  <nav className="weekend-index weekend-section-index" aria-label="Helgens fasta avdelningar">
   {currentArticles.map((article,index)=><a key={article.slug} href={`#artikel-${article.slug}`}><span>{String(index+1).padStart(2,'0')}</span>{article.section}</a>)}
  </nav>

  <div className="weekend-with-archive">
   <aside id="arkiv" className="weekend-archive" aria-labelledby="helg-archive-title">
    <div className="kicker">Tidigare publicerat</div>
    <h2 id="helg-archive-title">Arkiv</h2>
    <ol className="weekend-archive-list">
     {archive.map(article=><li key={article.slug}>
      <Link href={`/helg/${article.slug}`}>
       <span>{article.section}</span>
       <strong>{article.title}</strong>
       <small>{article.published} · {expandedReadingTime(article.readingTime)} min</small>
      </Link>
     </li>)}
    </ol>
   </aside>

   <div className="weekend-current">
    <section id={`artikel-${lead.slug}`} className="weekend-cover">
     <div>
      <div className="kicker">{lead.section} · {expandedReadingTime(lead.readingTime)} min läsning</div>
      <h2><Link href={`/helg/${lead.slug}`}>{lead.title}</Link></h2>
      <p className="lead">{lead.intro}</p>
      <Link className="button" href={`/helg/${lead.slug}`}>Läs hela artikeln</Link>
     </div>
    </section>

    <section className="weekend-magazine-grid" aria-label="Veckans 18 långa artiklar">
     {articles.map((article,index)=><article id={`artikel-${article.slug}`} key={article.slug} className={index===0?'weekend-feature-card weekend-feature-card-wide':'weekend-feature-card'}>
      <div className="kicker">{String(index+2).padStart(2,'0')} · {article.section}</div>
      <h3><Link href={`/helg/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.intro}</p>
      <div className="weekend-card-footer">
       <span>{expandedReadingTime(article.readingTime)} min läsning</span>
       <Link className="text-link" href={`/helg/${article.slug}`}>Läs långläsningen →</Link>
      </div>
     </article>)}
    </section>
   </div>
  </div>
 </div></main>;
}
