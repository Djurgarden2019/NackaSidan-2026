import Link from 'next/link';
import { FeatureCard, AnalysisBox, SectionIntro } from '../../components/Editorial';
import { worldFeatures } from '../../content/data';


export const metadata={title:'Världen | NackaSidan 2026',description:'Internationella nyheter och långa analyser om säkerhet, ekonomi, handel, demokrati och geopolitik.'};
const todayLabel=()=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());

export default function WorldPage(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Världen · Uppdaterad {todayLabel()}</div><h1>Världen hänger ihop mer än rubrikerna visar</h1><p>Aktuella internationella nyheter med längre analys av drivkrafter, konsekvenser, osäkerheter och betydelsen för Sverige.</p></div>
 <section className="section no-top"><div className="feature-grid world-grid">{worldFeatures.map((item,index)=><FeatureCard key={item.title} item={item} large={index===0}/>)}</div></section>
 <section className="section" id="veckans-sammanhang"><SectionIntro title="Det gemensamma sammanhanget" text="Krig, energi, räntor, diplomati och teknikreglering är inte separata berättelser."/><AnalysisBox>När militära konflikter pressar energipriserna stiger inflationsrisken och staters finansiering blir dyrare. Samtidigt förändras de diplomatiska allianserna och konkurrensen om AI, energi och säkerhet skärps. För Sverige möts utvecklingen i bolåneräntor, drivmedel, försvar, handel och företagens tekniska villkor.</AnalysisBox></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Från världen till Sverige</div><h2>Vad betyder utvecklingen här hemma?</h2><p className="lead">Fortsätt till Sverige-bevakningen för konsekvenserna för ekonomi, säkerhet och politik.</p><Link className="button" href="/sverige">Sverige</Link></section>
 </div></main>}
