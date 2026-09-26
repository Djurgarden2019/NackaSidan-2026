import DailyDeskUpdate from '../components/DailyDeskUpdate';
import Link from 'next/link';
import { analyses } from '../content/analyses';
import { getLiveNews } from '../lib/liveNews';

export const dynamic='force-dynamic';

function dateLabel(value:string){const date=new Date(value);return Number.isNaN(date.getTime())?'Senaste nytt':new Intl.DateTimeFormat('sv-SE',{hour:'2-digit',minute:'2-digit',day:'numeric',month:'short',timeZone:'Europe/Stockholm'}).format(date)}
function todayLabel(){return new Intl.DateTimeFormat('sv-SE',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date())}
function within24Hours(value:string){const time=Date.parse(value);const age=Date.now()-time;return Number.isFinite(time)&&age>=0&&age<=24*60*60*1000}
function isLocalNews(item:{local:boolean;section:string;sourceSection:string}){const section=item.section.toLocaleLowerCase('sv-SE');const sourceSection=item.sourceSection.toLocaleLowerCase('sv-SE');return item.local||section.includes('nacka')||section.includes('stockholm')||section.includes('lokalt')||sourceSection.includes('nacka')||sourceSection.includes('stockholm')||sourceSection.includes('lokalt')}
function isSwedishSource(source:string){return source.startsWith('SVT')||source.startsWith('Sveriges Radio')||source.startsWith('Sveriges Riksbank')}
function swedishAnalysis(section:string){const analyses:Record<string,string>={Världen:'Detta kan påverka säkerhetsläget, diplomatin och Europas handlingsutrymme. Det avgörande blir hur andra regeringar och internationella organisationer svarar.',EU:'Nyheten påverkar balansen mellan medlemsländernas intressen och unionens gemensamma beslut. Nästa steg är om beskedet omsätts i finansiering och bindande regler.',Sverige:'För Sverige handlar följderna främst om hushållens villkor, offentliga prioriteringar och förtroendet för beslutsfattarna. Genomförandet blir viktigare än det första beskedet.',Ekonomi:'Marknadens första reaktion säger inte allt. Effekten för räntor, priser, jobb och hushållens marginaler behöver följas över flera månader.',Kultur:'Nyheten visar hur kulturens innehåll, finansiering och räckvidd förändras. Betydelsen avgörs också av vilka verk och röster som får långsiktigt utrymme.',Vetenskap:'Resultatet är lovande men behöver prövas oberoende och i större skala. Skillnaden mellan ett tidigt forskningsresultat och praktisk användning är viktig.',Sport:'Resultatet påverkar det kortsiktiga läget, men den större bilden avgörs av prestationerna över tid, truppens hållbarhet och kommande motstånd.'};return analyses[section]||analyses.Sverige}

