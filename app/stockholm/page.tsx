import Link from 'next/link';
import { stockholmArticles163 } from '../../content/stockholmArticles163';
import { stockholmDistricts175 } from '../../content/stockholmDistricts175';
import { stockholmFront176, stockholmFrontRules176 } from '../../content/stockholmFront176';
import { stockholmTraffic168, stockholmTrafficEditorialRules168 } from '../../content/stockholmTraffic168';
import { stockholmHousingProjects170, stockholmHousingDesk170 } from '../../content/stockholmHousing170';
import { stockholmBusinessStories172, stockholmBusinessDesk172 } from '../../content/stockholmBusiness172';
import { stockholmCultureItems171, stockholmCultureDesk171 } from '../../content/stockholmCulture171';
import { stockholmSafetyStories174, stockholmSafetyDesk174 } from '../../content/stockholmSafety174';

export const metadata = {
  title: 'Stockholm | NackaSidan 2026',
  description: 'Nyheter, trafik, politik, bostäder, kultur, näringsliv och stadsdelar i Stockholm.'
};

const nav = [
  { label: 'Senaste', anchor: 'senaste' },
  { label: 'Trafik', anchor: 'stockholm-traffic' },
  { label: 'Stadsdelar', anchor: 'stadsdelar' },
  { label: 'Bostäder', anchor: 'stockholm-housing' },
  { label: 'Näringsliv', anchor: 'stockholm-business' },
  { label: 'Kultur', anchor: 'stockholm-culture' },
  { label: 'Trygghet', anchor: 'stockholm-safety' }
];

function EmptyState({ text }: { text: string }) {
  return <p className="mt-3 rounded-lg bg-neutral-100 p-4 text-sm leading-6 text-neutral-600">{text}</p>;
}

