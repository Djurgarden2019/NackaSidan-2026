import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTopWorldArticle,topWorldNews5Sep} from '../../../../content/topWorldNews5Sep';

export function generateStaticParams(){return topWorldNews5Sep.map(article=>({slug:article.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const article=getTopWorldArticle(slug);
 return article?{title:article.title,description:article.summary}:{title:'Artikeln saknas'};
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const article=getTopWorldArticle(slug);if(!article)notFound();
 return <main><article className="shell article-page">
  <div className="kicker">{article.section} · Uppdaterad 5 september 2026</div>
  <p><Link className="text-link" href="/">← Till startsidan</Link></p>
  <header><h1>{article.title}</h1><p className="lead">{article.summary}</p></header>
  <figure style={{margin:'28px 0'}}><img src={article.image} alt="" style={{width:'100%',maxHeight:520,objectFit:'cover'}}/><figcaption className="meta">{article.imageCredit}</figcaption></figure>
  <section><div className="kicker">Själva nyheten</div><h2>Detta har hänt</h2>{article.news.map((p,i)=><p key={i}>{p}</p>)}</section>
  <section><div className="kicker">Analys och konsekvenser</div><h2>Vad utvecklingen betyder</h2>{article.analysis.map((p,i)=><p key={i}>{p}</p>)}</section>
  <section><div className="kicker">Längre fördjupning</div><h2>Bakgrunden och frågorna framåt</h2>{article.depth.map((p,i)=><p key={i}>{p}</p>)}</section>
  <section style={{borderTop:'1px solid #bbb',marginTop:36,paddingTop:24}}><div className="kicker">Källor</div><h2>Originalkällor</h2><ul>{article.sources.map(source=><li key={source.url} style={{marginBottom:10}}><a className="text-link" href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul><p className="meta">Källorna ligger sist. Uppgifter kan förändras när myndigheter och nyhetsorganisationer publicerar nya besked.</p></section>
 </article></main>
}