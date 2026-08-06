import { notFound } from 'next/navigation';
import { ArticleMeta, KnowledgeCard, RelatedArticles, SourcePanel } from '../../../components/Knowledge';
import { ReadingProgress, ShareTools } from '../../../components/Interactive';
import { IntelligencePanel } from '../../../components/Intelligence';
import { ArticleTopics, NextArticle } from '../../../components/ArticleNavigation';
import Link from 'next/link';
import { articleBySlug, articles } from '../../../content/articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) notFound();
  const titleBySlug = Object.fromEntries(articles.map((item) => [item.slug, item.title]));

  return (
    <main><ReadingProgress />
      <div className="shell">
        <article className="article article-premium">
          <div className="kicker">{article.section}</div>
          <h1>{article.title}</h1>
          <p className="intro">{article.intro}</p>
          <ArticleMeta article={article} /><div className="article-actions"><Link href="/forfattare/redaktionen">Om författaren</Link><ShareTools title={article.title} /></div>
          {article.image && (
            <figure className="article-hero-image">
              <img src={article.image} alt="" />
              {article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}
            </figure>
          )}
          <KnowledgeCard article={article} />
          <IntelligencePanel article={article} />
          {article.body.map((section) => (
            <section className="article-section" key={section.heading ?? section.paragraphs[0]}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section className="facts-panel">
            <div className="kicker">Fakta</div>
            <h2>Tre saker att känna till</h2>
            <ul>{article.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </section>
          <section className="editorial-analysis">
            <div className="kicker">Redaktionens analys</div>
            <p>{article.analysis}</p>
          </section>
          <section className="consequence-panel">
            <div className="kicker">Vad händer härnäst?</div>
            <ul>{article.consequences.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <SourcePanel article={article} />
          <ArticleTopics article={article} />
          <RelatedArticles article={article} titleBySlug={titleBySlug} />
          <NextArticle current={article} articles={articles} />
        </article>
      </div>
    </main>
  );
}
