import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import Link from 'next/link';
import StockholmToday from './StockholmToday';
import { stockholmArticles163 } from '../../content/stockholmArticles163';
import { stockholmTraffic168, stockholmTrafficEditorialRules168 } from '../../content/stockholmTraffic168';
import DeskDepth from '../../components/DeskDepth';
import { stockholmDepth } from '../../content/deskDepth';
import { getLiveNews } from '../../lib/liveNews';

export const dynamic='force-dynamic';

export const metadata={title:'Stockholm | NackaSidan 2026',description:'Aktuella nyheter, trafik och fördjupning om Stockholm och regionen.'};

const todayLabel=()=>new Intl.DateTimeFormat('sv-SE',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());
const liveDate=(value:string)=>{const date=new Date(value);return Number.isNaN(date.getTime())?'Senaste nytt':new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(date)};

const districtNames=['Södermalm','Vasastan','Norrmalm','Östermalm','Kungsholmen','Bromma','Järva','Farsta','Älvsjö','Skärholmen','Hägersten','Årsta','Enskede','Vantör'];
const isDistrictStory=(section:string)=>districtNames.some(name=>section.includes(name));
function EmptyState({text}:{text:string}){return <p className="mt-4 border border-neutral-200 bg-neutral-50 p-5 text-neutral-600">{text}</p>}

