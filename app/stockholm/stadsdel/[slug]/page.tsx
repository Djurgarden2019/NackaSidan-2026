import Link from 'next/link';
import { notFound } from 'next/navigation';
import { stockholmDistricts175 } from '../../../../content/stockholmDistricts175';
import { stockholmArticles163 } from '../../../../content/stockholmArticles163';

export function generateStaticParams() {
  return stockholmDistricts175.map((district) => ({ slug: district.slug }));
}

export default async function StockholmDistrictPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const district = stockholmDistricts175.find((item) => item.slug === slug);
  if (!district) notFound();

  const linked = stockholmArticles163.filter((article) => district.latestArticleSlugs.includes(article.slug) && article.status === 'published');

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/stockholm" className="text-sm font-bold underline underline-offset-4">← Stockholm</Link>
      <header className="mt-6 border-b border-neutral-300 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Stockholm · Stadsdel</p>
        <h1 className="mt-2 text-5xl font-black tracking-tight">{district.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">Lokal bevakning av {district.name}: {district.focus.join(', ')}.</p>
      </header>
      <section className="py-8">
        <h2 className="text-2xl font-black">Senaste om {district.name}</h2>
        {linked.length === 0 ? <p className="mt-4 rounded-lg bg-neutral-100 p-5 text-sm leading-6 text-neutral-600">Inga verifierade artiklar är ännu kopplade till stadsdelen. Sidan fylls först när en artikel har tydlig lokal anknytning.</p> : <div className="mt-5 grid gap-5 md:grid-cols-2">{linked.map((article) => <Link key={article.slug} href={`/stockholm/artikel/${article.slug}`} className="rounded-lg border border-neutral-200 p-5 hover:border-neutral-500"><div className="text-xs font-bold uppercase text-neutral-500">{article.section}</div><h3 className="mt-2 text-xl font-black">{article.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{article.teaserSummary ?? article.intro}</p></Link>)}</div>}
      </section>
    </main>
  );
}
