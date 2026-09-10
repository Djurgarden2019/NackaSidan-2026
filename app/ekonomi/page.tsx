import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import {getLiveNews,type LiveNewsItem} from '../../lib/liveNews';
import Link from 'next/link';

const markets=[
 {name:'Stockholmsbörsen',ticker:'OMXS30',text:'Storbolagsindexet påverkas starkt av verkstad, banker, kronan och världshandeln.',url:'https://www.nasdaqomxnordic.com/index/index_info?Instrument=SE0000337842'},
 {name:'USA',ticker:'S&P 500',text:'USA-börsen styr den globala riskviljan. Räntor, teknikvinster och konjunkturdata är centrala.',url:'https://www.spglobal.com/spdji/en/indices/equity/sp-500/'},
 {name:'Europa',ticker:'STOXX 600',text:'Det breda Europaindexet speglar banker, industri, läkemedel och konsumentbolag.',url:'https://www.stoxx.com/index-details?symbol=SXXP'},
];
export const metadata={title:'Ekonomi | NackaSidan 2026',description:'Aktuella ekonominyheter från Sverige och världen – börs, räntor, företag och konjunktur.'};

function clean(value:string){return value.replace(/\s+/g,' ').trim()}
function summary(item:LiveNewsItem){const text=clean(item.summary);if(!text)return 'Läs den senaste rapporteringen och bakgrunden hos originalkällan.';return text.length>260?`${text.slice(0,257).replace(/\s+\S*$/,'')}…`:text}
function timeLabel(value:string){return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value))}
function today(){return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date())}
function NewsCard({item,lead=false}:{item:LiveNewsItem;lead?:boolean}){return <article className={lead?'economy-news-lead economy-live-card':'economy-live-card'}>
 {item.image&&<a className="economy-news-image" href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt="" loading={lead?'eager':'lazy'}/></a>}
 <div className="kicker">{item.source} · <time dateTime={item.published}>{timeLabel(item.published)}</time></div>
 <h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h3><p>{summary(item)}</p>
 <a className="text-link" href={item.link} target="_blank" rel="noopener noreferrer">Läs hos källan ↗</a>
 </article>}

