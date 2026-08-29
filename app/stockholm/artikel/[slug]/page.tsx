import { notFound } from 'next/navigation';
import Link from 'next/link';
import StockholmTrustBar from '../../StockholmTrustBar';
import { stockholmArticles163 } from '../../../../content/stockholmArticles163';
import { relatedStockholm189, stockholmRelatedRules189 } from '../../../../content/stockholmRelated189';

export function generateStaticParams() {
  return stockholmArticles163.filter((article) => article.status === 'published').map((article) => ({ slug: article.slug }));
}

export default async function StockholmArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = stockholmArticles163.find((item) => item.slug === slug && item.status === 'published');
  if (!article) notFound();
  const candidates = stockholmArticles163.filter((item) => item.status === 'published');
  const related = relatedStockholm189(article, candidates, 4).map((candidate) => candidates.find((item) => item.slug === candidate.slug)).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/stockholm" className="text-sm font-semibold underline underline-offset-4">← Stockholm</Link>
      <article className="mt-7">
        <div className="article-part-label">01 · Rubrik</div>
        <p className="text-sm font-bold uppercase tracking-wide text-neutral-500">{article.section}</p>
        <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{article.title}</h1>
        <p className="mt-5 text-xl leading-8 text-neutral-600">{article.intro}</p>
        <div className="mt-5 flex flex-wrap gap-4 border-b border-neutral-300 pb-6 text-sm text-neutral-500"><span>{article.author}</span><span>{article.published}</span><span>{article.readingTime}</span></div>
        <StockholmTrustBar published={article.published} updated={article.updated} sources={article.sources} />
        <div className="article-part-label">02 · Själva nyheten</div>
        <div className="mt-5 space-y-9">{article.body.slice(0,2).map((section) => <section key={section.heading ?? section.paragraphs[0]}>{section.heading && <h2 className="text-2xl font-black">{section.heading}</h2>}<div className="mt-3 space-y-4 text-lg leading-8 text-neutral-800">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div>
        <section className="mt-10 border-t border-neutral-300 pt-7"><h2 className="text-2xl font-black">Fakta</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">{article.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></section>
        <div className="article-part-label">03 · Analys och konsekvenser</div>
        <section className="mt-5 rounded-lg bg-neutral-100 p-6"><h2 className="text-xl font-black">Redaktionens analys</h2><p className="mt-3 leading-7 text-neutral-700">{article.analysis}</p><h3 className="mt-5 font-black">Möjliga konsekvenser</h3><ul className="mt-3 list-disc space-y-2 pl-5">{article.consequences.map(item=><li key={item}>{item}</li>)}</ul></section>
        <div className="article-part-label">04 · Längre fördjupning</div>
        <div className="mt-5 space-y-9">{article.body.slice(2).map((section) => <section key={section.heading ?? section.paragraphs[0]}>{section.heading && <h2 className="text-2xl font-black">{section.heading}</h2>}<div className="mt-3 space-y-4 text-lg leading-8 text-neutral-800">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div>
        <div className="article-part-label">05 · Tydliga och klickbara källor</div>
        <section className="mt-5 pt-2"><h2 className="text-2xl font-black">Klickbara källor</h2><ul className="mt-3 space-y-3">{article.sources.map((source) => <li key={source.label}><span className="mr-2 rounded-full bg-neutral-100 px-2 py-1 text-xs font-bold uppercase text-neutral-600">{source.type}</span>{source.url ? <a className="font-semibold underline underline-offset-4" href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a> : source.label}</li>)}</ul></section>
        <section className="mt-10 border-t-4 border-neutral-950 pt-5"><h2 className="text-2xl font-black">{stockholmRelatedRules189.title}</h2>{related.length === 0 ? <p className="mt-3 text-sm text-neutral-600">Inga tydligt relaterade verifierade artiklar ännu.</p> : <div className="mt-4 grid gap-4 sm:grid-cols-2">{related.map((item) => item && <Link key={item.slug} href={`/stockholm/artikel/${item.slug}`} className="rounded-lg border border-neutral-200 p-4 hover:border-neutral-500"><div className="text-xs font-bold uppercase text-neutral-500">{item.section}</div><div className="mt-1 font-black leading-snug">{item.teaserTitle ?? item.title}</div><p className="mt-2 text-sm text-neutral-600">{item.teaserSummary ?? item.intro}</p></Link>)}</div>}</section>
      </article>
    </main>
  );
}
