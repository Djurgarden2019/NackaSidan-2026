import { swedenArticleFeed239 } from '../../content/swedenArticleFeed239';

export default function SwedenSourceTrust261(){
 const articles=swedenArticleFeed239();
 const sourceUrls=articles.flatMap(article=>article.sourceUrls);
 const domains=Array.from(new Set(sourceUrls.map(url=>{try{return new URL(url).hostname.replace(/^www\./,'');}catch{return '';}}).filter(Boolean))).slice(0,8);
 return <section className="border-b py-9" aria-labelledby="source-trust"><div className="grid gap-7 lg:grid-cols-[1fr_1.4fr]"><div><p className="text-xs font-black uppercase tracking-[.18em] text-neutral-500">Transparens</p><h2 id="source-trust" className="mt-1 text-3xl font-black">Så arbetar vi med källor</h2><p className="mt-3 max-w-xl leading-7 text-neutral-600">Varje publicerad Sverige-artikel ska kunna spåras tillbaka till sina källor. Vi visar källhänvisningar på artikelsidan och skiljer verifierade uppgifter från redaktionell analys.</p></div><div className="rounded-xl bg-neutral-100 p-5 sm:p-6"><div className="text-sm font-black">Källor i den aktuella bevakningen</div>{domains.length?<div className="mt-4 flex flex-wrap gap-2">{domains.map(domain=><span key={domain} className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm font-bold">{domain}</span>)}</div>:<p className="mt-3 text-sm text-neutral-500">Källor visas när verifierade artiklar publiceras.</p>}<div className="mt-5 border-t border-neutral-300 pt-4 text-xs leading-5 text-neutral-500">Princip: källa först · publicering därefter · rättelser ska vara synliga.</div></div></div></section>;
}
