import type {Metadata} from 'next';
import Link from 'next/link';
import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import {readArticles} from '../../lib/autoPublisher';
import {getFreshSportArticles,latestResults,SPORT_ARTICLE_MAX_AGE_HOURS,sportAgenda} from '../../content/sportArticles';

export const metadata:Metadata={title:'Sport',description:'Dagsaktuella sportnyheter, resultat, analyser och spelscheman.'};
export const dynamic='force-dynamic';
export const revalidate=0;
function updatedLabel(now:Date){return new Intl.DateTimeFormat('sv-SE',{dateStyle:'long',timeStyle:'short',timeZone:'Europe/Stockholm'}).format(now)}

export default async function SportPage(){
 const now=new Date();
 const editorial=getFreshSportArticles(now.getTime()).map(article=>({id:article.slug,sport:article.sport,title:article.title,dek:article.dek,href:`/sport/artikel/${article.slug}`,date:article.date,fact:article.facts[0],publishedAt:article.publishedAt,internal:true}));
 const automatic=(await readArticles()).filter(article=>article.section.toLocaleLowerCase('sv-SE').includes('sport')&&now.getTime()-Date.parse(article.publishedAt)<=36*60*60*1000).map(article=>({id:article.id,sport:article.section,title:article.title,dek:article.lead,href:article.sourceUrl,date:new Intl.DateTimeFormat('sv-SE',{dateStyle:'long',timeZone:'Europe/Stockholm'}).format(new Date(article.publishedAt)),fact:'Uppgifterna kommer från den länkade originalkällan.',publishedAt:article.publishedAt,internal:false}));
 const seen=new Set<string>();
 const articles=[...automatic,...editorial].sort((a,b)=>Date.parse(b.publishedAt)-Date.parse(a.publishedAt)).filter(article=>{const key=article.href.replace(/[?#].*$/,'');if(seen.has(key))return false;seen.add(key);return true}).slice(0,8);
 const [lead,...rest]=articles;
 return <main><div className="shell sport-desk">
  <header className="sport-desk-head"><div><div className="kicker">Uppdaterad {updatedLabel(now)}</div><h1>Sport</h1><p className="lead">Dagens sportnyheter, resultat, analyser och fullständiga spelscheman. Målet är 6–8 verifierade artiklar per dygn; inga äldre artiklar fylls in bara för att nå antalet.</p></div><nav aria-label="Sportområden"><a href="#huvudnyhet">Huvudnyhet</a><a href="#senaste">Senaste</a><a href="#resultat">Resultat</a><a href="#kalender">Kalender</a><Link href="/sport/champions-league">Champions League</Link></nav></header>

  {lead?<section className="sport-lead" id="huvudnyhet"><article><div className="kicker">Huvudnyhet · {lead.sport}</div><h2><Link href={lead.href}>{lead.title}</Link></h2><p className="lead">{lead.dek}</p><div className="sport-lead-facts"><p>{lead.fact}</p></div><Link className="button" href={lead.href}>{lead.internal?'Läs hela artikeln':'Öppna originalkällan'}</Link></article><aside><div className="kicker">Bevakningen i dag</div><strong>{articles.length}</strong><span>aktuella artiklar</span><hr/><p>Flödet uppdateras automatiskt varje timme och visar högst åtta verifierade sportartiklar.</p></aside></section>:<section className="sport-empty"><div className="kicker">Huvudnyhet</div><h2>Nästa verifierade sportartikel förbereds</h2><p>Flödet fylls på när anslutna källor publicerar nya uppgifter.</p></section>}

  <section className="sport-news sport-panel" id="senaste"><div className="sport-section-title"><div><div className="kicker">Dagens sport</div><h2>Nyheter och analyser</h2></div><span>{rest.length} artiklar</span></div><div className="sport-news-grid">{rest.map(article=><article key={article.id} className="sport-card"><div className="kicker">{article.sport}</div><h3><Link href={article.href}>{article.title}</Link></h3><p>{article.dek}</p><p className="sport-card-fact"><strong>Detta vet vi:</strong> {article.fact}</p><div className="sport-card-footer"><time>{article.date}</time><Link className="text-link" href={article.href}>{article.internal?'Läs artikeln →':'Originalkälla →'}</Link></div></article>)}</div></section>

  <section className="sport-results sport-panel" id="resultat"><div className="sport-section-title"><div><div className="kicker">Senast avgjort</div><h2>Aktuella resultat</h2></div></div><div className="sport-score-grid">{latestResults.map(result=><article key={result.match}><span>{result.competition}</span><h3>{result.match}</h3><strong>{result.score}</strong><p>{result.note}</p></article>)}</div></section>
  <section className="sport-agenda sport-panel" id="kalender"><div><div className="kicker">Kommande</div><h2>Sportkalender</h2><p>Champions League och andra aktuella sporthändelser.</p><Link className="text-link" href="/sport/champions-league">Öppna hela Champions League-schemat →</Link></div><ul>{sportAgenda.map(item=><li key={item.event}><strong>{item.time}</strong><span>{item.event}</span></li>)}</ul></section>
  <section className="sport-sources sport-panel" id="standard"><div className="kicker">Redaktionell standard</div><h2>Samma struktur i varje artikel</h2><div className="sport-standard-grid"><p><strong>1. Nyheten.</strong> Bekräftade händelser och resultat.</p><p><strong>2. Analysen.</strong> Vad prestationen betyder.</p><p><strong>3. Fördjupningen.</strong> Taktik, konsekvenser och nästa steg.</p><p><strong>4. Källorna.</strong> Klickbara originalkällor längst ned.</p></div></section>
 </div><DailyDeskUpdate desk="sport"/></main>
}