import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {cultureItems,cultureItemBySlug,cultureSlug} from '../../../../content/cultureDesk';
import {getLiveNews} from '../../../../lib/liveNews';

const normalize=(url:string)=>url.replace(/[?#].*$/,'').replace(/\/$/,'');

export function generateStaticParams(){return cultureItems.map(item=>({slug:cultureSlug(item.title)}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=cultureItemBySlug[slug];return item?{title:item.title,description:item.summary}:{title:'Kulturartikel saknas'}}

export default async function CultureArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=cultureItemBySlug[slug];if(!item)notFound();
 const live=await getLiveNews();const heroImage=live.items.find(story=>normalize(story.link)===normalize(item.href))?.image;
 return <main><div className="shell"><article className="article article-premium culture-article">
  <nav className="meta"><Link href="/">NackaSidan</Link> · <Link href="/kultur">Kultur</Link> · {item.section}</nav>
  <div className="kicker">{item.section} · {item.date}</div><h1>{item.title}</h1><p className="intro">{item.summary}</p><p className="meta">NackaSidans kulturredaktion</p>
  {heroImage&&<figure style={{margin:'28px 0'}}><img src={heroImage} alt="" loading="eager" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover'}}/><figcaption className="meta">Bild från originalkällan</figcaption></figure>}
  <section className="article-section culture-analysis-body"><h2>Perspektiv</h2><p>{item.why}</p></section>
  <section className="sport-article-sources"><h2>Originalkälla</h2><a className="culture-source-button" href={item.href} target="_blank" rel="noopener noreferrer"><strong>{item.source}</strong><span>Öppna källan ↗</span></a></section>

  <div style={{display:'flex',gap:15,flexWrap:'wrap',marginTop:30}}><Link className="button" href="/kultur">Tillbaka till Kultur</Link><Link className="text-link" href="/kulturdebatt">Kulturdebatt →</Link></div>
 </article></div></main>
}
