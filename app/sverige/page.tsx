import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import Link from 'next/link';
import { swedenDesk207 } from '../../content/swedenDesk207';
import { swedenElectionCalendar224, swedenElectionCalendarRules224 } from '../../content/swedenElectionCalendar224';
import { swedenEconomySnapshot227 } from '../../content/swedenEconomySnapshot227';
import { swedenArticleFeed239, swedenFeed239 } from '../../content/swedenArticleFeed239';
import DeskDepth from '../../components/DeskDepth';
import { swedenDepth } from '../../content/deskDepth';

export const metadata={title:'Sverige | NackaSidan 2026',description:'Aktuella och fördjupande artiklar om politik, ekonomi och samhälle i Sverige.'};

const formatDate=(iso:string)=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long'}).format(new Date(`${iso}T12:00:00`));
const formatArticleDate=(iso:string)=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date(iso));

export default function SverigePage(){
 const articles=swedenArticleFeed239();
 const lead=articles[0];
 const latest=articles.slice(1,7);

 return <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
  <header className="border-b-4 border-neutral-950 pb-7">
   <p className="text-sm font-bold uppercase tracking-[.18em] text-red-800">Uppdaterad 9 september 2026</p>
   <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-7xl">{swedenDesk207.title}</h1>
   <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">Nyheter och analyser om politiken, ekonomin och de samhällsfrågor som påverkar hela Sverige.</p>
  </header>

  <nav aria-label="Innehåll på Sverigesidan" className="flex gap-6 overflow-x-auto border-b border-neutral-300 py-4 text-sm font-bold">
   <a href="#huvudnyhet" className="whitespace-nowrap hover:underline">Huvudnyhet</a>
   <a href="#senaste" className="whitespace-nowrap hover:underline">Senaste artiklar</a>
   <a href="#ekonomi" className="whitespace-nowrap hover:underline">Ekonomi</a>
   <a href="#valet" className="whitespace-nowrap hover:underline">Valet</a>
   <a href="#fordjupning" className="whitespace-nowrap hover:underline">Fördjupning</a>
  </nav>

  {lead&&<section id="huvudnyhet" className="border-b border-neutral-300 py-10">
   <article className="max-w-5xl">
    <p className="text-xs font-bold uppercase tracking-widest text-red-800">{lead.section}{lead.region?` · ${lead.region}`:''}</p>
    <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl"><Link href={`/sverige/artikel/${lead.slug}`} className="hover:underline">{lead.title}</Link></h2>
    <p className="mt-5 max-w-4xl text-xl leading-8 text-neutral-700">{lead.intro}</p>
    <div className="mt-5 text-sm text-neutral-500">Uppdaterad {formatArticleDate(lead.updatedAt)}</div>
    <Link href={`/sverige/artikel/${lead.slug}`} className="mt-6 inline-block border-b-2 border-neutral-950 pb-1 font-bold">Läs hela artikeln →</Link>
   </article>
  </section>}

  <section id="senaste" className="border-b border-neutral-300 py-10" aria-labelledby="senaste-sverige">
   <p className="text-xs font-bold uppercase tracking-widest text-red-800">Aktuellt och verifierat</p>
   <h2 id="senaste-sverige" className="mt-1 text-3xl font-black sm:text-4xl">{swedenFeed239.title}</h2>
   {latest.length?<div className="mt-6 grid gap-x-8 gap-y-7 md:grid-cols-2">{latest.map(article=><article key={article.slug} className="border-t-4 border-neutral-950 pt-4">
    <p className="text-xs font-bold uppercase tracking-wide text-red-800">{article.section}</p>
    <h3 className="mt-2 text-2xl font-black leading-tight"><Link href={`/sverige/artikel/${article.slug}`} className="hover:underline">{article.title}</Link></h3>
    <p className="mt-3 leading-7 text-neutral-600">{article.intro}</p>
    <div className="mt-4 flex items-center justify-between gap-4 text-sm text-neutral-500"><span>{formatArticleDate(article.updatedAt)}</span><Link href={`/sverige/artikel/${article.slug}`} className="font-bold text-neutral-950 underline">Läs →</Link></div>
   </article>)}</div>:<p className="mt-5 border border-neutral-200 bg-neutral-50 p-5 text-neutral-600">{swedenFeed239.emptyMessage}</p>}
  </section>

  <section id="ekonomi" className="border-b border-neutral-300 py-10">
   <p className="text-xs font-bold uppercase tracking-widest text-red-800">Sverige i siffror</p>
   <h2 className="mt-1 text-3xl font-black sm:text-4xl">{swedenEconomySnapshot227.title}</h2>
   <p className="mt-3 max-w-3xl text-lg leading-7 text-neutral-600">{swedenEconomySnapshot227.lead}</p>
   <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{swedenEconomySnapshot227.metrics.map(metric=><article key={metric.label} className="border-t-4 border-neutral-950 pt-4">
    <p className="text-sm font-bold text-neutral-500">{metric.label}</p><p className="mt-2 text-3xl font-black">{metric.value}</p><p className="mt-2 text-xs text-neutral-500">{metric.period}</p>
   </article>)}</div>
   <a href={swedenEconomySnapshot227.sourceUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-bold underline">Källa: SCB →</a>
  </section>

  <section id="valet" className="border-b border-neutral-300 py-10">
   <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-red-800">Valet 2026</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">Viktiga datum</h2></div><span className="text-xs text-neutral-500">Kontrollerad {swedenElectionCalendarRules224.checkedAt}</span></div>
   <div className="mt-6 grid gap-5 md:grid-cols-3">{swedenElectionCalendar224.map(item=><article key={item.date} className="border-t-4 border-neutral-950 pt-4"><p className="text-sm font-black uppercase">{formatDate(item.date)}</p><h3 className="mt-2 text-xl font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p><a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-bold underline">Källa →</a></article>)}</div>
  </section>

  <div id="fordjupning"><DeskDepth eyebrow="Sverige · Fördjupning" title="Valet, ekonomin och säkerheten bakom rubrikerna" {...swedenDepth}/></div>
  <DailyDeskUpdate desk="sverige"/>
  <footer className="border-t border-neutral-300 py-6 text-sm text-neutral-500"><Link href="/stockholm" className="font-bold underline">Till Stockholm →</Link></footer>
 </main>
}
