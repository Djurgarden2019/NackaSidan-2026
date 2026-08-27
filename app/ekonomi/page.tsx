import Link from 'next/link';
import { AnalysisBox, FactStrip } from '../../components/Editorial';

const themes=[
 {title:'Räntan och bolånen',text:'Vi följer styrräntan, bankernas boräntor och hur förändringarna slår mot hushållens månadsbudget.',href:'/sverige#ekonomi-nu'},
 {title:'Priser och köpkraft',text:'Inflation är mer än en procentsiffra. Mat, boende, energi och tjänster avgör hur mycket som faktiskt blir kvar.',href:'/sverige#ekonomi-nu'},
 {title:'Jobb och konjunktur',text:'Arbetsmarknaden visar om återhämtningen når hushållen och vilka branscher som går först in i nästa fas.',href:'/sverige#ekonomi-nu'},
 {title:'Börs och företag',text:'Bolagens investeringar, vinster och framtidstro ger tidiga signaler om vart ekonomin är på väg.',href:'/sverige#ekonomi-nu'}
];

export const metadata={title:'Ekonomi | NackaSidan 2026',description:'Räntor, inflation, jobb, bostäder och börs – förklarat utifrån vad utvecklingen betyder för hushållen.'};

export default function Page(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Ekonomi</div><h1>Ekonomin – från procentsiffror till vardag</h1><p>Räntor, priser, jobb, bostäder och börs förklarade utifrån den viktigaste frågan: vad betyder utvecklingen för hushållen?</p></div>
 <section className="section" style={{borderTop:'4px solid #111',paddingTop:22}}><div className="kicker">Veckans ekonomiska läge</div><h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',maxWidth:900}}>Köpkraften kan stärkas – men återhämtningen är fortfarande ojämn</h2><p className="lead" style={{maxWidth:820}}>När inflation och räntor rör sig förändras hushållens kalkyl snabbt. Samtidigt avgör arbetsmarknaden om förbättringen blir bred och varaktig.</p><AnalysisBox>En enskild positiv siffra räcker inte. Vi väger prisutveckling, räntor och jobb mot varandra för att skilja en tillfällig förbättring från en verklig vändning.</AnalysisBox><Link className="button" href="/sverige#ekonomi-nu">Se Sveriges ekonomiska ögonblicksbild</Link></section>
 <section className="section"><div className="kicker">Fyra frågor vi följer</div><h2>Det som formar din ekonomi</h2><div className="article-list">{themes.map((item,index)=><Link className="article-row" key={item.title} href={item.href}><div className="meta">{String(index+1).padStart(2,'0')} · Ekonomi</div><div><h2>{item.title}</h2><p>{item.text}</p><span className="text-link">Läs mer →</span></div></Link>)}</div></section>
 <section className="section"><FactStrip items={[{label:'Fokus',value:'Hushåll'},{label:'Bevakning',value:'Ränta'},{label:'Perspektiv',value:'Köpkraft'},{label:'Data',value:'Källmärkt'}]}/></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fördjupa dig</div><h2>Ekonomin i ett större sammanhang</h2><p className="lead">Följ den nationella bevakningen eller börja dagen med Nacka Daily.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/sverige">Sverige</Link><Link className="text-link" href="/daily">Nacka Daily →</Link></div></section>
 </div></main>}
