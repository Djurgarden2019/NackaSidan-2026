import Link from 'next/link';
import { notFound } from 'next/navigation';
import { swedenArticles220 } from '../../../../content/swedenArticles220';

const fmt=(iso:string)=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(iso));
export default async function SwedenArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = swedenArticles220.find((item) => item.slug === slug && item.status === 'published');
  if (!article) notFound();
  return <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4"><Link href="/sverige" className="text-sm font-black underline underline-offset-4">← Till Sverige</Link><span className="text-xs font-bold uppercase tracking-[.18em] text-neutral-500">Källkontrollerad artikel</span></div>
    <article className="mx-auto mt-8 max-w-4xl">
      <p className="text-sm font-black uppercase tracking-widest text-neutral-500">{article.section}{article.region ? ` · ${article.region}` : ''}</p>
      <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">{article.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-neutral-600 sm:text-2xl sm:leading-9">{article.intro}</p>
      <div className="mt-7 grid gap-3 border-y py-4 text-sm text-neutral-500 sm:grid-cols-3"><span><strong className="text-neutral-900">Publicerad</strong><br/>{fmt(article.publishedAt)}</span><span><strong className="text-neutral-900">Uppdaterad</strong><br/>{fmt(article.updatedAt)}</span><span><strong className="text-neutral-900">Källor</strong><br/>{article.sourceUrls.length} verifierbara länkar</span></div>
      <div className="mt-10 space-y-10">{article.body.map((block, index) => <section key={index} className="max-w-3xl">{block.heading ? <h2 className="text-3xl font-black tracking-tight">{block.heading}</h2> : null}<div className="mt-4 space-y-5">{block.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="text-lg leading-8 text-neutral-800">{paragraph}</p>)}</div></section>)}</div>
      <section className="mt-12 border-t-4 border-neutral-950 pt-6"><div className="flex items-end justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[.18em] text-neutral-500">Transparens</p><h2 className="mt-1 text-2xl font-black">Källor</h2></div><span className="text-xs text-neutral-500">Öppnas i ny flik</span></div><ul className="mt-5 space-y-3">{article.sourceUrls.map((source,index) => <li key={source} className="border-t border-neutral-200 pt-3"><a className="break-all text-sm font-bold underline underline-offset-4" href={source} target="_blank" rel="noreferrer">Källa {index+1}: {source}</a></li>)}</ul></section>
      <div className="mt-10 border-t pt-6"><Link href="/sverige" className="text-sm font-black underline underline-offset-4">← Fler Sverige-nyheter</Link></div>
    </article>
  </main>;
}
