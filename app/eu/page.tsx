import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import type { Metadata } from 'next';
import { euCountries } from '../../content/euCountries';

export const metadata: Metadata = {title:'EU:s 27 medlemsländer',description:'Dagsaktuella EU-nyheter och fakta om medlemsländernas politik, ekonomi och industrier.'};
const euLatest = [
 {section:'Frankrike · 28 september',title:'Nationell samling stärker sin ställning i senaten',summary:'Det franska ytterhögerpartiet går fram i parlamentets överhus. Resultatet visar att partiet bygger en bredare lokal och institutionell förankring.',image:'https://i.guim.co.uk/img/media/5288c790e7b60f3b9c78a4c5e419880d07b44c58/522_0_2450_1961/master/2450.jpg?width=1200&quality=85&auto=format&fit=max',credit:'Franskt valmöte · The Guardian',href:'https://www.theguardian.com/world/2026/sep/28/french-election-2026-far-right-senate-elections',source:'The Guardian'},
 {section:'Ukraina · 27 september',title:'Åtta döda efter nya ryska attacker',summary:'Angreppen mot ukrainska städer och infrastruktur fortsätter samtidigt som Moskva säger att kriget ska drivas vidare. Europas stöd inför vintern blir allt viktigare.',image:'https://s.france24.com/media/display/561c25ac-b9be-11f1-8564-11fa9f8a3b4f/w:1024/p:16x9/2026-09-26T075107Z-778474444-RC2SQNAUPMBO-RTRMADP-3-UKRAINE-CRISIS-ATTACK-KYIV.jpg',credit:'Skador efter attack · France 24',href:'https://www.france24.com/en/europe/20260927-russian-strikes-kill-eight-ukraine-war-moscow',source:'France 24'},
 {section:'Partnerskap · 26 september',title:'Australien söker ett närmare strategiskt samarbete med EU',summary:'Osäkrare relationer med USA och beroendet av handel med Kina får Australien att undersöka en bredare allians med Europa inom handel, råvaror och säkerhet.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Flags%20of%20Australia%20and%20the%20European%20Union.jpg?width=1200',credit:'Australien och EU · Wikimedia Commons',href:'https://www.dw.com/en/australia-considers-its-own-unique-alliance-with-the-eu/video-79420024',source:'Deutsche Welle'}
];
const todayLabel=()=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());


