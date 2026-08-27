import Link from 'next/link';
import { AnalysisBox, FactStrip } from '../../components/Editorial';

const beats=[
 {title:'AI-agenter får standard för att styra laboratorieutrustning',text:'Anthropic presenterar ett ramverk för att koppla AI-agenter till bland annat mikroskop och robotarmar.',href:'https://www.investing.com/news/stock-market-news/anthropic-unveils-new-framework-allowing-ai-agents-to-operate-physical-devices-4880003'},
 {title:'AI användes i realtid under synräddande hjärnkirurgi',text:'Ett UCL-system analyserade operationsvideo och hjälpte kirurger att identifiera känsliga strukturer.',href:'https://www.ucl.ac.uk/news/2026/aug/first-patient-live-ai-assisted-sight-saving-brain-surgery'},
 {title:'AI hjälper forskare konstruera genetiska kretsar',text:'En ny metod producerar mycket stora DNA-bibliotek och träningsdata för mer träffsäkra modeller.',href:'https://news.rice.edu/news/2026/scientists-demonstrate-first-time-use-ai-genetic-circuit-design'},
 {title:'Djupinlärning förbättrar kommunikationen med bioniska ögon',text:'Forskare använder modeller för att styra elektrisk stimulering i synbarken mer precist.',href:'https://news.ucsb.edu/2026/022739/deep-learning-refines-how-bionic-eyes-communicate-brain'}
];

export const metadata={title:'Vetenskap & AI | NackaSidan 2026',description:'AI, medicin, forskning, klimat och rymd – med fokus på evidens, konsekvenser och vad som faktiskt spelar roll.'};

export default function Page(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Vetenskap & AI</div><h1>Tekniken går snabbt – förståelsen måste hinna med</h1><p>AI, medicin, forskning, klimat och rymd. Vi skiljer genombrott från hype och förklarar vad nya resultat faktiskt betyder.</p></div>
 <section className="section" style={{borderTop:'4px solid #111',paddingTop:22}}><div className="kicker">Veckans fokus</div><h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',maxWidth:900}}>AI blir samhällsinfrastruktur – och kraven på granskning ökar</h2><p className="lead" style={{maxWidth:820}}>När AI flyttar från experiment till vardag förändras frågan. Det handlar mindre om vad tekniken kan göra och mer om hur den används, kontrolleras och påverkar beslut.</p><AnalysisBox>Vi skiljer demonstrationer från verklig användning, modellkapacitet från faktisk nytta och teknisk utveckling från politiska och ekonomiska konsekvenser.</AnalysisBox><Link className="button" href="/tema/ai">Utforska AI-temat</Link></section>
 <section className="section"><div className="kicker">Fyra bevakningsområden</div><h2>Det vi följer närmast</h2><div className="article-list">{beats.map((item,index)=><Link className="article-row" key={item.title} href={item.href}><div className="meta">{String(index+1).padStart(2,'0')} · Vetenskap</div><div><h2>{item.title}</h2><p>{item.text}</p><span className="text-link">Läs mer →</span></div></Link>)}</div></section>
 <section className="section"><FactStrip items={[{label:'Metod',value:'Evidens'},{label:'AI',value:'Analys'},{label:'Forskning',value:'Kontext'},{label:'Källor',value:'Spårbara'}]}/></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fortsätt läsa</div><h2>Från teknik till samhälle</h2><p className="lead">Gå vidare till AI-temat, Sverige-bevakningen eller Nacka Daily för dagens viktigaste utveckling.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/tema/ai">AI-temat</Link><Link className="text-link" href="/sverige">Sverige →</Link><Link className="text-link" href="/daily">Nacka Daily →</Link></div></section>
 </div></main>}
