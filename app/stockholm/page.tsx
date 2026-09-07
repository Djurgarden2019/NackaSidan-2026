import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import Link from 'next/link';
import StockholmDiscovery from './StockholmDiscovery';
import StockholmToday from './StockholmToday';
import { stockholmArticles163 } from '../../content/stockholmArticles163';
import { stockholmDistricts175 } from '../../content/stockholmDistricts175';
import { stockholmFrontRules176 } from '../../content/stockholmFront176';
import { stockholmTraffic168, stockholmTrafficEditorialRules168 } from '../../content/stockholmTraffic168';
import { stockholmHousingProjects170, stockholmHousingDesk170 } from '../../content/stockholmHousing170';
import { stockholmBusinessStories172, stockholmBusinessDesk172 } from '../../content/stockholmBusiness172';
import { stockholmCultureItems171, stockholmCultureDesk171 } from '../../content/stockholmCulture171';
import { stockholmSafetyStories174, stockholmSafetyDesk174 } from '../../content/stockholmSafety174';
import DeskDepth from '../../components/DeskDepth';
import { stockholmDepth } from '../../content/deskDepth';

export const metadata={title:'Stockholm | NackaSidan 2026',description:'Aktuella nyheter, trafik, bostäder, hälsa, kultur och stadsdelar i Stockholm.'};

const nav=[
 {label:'Toppnyhet',anchor:'toppnyhet'},
 {label:'Senaste artiklar',anchor:'artiklar'},
 {label:'Hitta',anchor:'hitta'},
 {label:'Stadsdelar',anchor:'stadsdelar'},
 {label:'Trafik',anchor:'stockholm-traffic'},
 {label:'Fördjupning',anchor:'fordjupning'}
];

function EmptyState({text}:{text:string}){return <p className="mt-3 border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">{text}</p>}

