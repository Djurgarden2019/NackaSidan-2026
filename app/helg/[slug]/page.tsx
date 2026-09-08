import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { weekendArticles } from '../../../content/weekend';
import { weekendPermanentArticles } from '../../../content/weekendPermanent';
import { weekendDeepDives } from '../../../content/weekendDeepDives';
import { weekendDoubleExtensions } from '../../../content/weekendDoubleExtensions';
import { weekendFinalExtensions } from '../../../content/weekendFinalExtensions';

type PageProps = { params: Promise<{ slug: string }> };
const allWeekendArticles = [...weekendPermanentArticles, ...weekendArticles];
const allBySlug = Object.fromEntries(allWeekendArticles.map(article => [article.slug, article]));

export function generateStaticParams() { return allWeekendArticles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const article = allBySlug[slug]; return article ? { title: article.title, description: article.intro } : {}; }

export default async function WeekendArticlePage({ params }: PageProps) {
 const { slug } = await params; const article = allBySlug[slug]; if (!article) notFound();
 const related = weekendPermanentArticles.filter(item => item.slug !== slug).slice(0, 3);
 const deepDive = weekendDeepDives[slug];
 const doubleExtension = weekendDoubleExtensions[slug];
 const finalExtension = weekendFinalExtensions[slug];
 const expandedMinutes = Math.round((Number.parseInt(article.readingTime,10)||12)*2);
 const split = Math.max(2, article.news.length-1);
 return <main><div className="shell"><article className="article article-premium weekend-article">
  <nav className="meta"><Link href="/">NackaSidan</Link> · <Link href="/helg">Helg</Link> · {article.section}</nav>
  <div className="article-part-label">01 · Rubrik</div><div className="kicker">Helg · {article.section}</div><h1>{article.title}</h1><p className="intro">{article.intro}</p><p className="meta">Publicerad {article.published} · {expandedMinutes} min läsning</p>
  <div className="article-part-label">02 · Själva artikeln</div><div className="article-body">{article.news.slice(0,split).map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div>
  <div className="article-part-label">03 · Analys och konsekvenser</div><section className="editorial-analysis"><div className="kicker">Redaktionens analys</div>{article.analysis.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{deepDive?.analysis.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section><section className="consequence-panel"><div className="kicker">Möjliga konsekvenser</div><ul>{article.consequences.map(item=><li key={item}>{item}</li>)}</ul></section>
  <div className="article-part-label">04 · Längre fördjupning</div><div className="article-body">{article.news.slice(split).map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div>
  {deepDive&&<><div className="article-part-label">05 · Ytterligare fördjupning</div><div className="article-body">{deepDive.sections.map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div><section className="consequence-panel"><div className="kicker">Frågor att följa</div><ul>{deepDive.questions.map(question=><li key={question}>{question}</li>)}</ul></section></>}
  {doubleExtension&&<><div className="article-part-label">06 · Fördjupad långläsning</div><div className="article-body">{doubleExtension.sections.map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div><section className="editorial-analysis"><div className="kicker">Samlad slutsats</div>{doubleExtension.reflections.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section></>}
  {finalExtension&&<><div className="article-part-label">07 · Fortsatt långläsning</div><div className="article-body">{finalExtension.sections.map(section=><section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div><section className="editorial-analysis"><div className="kicker">Slutsatser</div>{finalExtension.conclusion.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section></>}
  <div className="article-part-label">08 · Tydliga och klickbara källor</div><section className="sport-article-sources"><h2>Källor</h2><ul>{article.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section>
  <section className="section"><div className="kicker">Mer i Helg</div><div className="grid-3">{related.map(item=><article key={item.slug}><div className="kicker">{item.section}</div><h3><Link href={`/helg/${item.slug}`}>{item.title}</Link></h3></article>)}</div><p><Link className="button" href="/helg">Till hela Helg</Link></p></section>
 </article></div></main>;
}
