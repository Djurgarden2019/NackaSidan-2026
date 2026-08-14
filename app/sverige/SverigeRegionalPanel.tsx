import { swedenRegionalMetrics229, swedenRegionalDataRules229 } from '../../content/swedenRegionalData229';

export default function SverigeRegionalPanel(){
  return <section className="border-b py-9" aria-labelledby="sverige-regionalt">
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div><p className="text-xs font-bold uppercase tracking-widest text-neutral-500">SCB · regional statistik</p><h2 id="sverige-regionalt" className="text-3xl font-black">{swedenRegionalDataRules229.title} – region för region</h2></div>
      <span className="text-xs text-neutral-500">Jämför alltid samma geografiska nivå</span>
    </div>
    <p className="mt-3 max-w-3xl text-neutral-600">Befolkning, jobb, bostäder, företag, vård och utbildning kan följas på läns-, kommun-, RegSO- och DeSO-nivå när verifierade värden finns.</p>
    <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {swedenRegionalMetrics229.length===0 ? <div className="rounded-lg bg-neutral-100 p-5 text-sm text-neutral-600 md:col-span-2 lg:col-span-3">Datamodellen är redo. Regionala värden visas först när period, geografisk nivå och källa är verifierade.</div> : swedenRegionalMetrics229.slice(0,9).map(item=><article key={`${item.id}-${item.region}`} className="rounded-lg border border-neutral-200 p-5"><div className="text-xs font-bold uppercase text-neutral-500">{item.period}</div><h3 className="mt-2 text-lg font-black">{item.region}</h3><div className="mt-3 text-2xl font-black">{item.value}</div><p className="mt-1 text-sm text-neutral-600">{item.label}</p><a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs font-bold underline">Källa: {item.source}</a></article>)}
    </div>
    <p className="mt-4 text-xs leading-5 text-neutral-500">{swedenRegionalDataRules229.rules[0]}</p>
  </section>
}
