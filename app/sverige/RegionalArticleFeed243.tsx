import Link from 'next/link';
import { swedenArticleFeed239 } from '../../content/swedenArticleFeed239';

const updated=(iso:string)=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short'}).format(new Date(iso));
export default function RegionalArticleFeed243(){
 const regional=swedenArticleFeed239().filter(a=>a.section==='regioner').slice(0,6);
 if(!regional.length)return null;
 const lead=regional[0];
 const rest=regional.slice(1);
 return <section id="regioner-nu" className="border-b py-10" aria-labelledby="regionalt-nu">
  <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-neutral-500">Sverige runt</p><h2 id="regionalt-nu" className="mt-1 text-3xl font-black sm:text-4xl">Senaste från regionerna</h2><p className="mt-2 max-w-2xl text-neutral-600">Nyheter och analyser från hela landet – inte bara Stockholm.</p></div><Link href="/sverige/regioner" className="text-sm font-black underline underline-offset-4">Alla regioner →</Link></div>
  <div className="mt-7 grid gap-7 lg:grid-cols-[1.35fr_1fr]">
   <article className="border-t-4 border-neutral-950 pt-4"><div className="flex gap-2 text-xs font-black uppercase tracking-wide text-neutral-500"><span>{lead.region||'Sverige'}</span><span>·</span><span>{updated(lead.updatedAt)}</span></div><h3 className="mt-2 text-3xl font-black leading-tight sm:text-4xl"><Link href={`/sverige/artikel/${lead.slug}`} className="hover:underline">{lead.title}</Link></h3><p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">{lead.intro}</p><Link href={`/sverige/artikel/${lead.slug}`} className="mt-4 inline-block text-sm font-black underline underline-offset-4">Läs huvudnyheten</Link></article>
   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{rest.map(article=><article key={article.slug} className="border-t border-neutral-300 pt-3"><div className="flex gap-2 text-[11px] font-black uppercase tracking-wide text-neutral-500"><span>{article.region||'Sverige'}</span><span>·</span><span>{updated(article.updatedAt)}</span></div><h3 className="mt-1 text-xl font-black leading-snug"><Link href={`/sverige/artikel/${article.slug}`} className="hover:underline">{article.title}</Link></h3></article>)}</div>
  </div>
 </section>
}
