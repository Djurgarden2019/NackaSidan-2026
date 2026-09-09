import type {Metadata} from 'next';
import Link from 'next/link';
import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import {readArticles} from '../../lib/autoPublisher';
import {getLiveNews} from '../../lib/liveNews';
import {getFreshSportArticles,latestResults,sportAgenda} from '../../content/sportArticles';

export const metadata:Metadata={title:'Sport',description:'Aktuella sportnyheter, resultat, analyser och spelscheman från de senaste 72 timmarna.'};
export const dynamic='force-dynamic';
export const revalidate=0;
const MAX_AGE=72*60*60*1000;
function updatedLabel(now:Date){return new Intl.DateTimeFormat('sv-SE',{dateStyle:'long',timeStyle:'short',timeZone:'Europe/Stockholm'}).format(now)}
function dateLabel(value:string){return new Intl.DateTimeFormat('sv-SE',{dateStyle:'long',timeStyle:'short',timeZone:'Europe/Stockholm'}).format(new Date(value))}
function fresh(value:string,now:number){const time=Date.parse(value);const age=now-time;return Number.isFinite(time)&&age>=0&&age<=MAX_AGE}

export default async function SportPage(){
 const now=new Date();
 const [automaticArticles,live]=await Promise.all([readArticles(),getLiveNews()]);
 const editorial=getFreshSportArticles(now.getTime()).map(article=>({id:article.slug,sport:article.sport,title:article.title,dek:article.dek,href:`/sport/artikel/${article.slug}`,date:dateLabel(article.publishedAt),fact:article.facts.join(' '),source:'NackaSidan',priority:'Fördjupning',publishedAt:article.publishedAt,internal:true}));
 const automatic=automaticArticles.filter(article=>article.section.toLocaleLowerCase('sv-SE').includes('sport')&&fresh(article.publishedAt,now.getTime())).map(article=>({id:article.id,sport:article.section,title:article.title,dek:article.lead,href:article.sourceUrl,date:dateLabel(article.publishedAt),fact:'Artikeln är automatiskt kontrollerad mot den länkade originalkällan.',source:article.source,priority:article.score>=80?'Hög prioritet':'Aktuell',publishedAt:article.publishedAt,internal:false}));
 const liveSport=live.items.filter(item=>item.section==='Sport'&&fresh(item.published,now.getTime())).map(item=>({id:item.link,sport:item.section,title:item.title,dek:item.summary||'Källan har publicerat en ny sportuppgift. Öppna originalartikeln för hela rapporteringen.',href:item.link,date:dateLabel(item.published),fact:`Publicerad av ${item.source}. Redaktionell prioritet: ${item.priority.toLowerCase()}.`,source:item.source,priority:item.priority==='Hög'?'Hög prioritet':'Aktuell',publishedAt:item.published,internal:false}));
 const seen=new Set<string>();
 const articles=[...liveSport,...automatic,...editorial].sort((a,b)=>Date.parse(b.publishedAt)-Date.parse(a.publishedAt)).filter(article=>{const key=article.href.replace(/[?#].*$/,'');if(seen.has(key))return false;seen.add(key);return true}).slice(0,8);
 const [lead,...rest]=articles;
 return <main><div className="shell sport-desk">
  <header className="sport-desk-head"><div><div className="kicker">Uppdaterad {updatedLabel(now)}</div><h1>Sport</h1></div><nav aria-label="Sportområden"><a href="#huvudnyhet">Huvudnyhet</a><a href="#senaste">Senaste</a><a href="#resultat">Resultat</a><a href="#kalender">Kalender</a><Link href="/sport/champions-league">Champions League</Link></nav></header>

  {lead?<section className="sport-lead" id="huvudnyhet"><article><div className="kicker">Huvudnyhet · {lead.sport}</div><h2><Link href={lead.href}>{lead.title}</Link></h2><p className="lead">{lead.dek}</p><div className="sport-lead-facts"><p><strong>Källa:</strong> {lead.source}</p><p><strong>Publicerad:</strong> {lead.date}</p><p>{lead.fact}</p></div><Link className="button" href={lead.href}>{lead.internal?'Läs hela artikeln':'Öppna originalkällan'}</Link></article><aside><div className="kicker">Bevakningen just nu</div><strong>{articles.length}</strong><span>aktuella artiklar</span></aside></section>:<section className="sport-empty"><div className="kicker">Huvudnyhet</div><h2>Nästa verifierade sportartikel förbereds</h2><p>Flödet fylls på när anslutna källor publicerar nya uppgifter.</p></section>}

  <section className="sport-news sport-panel" id="senaste"><div className="sport-section-title"><div><div className="kicker">Senaste 72 timmarna</div><h2>Nyheter och analyser</h2></div><span>{rest.length} artiklar</span></div><div className="sport-news-grid">{rest.map(article=><article key={article.id} className="sport-card"><div className="kicker">{article.sport} · {article.priority}</div><h3><Link href={article.href}>{article.title}</Link></h3><p>{article.dek}</p><p className="sport-card-fact"><strong>Fakta och sammanhang:</strong> {article.fact}</p><div className="sport-card-footer"><time>{article.date} · {article.source}</time><Link className="text-link" href={article.href}>{article.internal?'Läs artikeln →':'Originalkälla →'}</Link></div></article>)}</div></section>

  <section className="sport-results sport-panel" id="resultat"><div className="sport-section-title"><div><div className="kicker">Senast avgjort</div><h2>Resultat och matchbild</h2></div></div><div className="sport-score-grid">{latestResults.map(result=><article key={result.match}><span>{result.competition}</span><h3>{result.match}</h3><strong>{result.score}</strong><p>{result.note}</p></article>)}</div></section>
  <section className="sport-agenda sport-panel" id="kalender"><div><div className="kicker">Kommande</div><h2>Sportkalender</h2><p>Tider, matcher och tävlingar att följa.</p><Link className="text-link" href="/sport/champions-league">Öppna hela Champions League-schemat →</Link></div><ul>{sportAgenda.map(item=><li key={item.event}><strong>{item.time}</strong><span>{item.event}</span></li>)}</ul></section>
 </div><DailyDeskUpdate desk="sport"/></main>
}