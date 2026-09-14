import type { Metadata } from 'next';
import Link from 'next/link';
import { weekendPermanentArticles } from '../../content/weekendPermanent';
import { getLiveNews } from '../../lib/liveNews';
import './helg.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
 title: 'Helg',
 description: 'NackaSidans helgmagasin med aktuella svenska artiklar och ett arkiv med tidigare långläsningar.'
};

function timeLabel(value:string){
 return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value));
}

function weekendDate(){
 const now=new Date();
 return {
  full:new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(now),
  weekday:new Intl.DateTimeFormat('sv-SE',{weekday:'long',timeZone:'Europe/Stockholm'}).format(now),
  day:new Intl.DateTimeFormat('sv-SE',{day:'numeric',timeZone:'Europe/Stockholm'}).format(now),
  monthYear:new Intl.DateTimeFormat('sv-SE',{month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(now)
 };
}

function isSwedishSource(source:string){
 return ['SVT','Sveriges Radio','Nacka kommun','Sveriges Riksbank'].some(name=>source.startsWith(name));
}

export default async function WeekendPage() {
 const issue=weekendDate();
 const live=await getLiveNews();
 const now=Date.now();
 const newest=live.items
  .filter(item=>isSwedishSource(item.source))
  .filter(item=>item.section!=='Sport')
  .filter(item=>{
   const age=now-Date.parse(item.published);
   return Number.isFinite(age)&&age>=0&&age<=7*24*60*60*1000;
  })
  .slice(0,16);

 return <main><div className="shell weekend-desk">
  <header className="weekend-head">
   <div><div className="kicker">Uppdaterad {issue.full}</div><h1>Helg</h1><p className="lead">Aktuella svenska artiklar om samhället, kulturen, maten och idéerna som formar vår tid.</p></div>
   <div className="weekend-date"><span>{issue.weekday}</span><strong>{issue.day}</strong><span>{issue.monthYear}</span></div>
  </header>

  <nav className="weekend-index" aria-label="Helgens innehåll">
   <a href="#nya-artiklar"><span>01</span>{newest.length} nya artiklar</a>
   <a href="#arkiv"><span>02</span>{weekendPermanentArticles.length} i arkivet</a>
  </nav>

  <div className="weekend-with-archive">
   <aside id="arkiv" className="weekend-archive" aria-labelledby="helg-archive-title">
    <div className="kicker">Tidigare publicerat</div>
    <h2 id="helg-archive-title">Arkiv</h2>
    <ol className="weekend-archive-list">
     {weekendPermanentArticles.map(article=><li key={article.slug}>
      <Link href={`/helg/${article.slug}`}>
       <span>{article.section}</span>
       <strong>{article.title}</strong>
       <small>{article.published} · {article.readingTime} min</small>
      </Link>
     </li>)}
    </ol>
   </aside>

   <section id="nya-artiklar" className="weekend-current" aria-labelledby="helg-new-title">
    <div className="kicker">Nytt denna helg · Senaste 7 dagarna</div>
    <h2 id="helg-new-title">Nya svenska artiklar</h2>
    {newest.length>0?<div className="weekend-magazine-grid">
     {newest.map((item,index)=><article className={index===0?'weekend-feature-card weekend-feature-card-wide':'weekend-feature-card'} key={item.link}>
      {item.image&&<a className="weekend-card-image" href={item.link}><img src={item.image} alt="" /></a>}
      <div className="kicker">{item.section} · {item.source} · {timeLabel(item.published)}</div>
      <h3><a href={item.link}>{item.title}</a></h3>
      {item.summary&&<p>{item.summary}</p>}
      <a className="text-link" href={item.link}>Läs hela artikeln →</a>
     </article>)}
    </div>:<p className="weekend-empty">Inga nya svenska artiklar har publicerats under den senaste veckan.</p>}
   </section>
  </div>
 </div></main>;
}
