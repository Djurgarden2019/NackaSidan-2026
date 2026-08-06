import Link from 'next/link';
import type { Article } from '../content/articles';

export function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="article-meta">
      <span>Av {article.author}</span>
      <span>Publicerad {article.published}</span>
      <span>Uppdaterad {article.updated}</span>
      <span>{article.readingTime} läsning</span>
    </div>
  );
}

export function KnowledgeCard({ article }: { article: Article }) {
  return (
    <aside className="knowledge-card">
      <div className="kicker">Det viktigaste på 60 sekunder</div>
      <div className="knowledge-grid">
        {article.knowledge.map((point) => (
          <div key={point.label}>
            <strong>{point.label}</strong>
            <p>{point.text}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function SourcePanel({ article }: { article: Article }) {
  return (
    <section className="source-panel">
      <div className="kicker">Källor och transparens</div>
      <h2>Så är texten underbyggd</h2>
      <ul>
        {article.sources.map((source) => (
          <li key={`${source.type}-${source.label}`}>
            <span>{source.type}</span>
            {source.url ? <a href={source.url}>{source.label}</a> : source.label}
          </li>
        ))}
      </ul>
      <div className="trust-row">
        <span>✓ Källor redovisade</span>
        <span>✓ Analys tydligt markerad</span>
        <span>✓ Uppdateringsdatum synligt</span>
      </div>
    </section>
  );
}

export function RelatedArticles({ article, titleBySlug }: { article: Article; titleBySlug: Record<string, string> }) {
  return (
    <section className="related-block">
      <div className="kicker">Läs vidare</div>
      <h2>Relaterade artiklar</h2>
      <div className="related-links">
        {article.related.map((slug) => (
          <Link key={slug} href={`/artikel/${slug}`}>{titleBySlug[slug] ?? slug}</Link>
        ))}
      </div>
    </section>
  );
}
