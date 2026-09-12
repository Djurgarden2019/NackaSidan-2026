import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {analyses,analysisBySlug} from '../../../content/analyses';
import {frontPageLongReads} from '../../../content/frontPageLongReads';
import {buildExtendedAnalysis} from '../../../content/extendedAnalysis';
import {getLiveNews} from '../../../lib/liveNews';

const todayLabel=()=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());
const normalize=(url:string)=>url.replace(/[?#].*$/,'').replace(/\/$/,'');

export function generateStaticParams(){return analyses.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=analysisBySlug[slug];return item?{title:item.title,description:item.dek}:{title:'Analys saknas'}}

export default async function AnalysisArticle({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=analysisBySlug[slug];if(!item)notFound();
 const live=await getLiveNews();const heroImage=live.items.find(story=>item.sources.some(source=>normalize(source.url)===normalize(story.link)))?.image;
 const related=analyses.filter(candidate=>candidate.slug!==item.slug).slice(0,3);const longRead=frontPageLongReads[slug]??[];const extended=buildExtendedAnalysis(item);
 return <main><div className="shell"><article className="article article-premium">
  <nav className="meta" aria-label="Brödsmulor"><Link href="/">NackaSidan</Link> · <Link href="/analys">Analys</Link> · {item.section}</nav>
  <div className="kicker">Analys · {item.section}</div><h1>{item.title}</h1><p className="intro">{item.dek}</p><p className="meta">Uppdaterad {todayLabel()} · NackaSidans redaktion</p>
  {heroImage&&<figure style={{margin:'28px 0'}}><img src={heroImage} alt="" loading="eager" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover'}}/><figcaption className="meta">Bild från den länkade originalkällan</figcaption></figure>}
  {item.news?.length?<section className="article-body"><div className="article-section"><h2>Detta har hänt</h2>{item.news.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></section>:null}
  <section className="facts-panel"><div className="kicker">Belagda fakta</div><h2>Detta vet vi</h2><ul>{item.facts.map(fact=><li key={fact}>{fact}</li>)}</ul></section>
  <section className="editorial-analysis"><div className="kicker">Huvudtes</div><p style={{fontSize:22,lineHeight:1.55}}>{item.thesis}</p></section>
  <div className="article-body"><section className="article-section"><h2>Redaktionens analys</h2>{item.interpretation.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section></div>
  {longRead.length?<div className="article-body">{longRead.map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div>:null}
  <div className="article-body">{extended.map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div>
  <section className="consequence-panel"><div className="kicker">Osäkerheter och konsekvenser</div><h2>Detta kan ändra utvecklingen</h2><ul>{item.uncertainties.map(point=><li key={point}>{point}</li>)}</ul></section>
  <section className="facts-panel"><div className="kicker">Vad vi följer</div><ul>{item.watch.map(point=><li key={point}>{point}</li>)}</ul></section>
  <section style={{paddingTop:8,marginTop:8}}><h2>Klickbara källor</h2><ul>{item.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section>
  <section className="section"><div className="kicker">Läs vidare</div><div className="grid-3">{related.map(candidate=><article key={candidate.slug}><div className="kicker">{candidate.section}</div><h3><Link href={`/analys/${candidate.slug}`}>{candidate.title}</Link></h3></article>)}</div></section>
  <Link className="button" href="/analys">Alla analyser</Link>
 </article></div></main>
}
