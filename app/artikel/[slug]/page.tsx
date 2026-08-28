import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleMeta, KnowledgeCard, RelatedArticles, SourcePanel } from '../../../components/Knowledge';
import { ReadingProgress, ShareTools } from '../../../components/Interactive';
import { IntelligencePanel } from '../../../components/Intelligence';
import { ArticleTopics, NextArticle } from '../../../components/ArticleNavigation';
import { ArticleTrustBar } from '../../../components/Newsroom';
import ArticleEditorialStandard152 from '../../../components/ArticleEditorialStandard152';
import Link from 'next/link';
import { articleBySlug, articles } from '../../../content/articles';

const baseUrl='https://nacka-sidan-2026-delta.vercel.app';
export function generateStaticParams(){return articles.map((article)=>({slug:article.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const article=articleBySlug[slug];
 if(!article)return {title:'Artikel saknas'};
 return {title:article.title,description:article.intro,alternates:{canonical:`/artikel/${article.slug}`},openGraph:{type:'article',title:article.title,description:article.intro,url:`/artikel/${article.slug}`,publishedTime:article.publishedAt,modifiedTime:article.updatedAt,authors:['NackaSidans redaktion'],section:article.section,tags:article.tags,images:article.image?[{url:article.image,alt:article.imageCaption||article.title}]:undefined},twitter:{card:'summary_large_image',title:article.title,description:article.intro}};
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const article=articleBySlug[slug]; if(!article)notFound();
 const titleBySlug=Object.fromEntries(articles.map((item)=>[item.slug,item.title]));
 const articleUrl=`${baseUrl}/artikel/${article.slug}`;
 const jsonLd={'@context':'https://schema.org','@type':'NewsArticle',headline:article.title,description:article.intro,datePublished:article.publishedAt,dateModified:article.updatedAt,mainEntityOfPage:{'@type':'WebPage','@id':articleUrl},author:{'@type':'Organization',name:'NackaSidans redaktion',url:`${baseUrl}/forfattare/redaktionen`},publisher:{'@type':'Organization',name:'NackaSidan 2026',url:baseUrl},articleSection:article.section,keywords:article.tags.join(', '),image:article.image?[article.image]:undefined};
 const breadcrumbLd={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'NackaSidan',item:baseUrl},{'@type':'ListItem',position:2,name:article.section,item:`${baseUrl}/sok`},{'@type':'ListItem',position:3,name:article.title,item:articleUrl}]};
 const safeJson=(value:unknown)=>JSON.stringify(value).replace(/</g,'\\u003c');
 return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJson(jsonLd)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJson(breadcrumbLd)}}/><ReadingProgress/><div className="shell"><article className="article article-premium"><nav aria-label="Brödsmulor" className="meta" style={{marginBottom:18}}><Link href="/">NackaSidan</Link> · <Link href="/sok">{article.section}</Link> · Artikel</nav><div className="article-part-label">01 · Rubrik</div><div className="kicker">{article.section}</div><h1>{article.title}</h1><p className="intro">{article.intro}</p><ArticleMeta article={article}/><ArticleTrustBar article={article}/><div className="article-actions"><Link href="/forfattare/redaktionen">Om redaktionen</Link><Link href="/principer">Så arbetar vi</Link><ShareTools title={article.title}/></div><ArticleEditorialStandard152 article={article}/>{article.image&&<figure className="article-hero-image"><img src={article.image} alt={article.imageCaption||article.title}/>{article.imageCaption&&<figcaption>{article.imageCaption}</figcaption>}</figure>}<div className="article-part-label">02 · Själva nyheten</div><div className="article-body">{article.body.map((section)=><section className="article-section" key={section.heading??section.paragraphs[0]}>{section.heading&&<h2>{section.heading}</h2>}{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</section>)}</div><KnowledgeCard article={article}/><IntelligencePanel article={article}/><section className="facts-panel"><div className="kicker">Verifierad bakgrund</div><h2>Tre saker att känna till</h2><ul>{article.facts.map((fact)=><li key={fact}>{fact}</li>)}</ul></section><div className="article-part-label">03 · Analys och konsekvenser</div><section className="editorial-analysis"><div className="kicker">Redaktionens analys</div><p>{article.analysis}</p></section><section className="consequence-panel"><div className="kicker">Möjliga konsekvenser</div><ul>{article.consequences.map((item)=><li key={item}>{item}</li>)}</ul></section><div className="article-part-label">04 · Källhänvisning</div><SourcePanel article={article}/><section style={{borderTop:'1px solid #d4d4d4',paddingTop:18,marginTop:28}}><div className="kicker">Transparens</div><p style={{fontSize:14}}>Upptäcker du ett sakfel? Läs hur vi arbetar med rättelser eller kontakta redaktionen.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="text-link" href="/rattelser">Rättelser & transparens →</Link><Link className="text-link" href="/kontakt">Kontakt →</Link></div></section><ArticleTopics article={article}/><RelatedArticles article={article} titleBySlug={titleBySlug}/><NextArticle current={article} articles={articles}/></article></div></main>;
}
