const sections=[
  {href:'#politik',label:'Politik',kicker:'Valet 2026',text:'Sakfrågor, vallöften och faktakoll.'},
  {href:'#ekonomi-nu',label:'Ekonomi',kicker:'Siffrorna nu',text:'BNP, jobb och hushållens ekonomi.'},
  {href:'#regioner',label:'Regioner',kicker:'Hela landet',text:'Göteborg, Malmö, Norrland och mer.'},
  {href:'#samhalle',label:'Samhälle',kicker:'Välfärd',text:'Vård, skola, jobb och trygghet.'}
];
export default function SwedenSectionNavigator249(){return <section className="border-b py-7" aria-label="Snabbvägar i Sverige-bevakningen"><div className="grid gap-px overflow-hidden rounded-xl bg-neutral-300 sm:grid-cols-2 lg:grid-cols-4">{sections.map(item=><a key={item.href} href={item.href} className="group bg-white p-5 transition hover:bg-neutral-50"><div className="text-[11px] font-black uppercase tracking-[.18em] text-neutral-500">{item.kicker}</div><div className="mt-1 flex items-center justify-between gap-3"><h2 className="text-2xl font-black">{item.label}</h2><span className="text-xl transition group-hover:translate-x-1" aria-hidden="true">→</span></div><p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p></a>)}</div></section>}
