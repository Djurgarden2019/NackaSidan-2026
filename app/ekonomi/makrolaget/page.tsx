import Link from 'next/link';

export const metadata = {
  title: 'Makroläget 2026: Sverige, USA, EU, Japan och Kina | NackaSidan',
  description: 'En jämförande analys av tillväxt, inflation, räntor och risker i fem centrala ekonomier.',
};

const economies = [
  { region: 'Sverige', growth: 'Återhämtningen har kommit långt', inflation: 'Nära men känslig kring målet', policy: 'Försiktig normalisering', risk: 'Arbetsmarknad och hushåll' },
  { region: 'USA', growth: '2,1 % i uppräknad årstakt, kv. 1', inflation: 'Över 2-procentsmålet', policy: '3,50–3,75 %', risk: 'Prispress och finansvillkor' },
  { region: 'Euroområdet', growth: '0,8 % prognos 2026', inflation: '3,0 % prognos 2026', policy: 'Avvägning mellan energi och svag tillväxt', risk: 'Energi, handel och investeringar' },
  { region: 'Japan', growth: 'Måttlig, men avtagande', inflation: 'Över 2 % från andra halvåret', policy: 'Gradvis normalisering', risk: 'Yen, olja och realinkomster' },
  { region: 'Kina', growth: '5,0 % årstakt, kv. 1', inflation: 'Ojämnt pristryck', policy: 'Stöd till efterfrågan och teknik', risk: 'Fastigheter och svag konsumtion' },
];

