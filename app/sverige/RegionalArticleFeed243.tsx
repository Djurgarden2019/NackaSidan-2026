import Link from 'next/link';
import { swedenArticleFeed239 } from '../../content/swedenArticleFeed239';

export default function RegionalArticleFeed243(){
 const regional=swedenArticleFeed239().filter(a=>a.section==='regioner').slice(0,6);
 if(!regional.length)return null;
 return <section className="border-b py-9" aria-labelledby="regionalt-nu">
  <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Sverige runt</p><h2 id="regionalt-nu" className="text-3xl font-black">Senaste från regionerna</h2></div><Link href="/sverige/regioner" className="text-sm font-bold underline">Alla regioner</Link></div>
  <div className="mt-6 grid gap-5 md:grid-cols-3">{regional.map(article=><article key={article.slug} className="border-t-4 border-neutral-950 pt-4"><div className="text-xs font-bold uppercase tracking-wide text-neutral-500">{article.region||'Sverige'}</div><h3 className="mt-2 text-2xl font-black leading-tight"><Link href={`/sverige/artikel/${article.slug}`} className="hover:underline">{article.title}</Link></h3><p className="mt-3 leading-7 text-neutral-600">{article.intro}</p><Link href={`/sverige/artikel/${article.slug}`} className="mt-4 inline-block text-sm font-black underline">Läs artikeln</Link></article>)}</div>
 </section>
}
