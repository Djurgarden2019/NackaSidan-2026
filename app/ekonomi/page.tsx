import Link from 'next/link';
import { AnalysisBox, FactStrip } from '../../components/Editorial';

const themes=[
 {title:'Regeringen höjer prognosen för svensk BNP',text:'Tillväxtprognosen för 2026 höjs från 2,3 till 2,5 procent när regeringen beskriver en starkare återhämtning.',href:'https://www.reuters.com/world/europe/swedish-government-raises-gdp-forecast-ahead-september-election-2026-08-27/'},
 {title:'50 miljarder kronor i reformutrymme inför budgeten',text:'Det nya ekonomiska utrymmet blir en central del av valrörelsens konflikt om skatter, välfärd och hushållens ekonomi.',href:'https://www.svt.se/nyheter/inrikes/senaste-nytt-om-val-2026'},
 {title:'Sverige kräver stora nedskärningar i EU:s långtidsbudget',text:'Sex nettobetalande länder vill minska kommissionens budgetförslag med flera hundra miljarder euro.',href:'https://www.reuters.com/business/six-eu-net-contributors-demand-hundreds-billions-cuts-blocs-long-term-budget-2026-08-27/'},
 {title:'Valrörelsen avgör hur återhämtningen ska fördelas',text:'Lägre inflation och en förbättrad arbetsmarknad möter fortsatt försiktighet bland hushåll med små marginaler.',href:'https://www.reuters.com/world/europe/swedish-government-raises-gdp-forecast-ahead-september-election-2026-08-27/'}
];

export const metadata={title:'Ekonomi | NackaSidan 2026',description:'Räntor, inflation, jobb, bostäder och börs – förklarat utifrån vad utvecklingen betyder för hushållen.'};

export default function Page(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Ekonomi</div><h1>Ekonomin – från procentsiffror till vardag</h1><p>Räntor, priser, jobb, bostäder och börs förklarade utifrån den viktigaste frågan: vad betyder utvecklingen för hushållen?</p></div>
 <section className="section" style={{borderTop:'4px solid #111',paddingTop:22}}><div className="kicker">Veckans ekonomiska läge</div><h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',maxWidth:900}}>Köpkraften kan stärkas – men återhämtningen är fortfarande ojämn</h2><p className="lead" style={{maxWidth:820}}>När inflation och räntor rör sig förändras hushållens kalkyl snabbt. Samtidigt avgör arbetsmarknaden om förbättringen blir bred och varaktig.</p><AnalysisBox>En enskild positiv siffra räcker inte. Vi väger prisutveckling, räntor och jobb mot varandra för att skilja en tillfällig förbättring från en verklig vändning.</AnalysisBox><Link className="button" href="/sverige#ekonomi-nu">Se Sveriges ekonomiska ögonblicksbild</Link></section>
 <section className="section"><div className="kicker">Fyra frågor vi följer</div><h2>Det som formar din ekonomi</h2><div className="article-list">{themes.map((item,index)=><Link className="article-row" key={item.title} href={item.href}><div className="meta">{String(index+1).padStart(2,'0')} · Ekonomi</div><div><h2>{item.title}</h2><p>{item.text}</p><span className="text-link">Läs mer →</span></div></Link>)}</div></section>
 <section className="section"><FactStrip items={[{label:'Fokus',value:'Hushåll'},{label:'Bevakning',value:'Ränta'},{label:'Perspektiv',value:'Köpkraft'},{label:'Data',value:'Källmärkt'}]}/></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fördjupa dig</div><h2>Ekonomin i ett större sammanhang</h2><p className="lead">Följ den nationella bevakningen eller börja dagen med Nacka Daily.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/sverige">Sverige</Link><Link className="text-link" href="/daily">Nacka Daily →</Link></div></section>
 </div></main>}
