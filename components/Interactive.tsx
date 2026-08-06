'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Article } from '../content/articles';

const slugify = (value: string) => value.toLowerCase().replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function SearchExperience({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('Alla');
  const tags = useMemo(() => ['Alla', ...Array.from(new Set(articles.flatMap((article) => article.tags))).sort()], [articles]);
  const normalized = query.trim().toLowerCase();
  const results = articles.filter((article) => {
    const tagMatch = activeTag === 'Alla' || article.tags.includes(activeTag);
    const haystack = [article.title, article.intro, article.section, article.author, ...article.tags, ...article.body.flatMap((part) => part.paragraphs)].join(' ').toLowerCase();
    return tagMatch && (!normalized || haystack.includes(normalized));
  });

  return (
    <div className="search-experience">
      <label className="search-field">
        <span>Sök i NackaSidan</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Sök efter AI, ekonomi, kultur..." autoFocus />
      </label>
      <div className="filter-row" aria-label="Filtrera efter ämne">
        {tags.map((tag) => <button key={tag} className={activeTag === tag ? 'active' : ''} onClick={() => setActiveTag(tag)}>{tag}</button>)}
      </div>
      <div className="search-count">{results.length} {results.length === 1 ? 'träff' : 'träffar'}</div>
      <div className="search-results">
        {results.map((article) => (
          <article key={article.slug}>
            <div className="kicker">{article.section}</div>
            <h2><Link href={`/artikel/${article.slug}`}>{article.title}</Link></h2>
            <p>{article.intro}</p>
            <div className="tag-row">{article.tags.map((tag) => <Link key={tag} href={`/amne/${slugify(tag)}`}>{tag}</Link>)}</div>
          </article>
        ))}
        {!results.length && <div className="empty-state"><h2>Inga träffar</h2><p>Prova ett bredare sökord eller välj Alla ämnen.</p></div>}
      </div>
    </div>
  );
}

export function ReadingProgress() {
  return <div className="reading-progress" aria-hidden="true"><div /></div>;
}

export function ShareTools({ title }: { title: string }) {
  const share = async () => {
    if (navigator.share) await navigator.share({ title, url: window.location.href });
    else await navigator.clipboard.writeText(window.location.href);
  };
  return <button className="share-button" onClick={share}>Dela artikeln</button>;
}
