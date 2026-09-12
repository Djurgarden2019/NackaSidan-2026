import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import type {Metadata} from 'next';
import Link from 'next/link';
import {analyses,type Analysis} from '../../content/analyses';
import {getLiveNews} from '../../lib/liveNews';

export const dynamic='force-dynamic';
const todayLabel=()=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());
const normalize=(url:string)=>url.replace(/[?#].*$/,'').replace(/\/$/,'');
export const metadata:Metadata={title:'Analys',description:'Dagsaktuella fördjupningar om Sverige, världen, ekonomi och europeisk säkerhet.'};

export default async function AnalysisPage(){
 const live=await getLiveNews();
 const imageFor=(item:Analysis)=>live.items.find(story=>item.sources.some(source=>normalize(source.url)===normalize(story.link)))?.image;
 const [lead,...rest]=analyses;
 const current=rest.slice(0,3);
 const archive=rest.slice(3);
 return <main><div className="shell standard-section-page">
  <header className="border-b-4 border-neutral-950 pb-7"><p className="text-sm font-bold uppercase tracking-[.18em] text-red-800">Uppdaterad {todayLabel()}</p><h1 className="mt-2 text-5xl font-black tracking-tight sm:text-7xl">Analys</h1></header>
  <section className="hero" style={{borderTop:'5px solid #a61919'}}>
   <div>{imageFor(lead)&&<Link href={`/analys/${lead.slug}`} style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:20}}><img src={imageFor(lead)} alt="" loading="eager" style={{width:'100%',height:'100%',objectFit:'cover'}}/></Link>}<div className="kicker">{lead.section} · Huvudanalys</div><Link href={`/analys/${lead.slug}`}><h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(34px,5vw,58px)',lineHeight:1}}>{lead.title}</h2></Link><p className="lead">{lead.dek}</p><p><strong>Huvudtes:</strong> {lead.thesis}</p><Link className="button" href={`/analys/${lead.slug}`}>Läs analysen</Link></div>
   <div className="facts-panel"><div className="kicker">Belagda fakta</div><ul>{lead.facts.map(fact=><li key={fact}>{fact}</li>)}</ul></div>
  </section>
  <section className="section"><div className="kicker">Nya analyser · 12 september</div><h2>Fyra frågor som formar läget just nu</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:22}}>{current.map((item,index)=><article key={item.slug} style={{borderTop:index<2?'4px solid #a61919':'2px solid #111',paddingTop:14}}>{imageFor(item)&&<Link href={`/analys/${item.slug}`} style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:14}}><img src={imageFor(item)} alt="" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}}/></Link>}<div className="kicker">{item.section}</div><h3 style={{fontFamily:'Georgia,serif',fontSize:28,lineHeight:1.08,margin:'8px 0'}}><Link href={`/analys/${item.slug}`}>{item.title}</Link></h3><p>{item.dek}</p><p style={{color:'#555'}}><strong>Huvudtes:</strong> {item.thesis}</p><Link className="text-link" href={`/analys/${item.slug}`}>Läs hela analysen →</Link></article>)}</div></section>
  <section className="section"><div className="kicker">Analysarkiv</div><h2>Fler fördjupningar</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:22}}>{archive.map(item=><article key={item.slug} style={{borderTop:'2px solid #111',paddingTop:14}}><div className="kicker">{item.section}</div><h3 style={{fontFamily:'Georgia,serif',fontSize:26,lineHeight:1.08,margin:'8px 0'}}><Link href={`/analys/${item.slug}`}>{item.title}</Link></h3><p>{item.dek}</p><Link className="text-link" href={`/analys/${item.slug}`}>Läs analysen →</Link></article>)}</div></section>
 </div><DailyDeskUpdate desk="analys"/></main>
}