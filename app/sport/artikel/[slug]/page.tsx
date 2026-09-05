import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getFreshSportArticleBySlug,
  getFreshSportArticles
} from '../../../../content/sportArticles';

type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 900;

export function generateStaticParams() {
  return getFreshSportArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getFreshSportArticleBySlug(slug);
  return article
    ? { title: `${article.title} | NackaSidan`, description: article.dek }
    : { title: 'Sportartikeln är inte längre aktuell | NackaSidan' };
}

export default async function SportArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getFreshSportArticleBySlug(slug);
  if (!article) notFound();

  const related = getFreshSportArticles()
    .filter(item => item.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <article className="shell article match-article-body">
        <header className="page-hero">
          <div className="article-part-label">Sport · Senaste 48 timmarna</div>
          <div className="kicker">{article.sport}</div>
          <h1>{article.title}</h1>
          <p className="lead">{article.dek}</p>
          <p className="meta">Publicerad {article.date}</p>
        </header>

        <section className="article-section">
          <h2>Detta vet vi</h2>
          <ul className="standard-facts">
            {article.facts.map(fact => <li key={fact}>{fact}</li>)}
          </ul>
        </section>

        {article.body.map(section => (
          <section className="article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}

        <section className="article-section">
          <h2>Analys</h2>
          <p>{article.analysis}</p>
          <h3>Det här följer vi</h3>
          <ul>{article.watch.map(item => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="article-section sport-article-sources">
          <h2>Källor</h2>
          <ul>
            {article.sources.map(source => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Fler aktuella sportartiklar</h2>
          {related.length > 0 ? (
            <ul>
              {related.map(item => (
                <li key={item.slug}><Link href={`/sport/artikel/${item.slug}`}>{item.title} →</Link></li>
              ))}
            </ul>
          ) : (
            <p>Det finns inga fler verifierade sportartiklar inom 48-timmarsfönstret.</p>
          )}
          <p><Link className="button" href="/sport">Tillbaka till Sport</Link></p>
        </section>
      </article>
    </main>
  );
}
