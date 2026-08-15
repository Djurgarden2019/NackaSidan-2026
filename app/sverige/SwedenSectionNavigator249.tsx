const sections=[
  {href:'#politik',label:'Politik',kicker:'Valet 2026',text:'Sakfrågor, vallöften och faktakoll.'},
  {href:'#ekonomi-nu',label:'Ekonomi',kicker:'Siffrorna nu',text:'BNP, jobb och hushållens ekonomi.'},
  {href:'#regioner-nu',label:'Regioner',kicker:'Hela landet',text:'Göteborg, Malmö, Norrland och mer.'},
  {href:'#samhalle',label:'Samhälle',kicker:'Välfärd',text:'Vård, skola, jobb och trygghet.'},
  {href:'#forsvar',label:'Säkerhet',kicker:'Omvärld',text:'Försvar, beredskap och svensk säkerhet.'},
  {href:'#kultur',label:'Kultur',kicker:'Idéer & verk',text:'Böcker, film, musik och kulturdebatt.'},
  {href:'#sport',label:'Sport',kicker:'Resultat & analys',text:'Svensk elitidrott och stora mästerskap.'},
  {href:'#valkalender',label:'Valkalender',kicker:'13 september',text:'Datumen och hållpunkterna fram till valet.'}
];
export default function SwedenSectionNavigator249(){return <section className="border-b py-7" aria-label="Snabbvägar i Sverige-bevakningen"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-neutral-500">Utforska</p><h2 className="mt-1 text-2xl font-black">Hela Sverige-bevakningen</h2></div><span className="hidden text-xs text-neutral-500 sm:block">8 redaktionella ingångar</span></div><div className="grid gap-px overflow-hidden rounded-xl bg-neutral-300 sm:grid-cols-2 lg:grid-cols-4">{sections.map(item=><a key={item.href} href={item.href} className="group bg-white p-5 transition hover:bg-neutral-50"><div className="text-[11px] font-black uppercase tracking-[.18em] text-neutral-500">{item.kicker}</div><div className="mt-1 flex items-center justify-between gap-3"><h3 className="text-xl font-black">{item.label}</h3><span className="text-xl transition group-hover:translate-x-1" aria-hidden="true">→</span></div><p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p></a>)}</div></section>}
