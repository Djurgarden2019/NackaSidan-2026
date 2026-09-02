import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import type { Metadata } from 'next';
import { euCountries } from '../../content/euCountries';

export const metadata: Metadata = {title:'EU:s 27 medlemsländer',description:'Fakta om EU-ländernas huvudstäder, befolkning, yta, ledare, val, ekonomi och industrier.'};

export default function EuPage(){
 return <main id="main-content"><div className="shell">
  <header className="page-hero"><div className="kicker">EU · 27 medlemsländer · Uppdaterad 2 september 2026</div><h1>Europeiska unionen – land för land</h1><p>En samlad översikt över unionens länder, politiska ledning, kommande val, ekonomi och viktigaste näringar.</p></header>
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
