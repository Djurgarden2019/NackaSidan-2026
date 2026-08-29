import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { weekendArticleBySlug, weekendArticles } from '../../../content/weekend';

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return weekendArticles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const article = weekendArticleBySlug[slug]; return article ? { title: article.title, description: article.intro } : {}; }

export default async function WeekendArticlePage({ params }: PageProps) {
  const { slug } = await params; const article = weekendArticleBySlug[slug]; if (!article) notFound();
  const related = weekendArticles.filter(item => item.slug !== slug).slice(0, 3);
  return <main><div className="shell"><article className="article article-premium weekend-article">
    <nav className="meta"><Link href="/">NackaSidan</Link> · <Link href="/helg">Helg</Link> · {article.section}</nav>
    <div className="article-part-label">01 · Rubrik</div><div className="kicker">Helg · {article.section}</div><h1>{article.title}</h1><p className="intro">{article.intro}</p><p className="meta">Publicerad fredag {article.published} · {article.readingTime} läsning</p>
    <div className="article-part-label">02 · Själva nyheten</div><div className="article-body">{article.news.slice(0,-1).map(section => <section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
    <div className="article-part-label">03 · Analys och konsekvenser</div><section className="editorial-analysis"><div className="kicker">Redaktionens analys</div>{article.analysis.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section><section className="consequence-panel"><div className="kicker">Möjliga konsekvenser</div><ul>{article.consequences.map(item => <li key={item}>{item}</li>)}</ul></section>
    <div className="article-part-label">04 · Längre fördjupning</div><div className="article-body">{article.news.slice(-1).map(section => <section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
    <div className="article-part-label">05 · Tydliga och klickbara källor</div><section className="sport-article-sources"><h2>Tydliga och klickbara källor</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section>
    <section className="section"><div className="kicker">Mer i Helg</div><div className="grid-3">{related.map(item => <article key={item.slug}><div className="kicker">{item.section}</div><h3><Link href={`/helg/${item.slug}`}>{item.title}</Link></h3></article>)}</div><p><Link className="button" href="/helg">Till hela Helg</Link></p></section>
  </article></div></main>;
}
