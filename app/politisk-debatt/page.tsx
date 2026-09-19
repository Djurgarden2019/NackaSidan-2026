import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import {getLiveNews} from '../../lib/liveNews';

export const dynamic='force-dynamic';

function dateLabel(value:string){return new Intl.DateTimeFormat('sv-SE',{weekday:'long',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value))}
function withinToday(value:string){const published=new Date(value);const now=new Date();const stockholmDate=(date:Date)=>new Intl.DateTimeFormat('sv-SE',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Europe/Stockholm'}).format(date);return Number.isFinite(published.getTime())&&stockholmDate(published)===stockholmDate(now)}
function perspective(source:string){if(source.includes('Aftonbladet')||source.includes('Arena'))return 'Perspektiv från vänster eller socialdemokratisk ledarsida.';if(source.includes('Svenska Dagbladet'))return 'Perspektiv från obunden moderat ledarsida.';if(source.includes('Dagens Nyheter')||source.includes('Expressen'))return 'Perspektiv från liberal ledarsida.';return 'Politisk opinionsjournalistik.'}
function analysis(title:string){const lower=title.toLocaleLowerCase('sv-SE');if(lower.includes('val')||lower.includes('reger'))return 'Texten bör läsas som ett inlägg i maktkampen efter valet. Det viktiga är vilka kompromisser och prioriteringar skribenten vill göra möjliga.';if(lower.includes('ekonomi')||lower.includes('skatt')||lower.includes('jobb'))return 'Konflikten gäller både fördelning och tillväxt. Bedöm argumenten mot deras följder för statsfinanser, arbete och hushållens ekonomi.';if(lower.includes('eu')||lower.includes('ukraina')||lower.includes('usa'))return 'Ledaren placerar Sverige i ett större säkerhets- och Europapolitiskt sammanhang. Jämför slutsatsen med andra ledarsidors syn på ansvar och risk.';return 'Detta är en argumenterande text, inte en neutral nyhetsrapport. Jämför tes, faktaurval och motargument med övriga ledarsidor.'}

export default async function PoliticalDebatePage(){
 const live=await getLiveNews();
 const debate=live.items.filter(item=>item.section==='Politisk debatt'||item.sourceSection==='Politisk debatt');
 const today=debate.filter(item=>withinToday(item.published));
 const selected=(today.length?today:debate).filter((item,index,array)=>array.findIndex(candidate=>candidate.link===item.link)===index).slice(0,8);
 return <main><div className="shell political-debate-page">
  <header className="page-hero political-debate-hero"><div className="kicker">Dagens opinionsjournalistik</div><h1>Politisk debatt</h1><p>De viktigaste perspektiven från svenska ledarsidor. NackaSidan sammanfattar argumenten och skiljer tydligt mellan nyhetsfakta, åsikt och egen analys.</p></header>
  <section className="political-debate-list" aria-labelledby="debate-list-title"><div className="world-section-head"><div><div className="kicker">Uppdateras löpande</div><h2 id="debate-list-title">Dagens viktigaste ledartexter</h2></div><span className="meta">{today.length?'Publicerade i dag':'Senast tillgängliga'}</span></div>
   {selected.length?<div>{selected.map((item,index)=><article key={item.link} className="political-debate-card"><div className="political-debate-number">{String(index+1).padStart(2,'0')}</div><div><div className="kicker">{item.source} · {dateLabel(item.published)}</div><h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>{item.summary&&<p>{item.summary}</p>}<p className="debate-perspective"><strong>Politisk utgångspunkt:</strong> {perspective(item.source)}</p><p className="analysis-thesis"><strong>NackaSidans analys:</strong> {analysis(item.title)}</p><a className="text-link" href={item.link} target="_blank" rel="noreferrer">Läs ledartexten hos källan →</a></div></article>)}</div>:<div className="world-empty"><h3>Ledarsidorna uppdateras</h3><p>Nya texter hämtas och publiceras här så snart de är tillgängliga.</p></div>}
  </section>
  <aside className="debate-principle"><strong>Redaktionell princip</strong><p>Urvalet ska spegla flera politiska riktningar. En ledartext återges som argument och värdering, aldrig som obestridd fakta.</p></aside>
 </div><DailyDeskUpdate desk="analys"/></main>
}
