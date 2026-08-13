import { notFound } from 'next/navigation';
import Link from 'next/link';
import { stockholmArticles163 } from '../../../../content/stockholmArticles163';

export function generateStaticParams() {
  return stockholmArticles163.filter((article) => article.status === 'published').map((article) => ({ slug: article.slug }));
}

export default async function StockholmArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = stockholmArticles163.find((item) => item.slug === slug && item.status === 'published');
  if (!article) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/stockholm" className="text-sm font-semibold underline underline-offset-4">← Stockholm</Link>
      <article className="mt-7">
        <p className="text-sm font-bold uppercase tracking-wide text-neutral-500">{article.section}</p>
        <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{article.title}</h1>
        <p className="mt-5 text-xl leading-8 text-neutral-600">{article.intro}</p>
        <div className="mt-5 flex flex-wrap gap-4 border-b border-neutral-300 pb-6 text-sm text-neutral-500">
          <span>{article.author}</span><span>{article.published}</span><span>{article.readingTime}</span>
        </div>
        <div className="mt-8 space-y-9">
          {article.body.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]}>
              {section.heading && <h2 className="text-2xl font-black">{section.heading}</h2>}
              <div className="mt-3 space-y-4 text-lg leading-8 text-neutral-800">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-10 border-t border-neutral-300 pt-7">
          <h2 className="text-2xl font-black">Fakta</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">{article.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
        </section>
        <section className="mt-8 rounded-lg bg-neutral-100 p-6">
          <h2 className="text-xl font-black">Redaktionens analys</h2>
          <p className="mt-3 leading-7 text-neutral-700">{article.analysis}</p>
        </section>
        <section className="mt-8 border-t border-neutral-300 pt-7">
          <h2 className="text-2xl font-black">Källor</h2>
          <ul className="mt-3 space-y-3">
            {article.sources.map((source) => <li key={source.label}>{source.url ? <a className="font-semibold underline underline-offset-4" href={source.url} target="_blank" rel="noreferrer">{source.label}</a> : source.label}</li>)}
          </ul>
        </section>
      </article>
    </main>
  );
}
