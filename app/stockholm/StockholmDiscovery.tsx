'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { stockholmDistrictFilters186 } from '../../content/stockholmDistrictFilter186';
import { buildStockholmSearchIndex187, searchStockholm187, stockholmSearchRules187, type StockholmSearchDocument } from '../../content/stockholmSearch187';
import { stockholmMostRead188, stockholmMostReadRules188 } from '../../content/stockholmMostRead188';

type Props = { documents: StockholmSearchDocument[] };

export default function StockholmDiscovery({ documents }: Props) {
  const [query, setQuery] = useState('');
  const [district, setDistrict] = useState('');
  const index = useMemo(() => buildStockholmSearchIndex187(documents), [documents]);
  const results = useMemo(() => searchStockholm187(index, query).filter((item) => !district || item.districts?.includes(district)), [index, query, district]);
  const active = query.trim().length > 0 || district.length > 0;

  return (
    <section className="border-b border-neutral-300 py-7" aria-labelledby="stockholm-discovery-title">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 id="stockholm-discovery-title" className="text-2xl font-black">Hitta i Stockholm</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={stockholmSearchRules187.placeholder} className="min-w-0 flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-base outline-none focus:border-neutral-950" />
            <select value={district} onChange={(event) => setDistrict(event.target.value)} className="rounded-lg border border-neutral-300 bg-white px-4 py-3">
              <option value="">Hela Stockholm</option>
              {stockholmDistrictFilters186.map((item) => <option key={item.slug} value={item.slug}>{item.label}</option>)}
            </select>
          </div>
          {active && <div className="mt-5"><div className="text-sm font-bold">{results.length} träff{results.length === 1 ? '' : 'ar'}</div><div className="mt-3 grid gap-3 md:grid-cols-2">{results.slice(0, 8).map((item) => <Link key={item.id} href={item.url} className="rounded-lg border border-neutral-200 p-4 hover:border-neutral-500"><div className="text-xs font-bold uppercase text-neutral-500">{item.section ?? 'Stockholm'}</div><div className="mt-1 font-black leading-snug">{item.title}</div>{item.summary && <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{item.summary}</p>}</Link>)}</div>{results.length === 0 && <p className="mt-3 rounded-lg bg-neutral-100 p-4 text-sm text-neutral-600">Inga publicerade artiklar matchar sökningen ännu.</p>}</div>}
        </div>
        <aside className="border-t border-neutral-300 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <h2 className="text-2xl font-black">{stockholmMostReadRules188.title}</h2>
          {stockholmMostRead188.length === 0 ? <p className="mt-3 rounded-lg bg-neutral-100 p-4 text-sm leading-6 text-neutral-600">{stockholmMostReadRules188.emptyState} Vi visar inte uppskattade eller påhittade läsarsiffror.</p> : <ol className="mt-4 space-y-3">{stockholmMostRead188.slice(0, 5).map((item, index) => <li key={`${item.slug}-${item.window}`}><Link href={`/stockholm/artikel/${item.slug}`} className="flex gap-3 font-bold hover:underline"><span className="text-neutral-400">{index + 1}</span><span>{item.title}</span></Link></li>)}</ol>}
        </aside>
      </div>
    </section>
  );
}
