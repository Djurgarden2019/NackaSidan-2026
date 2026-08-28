import Link from 'next/link';
import { notFound } from 'next/navigation';
import { swedenDesk207 } from '../../../content/swedenDesk207';
import { swedenArticles220 } from '../../../content/swedenArticles220';

export default async function SwedenSectionPage({params}:{params:Promise<{section:string}>}){
 const {section}=await params;
 const desk=swedenDesk207.sections.find(item=>item.id===section);
 if(!desk)notFound();
 const published=swedenArticles220.filter(item=>item.status==='published');
 const matches=published.filter(item=>item.section.toLowerCase()===desk.title.toLowerCase());
 const articles=matches.length?matches:published.slice(0,6);
 return <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
  <Link href="/sverige" className="text-sm font-semibold underline">← Sverige</Link>
  <header className="mt-7 border-b-4 border-neutral-950 pb-6"><h1 className="text-5xl font-black">{desk.title}</h1><p className="mt-3 text-lg text-neutral-600">{desk.focus.join(' · ')}</p></header>
  {!matches.length&&<div className="mt-7 border-l-4 border-neutral-950 bg-neutral-100 p-5"><strong>Redaktionens urval</strong><p className="mt-1 text-sm leading-6 text-neutral-600">Medan ämnesredaktionen byggs ut visar vi de viktigaste verifierade Sverige-artiklarna. Ingen sektion lämnas längre tom.</p></div>}
  <section className="grid gap-5 py-8 md:grid-cols-2">{articles.map(article=><Link key={article.slug} href={`/sverige/artikel/${article.slug}`} className="border-t-4 border-neutral-950 pt-4"><div className="text-xs font-bold uppercase text-neutral-500">{article.region??article.section}</div><h2 className="mt-2 text-2xl font-black leading-tight">{article.title}</h2><p className="mt-2 text-neutral-600">{article.intro}</p><span className="mt-4 inline-block text-sm font-black underline">Läs hela artikeln</span></Link>)}</section>
 </main>;
}
