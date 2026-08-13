import Link from 'next/link';
import { stockholmArticles163 } from '../../content/stockholmArticles163';
import { stockholmDistricts175 } from '../../content/stockholmDistricts175';
import { stockholmFront176 } from '../../content/stockholmFront176';

export const metadata = {
  title: 'Stockholm | NackaSidan 2026',
  description: 'Nyheter, trafik, politik, bostäder, kultur, näringsliv och stadsdelar i Stockholm.'
};

export default function StockholmPage() {
  const published = stockholmArticles163.filter((article) => article.status === 'published');
  const lead = published.find((article) => article.homepage?.role === 'lead') ?? published[0];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="border-b border-neutral-300 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">NackaSidan 2026</p>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 sm:text-6xl">Stockholm</h1>
            <p className="mt-3 max-w-3xl text-lg text-neutral-600">{stockholmFront176.tagline}</p>
          </div>
          <div className="text-sm text-neutral-500">Nyheter med källor, tidsstämplar och lokal konsekvensanalys.</div>
        </div>
      </header>

      <nav className="flex gap-5 overflow-x-auto border-b border-neutral-200 py-4 text-sm font-semibold" aria-label="Stockholm ämnen">
        {stockholmFront176.navigation.map((item) => <a key={item.label} href={`#${item.anchor}`} className="whitespace-nowrap hover:underline">{item.label}</a>)}
      </nav>

      {lead && (
        <section className="grid gap-8 border-b border-neutral-300 py-8 lg:grid-cols-[2fr_1fr]">
          <article>
            <p className="text-sm font-bold uppercase tracking-wide text-neutral-500">{lead.section}</p>
            <h2 className="mt-2 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{lead.title}</h2>
            <p className="mt-4 max-w-3xl text-xl leading-8 text-neutral-600">{lead.intro}</p>
            <div className="mt-5 flex gap-4 text-sm text-neutral-500"><span>{lead.published}</span><span>{lead.readingTime}</span></div>
            <Link className="mt-6 inline-block font-bold underline underline-offset-4" href={`/artikel/${lead.slug}`}>Läs hela artikeln</Link>
          </article>
          <aside className="border-t border-neutral-300 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <h3 className="text-xl font-black">Stockholm just nu</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">Här visas bara verifierat publicerat material. Utkast som väntar på färskkontroll hålls borta från förstasidan.</p>
            <div className="mt-6 rounded-lg bg-neutral-100 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Trafikkollen</div>
              <div className="mt-2 font-bold">Aktuella trafiklägen kräver färsk källa</div>
              <p className="mt-2 text-sm text-neutral-600">Tunnelbana, pendeltåg, buss, väg, cykel och sjötrafik får live-status först efter ny kontroll.</p>
            </div>
          </aside>
        </section>
      )}

      <section id="stadsdelar" className="py-9">
        <div className="flex items-end justify-between gap-4"><h2 className="text-3xl font-black">Stadsdel för stadsdel</h2><span className="text-sm text-neutral-500">Följ ditt Stockholm</span></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stockholmDistricts175.map((district) => (
            <div key={district.slug} className="rounded-lg border border-neutral-200 p-4">
              <h3 className="text-lg font-black">{district.name}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{district.focus.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 border-t border-neutral-300 py-9 md:grid-cols-2 lg:grid-cols-4">
        {stockholmFront176.sections.filter((section) => section.enabled).map((section) => (
          <div id={section.anchor} key={section.id} className="border-t-4 border-neutral-950 pt-3">
            <h2 className="text-xl font-black">{section.title}</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{section.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
