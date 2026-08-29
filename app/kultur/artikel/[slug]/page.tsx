import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {cultureItems,cultureItemBySlug,cultureSlug} from '../../../../content/cultureDesk';

export function generateStaticParams(){return cultureItems.map(item=>({slug:cultureSlug(item.title)}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=cultureItemBySlug[slug];return item?{title:item.title,description:item.summary}:{title:'Kulturartikel saknas'}}

export default async function CultureArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=cultureItemBySlug[slug];if(!item)notFound();
 return <main><div className="shell"><article className="article article-premium culture-article">
  <nav className="meta"><Link href="/">NackaSidan</Link> · <Link href="/kultur">Kultur</Link> · {item.section}</nav>
  <div className="article-part-label">01 · Rubrik</div><div className="kicker">{item.section} · {item.date}</div><h1>{item.title}</h1><p className="intro">{item.summary}</p><p className="meta">NackaSidans kulturredaktion · Källkontrollerad</p>

  <div className="article-part-label">02 · Själva nyheten</div>
  <section className="article-section culture-news-body"><h2>Detta har hänt</h2><p>{item.summary}</p><p>Nyheten publiceras i Kulturdelen eftersom den berör ett aktuellt verk, en kulturinstitution, en konstnär eller villkoren för hur kultur skapas och når sin publik. Uppgifterna ovan bygger på den redovisade originalkällan och har inte blandats ihop med redaktionens tolkning.</p></section>

  <div className="article-part-label">03 · Analys och konsekvenser</div>
  <section className="article-section culture-analysis-body"><h2>Vad betyder utvecklingen?</h2><p>{item.why}</p></section>

  <div className="article-part-label">04 · Längre fördjupning</div>
  <section className="article-section culture-analysis-body"><h2>Det större kulturperspektivet</h2><p>Det större perspektivet handlar om hur publikens vanor, ekonomiska villkor och kulturella institutioner påverkar vilka verk och röster som får utrymme. Bedömningen är NackaSidans redaktionella fördjupning och är tydligt skild från de verifierade nyhetsuppgifterna.</p><p>Vi följer därför inte bara den enskilda premiären, boken eller kulturhändelsen, utan också hur distribution, finansiering och publikens beteende förändras över tid.</p></section>

  <div className="article-part-label">05 · Tydliga och klickbara källor</div>
  <section className="sport-article-sources"><h2>Originalkälla</h2><p>Här kan du kontrollera uppgifterna och läsa originalpubliceringen.</p><a className="culture-source-button" href={item.href} target="_blank" rel="noopener noreferrer"><strong>{item.source}</strong><span>Öppna källan ↗</span></a></section>

  <div style={{display:'flex',gap:15,flexWrap:'wrap',marginTop:30}}><Link className="button" href="/kultur">Tillbaka till Kultur</Link><Link className="text-link" href="/kulturdebatt">Kulturdebatt →</Link></div>
 </article></div></main>
}