export default function StockholmPage() {
  const published = stockholmArticles163.filter((article) => article.status === 'published');
  const lead = published.find((article) => article.homepage?.role === 'lead') ?? published[0];
  const latest = [...published].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)).slice(0, 5);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="border-b border-neutral-300 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">NackaSidan 2026</p>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-5xl font-black tracking-tight text-neutral-950 sm:text-6xl">Stockholm</h1>
            <p className="mt-3 max-w-3xl text-lg text-neutral-600">{stockholmFrontRules176.intro}</p>
          </div>
          <div className="text-sm text-neutral-500">Nyheter med källor, tidsstämplar och lokal konsekvensanalys.</div>
        </div>
      </header>

      <nav className="flex gap-5 overflow-x-auto border-b border-neutral-200 py-4 text-sm font-semibold" aria-label="Stockholm ämnen">
        {nav.map((item) => <a key={item.label} href={`#${item.anchor}`} className="whitespace-nowrap hover:underline">{item.label}</a>)}
      </nav>

      {lead && (
        <section id="senaste" className="grid gap-8 border-b border-neutral-300 py-8 lg:grid-cols-[2fr_1fr]">
          <article>
            <p className="text-sm font-bold uppercase tracking-wide text-neutral-500">{lead.section}</p>
            <h2 className="mt-2 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{lead.title}</h2>
            <p className="mt-4 max-w-3xl text-xl leading-8 text-neutral-600">{lead.intro}</p>
            <div className="mt-5 flex gap-4 text-sm text-neutral-500"><span>{lead.published}</span><span>{lead.readingTime}</span></div>
            <Link className="mt-6 inline-block font-bold underline underline-offset-4" href={`/stockholm/artikel/${lead.slug}`}>Läs hela artikeln</Link>
          </article>
          <aside className="border-t border-neutral-300 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <h3 className="text-xl font-black">Senaste verifierat</h3>
            <div className="mt-4 space-y-4">
              {latest.map((article) => (
                <Link key={article.slug} href={`/stockholm/artikel/${article.slug}`} className="block border-t border-neutral-200 pt-3 first:border-t-0 first:pt-0">
                  <div className="text-xs font-bold uppercase text-neutral-500">{article.section}</div>
                  <div className="mt-1 font-bold leading-snug hover:underline">{article.teaserTitle ?? article.title}</div>
                  <div className="mt-1 text-xs text-neutral-500">{article.published}</div>
                </Link>
              ))}
            </div>
          </aside>
        </section>
      )}

      <section id="stockholm-traffic" className="border-b border-neutral-300 py-9">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Livebevakning</p><h2 className="text-3xl font-black">{stockholmTrafficEditorialRules168.title}</h2></div>
          <span className="text-sm text-neutral-500">Färskhetsgräns: {stockholmTrafficEditorialRules168.freshnessMinutes} min</span>
        </div>
        {stockholmTraffic168.length === 0 ? <EmptyState text="Inga verifierade live-störningar visas just nu. Trafikuppgifter publiceras först efter aktuell kontroll mot Region Stockholm/SL, Trafikverket eller Stockholms stad." /> : (
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{stockholmTraffic168.map((item) => <article key={item.id} className="rounded-lg border border-neutral-200 p-4"><div className="text-xs font-bold uppercase text-neutral-500">{item.mode} · {item.area}</div><h3 className="mt-2 font-black">{item.headline}</h3><p className="mt-2 text-sm text-neutral-600">{item.summary}</p></article>)}</div>
        )}
      </section>

      <section id="stadsdelar" className="border-b border-neutral-300 py-9">
        <div className="flex items-end justify-between gap-4"><h2 className="text-3xl font-black">Stadsdel för stadsdel</h2><span className="text-sm text-neutral-500">Följ ditt Stockholm</span></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stockholmDistricts175.map((district) => <div key={district.slug} className="rounded-lg border border-neutral-200 p-4"><h3 className="text-lg font-black">{district.name}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{district.focus.join(' · ')}</p></div>)}
        </div>
      </section>

      <section className="grid gap-8 py-9 lg:grid-cols-2">
        <div id="stockholm-housing" className="border-t-4 border-neutral-950 pt-4">
          <h2 className="text-2xl font-black">{stockholmHousingDesk170.title}</h2><p className="mt-2 text-sm leading-6 text-neutral-600">{stockholmHousingDesk170.intro}</p>
          {stockholmHousingProjects170.length === 0 ? <EmptyState text="Projektlistan fylls bara med verifierade plan- och bygguppgifter. Nästa steg är att lägga in aktuella projekt med planeringsskede, bostadsantal, källa och senaste kontroll." /> : stockholmHousingProjects170.map((project) => <div key={project.id}>{project.name}</div>)}
        </div>
        <div id="stockholm-business" className="border-t-4 border-neutral-950 pt-4">
          <h2 className="text-2xl font-black">{stockholmBusinessDesk172.title}</h2><p className="mt-2 text-sm leading-6 text-neutral-600">Företag, jobb, tech, handel, fastigheter och besöksnäring.</p>
          {stockholmBusinessStories172.length === 0 ? <EmptyState text="Inga företagsnyheter visas utan verifierad källa. Pressmeddelanden ska bearbetas journalistiskt och får inte publiceras som reklam." /> : stockholmBusinessStories172.map((story) => <div key={story.id}>{story.headline}</div>)}
        </div>
        <div id="stockholm-culture" className="border-t-4 border-neutral-950 pt-4">
          <h2 className="text-2xl font-black">{stockholmCultureDesk171.title}</h2><p className="mt-2 text-sm leading-6 text-neutral-600">{stockholmCultureDesk171.sections.join(' · ')}</p>
          {stockholmCultureItems171.length === 0 ? <EmptyState text="Kulturkalendern väntar på verifierade evenemang med datum, plats och källa. Passerade evenemang ska inte ligga kvar som aktuella." /> : stockholmCultureItems171.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
        <div id="stockholm-safety" className="border-t-4 border-neutral-950 pt-4">
          <h2 className="text-2xl font-black">{stockholmSafetyDesk174.title}</h2><p className="mt-2 text-sm leading-6 text-neutral-600">{stockholmSafetyDesk174.purpose}</p>
          {stockholmSafetyStories174.length === 0 ? <EmptyState text="Trygghetsflödet visar bara verifierade händelser. Misstanke, åtal och dom hålls tydligt isär och sensationsspråk undviks." /> : stockholmSafetyStories174.map((story) => <div key={story.id}>{story.headline}</div>)}
        </div>
      </section>

      <footer className="border-t border-neutral-300 py-6 text-sm text-neutral-500">Stockholmsektionen byggs enligt samma redaktionella princip: källa först, tydlig tidsstämpel och skillnad mellan fakta och analys. Moduler: {stockholmFront176.length}.</footer>
    </main>
  );
}
