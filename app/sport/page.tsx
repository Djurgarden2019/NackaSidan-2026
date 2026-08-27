import Link from 'next/link';
import { AnalysisBox, FactStrip } from '../../components/Editorial';

const sections=[
 {kicker:'27 augusti · Fotboll',title:'UEFA begär FIFA-dokument i amerikansk domstol',text:'UEFA förbereder en möjlig schweizisk rättsprocess om FIFA:s stoppade plan för kommersiella rättigheter.'},
 {kicker:'Publik & ekonomi',title:'När läktaren blir en del av konkurrenskraften',text:'Publiktryck, biljettintäkter, sponsring och arenaekonomi påverkar klubbarnas långsiktiga handlingsutrymme.'},
 {kicker:'Form & prestation',title:'Vad resultaten faktiskt säger',text:'Vi skiljer tillfällig form från mer hållbara trender och tittar på vad som förändras över tid.'},
 {kicker:'Nästa vecka',title:'Det här följer vi nu',text:'Matcher, tabelläge, publik, ekonomi och beslut som kan ändra förutsättningarna.'}
];

export const metadata={title:'Sport | NackaSidan 2026',description:'Sportanalys om prestation, ekonomi, publik och utvecklingen runt svensk idrott.'};

export default function Page(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Sport</div><h1>Resultat är bara början av berättelsen</h1><p>Analys av prestation, ekonomi, publik och de beslut som formar modern idrott.</p></div>
 <section className="section" style={{borderTop:'4px solid #111',paddingTop:22}}><div className="kicker">Sportredaktionen</div><h2 style={{fontSize:'clamp(2rem,5vw,3.7rem)',maxWidth:900,marginTop:8}}>Förstå varför resultaten förändras</h2><p className="lead" style={{maxWidth:800}}>NackaSidan kopplar ihop det som händer på planen med ekonomi, publik, organisation och de långsiktiga besluten runt lagen.</p><Link className="button" href="/sverige#sport">Sport i Sverige-bevakningen</Link></section>
 <div className="article-list">{sections.map((item,index)=><Link className="article-row" key={item.title} href="/sverige#sport"><div className="meta">{String(index+1).padStart(2,'0')} · {item.kicker}</div><div><h2>{item.title}</h2><p>{item.text}</p><AnalysisBox>{index===0?'Ett enskilt resultat säger lite om riktningen. Det viktiga är om samma mönster syns i prestation, resurser och beslut över tid.':'Vi försöker skilja det tillfälliga från det strukturella och tydliggöra vad som faktiskt är belagt.'}</AnalysisBox><span className="text-link">Läs mer →</span></div></Link>)}</div>
 <section className="section"><FactStrip items={[{label:'Fokus',value:'Sverige'},{label:'Perspektiv',value:'4'},{label:'Format',value:'Analys'},{label:'Uppdatering',value:'Löpande'}]}/></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fortsätt läsa</div><h2>Sport i ett större sammanhang</h2><p className="lead">Gå vidare till Sverige för nationell bevakning eller Nacka Daily för dagens redaktionella urval.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/sverige">Sverige</Link><Link className="text-link" href="/daily">Nacka Daily →</Link></div></section>
</div></main>}
