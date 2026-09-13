import type {Metadata} from 'next';
import {getLiveNews, type LiveNewsItem} from '../../lib/liveNews';

export const metadata:Metadata={
 title:'Sport – aktuellt just nu',
 description:'Dagens mest relevanta sportnyheter från svenska och internationella redaktioner, uppdaterade inom 48 timmar.'
};
export const dynamic='force-dynamic';
export const revalidate=0;

const MAX_AGE=48*60*60*1000;
const trustedOrder=['SVT Sport','SVT Nyheter','Sveriges Radio','BBC Sport','The Guardian Sport'];

function updatedLabel(now:Date){
 return new Intl.DateTimeFormat('sv-SE',{dateStyle:'long',timeStyle:'short',timeZone:'Europe/Stockholm'}).format(now);
}
function dateLabel(value:string){
 return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value));
}
function isFresh(value:string,now:number){
 const time=Date.parse(value);
 const age=now-time;
 return Number.isFinite(time)&&age>=0&&age<=MAX_AGE;
}
function sourceWeight(source:string){
 const index=trustedOrder.findIndex(name=>source.startsWith(name));
 return index<0?0:(trustedOrder.length-index)*12;
}
function relevance(item:LiveNewsItem,now:number){
 const ageHours=Math.max(0,(now-Date.parse(item.published))/3600000);
 const freshness=Math.max(0,48-ageHours);
 const imageBoost=item.image?16:0;
 const swedishBoost=item.source.startsWith('SVT')||item.source.startsWith('Sveriges Radio')?30:0;
 const priorityBoost=item.priority==='Hög'?24:item.priority==='Medel'?12:0;
 return freshness+imageBoost+swedishBoost+priorityBoost+sourceWeight(item.source);
}
function topic(title:string){
 const text=title.toLocaleLowerCase('sv-SE');
 if(/fotboll|premier league|champions league|allsvensk|landslag/.test(text))return 'Fotboll';
 if(/tennis|us open|wimbledon/.test(text))return 'Tennis';
 if(/friidrott|diamond league|stav|diskus/.test(text))return 'Friidrott';
 if(/hockey|nhl|shl/.test(text))return 'Ishockey';
 if(/golf|solheim|ryder/.test(text))return 'Golf';
 if(/formel 1|formula 1|f1/.test(text))return 'Motorsport';
 return 'Sport';
}
function cleanSummary(value:string){
 return value.replace(/\s+/g,' ').trim().slice(0,320);
}

export default async function SportPage(){
 const now=new Date();
 const live=await getLiveNews();
 const seen=new Set<string>();
 const articles=live.items
  .filter(item=>(item.section==='Sport'||item.sourceSection==='Sport')&&isFresh(item.published,now.getTime()))
  .sort((a,b)=>relevance(b,now.getTime())-relevance(a,now.getTime()))
  .filter(item=>{const key=item.link.replace(/[?#].*$/,'');if(seen.has(key))return false;seen.add(key);return true;})
  .slice(0,10);
 const [lead,...rest]=articles;
 const imageStories=rest.filter(item=>item.image);
 const compactStories=rest.filter(item=>!item.image);

 return <main><div className="shell sport-desk">
  <header className="sport-desk-head">
   <div><div className="kicker">Uppdaterad {updatedLabel(now)}</div><h1>Sport</h1></div>
   <nav aria-label="Sportområden"><a href="#toppnyhet">Toppnyhet</a><a href="#senaste">Senaste</a><a href="#kort">Kort om sport</a><a href="#kallor">Källor</a></nav>
  </header>

  {lead?<section className="sport-lead" id="toppnyhet">
   <article>
    {lead.image&&<a href={lead.link} target="_blank" rel="noopener noreferrer" style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:22}}><img src={lead.image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/></a>}
    <div className="kicker">Toppnyhet · {topic(lead.title)}</div>
    <h2><a href={lead.link} target="_blank" rel="noopener noreferrer">{lead.title}</a></h2>
    {lead.summary&&<p className="lead">{cleanSummary(lead.summary)}</p>}
    <div className="sport-lead-facts"><p><strong>{lead.source}</strong></p><p>{dateLabel(lead.published)}</p></div>
    <a className="button" href={lead.link} target="_blank" rel="noopener noreferrer">Läs hos källan</a>
   </article>
   <aside><div className="kicker">Bevakningen nu</div><strong>{articles.length}</strong><span>relevanta nyheter från de senaste 48 timmarna</span></aside>
  </section>:<section className="sport-empty" id="toppnyhet"><div className="kicker">Sport just nu</div><h2>Inga verifierade artiklar inom 48 timmar</h2><p>Sportflödet fylls på automatiskt när anslutna redaktioner publicerar nya uppgifter.</p></section>}

  <section className="sport-news sport-panel" id="senaste">
   <div className="sport-section-title"><div><div className="kicker">Prioriterat</div><h2>Senaste sportnytt</h2></div><span>{imageStories.length} bildsatta nyheter</span></div>
   <div className="sport-news-grid">{imageStories.map(article=><article key={article.link} className="sport-card">
    <a href={article.link} target="_blank" rel="noopener noreferrer" style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:16}}><img src={article.image} alt="" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}}/></a>
    <div className="kicker">{topic(article.title)} · {article.source}</div>
    <h3><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
    {article.summary&&<p>{cleanSummary(article.summary)}</p>}
    <div className="sport-card-footer"><time>{dateLabel(article.published)}</time><a className="text-link" href={article.link} target="_blank" rel="noopener noreferrer">Läs hos källan →</a></div>
   </article>)}</div>
  </section>

  {compactStories.length>0&&<section className="sport-results sport-panel" id="kort">
   <div className="sport-section-title"><div><div className="kicker">Senaste 48 timmarna</div><h2>Kort om sport</h2></div></div>
   <div className="sport-score-grid">{compactStories.map(article=><article key={article.link} style={{position:'relative'}}>
    <a className="sport-notice-link" href={article.link} aria-label={`Öppna: ${article.title}`}>
     <span>{topic(article.title)} · {article.source}</span>
     <h3>{article.title}</h3>
     <p>{article.summary?cleanSummary(article.summary):'Öppna originalartikeln för hela rapporteringen.'}</p>
     <strong className="text-link">{dateLabel(article.published)} →</strong>
    </a>
   </article>)}</div>
  </section>}

  <section className="sport-agenda sport-panel" id="kallor">
   <div><div className="kicker">Direkt från redaktionerna</div><h2>Källor som uppdaterar Sport</h2><p>Nyheterna rangordnas efter aktualitet, svensk relevans, redaktionell prioritet och tillgänglig bild.</p></div>
   <ul><li><strong>Sverige</strong><span><a href="https://www.svt.se/sport" target="_blank" rel="noopener noreferrer">SVT Sport</a></span></li><li><strong>Världen</strong><span><a href="https://www.bbc.com/sport" target="_blank" rel="noopener noreferrer">BBC Sport</a></span></li><li><strong>Fördjupning</strong><span><a href="https://www.theguardian.com/sport" target="_blank" rel="noopener noreferrer">The Guardian Sport</a></span></li></ul>
  </section>
 </div></main>;
}
