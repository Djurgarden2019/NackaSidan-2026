import Link from 'next/link';
import { notFound } from 'next/navigation';
import { swedenDesk207 } from '../../../content/swedenDesk207';
import { swedenArticles220 } from '../../../content/swedenArticles220';

export default async function SwedenSectionPage({params}:{params:Promise<{section:string}>}){
 const {section}=await params; const desk=swedenDesk207.sections.find(x=>x.id===section); if(!desk)notFound();
 const articles=swedenArticles220.filter(x=>x.status==='published'&&x.section.toLowerCase()===desk.title.toLowerCase());
 return <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6"><Link href="/sverige" className="text-sm font-semibold underline">← Sverige</Link><header className="mt-7 border-b-4 border-neutral-950 pb-6"><h1 className="text-5xl font-black">{desk.title}</h1><p className="mt-3 text-lg text-neutral-600">{desk.focus.join(' · ')}</p></header><section className="py-8">{articles.length===0?<p className="rounded-lg bg-neutral-100 p-5 text-neutral-600">Inga verifierade artiklar publicerade i denna sektion ännu.</p>:<div className="grid gap-5 md:grid-cols-2">{articles.map(a=><Link key={a.slug} href={`/sverige/artikel/${a.slug}`} className="border-t-4 border-neutral-950 pt-4"><div className="text-xs font-bold uppercase text-neutral-500">{a.region??'Sverige'}</div><h2 className="mt-2 text-2xl font-black leading-tight">{a.title}</h2><p className="mt-2 text-neutral-600">{a.intro}</p></Link>)}</div>}</section></main>;
}