export default async function Page(){
 const {items,feeds}=await getLiveNews();
 const economy=items.filter(item=>item.section==='Ekonomi'||item.sourceSection==='Ekonomi').sort((a,b)=>Date.parse(b.published)-Date.parse(a.published)).slice(0,18);
 const local=economy.filter(item=>['Nacka/Lokalt','Stockholm'].includes(item.sourceSection)).slice(0,4);
 const swedish=economy.filter(item=>item.source.startsWith('Sveriges ')||item.source.startsWith('SVT')).slice(0,8);
 const international=economy.filter(item=>item.source.includes('Business')).slice(0,8);
 const lead=economy[0];const latest=economy.filter(item=>item.link!==lead?.link).slice(0,8);
 const activeFeeds=feeds.filter(feed=>feed.section==='Ekonomi'&&feed.status==='Ansluten').length;
 return <main><div className="shell economy-desk">
 <header className="economy-head"><div><div className="kicker">Ekonomi · Uppdaterad {today()}</div><h1>Ekonomi</h1><p className="lead">Dagens viktigaste om räntor, börs, företag och konjunktur – från Sverige, Stockholm och världen.</p></div><nav aria-label="Ekonomisidans avdelningar"><a href="#senaste">Senaste</a><a href="#sverige">Sverige</a><a href="#varlden">Världen</a><a href="#bors">Marknader</a></nav></header>
 {lead?<section className="economy-section economy-top" aria-labelledby="ekonomi-huvudnyhet"><div className="economy-title"><div><div className="kicker">Huvudnyhet</div><h2 id="ekonomi-huvudnyhet">Ekonomi just nu</h2></div><span className="meta">{economy.length} aktuella artiklar · {activeFeeds} ekonomiflöden</span></div><div className="economy-news-grid"><NewsCard item={lead} lead/>{latest.slice(0,2).map(item=><NewsCard item={item} key={item.link}/>)}</div></section>:<section className="economy-section"><h2>Tillfälligt glest i ekonomiflödet</h2><p>De anslutna källorna uppdateras automatiskt. Försök igen om en stund.</p></section>}
 <section className="economy-section" id="senaste"><div className="economy-title"><div><div className="kicker">Nyast först</div><h2>Senaste ekonominytt</h2></div><span className="meta">Publicerat de senaste 72 timmarna</span></div><div className="economy-news-grid">{latest.slice(2).map(item=><NewsCard item={item} key={item.link}/>)}</div></section>
 {swedish.length>0&&<section className="economy-section" id="sverige"><div className="economy-title"><div><div className="kicker">Svensk ekonomi</div><h2>Räntor, företag och hushåll</h2></div></div><div className="economy-news-grid">{swedish.map((item,index)=><NewsCard item={item} lead={index===0} key={item.link}/>)}</div></section>}
 {international.length>0&&<section className="economy-section" id="varlden"><div className="economy-title"><div><div className="kicker">Internationellt</div><h2>Marknader och företag i världen</h2></div></div><div className="economy-news-grid">{international.map((item,index)=><NewsCard item={item} lead={index===0} key={item.link}/>)}</div></section>}
 {local.length>0&&<section className="economy-section"><div className="economy-title"><div><div className="kicker">Nacka och Stockholm</div><h2>Ekonomi nära dig</h2></div></div><div className="economy-news-grid">{local.map(item=><NewsCard item={item} key={item.link}/>)}</div></section>}
 <section className="economy-section" aria-labelledby="makro-rubrik"><div className="economy-title"><div><div className="kicker">Makroanalys</div><h2 id="makro-rubrik">Världsekonomin i fem perspektiv</h2></div><span className="meta">Sverige · USA · EU · Japan · Kina</span></div><div className="economy-news-grid"><article className="economy-news-lead"><div className="kicker">Fördjupning</div><h3><Link href="/ekonomi/makrolaget">Makroläget i Sverige, USA, EU, Japan och Kina</Link></h3><p>En samlad genomgång av tillväxt, inflation, räntor, arbetsmarknad och de största riskerna – med en jämförande analys av vad utvecklingen betyder för svenska hushåll och företag.</p><Link className="text-link" href="/ekonomi/makrolaget">Läs hela makroanalysen →</Link></article></div></section>
 <section className="economy-section" id="bors"><div className="economy-title"><div><div className="kicker">Marknader</div><h2>Följ dagens handel</h2></div><p>Direktlänkar till officiella indexleverantörer. Kursdata kan vara fördröjd.</p></div><div className="economy-market-grid">{markets.map((market,index)=><article key={market.ticker} className={index===0?'economy-market-lead':''}><div className="market-label"><span>{market.name}</span><strong>{market.ticker}</strong></div><h3>Aktuell indexdata</h3><p>{market.text}</p><a className="text-link" href={market.url} target="_blank" rel="noopener noreferrer">Öppna kursdata ↗</a></article>)}</div></section>
 <section className="economy-sources"><div className="kicker">Källor</div><h2>Flöden och primärkällor</h2><div><a href="https://www.riksbank.se/sv/press-och-publicerat/" target="_blank" rel="noopener noreferrer">Riksbanken ↗</a><a href="https://www.scb.se/" target="_blank" rel="noopener noreferrer">SCB ↗</a><a href="https://www.bbc.com/news/business" target="_blank" rel="noopener noreferrer">BBC Business ↗</a><a href="https://www.theguardian.com/uk/business" target="_blank" rel="noopener noreferrer">The Guardian Business ↗</a></div></section>
 <section className="economy-next"><Link className="button" href="/sverige/artikel/sverige-ekonomi-laget-2026">Läs den stora ekonomiguiden</Link><Link className="text-link" href="/senaste">Se alla aktuella nyheter →</Link></section>
 </div><DailyDeskUpdate desk="ekonomi"/></main>}
