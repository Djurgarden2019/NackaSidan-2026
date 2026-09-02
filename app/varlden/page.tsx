import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import Link from 'next/link';
import { FeatureCard, AnalysisBox, SectionIntro } from '../../components/Editorial';
import { worldFeatures } from '../../content/data';
import { worldLongReads } from '../../content/worldLongReads';

const lenses=[
 {title:'Säkerhet',text:'Konflikter, försvar och diplomati – med fokus på vad som faktiskt förändrar riskbilden.',href:'/varlden#fordjupningar'},
 {title:'Ekonomi & handel',text:'Energi, sjöfart, tullar och leveranskedjor binder samman händelser långt från Sverige.',href:'/varlden#fordjupningar'},
 {title:'Demokrati & makt',text:'Institutioner, teknik och politiska vägval avgör hur länder kan agera på längre sikt.',href:'/varlden#fordjupningar'}
];

export const metadata={title:'Världen | NackaSidan 2026',description:'Internationella nyheter och långa analyser om säkerhet, ekonomi, handel, demokrati och geopolitik.'};

export default function WorldPage(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Världen · Uppdaterad 3 september 2026</div><h1>Världen hänger ihop mer än rubrikerna visar</h1><p>Aktuella internationella nyheter med längre analys av drivkrafter, konsekvenser, osäkerheter och betydelsen för Sverige.</p></div>
 <section className="section no-top"><div className="feature-grid world-grid">{worldFeatures.map((item,index)=><FeatureCard key={item.title} item={item} large={index===0}/>)}</div></section>
 <section className="section"><SectionIntro eyebrow="Tre perspektiv" title="Så läser vi världen" text="Vi skiljer det dramatiska från det betydelsefulla och kopplar dagens händelser till utvecklingen på längre sikt."/><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:20}}>{lenses.map((item,index)=><Link key={item.title} href={item.href} style={{borderTop:'3px solid #111',paddingTop:14}}><div className="meta">0{index+1} · Perspektiv</div><h3 style={{fontSize:24,marginTop:8}}>{item.title}</h3><p>{item.text}</p><span className="text-link">Läs analyserna →</span></Link>)}</div></section>
 <section className="section" id="fordjupningar"><SectionIntro eyebrow="Långläsning" title="Nyheter, analyser och konsekvenser" text="Fem fördjupningar om de internationella skeenden som just nu förändrar säkerhet, ekonomi och teknisk makt."/>{worldLongReads.map((article,index)=><article key={article.title} id={`analys-${index+1}`} style={{borderTop:'1px solid #aaa',paddingTop:32,marginTop:38,maxWidth:900}}>
   <div className="kicker">{article.eyebrow}</div><h2 style={{fontSize:'clamp(32px,5vw,52px)',lineHeight:1.03,margin:'10px 0 14px'}}>{article.title}</h2><p className="lead">{article.lead}</p>
   <h3 style={{marginTop:30}}>Själva nyheten</h3>{article.news.map((p,i)=><p key={i}>{p}</p>)}
   <h3 style={{marginTop:30}}>Analys och konsekvenser</h3>{article.analysis.map((p,i)=><p key={i}>{p}</p>)}
   <h3 style={{marginTop:30}}>Längre fördjupning</h3>{article.depth.map((p,i)=><p key={i}>{p}</p>)}
   <div style={{borderTop:'1px solid #d4d4d4',marginTop:30,paddingTop:18}}><h3>Källor</h3><ul>{article.sources.map(source=><li key={source.href} style={{marginBottom:8}}><a className="text-link" href={source.href} target="_blank" rel="noreferrer">{source.label} →</a></li>)}</ul></div>
 </article>)}</section>
 <section className="section" id="veckans-sammanhang"><SectionIntro title="Det gemensamma sammanhanget" text="Krig, energi, räntor, diplomati och teknikreglering är inte separata berättelser."/><AnalysisBox>När militära konflikter pressar energipriserna stiger inflationsrisken och staters finansiering blir dyrare. Samtidigt förändras de diplomatiska allianserna och konkurrensen om AI, energi och säkerhet skärps. För Sverige möts utvecklingen i bolåneräntor, drivmedel, försvar, handel och företagens tekniska villkor.</AnalysisBox></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Från världen till Sverige</div><h2>Vad betyder utvecklingen här hemma?</h2><p className="lead">Fortsätt till Sverige-bevakningen för konsekvenserna för ekonomi, säkerhet och politik.</p><Link className="button" href="/sverige">Sverige</Link></section>
 </div><DailyDeskUpdate desk="varlden"/></main>}