export default function EuPage(){
 return <main id="main-content"><div className="shell">
  <header className="page-hero"><div className="kicker">EU · 27 medlemsländer · Uppdaterad {todayLabel()}</div><h1>Europeiska unionen – land för land</h1><p>En samlad översikt över unionens länder, politiska ledning, kommande val, ekonomi och viktigaste näringar.</p></header>
  <section className="section no-top" aria-labelledby="eu-latest-title">
   <div className="kicker">Dagsaktuellt från unionen</div><h2 id="eu-latest-title">Tre nyheter om EU</h2>
   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:18,marginTop:24}}>
    {euLatest.map(item=><article key={item.href} style={{borderTop:'4px solid #173b78',background:'#fff'}}>
     <img src={item.image} alt="" loading="lazy" style={{width:'100%',height:190,objectFit:'cover'}}/>
     <div style={{padding:'18px 0'}}><div className="kicker">{item.section}</div><h3 style={{fontSize:25,lineHeight:1.08,margin:'8px 0 12px'}}><a href={item.href} target="_blank" rel="noreferrer">{item.title}</a></h3><p>{item.summary}</p><p className="meta">Bild: {item.credit}</p><a className="text-link" href={item.href} target="_blank" rel="noreferrer">Läs hos {item.source} →</a></div>
    </article>)}
   </div>
  </section>
  <section className="section no-top" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16}}>
   <div style={{borderTop:'3px solid #111',paddingTop:12}}><strong style={{fontSize:28}}>27</strong><p>medlemsländer</p></div>
   <div style={{borderTop:'3px solid #111',paddingTop:12}}><strong style={{fontSize:28}}>452 miljoner</strong><p>invånare i EU den 1 januari 2026</p></div>
   <div style={{borderTop:'3px solid #111',paddingTop:12}}><strong style={{fontSize:28}}>2024–2026</strong><p>statistikens huvudsakliga referensår</p></div>
  </section>
  <section className="section"><div className="kicker">Alla medlemsländer</div><h2>Jämför fakta och politiskt läge</h2><p className="lead">Flaggorna och landnamnen följs av en komplett faktaruta. Huvudstädernas folkmängd är avrundad och avser normalt kommunen eller den angivna stadsregionen. BNP per capita är nominell och avrundad i amerikanska dollar.</p>
   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))',gap:18,marginTop:28}}>
    {euCountries.map(country=><article key={country.code} style={{border:'1px solid #d4d4d4',borderTop:'5px solid #173b78',padding:22,background:'#fff'}}>
     <div aria-hidden="true" style={{fontSize:54,lineHeight:1}}>{country.flag}</div><div className="meta" style={{marginTop:12}}>EU-land · {country.code}</div><h2 style={{fontSize:32,margin:'6px 0 18px'}}>{country.name}</h2>
     <dl style={{display:'grid',gridTemplateColumns:'minmax(112px,.8fr) 1.4fr',gap:'10px 14px',margin:0}}>
      <dt><strong>Huvudstad</strong></dt><dd style={{margin:0}}>{country.capital}</dd>
      <dt><strong>Huvudstadens folkmängd</strong></dt><dd style={{margin:0}}>{country.capitalPopulation}</dd>
      <dt><strong>Yta</strong></dt><dd style={{margin:0}}>{country.area} km²</dd>
      <dt><strong>Befolkning</strong></dt><dd style={{margin:0}}>{country.population}</dd>
      <dt><strong>Statschef</strong></dt><dd style={{margin:0}}>{country.headOfState}</dd>
      <dt><strong>Regeringschef</strong></dt><dd style={{margin:0}}>{country.headOfGovernment}</dd>
      <dt><strong>Nästa val</strong></dt><dd style={{margin:0}}>{country.nextElection}</dd>
      <dt><strong>BNP per capita</strong></dt><dd style={{margin:0}}>{country.gdpPerCapita}</dd>
     </dl>
     <h3 style={{fontSize:18,marginTop:22}}>Största industrier</h3><p>{country.industries.join(' · ')}</p>
    </article>)}
   </div>
  </section>
  <section className="section" style={{borderTop:'1px solid #bbb',paddingTop:28}}><div className="kicker">Metod och källor</div><h2>Så ska siffrorna läsas</h2><p>Ledare är kontrollerade mot Europeiska rådets aktuella medlemslista och nationella uppgifter. Befolkning och demografi bygger huvudsakligen på Eurostat. BNP per capita bygger på Världsbankens senast tillgängliga nominella data. Valdatum kan ändras vid nyval. För länder med monarki anges monarken som statschef eftersom någon president inte finns.</p><ul>
   <li><a className="text-link" href="https://www.consilium.europa.eu/en/european-council/members/" target="_blank" rel="noreferrer">Europeiska rådet: aktuella stats- och regeringschefer →</a></li>
   <li><a className="text-link" href="https://ec.europa.eu/eurostat/web/interactive-publications/demography-2026" target="_blank" rel="noreferrer">Eurostat: Demography of Europe 2026 →</a></li>
   <li><a className="text-link" href="https://european-union.europa.eu/principles-countries-history/country-profiles_en" target="_blank" rel="noreferrer">Europeiska unionen: officiella landprofiler →</a></li>
   <li><a className="text-link" href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD" target="_blank" rel="noreferrer">Världsbanken: BNP per capita →</a></li>
  </ul></section>
 </div><DailyDeskUpdate desk="eu"/></main>
}