export default async function Home(){
 const live=await getLiveNews();
 const updatedToday=todayLabel();
 const freshNews=live.items.filter(item=>within24Hours(item.published)&&!isLocalNews(item)&&isSwedishSource(item.source));
 const isForeign=(item:(typeof freshNews)[number])=>['Världen','Internationella medier'].includes(item.section)||['Världen','Internationella medier'].includes(item.sourceSection);
 const foreignNews=freshNews.filter(isForeign);
 const otherNews=freshNews.filter(item=>!isForeign(item));
 const preferred=[...foreignNews.slice(0,4),...otherNews.slice(0,2)];
 const selected=new Set(preferred.map(item=>item.link));
 const topNews=[...preferred,...freshNews.filter(item=>!selected.has(item.link))].slice(0,6);
 const lead=topNews[0];
 const worldLive=foreignNews.slice(0,8);
 const worldAnalyses=analyses.filter(item=>['Världen','Europa'].includes(item.section)).slice(0,3);

 return <main><div className="shell world-front">
  <section className="world-front-heading"><div><div className="breaking-line"><span>Senaste nytt</span> Uppdaterad {updatedToday}</div></div><Link className="text-link" href="/senaste">Öppna Senaste nytt →</Link></section>

  {lead?<section className="world-lead" aria-labelledby="world-lead-title">
   {lead.image&&<div className="world-lead-media"><span className="top-six-number">01</span><img src={lead.image} alt="" loading="eager" fetchPriority="high"/><span>Bildkälla: {lead.source}</span></div>}
   <article><div className="kicker">Huvudnyhet · {lead.section}</div><h2 id="world-lead-title"><a href={lead.link} target="_blank" rel="noreferrer">{lead.title}</a></h2>{lead.summary&&<p className="lead">{lead.summary}</p>}<p className="analysis-thesis"><strong>Svensk analys:</strong> {swedishAnalysis(lead.section)}</p><div className="story-update">{dateLabel(lead.published)} · {lead.source}</div><div className="world-lead-actions"><a className="button" href={lead.link} target="_blank" rel="noreferrer">Läs originalartikeln</a><Link className="text-link" href="/analys">NackaSidans analyser →</Link></div></article>
  </section>:<section className="world-empty"><h2>Nyhetsflödet uppdateras</h2><p>Inga verifierade nyheter yngre än 24 timmar är tillgängliga just nu.</p></section>}

  {topNews.length>1&&<section className="world-grid-section" aria-labelledby="world-latest-title"><div className="world-section-head"><div><div className="kicker">Plats 2–6</div><h2 id="world-latest-title">Dagens viktigaste nyheter</h2></div><span className="meta">Alla publicerade inom 24 timmar</span></div><div className="world-story-grid">{topNews.slice(1,6).map((story,index)=><article className={index===0?'world-story world-story-major':'world-story'} key={story.link}>{story.image&&<div className="world-story-image"><img src={story.image} alt="" loading="lazy"/><span>Bildkälla: {story.source}</span></div>}<div className="world-story-copy"><div className="top-six-number">{String(index+2).padStart(2,'0')}</div><div className="kicker">{story.section}</div><h3><a href={story.link} target="_blank" rel="noreferrer">{story.title}</a></h3>{story.summary&&<p>{story.summary}</p>}<p className="analysis-thesis"><strong>Svensk analys:</strong> {swedishAnalysis(story.section)}</p><div className="story-update">{dateLabel(story.published)} · {story.source}</div><a className="text-link" href={story.link} target="_blank" rel="noreferrer">Läs hos källan →</a></div></article>)}</div></section>}

  <section className="political-debate-teaser" aria-labelledby="political-debate-title"><div><div className="kicker">Ny avdelning</div><h2 id="political-debate-title">Politisk debatt</h2><p>De viktigaste resonemangen från dagens svenska ledarsidor, sammanfattade och satta i ett bredare politiskt sammanhang.</p></div><Link className="button" href="/politisk-debatt">Läs dagens ledarsidor</Link></section>

  <section className="world-analysis" aria-labelledby="world-analysis-title"><div className="world-section-head"><div><div className="kicker">NackaSidan Analys</div><h2 id="world-analysis-title">Förstå vad som driver utvecklingen</h2></div><Link className="text-link" href="/analys">Alla analyser →</Link></div><div className="world-analysis-grid">{worldAnalyses.map((item,index)=><article key={item.slug} className={index===0?'world-analysis-card world-analysis-lead':'world-analysis-card'}><div className="kicker">{item.section} · Analys</div><h3><Link href={`/analys/${item.slug}`}>{item.title}</Link></h3><p>{item.dek}</p><p className="analysis-thesis"><strong>Huvudtes:</strong> {item.thesis}</p><Link className="text-link" href={`/analys/${item.slug}`}>Läs hela analysen →</Link></article>)}</div></section>

  <section className="world-live" aria-labelledby="world-live-title"><div className="world-section-head"><div><div className="kicker">Direkt från redaktionerna</div><h2 id="world-live-title">Senaste utrikesnyheterna</h2></div><span className="meta">Endast de senaste 24 timmarna</span></div>{worldLive.length?<div className="world-live-list">{worldLive.map((item,index)=><a href={item.link} target="_blank" rel="noreferrer" className="world-live-row" key={`${item.link}-${index}`}><time>{dateLabel(item.published)}</time><div><span className="kicker">{item.source}</span><h3>{item.title}</h3><p><strong>Svensk analys:</strong> {swedishAnalysis(item.section)}</p></div><span aria-hidden="true">→</span></a>)}</div>:<div className="world-empty"><h3>Liveflödet uppdateras</h3><p>Inga verifierade utrikesnyheter yngre än 24 timmar är tillgängliga just nu.</p></div>}</section>

  <section className="world-focus" aria-label="Bevakningsområden"><div><div className="kicker">Detta följer vi</div><h2>Fem frågor som kan flytta världsläget</h2></div><ol>{['Hormuzsundet, energipriserna och nya försök till diplomati','USA:s och Kinas nya direktlinje för risker kring artificiell intelligens','Bangkoköversvämningarna och storstäders motståndskraft mot extremväder','Riksbankens krav på finansierade reformer och vägen för svenska räntor','Regeringsbildningen och budgetförhandlingarna efter det svenska valet'].map((item,index)=><li key={item}><span>{String(index+1).padStart(2,'0')}</span>{item}</li>)}</ol></section>
 </div><DailyDeskUpdate desk="start"/></main>
}
