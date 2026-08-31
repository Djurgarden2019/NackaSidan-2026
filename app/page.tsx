import Link from 'next/link';
import { worldFeatures } from '../content/data';
import { analyses } from '../content/analyses';
import { getLiveNews } from '../lib/liveNews';
import AutoPublishedFrontpage from '../components/AutoPublishedFrontpage';

export const revalidate=900;

function dateLabel(value:string){const date=new Date(value);return Number.isNaN(date.getTime())?'Senaste nytt':new Intl.DateTimeFormat('sv-SE',{hour:'2-digit',minute:'2-digit',day:'numeric',month:'short',timeZone:'Europe/Stockholm'}).format(date)}

export default async function Home(){
 const live=await getLiveNews();
 const worldLive=live.items.filter(item=>item.section==='Världen'||item.sourceSection==='Världen').slice(0,12);
 const worldAnalyses=analyses.filter(item=>['Världen','Europa'].includes(item.section));
 const lead=worldFeatures[0];
 return <main><div className="shell world-front">
  <section className="world-front-heading"><div><div className="breaking-line"><span>Senaste nytt</span> Uppdaterad måndag 31 augusti 2026</div><p className="lead">Redaktionens urval av de sex världsnyheter som har störst betydelse för säkerhet, ekonomi, diplomati och Sverige.</p></div><Link className="text-link" href="/varlden">Öppna hela utrikesbevakningen →</Link></section>

  <section className="world-lead" aria-labelledby="world-lead-title"><div className="world-lead-media"><span className="top-six-number">01</span><img src={lead.image} alt="Handelsfartyg i området kring Hormuzsundet"/><span>{lead.imageCredit}</span></div><article><div className="kicker">Huvudnyhet · {lead.section}</div><h2 id="world-lead-title"><Link href="/analys/iran-kriget-dyrt-dodlage">{lead.title}</Link></h2><p className="lead">{lead.summary}</p><div className="world-lead-actions"><Link className="button" href="/analys/iran-kriget-dyrt-dodlage">Läs hela artikeln</Link><a className="text-link" href={lead.href} target="_blank" rel="noreferrer">Originalkälla →</a></div></article></section>

  <section className="world-grid-section" aria-labelledby="world-latest-title"><div className="world-section-head"><div><div className="kicker">Plats 2–6</div><h2 id="world-latest-title">Nyheterna som formar världsläget</h2></div><span className="meta">Redaktionellt urval · uppdaterat i dag</span></div><div className="world-story-grid">{worldFeatures.slice(1,6).map((story,index)=><article className={index===0?'world-story world-story-major':'world-story'} key={story.title}>{story.image&&<div className="world-story-image"><img src={story.image} alt="" loading="lazy"/><span>{story.imageCredit}</span></div>}<div className="world-story-copy"><div className="top-six-number">{String(index+2).padStart(2,'0')}</div><div className="kicker">{story.section}</div><h3>{(story.href??'').startsWith('/')?<Link href={story.href??'/varlden'}>{story.title}</Link>:<a href={story.href??'/varlden'} target="_blank" rel="noreferrer">{story.title}</a>}</h3><p>{story.summary}</p><div className="story-update">{story.meta}</div>{(story.href??'').startsWith('/')?<Link className="text-link" href={story.href??'/varlden'}>Läs NackaSidans fördjupning →</Link>:<a className="text-link" href={story.href??'/varlden'} target="_blank" rel="noreferrer">Läs hos källan →</a>}</div></article>)}</div></section>

  <AutoPublishedFrontpage />

  <section className="world-analysis" aria-labelledby="world-analysis-title"><div className="world-section-head"><div><div className="kicker">NackaSidan Analys</div><h2 id="world-analysis-title">Förstå vad som driver utvecklingen</h2></div><Link className="text-link" href="/analys">Alla analyser →</Link></div><div className="world-analysis-grid">{worldAnalyses.map((item,index)=><article key={item.slug} className={index===0?'world-analysis-card world-analysis-lead':'world-analysis-card'}><div className="kicker">{item.section} · Analys</div><h3><Link href={`/analys/${item.slug}`}>{item.title}</Link></h3><p>{item.dek}</p><p className="analysis-thesis"><strong>Huvudtes:</strong> {item.thesis}</p><Link className="text-link" href={`/analys/${item.slug}`}>Läs hela analysen →</Link></article>)}</div></section>

  <section className="world-live" aria-labelledby="world-live-title"><div className="world-section-head"><div><div className="kicker">Direkt från redaktionerna</div><h2 id="world-live-title">Senaste utrikesnyheterna</h2></div><span className="meta">BBC World och verifierade nyhetsflöden</span></div>{worldLive.length?<div className="world-live-list">{worldLive.map((item,index)=><a href={item.link} target="_blank" rel="noreferrer" className="world-live-row" key={`${item.link}-${index}`}><time>{dateLabel(item.published)}</time><div><span className="kicker">{item.source}</span><h3>{item.title}</h3></div><span aria-hidden="true">→</span></a>)}</div>:<div className="world-empty"><h3>Liveflödet uppdateras</h3><p>De redaktionellt utvalda världsnyheterna och analyserna ovan är tillgängliga under tiden.</p></div>}</section>

  <section className="world-focus" aria-label="Bevakningsområden"><div><div className="kicker">Detta följer vi</div><h2>Fem frågor som kan flytta världsläget</h2></div><ol>{['Om en diplomatisk väg öppnas i Irankriget','Sjöfarten och energipriserna kring Hormuz','En möjlig ny rysk mobiliseringsvåg','Vapenvilans hållbarhet i Gaza','EU:s förmåga att finansiera försvar och konkurrenskraft'].map((item,index)=><li key={item}><span>{String(index+1).padStart(2,'0')}</span>{item}</li>)}</ol></section>
 </div></main>
}
