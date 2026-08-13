import Link from 'next/link';
import { notFound } from 'next/navigation';
import { swedenArticles220 } from '../../../../content/swedenArticles220';

export default async function SwedenArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = swedenArticles220.find((item) => item.slug === slug && item.status === 'published');
  if (!article) notFound();
  return <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
    <Link href="/sverige" className="text-sm font-semibold underline">← Sverige</Link>
    <article className="mt-7">
      <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">{article.section}</p>
      <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">{article.title}</h1>
      <p className="mt-5 text-xl leading-8 text-neutral-600">{article.intro}</p>
      <div className="mt-5 flex flex-wrap gap-4 border-y py-4 text-sm text-neutral-500"><span>Publicerad {article.publishedAt}</span>{article.updatedAt && <span>Uppdaterad {article.updatedAt}</span>}<span>{article.sources.length} källor</span></div>
      <div className="prose prose-lg mt-8 max-w-none">{article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      <section className="mt-10 border-t pt-6"><h2 className="text-xl font-black">Källor</h2><ul className="mt-3 space-y-2 text-sm">{article.sources.map((source) => <li key={source.url}><a className="font-semibold underline" href={source.url} target="_blank" rel="noreferrer">{source.name}</a>{source.publishedAt ? ` · ${source.publishedAt}` : ''}</li>)}</ul></section>
    </article>
  </main>;
}
