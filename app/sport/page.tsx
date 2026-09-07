import type {Metadata} from 'next';
import Link from 'next/link';
import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import {getFreshSportArticles,latestResults,SPORT_ARTICLE_MAX_AGE_HOURS,sportAgenda} from '../../content/sportArticles';

export const metadata:Metadata={title:'Sport',description:'Aktuella sportnyheter, resultat, analyser och spelscheman från de senaste 48 timmarna.'};
export const revalidate=900;
function updatedLabel(now:Date){return new Intl.DateTimeFormat('sv-SE',{dateStyle:'long',timeStyle:'short',timeZone:'Europe/Stockholm'}).format(now)}

export default function SportPage(){
 const now=new Date();const articles=getFreshSportArticles(now.getTime());const [lead,...rest]=articles;
 return <main><div className="shell sport-desk">
  <header className="sport-desk-head"><div><div className="kicker">Uppdaterad {updatedLabel(now)}</div><h1>Sport</h1><p className="lead">Aktuella resultat, egna analyser och fullständiga spelscheman. Redaktionella artiklar visas i högst {SPORT_ARTICLE_MAX_AGE_HOURS} timmar.</p></div><nav aria-label="Sportområden"><a href="#huvudnyhet">Huvudnyhet</a><a href="#senaste">Senaste</a><a href="#resultat">Resultat</a><a href="#kalender">Kalender</a><Link href="/sport/champions-league">Champions League</Link></nav></header>

  {lead?<section className="sport-lead" id="huvudnyhet"><article><div className="kicker">Huvudnyhet · {lead.sport}</div><h2><Link href={`/sport/artikel/${lead.slug}`}>{lead.title}</Link></h2><p className="lead">{lead.dek}</p><div className="sport-lead-facts">{lead.facts.map(fact=><p key={fact}>{fact}</p>)}</div><Link className="button" href={`/sport/artikel/${lead.slug}`}>Läs hela artikeln</Link></article><aside><div className="kicker">Bevakningen just nu</div><strong>{articles.length}</strong><span>aktuella artiklar</span><hr/><p>Varje artikel innehåller nyhet, analys, konsekvenser, längre fördjupning och originalkällor sist.</p></aside></section>:<section className="sport-empty"><div className="kicker">Huvudnyhet</div><h2>Nästa verifierade artikel förbereds</h2></section>}

  <section className="sport-news sport-panel" id="senaste"><div className="sport-section-title"><div><div className="kicker">Senaste 48 timmarna</div><h2>Nyheter och analyser</h2></div><span>{rest.length} artiklar</span></div><div className="sport-news-grid">{rest.map(article=><article key={article.slug} className="sport-card"><div className="kicker">{article.sport}</div><h3><Link href={`/sport/artikel/${article.slug}`}>{article.title}</Link></h3><p>{article.dek}</p><p className="sport-card-fact"><strong>Detta vet vi:</strong> {article.facts[0]}</p><div className="sport-card-footer"><time>{article.date}</time><Link className="text-link" href={`/sport/artikel/${article.slug}`}>Läs artikeln →</Link></div></article>)}</div></section>

  <section className="sport-results sport-panel" id="resultat"><div className="sport-section-title"><div><div className="kicker">Senast avgjort</div><h2>Aktuella resultat</h2></div></div><div className="sport-score-grid">{latestResults.map(result=><article key={result.match}><span>{result.competition}</span><h3>{result.match}</h3><strong>{result.score}</strong><p>{result.note}</p></article>)}</div></section>

  <section className="sport-agenda sport-panel" id="kalender"><div><div className="kicker">Kommande</div><h2>Sportkalender</h2><p>Champions League-premiär och avgörande matcher i US Open.</p><Link className="text-link" href="/sport/champions-league">Öppna hela Champions League-schemat →</Link></div><ul>{sportAgenda.map(item=><li key={item.event}><strong>{item.time}</strong><span>{item.event}</span></li>)}</ul></section>

  <section className="sport-sources sport-panel" id="standard"><div className="kicker">Redaktionell standard</div><h2>Samma struktur i varje artikel</h2><div className="sport-standard-grid"><p><strong>1. Nyheten.</strong> Bekräftade händelser och resultat.</p><p><strong>2. Analysen.</strong> Vad prestationen betyder.</p><p><strong>3. Fördjupningen.</strong> Taktik, konsekvenser och nästa steg.</p><p><strong>4. Källorna.</strong> Klickbara originalkällor längst ned.</p></div></section>
 </div><DailyDeskUpdate desk="sport"/></main>
}