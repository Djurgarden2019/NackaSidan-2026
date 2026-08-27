import Link from 'next/link';
import { FeatureCard, AnalysisBox, SectionIntro } from '../../components/Editorial';
import { worldFeatures } from '../../content/data';

const lenses=[
 {title:'Säkerhet',text:'Konflikter, försvar och diplomati – med fokus på vad som faktiskt förändrar riskbilden.'},
 {title:'Ekonomi & handel',text:'Energi, sjöfart, tullar och leveranskedjor binder samman händelser långt från Sverige.'},
 {title:'Demokrati & makt',text:'Val, institutioner och politiska vägval avgör hur länder kan agera på längre sikt.'}
];

export const metadata={title:'Världen | NackaSidan 2026',description:'Internationella nyheter och analyser om säkerhet, ekonomi, handel, demokrati och geopolitik.'};

export default function WorldPage(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Världen</div><h1>Världen hänger ihop mer än rubrikerna visar</h1><p>De viktigaste internationella skeendena, deras bakgrund och vad de betyder för säkerhet, ekonomi och Sverige.</p></div>
 <section className="section no-top"><div className="feature-grid world-grid">{worldFeatures.map((item,index)=><FeatureCard key={item.title} item={item} large={index===0}/>)}</div></section>
 <section className="section"><SectionIntro eyebrow="Tre perspektiv" title="Så läser vi världen" text="Vi försöker skilja det dramatiska från det betydelsefulla och koppla dagens händelser till utvecklingen på längre sikt."/><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:20}}>{lenses.map((item,index)=><article key={item.title} style={{borderTop:'3px solid #111',paddingTop:14}}><div className="meta">0{index+1} · Perspektiv</div><h3 style={{fontSize:24,marginTop:8}}>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
 <section className="section" id="veckans-sammanhang"><SectionIntro title="Veckans sammanhang" text="Händelserna ser olika ut, men binds samman av handel, energi, säkerhet och politisk uthållighet."/><AnalysisBox>När flera konflikter och ekonomiska spänningar pågår samtidigt blir det svårare att bedöma varje händelse isolerat. Sjöfart, energipriser, val och teknisk konkurrens påverkar varandra snabbt. Därför skiljer vi mellan bekräftade förändringar, politiska signaler och redaktionell analys.</AnalysisBox></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Från världen till Sverige</div><h2>Vad betyder utvecklingen här hemma?</h2><p className="lead">Fortsätt till Sverige-bevakningen för konsekvenserna för ekonomi, säkerhet och politik – eller ta dagens viktigaste i Nacka Daily.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/sverige">Sverige</Link><Link className="text-link" href="/daily">Nacka Daily →</Link></div></section>
 </div></main>}
