import Link from 'next/link';
import type { Article } from '../content/articles';
import type { NewsFeedItem } from '../content/news';

export function LatestNewsFeed({ items, compact = false }: { items: NewsFeedItem[]; compact?: boolean }) {
  return (
    <section className={compact ? 'latest-feed latest-feed-compact' : 'latest-feed'}>
      <div className="latest-feed-heading">
        <div>
          <div className="kicker">Senaste från redaktionen</div>
          <h2>Publiceringsflödet</h2>
        </div>
        <div className="feed-disclosure">Redaktionellt flöde · inte automatisk nyhetswire</div>
      </div>
      <div className="latest-feed-list">
        {items.map((item) => (
          <article key={`${item.time}-${item.title}`}>
            <time>{item.time}</time>
            <div>
              <div className="feed-meta"><span>{item.section}</span><span>{item.type}</span></div>
              <h3><Link href={item.href}>{item.title}</Link></h3>
              {!compact && <p>{item.summary}</p>}
            </div>
            <Link className="feed-arrow" href={item.href} aria-label={`Läs ${item.title}`}>→</Link>
          </article>
        ))}
      </div>
      {compact && <Link className="text-link" href="/senaste">Visa hela publiceringsflödet</Link>}
    </section>
  );
}

export function ArticleTrustBar({ article }: { article: Article }) {
  return (
    <div className="article-trust-bar">
      <span><strong>Uppdaterad</strong> {article.updated}</span>
      <span><strong>{article.sources.length}</strong> {article.sources.length === 1 ? 'källa' : 'källor'}</span>
      <span><strong>{article.tags.length}</strong> ämnen</span>
      <span className="trust-state">✓ Källor redovisade</span>
    </div>
  );
}
