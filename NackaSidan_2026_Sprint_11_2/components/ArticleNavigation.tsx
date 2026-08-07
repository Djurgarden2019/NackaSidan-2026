import Link from 'next/link';
import type { Article } from '../content/articles';

const slugify = (value: string) => value.toLowerCase().replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function ArticleTopics({ article }: { article: Article }) {
  return (
    <section className="article-topics">
      <div className="kicker">Utforska ämnet</div>
      <div className="tag-row">{article.tags.map((tag) => <Link key={tag} href={`/amne/${slugify(tag)}`}>{tag}</Link>)}</div>
    </section>
  );
}

export function NextArticle({ current, articles }: { current: Article; articles: Article[] }) {
  const index = articles.findIndex((item) => item.slug === current.slug);
  const next = articles[(index + 1) % articles.length];
  if (!next || next.slug === current.slug) return null;
  return (
    <aside className="next-article">
      <div className="kicker">Läs nästa</div>
      <Link href={`/artikel/${next.slug}`}>
        <span>{next.section}</span>
        <h2>{next.title}</h2>
        <p>{next.intro}</p>
      </Link>
    </aside>
  );
}
