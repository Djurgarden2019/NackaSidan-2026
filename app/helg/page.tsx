import type { Metadata } from 'next';
import Link from 'next/link';
import { weekendPermanentArticles } from '../../content/weekendPermanent';
import { getLiveNews } from '../../lib/liveNews';
import './helg.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Helg', description: 'NackaSidans helgmagasin med längre artiklar om mat och vin, Stockholm, politik, kultur, ekonomi, psykologi, filosofi och historia.' };

const sectionIds: Record<string,string> = {
 'Stockholmskrogar':'stockholmskrogar','Mat & vin':'mat-och-vin','Veckans reportage':'veckans-reportage','Stockholm':'stockholm','Kulturdebatt':'kulturdebatt','USA':'usa','EU':'eu','Nya trender':'nya-trender','Politisk debatt':'politisk-debatt','Makroekonomi':'makroekonomi','Böcker':'bocker','Psykologi':'psykologi','Filosofi':'filosofi','Historisk långläsning':'historisk-handelser','Miljö':'miljo','Forskning och framsteg':'forskning-och-framsteg','Resor':'resor','Kultur':'kultur'
};

function expandedReadingTime(value:string){return Math.round((Number.parseInt(value,10)||12)*2);}
function timeLabel(value:string){return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value))}
function weekendDate(){const now=new Date();return {full:new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(now),weekday:new Intl.DateTimeFormat('sv-SE',{weekday:'long',timeZone:'Europe/Stockholm'}).format(now),day:new Intl.DateTimeFormat('sv-SE',{day:'numeric',timeZone:'Europe/Stockholm'}).format(now),monthYear:new Intl.DateTimeFormat('sv-SE',{month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(now)}}

export default async function WeekendPage() {
 const issue=weekendDate();
 const live=await getLiveNews();
 const now=Date.now();
 const newest=live.items.filter(item=>['Kultur','Vetenskap','Ekonomi','Internationella medier'].includes(item.section)||['Kultur','Vetenskap'].includes(item.sourceSection)).filter(item=>{const age=now-Date.parse(item.published);return Number.isFinite(age)&&age>=0&&age<=72*60*60*1000}).slice(0,6);
 const shuffledArticles=[...weekendPermanentArticles].sort(()=>Math.random()-0.5);
 const [lead, ...articles] = shuffledArticles;
 return <main><div className="shell weekend-desk">
  <header className="weekend-head">
   <div><div className="kicker">Uppdaterad {issue.full}</div><h1>Helg</h1><p className="lead">NackaSidans stora helgmagasin. Längre artiklar, tydliga analyser och öppna källor om samhället, maten, kulturen och idéerna som formar vår tid.</p></div>
   <div className="weekend-date"><span>{issue.weekday}</span><strong>{issue.day}</strong><span>{issue.monthYear}</span></div>
  </header>

  <nav className="weekend-index" aria-label="Helgs fasta avdelningar">
   {shuffledArticles.map((article,index)=><a key={article.section} href={`#${sectionIds[article.section]}`}><span>{index+1}</span>{article.section}</a>)}
  </nav>

  {newest.length>0&&<section className="weekend-new" aria-labelledby="helg-new-title" style={{padding:'42px 0',borderBottom:'1px solid #b9aa96'}}>
   <div className="kicker">Nytt denna helg · Senaste 72 timmarna</div><h2 id="helg-new-title" style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,5vw,62px)',lineHeight:1,margin:'10px 0 28px'}}>Nya artiklar att läsa nu</h2>
   <div className="weekend-magazine-grid">{newest.map((item,index)=><article className={index===0?'weekend-feature-card weekend-feature-card-wide':'weekend-feature-card'} key={item.link}>
    {item.image&&<a href={item.link} style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:18}}><img src={item.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></a>}
    <div className="kicker">{item.section} · {item.source} · {timeLabel(item.published)}</div>
    <h2><a href={item.link}>{item.title}</a></h2>
    {item.summary&&<p>{item.summary}</p>}
    <a className="text-link" href={item.link}>Läs hela artikeln →</a>
   </article>)}</div>
  </section>}

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

  <section className="weekend-promise"><div className="kicker">Helgs fasta innehåll</div><h2>18 avdelningar i varje utgåva</h2><p>Böcker, EU, filosofi, forskning och framsteg, historisk långläsning, kultur, kulturdebatt, makroekonomi, mat och vin, miljö, nya trender, politisk debatt, psykologi, resor, Stockholm, Stockholmskrogar, USA och Veckans reportage ska alltid finnas med.</p></section>
 </div></main>;
}
