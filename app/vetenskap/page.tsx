import Link from 'next/link';
import { AnalysisBox, FactStrip } from '../../components/Editorial';

const beats=[
 {title:'Artificiell intelligens',text:'Modeller, reglering, arbete och demokrati – med fokus på vad som faktiskt förändras utanför laboratoriet.',href:'/tema/ai'},
 {title:'Medicin & hälsa',text:'Nya behandlingar, diagnostik och forskning granskas utifrån evidens, nytta och risk.',href:'/vetenskap#veckans-fokus'},
 {title:'Rymd & klimat',text:'Satelliter, energisystem, klimatdata och stora forskningsprogram sätts i ett större sammanhang.',href:'/vetenskap#veckans-fokus'},
 {title:'Forskning & samhälle',text:'Vi följer hur vetenskap påverkar beslut, utbildning, industri och vardag – och var osäkerheten finns.',href:'/vetenskap#veckans-fokus'}
];

export const metadata={title:'Vetenskap & AI | NackaSidan 2026',description:'AI, medicin, forskning, klimat och rymd – med fokus på evidens, konsekvenser och vad som faktiskt spelar roll.'};

export default function Page(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Vetenskap & AI</div><h1>Tekniken går snabbt – förståelsen måste hinna med</h1><p>AI, medicin, forskning, klimat och rymd. Vi skiljer genombrott från hype och förklarar vad nya resultat faktiskt betyder.</p></div>
 <section className="section" style={{borderTop:'4px solid #111',paddingTop:22}}><div className="kicker">Veckans fokus</div><h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',maxWidth:900}}>AI blir samhällsinfrastruktur – och kraven på granskning ökar</h2><p className="lead" style={{maxWidth:820}}>När AI flyttar från experiment till vardag förändras frågan. Det handlar mindre om vad tekniken kan göra och mer om hur den används, kontrolleras och påverkar beslut.</p><AnalysisBox>Vi skiljer demonstrationer från verklig användning, modellkapacitet från faktisk nytta och teknisk utveckling från politiska och ekonomiska konsekvenser.</AnalysisBox><Link className="button" href="/tema/ai">Utforska AI-temat</Link></section>
 <section className="section"><div className="kicker">Fyra bevakningsområden</div><h2>Det vi följer närmast</h2><div className="article-list">{beats.map((item,index)=><Link className="article-row" key={item.title} href={item.href}><div className="meta">{String(index+1).padStart(2,'0')} · Vetenskap</div><div><h2>{item.title}</h2><p>{item.text}</p><span className="text-link">Läs mer →</span></div></Link>)}</div></section>
 <section className="section"><FactStrip items={[{label:'Metod',value:'Evidens'},{label:'AI',value:'Analys'},{label:'Forskning',value:'Kontext'},{label:'Källor',value:'Spårbara'}]}/></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fortsätt läsa</div><h2>Från teknik till samhälle</h2><p className="lead">Gå vidare till AI-temat, Sverige-bevakningen eller Nacka Daily för dagens viktigaste utveckling.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/tema/ai">AI-temat</Link><Link className="text-link" href="/sverige">Sverige →</Link><Link className="text-link" href="/daily">Nacka Daily →</Link></div></section>
 </div></main>}