export default function Page() {
  return <main><article className="shell article-page">
    <div className="kicker">Ekonomi · Makroanalys · 3 september 2026</div>
    <p><Link className="text-link" href="/ekonomi">← Till Ekonomi</Link></p>

    <header>
      <h1>Makroläget i Sverige, USA, EU, Japan och Kina</h1>
      <p className="lead">Världens stora ekonomier rör sig inte längre i samma takt. USA har fortsatt tillväxt men seg inflation, euroområdet pressas av energi och svag efterfrågan, Japan lämnar den gamla låginflationsregimen, Kina växer men brottas med fastighetskrisen – och Sverige påverkas av dem alla.</p>
    </header>

    <section>
      <div className="kicker">Själva nyheten</div>
      <h2>Fem konjunkturer – ett sammanlänkat läge</h2>
      <p>Den globala ekonomin sommaren 2026 präglas av en ovanligt stor skillnad mellan länderna. Tillväxten hålls uppe av amerikanska teknik- och AI-investeringar, kinesisk industriproduktion och en svensk återhämtning. Samtidigt har energipriser, geopolitik och handelshinder gjort inflationen mer svårbedömd och tvingat centralbankerna att gå olika vägar.</p>
      <p>I USA ökade real BNP med 2,1 procent i uppräknad årstakt under första kvartalet. Federal Reserve beskriver arbetsmarknaden som i stort sett stabil, men inflationen ligger fortfarande över målet. Styrräntans målintervall har legat på 3,50–3,75 procent sedan årets början. Det innebär att ekonomin fortfarande växer trots relativt strama finansieringsvillkor.</p>
      <p>Euroområdet har en betydligt svagare tillväxtbild. ECB:s juni­prognos pekar mot 0,8 procents BNP-tillväxt 2026 och 3,0 procents inflation. Det är en besvärlig kombination: högre energikostnader bromsar hushållens köpkraft samtidigt som utrymmet för snabba räntesänkningar minskar. När artikeln använder EU avses därför främst euroområdet i frågor om inflation och penningpolitik; hela EU är större och innehåller även länder med egna valutor.</p>
      <p>Japan väntas växa måttligt men i långsammare takt. Bank of Japan räknar med att konsumentpriserna tydligt kan överstiga 2 procent från andra halvåret av räkenskapsåret 2026, bland annat genom en svagare yen, dyrare råolja och stark efterfrågan på halvledare och AI-relaterad utrustning. Det gör att landet gradvis rör sig bort från årtionden av extremt låga räntor.</p>
      <p>Kinas BNP steg med 5,0 procent i årstakt under första kvartalet. Exporten och högteknologiska investeringar var starka, medan fastighetsinvesteringarna föll 11,2 procent och värdet på försäljningen av nya bostäder minskade 16,7 procent. Skillnaden visar varför en hög BNP-siffra inte automatiskt betyder att hushållens ekonomi eller den inhemska efterfrågan är stark.</p>
      <p>Sverige befinner sig i en återhämtning som enligt Konjunkturinstitutet har kommit långt, men den är fortfarande ojämn. Hushållens konsumtion och företagens investeringar kan få stöd av bättre realinkomster, samtidigt som arbetsmarknaden reagerar långsamt. Sverige är dessutom mer exponerat än många större länder mot export, europeisk efterfrågan och valutaförändringar.</p>
    </section>

    <section>
      <div className="kicker">Jämförelse</div>
      <h2>Läget i korthet</h2>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead><tr><th style={{textAlign:'left',padding:'12px',borderBottom:'2px solid #222'}}>Ekonomi</th><th style={{textAlign:'left',padding:'12px',borderBottom:'2px solid #222'}}>Tillväxt</th><th style={{textAlign:'left',padding:'12px',borderBottom:'2px solid #222'}}>Inflation</th><th style={{textAlign:'left',padding:'12px',borderBottom:'2px solid #222'}}>Penningpolitik</th><th style={{textAlign:'left',padding:'12px',borderBottom:'2px solid #222'}}>Största risk</th></tr></thead>
          <tbody>{economies.map(e => <tr key={e.region}><th style={{textAlign:'left',padding:'12px',borderBottom:'1px solid #ddd'}}>{e.region}</th><td style={{padding:'12px',borderBottom:'1px solid #ddd'}}>{e.growth}</td><td style={{padding:'12px',borderBottom:'1px solid #ddd'}}>{e.inflation}</td><td style={{padding:'12px',borderBottom:'1px solid #ddd'}}>{e.policy}</td><td style={{padding:'12px',borderBottom:'1px solid #ddd'}}>{e.risk}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="meta">Siffrorna har olika referensperioder. Utfall och prognoser ska inte läsas som helt identiska mått.</p>
    </section>

    <section>
      <div className="kicker">Analys och konsekvenser</div>
      <h2>Den gemensamma nämnaren är dyrare osäkerhet</h2>
      <p>Den viktigaste slutsatsen är att världen inte står inför en enda konjunktur, utan flera samtidiga. USA kan fortsätta växa genom investeringar och produktivitetsvinster, medan Europa bromsas av energi och svagare industri. Kina kan nå sitt tillväxtmål genom export och offentligt stöd, men ändå ha en pressad bostadsmarknad. Japan kan få den inflation som landet länge eftersträvat, men av fel skäl om prisökningarna främst kommer från en svag valuta och dyr import.</p>
      <p>För centralbankerna blir avvägningen svårare. Om inflationen drivs av energi kan högre ränta inte skapa mer olja eller billigare frakt. Men centralbankerna måste ändå hindra tillfälliga prisökningar från att spridas till löner, hyror och tjänster. Risken är därför att räntorna hålls högre längre än den underliggande efterfrågan egentligen motiverar.</p>
      <p>För Sverige är omvärldens sammansättning viktigare än den globala totalsiffran. En svag europeisk industri slår mot svenska export- och underleverantörsföretag. En stark amerikansk teknikcykel kan däremot gynna bolag inom digital infrastruktur, kraftsystem och avancerad industri. Kinas fastighetsproblem kan dämpa efterfrågan på råvaror och kapitalvaror, samtidigt som kinesisk överkapacitet pressar priserna på världsmarknaden.</p>
      <p>Hushållen möter två motverkande krafter. Stigande reallöner och lägre tidigare inflation förbättrar köpkraften, men bolånekostnader, energipriser och osäker arbetsmarknad håller tillbaka konsumtionen. Företagen får på samma sätt stöd av en återhämtning men möter dyrare kapital och större svängningar i valuta och handel.</p>
    </section>

    <section>
      <div className="kicker">Längre fördjupning</div>
      <h2>Tre scenarier för resten av 2026 och 2027</h2>
      <h3>1. Mjuk men ojämn landning</h3>
      <p>I huvudscenariot faller energiprisernas bidrag gradvis tillbaka, USA undviker recession och Europas konsumtion återhämtas långsamt. Kina stabiliserar fastighetssektorn utan att återgå till en skulddriven byggboom. Då kan inflationen närma sig målen och räntorna normaliseras försiktigt. Sverige gynnas genom bättre export och starkare hushållsefterfrågan, men arbetslösheten sjunker med fördröjning.</p>
      <h3>2. Ny energichock</h3>
      <p>Om konflikten i Mellanöstern eller störningar i sjöfarten driver upp olje- och gaspriser får Europa och Japan den största direkta smällen. USA är mindre importberoende men påverkas genom bensinpriser och inflationsförväntningar. Sverige får högre transport- och produktionskostnader, svagare konsumtion och en mer besvärlig räntebana. Kina kan samtidigt möta både dyrare import och svagare extern efterfrågan.</p>
      <h3>3. Produktivitetslyft från AI och investeringar</h3>
      <p>Ett snabbare genomslag för AI, elnät, halvledare och automatisering skulle kunna höja produktiviteten utan att omedelbart öka inflationen. USA ligger först i investeringscykeln, men effekterna kan spridas till europeisk och svensk industri. Uppgången blir dock hållbar först när tekniken syns i bredare produktion och inkomster, inte bara i värderingar och datacenterinvesteringar.</p>
      <h3>Vad avgör vilket scenario som vinner?</h3>
      <p>Fyra indikatorer är särskilt viktiga: energipriserna, amerikansk kärninflation, kinesisk bostadsförsäljning och europeisk orderingång. För Sverige bör man dessutom följa sysselsättning, arbetade timmar och hushållens konsumtion. Enskilda BNP-tal kan ge en missvisande bild om arbetsmarknaden och efterfrågan inte bekräftar utvecklingen.</p>
    </section>

    <section>
      <div className="kicker">Källor</div>
      <h2>Originalkällor</h2>
      <ul>
        <li><a href="https://www.konj.se/publikationer/konjunkturlaget/" target="_blank" rel="noopener noreferrer">Konjunkturinstitutet: Konjunkturläget ↗</a></li>
        <li><a href="https://www.riksbank.se/sv/penningpolitik/" target="_blank" rel="noopener noreferrer">Riksbanken: Penningpolitik ↗</a></li>
        <li><a href="https://www.federalreserve.gov/monetarypolicy/2026-07-mpr-part1.htm" target="_blank" rel="noopener noreferrer">Federal Reserve: Monetary Policy Report, ekonomisk utveckling ↗</a></li>
        <li><a href="https://www.federalreserve.gov/monetarypolicy/2026-07-mpr-part2.htm" target="_blank" rel="noopener noreferrer">Federal Reserve: Penningpolitiken 2026 ↗</a></li>
        <li><a href="https://www.ecb.europa.eu/press/projections/html/ecb.projections202606_eurosystemstaff~a495110f8d.en.html" target="_blank" rel="noopener noreferrer">ECB: Eurosystemets makroprognos, juni 2026 ↗</a></li>
        <li><a href="https://www.ecb.europa.eu/press/economic-bulletin/html/eb202605.en.html" target="_blank" rel="noopener noreferrer">ECB: Economic Bulletin, nummer 5/2026 ↗</a></li>
        <li><a href="https://www.boj.or.jp/en/mopo/outlook/highlight/ten202607.htm" target="_blank" rel="noopener noreferrer">Bank of Japan: Outlook for Economic Activity and Prices, juli 2026 ↗</a></li>
        <li><a href="https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html" target="_blank" rel="noopener noreferrer">Kinas statistikbyrå: BNP och ekonomin första kvartalet 2026 ↗</a></li>
      </ul>
      <p className="meta">Prognoser förändras när ny statistik publiceras. Artikeln skiljer på officiella utfall och bedömningar och anger referensperiod i texten.</p>
    </section>
  </article></main>;
}
