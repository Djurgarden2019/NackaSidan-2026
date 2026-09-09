import type { Metadata } from 'next';
import { getLiveNews } from '../../lib/liveNews';
import DailyDeskUpdate from '../../components/DailyDeskUpdate';

export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Internationella medier',description:'Dagsaktuella nyheter från utvalda europeiska och amerikanska medier.'};

const europe=['BBC Europe','Deutsche Welle','France 24 Europe','The Guardian World'];
const usa=['New York Times World','NPR World'];
const fresh=(value:string)=>{const time=Date.parse(value);const age=Date.now()-time;return Number.isFinite(time)&&age>=0&&age<=24*60*60*1000};
const timeLabel=(value:string)=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value));
const today=()=>new Intl.DateTimeFormat('sv-SE',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());

function NewsList({title,items}:{title:string;items:Awaited<ReturnType<typeof getLiveNews>>['items']}){
 return <section className="border-b border-neutral-300 py-10"><p className="text-xs font-bold uppercase tracking-widest text-red-800">Senaste 24 timmarna</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">{title}</h2>{items.length?<div className="mt-6 divide-y divide-neutral-300 border-t-4 border-neutral-950">{items.map((item,index)=><article key={`${item.link}-${index}`} className="grid gap-3 py-6 md:grid-cols-[10rem_1fr]"><div><time className="text-sm text-neutral-500">{timeLabel(item.published)}</time><p className="mt-1 text-xs font-bold uppercase tracking-wide text-red-800">{item.source}</p></div><div><h3 className="text-2xl font-black leading-tight"><a href={item.link} target="_blank" rel="noreferrer" className="hover:underline">{item.title}</a></h3>{item.summary&&<p className="mt-3 max-w-3xl leading-7 text-neutral-600">{item.summary}</p>}<a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-bold underline">Läs originalartikeln →</a></div></article>)}</div>:<p className="mt-5 border border-neutral-200 bg-neutral-50 p-5 text-neutral-600">Inga verifierade artiklar yngre än 24 timmar är tillgängliga från denna mediegrupp just nu.</p>}</section>
}

export default async function InternationalMediaPage(){
 const live=await getLiveNews();
 const items=live.items.filter(item=>item.sourceSection==='Internationella medier'&&fresh(item.published));
 const european=items.filter(item=>europe.some(source=>item.source.startsWith(source))).slice(0,12);
 const american=items.filter(item=>usa.some(source=>item.source.startsWith(source))).slice(0,12);
 return <main className="mx-auto max-w-6xl px-4 py-8 font-sans text-neutral-950 sm:px-6 lg:px-8">
  <header className="border-b-4 border-neutral-950 pb-7"><p className="text-sm font-bold uppercase tracking-[.18em] text-red-800">Uppdaterad {today()}</p><h1 className="mt-2 text-5xl font-black tracking-tight sm:text-7xl">Internationella medier</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">Ett dagsaktuellt urval från europeiska och amerikanska redaktioner. Alla länkar går direkt till originalmediet och artiklar äldre än 24 timmar tas bort automatiskt.</p></header>
  <nav aria-label="Innehåll" className="flex gap-6 overflow-x-auto border-b border-neutral-300 py-4 text-sm font-bold"><a href="#europa" className="hover:underline">Europeiska medier</a><a href="#usa" className="hover:underline">Amerikanska medier</a></nav>
  <div id="europa"><NewsList title="Europeiska medier" items={european}/></div>
  <div id="usa"><NewsList title="Amerikanska medier" items={american}/></div>
  <DailyDeskUpdate desk="varlden"/>
 </main>
}