export default async function StockholmPage(){
 const live=await getLiveNews();
 const dailyNews=live.items.filter(item=>item.sourceSection==='Stockholm').slice(0,6);
 const published=stockholmArticles163.filter(article=>article.status==='published'&&!isDistrictStory(article.section));
 const lead=published.find(article=>article.homepage?.role==='lead')??published[0];
 const latest=[...published].filter(article=>article.slug!==lead?.slug).sort((a,b)=>Date.parse(b.publishedAt)-Date.parse(a.publishedAt));

 return <main className="standard-section-page">
  <header className="border-b-4 border-neutral-950 pb-7">
   <p className="text-sm font-bold uppercase tracking-[.18em] text-red-800">Uppdaterad {todayLabel()}</p>
   <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-7xl">Stockholm</h1>
   <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">Nyheter och analyser om beslut, trafik, bostäder, arbetsliv och kultur i Stockholm och regionen.</p>
  </header>

  <nav aria-label="Innehåll på Stockholmssidan" className="flex gap-6 overflow-x-auto border-b border-neutral-300 py-4 text-sm font-bold">
   <a href="#dagens-nyheter" className="whitespace-nowrap hover:underline">Dagens nyheter</a>
   <a href="#huvudnyhet" className="whitespace-nowrap hover:underline">Huvudnyhet</a>
   <a href="#senaste" className="whitespace-nowrap hover:underline">Senaste artiklar</a>
   <a href="#trafik" className="whitespace-nowrap hover:underline">Trafik</a>
   <a href="#fordjupning" className="whitespace-nowrap hover:underline">Fördjupning</a>
  </nav>

  <section id="dagens-nyheter" className="border-b border-neutral-300 py-10">
   
   <h2 className="mt-1 text-3xl font-black sm:text-4xl">Dagens Stockholm-nyheter</h2>
   
   {dailyNews.length?<div className="mt-6 divide-y divide-neutral-300 border-t-4 border-neutral-950">{dailyNews.map((item,index)=><a key={`${item.link}-${index}`} href={item.link} target="_blank" rel="noreferrer" className="grid gap-2 py-5 hover:bg-neutral-50 sm:grid-cols-[9rem_1fr_auto] sm:items-start"><time className="text-sm text-neutral-500">{liveDate(item.published)}</time><div><p className="text-xs font-bold uppercase tracking-wide text-red-800">{item.source}</p><h3 className="mt-1 text-xl font-black leading-tight">{item.title}</h3>{item.summary&&<p className="mt-2 line-clamp-2 leading-7 text-neutral-600">{item.summary}</p>}</div><span className="font-bold" aria-hidden="true">→</span></a>)}</div>:<p className="mt-5 border border-neutral-200 bg-neutral-50 p-5 text-neutral-600">Inga nya Stockholmsnyheter visas just nu.</p>}
  </section>

  {lead&&<section id="huvudnyhet" className="border-b border-neutral-300 py-10">
   <article className="max-w-5xl">
    <p className="text-xs font-bold uppercase tracking-widest text-red-800">{lead.section}</p>
    <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl"><Link href={`/stockholm/artikel/${lead.slug}`} className="hover:underline">{lead.title}</Link></h2>
    <p className="mt-5 max-w-4xl text-xl leading-8 text-neutral-700">{lead.intro}</p>
    <div className="mt-5 flex flex-wrap gap-4 text-sm text-neutral-500"><span>{lead.updated}</span><span>{lead.readingTime}</span></div>
    <Link href={`/stockholm/artikel/${lead.slug}`} className="mt-6 inline-block border-b-2 border-neutral-950 pb-1 font-bold">Läs hela artikeln →</Link>
   </article>
  </section>}

  <section id="senaste" className="border-b border-neutral-300 py-10">
   <p className="text-xs font-bold uppercase tracking-widest text-red-800">Aktuellt och verifierat</p>
   <h2 className="mt-1 text-3xl font-black sm:text-4xl">Senaste artiklarna</h2>
   {latest.length?<div className="mt-6 grid gap-x-8 gap-y-7 md:grid-cols-2">{latest.map(article=><article key={article.slug} className="border-t-4 border-neutral-950 pt-4">
    <p className="text-xs font-bold uppercase tracking-wide text-red-800">{article.section}</p>
    <h3 className="mt-2 text-2xl font-black leading-tight"><Link href={`/stockholm/artikel/${article.slug}`} className="hover:underline">{article.title}</Link></h3>
    <p className="mt-3 leading-7 text-neutral-600">{article.teaserSummary??article.intro}</p>
    <div className="mt-4 flex items-center justify-between gap-4 text-sm text-neutral-500"><span>{article.updated}</span><Link href={`/stockholm/artikel/${article.slug}`} className="font-bold text-neutral-950 underline">Läs →</Link></div>
   </article>)}</div>:<EmptyState text="Inga verifierade artiklar visas just nu."/>}
  </section>

  <section id="trafik" className="border-b border-neutral-300 py-10">
   <p className="text-xs font-bold uppercase tracking-widest text-red-800">Resor och arbeten</p>
   <h2 className="mt-1 text-3xl font-black sm:text-4xl">{stockholmTrafficEditorialRules168.title}</h2>
   <p className="mt-3 text-sm text-neutral-500">Kontrollera alltid resan mot SL eller trafikoperatören.</p>
   {stockholmTraffic168.length===0?<EmptyState text="Inga verifierade trafikuppgifter visas just nu."/>:<div className="mt-6 grid gap-x-8 gap-y-7 md:grid-cols-2">{stockholmTraffic168.map(item=><article key={item.id} className="border-t-4 border-neutral-950 pt-4"><p className="text-xs font-bold uppercase tracking-wide text-red-800">{item.mode} · {item.area}</p><h3 className="mt-2 text-2xl font-black leading-tight"><a href={item.sourceUrl} className="hover:underline">{item.headline}</a></h3><p className="mt-3 leading-7 text-neutral-600">{item.summary}</p><a href={item.sourceUrl} className="mt-4 inline-block text-sm font-bold underline">Öppna källan →</a></article>)}</div>}
  </section>

  <div id="fordjupning"><DeskDepth eyebrow="Stockholm · Fördjupning" title="Besluten som formar hela regionens vardag" {...stockholmDepth}/></div>
  <StockholmToday/>
  <DailyDeskUpdate desk="stockholm"/>
  <footer className="border-t border-neutral-300 py-6 text-sm"><Link href="/sverige" className="font-bold underline">Till Sverige →</Link></footer>
 </main>
}