export default function StockholmPage(){
 const published=stockholmArticles163.filter(a=>a.status==='published');
 const lead=published.find(a=>a.homepage?.role==='lead')??published[0];
 const latest=[...published].filter(a=>a.slug!==lead?.slug).sort((a,b)=>Date.parse(b.publishedAt)-Date.parse(a.publishedAt));
 const searchDocuments=published.map(a=>({id:a.slug,title:a.title,summary:a.teaserSummary??a.intro,tags:a.tags,section:a.section,url:`/stockholm/artikel/${a.slug}`,publishedAt:a.publishedAt,status:a.status,districts:[]}));

 return <main className="stockholm-page mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
  <header className="stockholm-head border-b-4 border-neutral-950 pb-7">
   <p className="text-sm font-semibold uppercase tracking-[.18em] text-red-800">Uppdaterad 7 september 2026</p>
   <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div><h1 className="text-5xl font-black tracking-tight sm:text-7xl">Stockholm</h1><p className="mt-3 max-w-3xl text-lg leading-8 text-neutral-600">{stockholmFrontRules176.intro}</p></div>
    <div className="text-sm font-semibold text-neutral-500">Nyheter · Stadsdelar · Fördjupning</div>
   </div>
  </header>

  <nav aria-label="Innehåll på Stockholmssidan" className="stockholm-subnav flex gap-5 overflow-x-auto border-b border-neutral-300 py-4 text-sm font-bold">
   {nav.map(i=><a key={i.label} href={`#${i.anchor}`} className="whitespace-nowrap hover:text-red-800 hover:underline">{i.label}</a>)}
  </nav>

  {lead&&<section id="toppnyhet" className="stockholm-lead border-b border-neutral-300 py-9">
   <article className="max-w-5xl">
    <p className="text-sm font-bold uppercase tracking-wide text-red-800">{lead.section}</p>
    <h2 className="mt-2 text-4xl font-black leading-[1.05] sm:text-6xl"><Link className="hover:underline" href={`/stockholm/artikel/${lead.slug}`}>{lead.title}</Link></h2>
    <p className="mt-5 max-w-4xl text-xl leading-8 text-neutral-700">{lead.intro}</p>
    <div className="mt-5 flex flex-wrap gap-4 text-sm text-neutral-500"><span>{lead.updated}</span><span>{lead.readingTime}</span></div>
    <Link className="mt-6 inline-block border-b-2 border-neutral-950 pb-1 font-bold" href={`/stockholm/artikel/${lead.slug}`}>Läs hela artikeln →</Link>
   </article>
  </section>}

  <section id="artiklar" className="stockholm-section border-b border-neutral-300 py-10">
   <div className="stockholm-section-head"><p className="text-xs font-bold uppercase tracking-wider text-red-800">Aktuellt och verifierat</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">Senaste artiklarna</h2></div>
   <div className="stockholm-article-grid mt-6 grid gap-5 md:grid-cols-2">
    {latest.map((article,index)=><article key={article.slug} className="stockholm-article-card flex h-full flex-col border-t-4 border-neutral-950 bg-white py-5">
     <div className="text-xs font-bold uppercase tracking-wide text-red-800">{article.section}</div>
     <h3 className="mt-2 text-2xl font-black leading-tight"><Link className="hover:underline" href={`/stockholm/artikel/${article.slug}`}>{article.title}</Link></h3>
     <p className="mt-3 text-base leading-7 text-neutral-600">{article.teaserSummary??article.intro}</p>
     <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm text-neutral-500"><span>{article.updated}</span><Link className="font-bold text-neutral-950 underline underline-offset-4" href={`/stockholm/artikel/${article.slug}`}>Läs →</Link></div>
    </article>)}
   </div>
  </section>

  <div id="hitta"><StockholmDiscovery documents={searchDocuments}/></div>

  <section id="stadsdelar" className="stockholm-section border-b border-neutral-300 py-10">
   <div className="stockholm-section-head flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wide text-red-800">Nära dig</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">Stadsdel för stadsdel</h2></div><span className="text-sm text-neutral-500">Lokala beslut, trafik och vardagsliv</span></div>
   <div className="stockholm-district-grid mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{stockholmDistricts175.map(d=><Link href={`/stockholm/stadsdel/${d.slug}`} key={d.slug} className="border border-neutral-300 bg-white p-4 transition hover:border-neutral-950 hover:bg-neutral-50"><h3 className="text-lg font-black">{d.name}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{d.focus.join(' · ')}</p><span className="mt-3 inline-block text-sm font-bold underline underline-offset-4">Öppna →</span></Link>)}</div>
  </section>

  <section id="stockholm-traffic" className="stockholm-section border-b border-neutral-300 py-10">
   <div className="stockholm-section-head flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-red-800">Resor och arbeten</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">{stockholmTrafficEditorialRules168.title}</h2></div><span className="text-sm text-neutral-500">Kontrollera alltid resan mot SL</span></div>
   {stockholmTraffic168.length===0?<EmptyState text="Inga verifierade trafikuppgifter visas just nu."/>:<div className="mt-6 grid gap-5 md:grid-cols-2">{stockholmTraffic168.map(item=><article key={item.id} className="border-t-4 border-neutral-950 py-5"><div className="text-xs font-bold uppercase tracking-wide text-red-800">{item.mode} · {item.area}</div><h3 className="mt-2 text-2xl font-black leading-tight"><a className="hover:underline" href={item.sourceUrl}>{item.headline}</a></h3><p className="mt-3 leading-7 text-neutral-600">{item.summary}</p><a className="mt-4 inline-block text-sm font-bold underline underline-offset-4" href={item.sourceUrl}>Öppna källan →</a></article>)}</div>}
  </section>

  <section className="stockholm-section py-10">
   <div className="stockholm-section-head"><p className="text-xs font-bold uppercase tracking-wide text-red-800">Fler bevakningar</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">Staden bakom rubrikerna</h2></div>
   <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {[
     {title:stockholmHousingDesk170.title,text:stockholmHousingDesk170.intro,empty:stockholmHousingProjects170.length===0?'Nya projekt publiceras först när uppgifterna är verifierade.':''},
     {title:stockholmBusinessDesk172.title,text:'Företag, jobb, handel och villkoren för Stockholms näringsliv.',empty:stockholmBusinessStories172.length===0?'Nästa verifierade näringslivsartikel förbereds.':''},
     {title:stockholmCultureDesk171.title,text:'Film, scen, konst och lokala kulturmiljöer i hela regionen.',empty:stockholmCultureItems171.length===0?'Aktuella kulturartiklar finns i artikelblocket ovan.':''},
     {title:stockholmSafetyDesk174.title,text:stockholmSafetyDesk174.purpose,empty:stockholmSafetyStories174.length===0?'Endast bekräftade händelser publiceras.':''}
    ].map(item=><article key={item.title} className="border-t-4 border-neutral-950 py-5"><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{item.text}</p>{item.empty&&<p className="mt-4 border-l-2 border-red-800 pl-3 text-sm text-neutral-500">{item.empty}</p>}</article>)}
   </div>
  </section>

  <div id="fordjupning"><DeskDepth eyebrow="Stockholm · Fördjupning" title="Besluten som formar hela regionens vardag" {...stockholmDepth}/></div>

  <StockholmToday/>
  <DailyDeskUpdate desk="stockholm"/>

  <footer className="border-t border-neutral-300 py-6 text-sm text-neutral-500"><div className="flex flex-wrap items-center justify-between gap-3"><span>Källorna ligger sist i varje artikel. Fakta och analys hålls isär.</span><Link href="/sverige" className="font-bold underline underline-offset-4">Till Sverige →</Link></div></footer>
 </main>
}
