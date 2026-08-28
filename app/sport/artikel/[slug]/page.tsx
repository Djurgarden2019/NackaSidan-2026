import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sportArticleBySlug, sportArticles } from '../../../../content/sportArticles';

type PageProps = { params: Promise<{ slug: string }> };

const matchDetails: Record<string, {
  report: string[];
  consequences: string[];
  perspective: string[];
}> = {
  'mjallby-europa-salzburg': {
    report: [
      'Mjällby kom till returen med ett 0–1-underläge och behövde därför flytta fram laget. Salzburg utnyttjade ytorna som uppstod, vann med 3–0 och tog playoffmötet med sammanlagt 4–0.',
      'Siffrorna speglar framför allt skillnaden i tempo. Salzburg kunde pressa längre, växla snabbare efter bollvinst och straffa misstagen innan Mjällby hann återställa sin defensiva organisation.'
    ],
    consequences: [
      'Uttåget innebär att Mjällby slipper höstens extra Europamatcher och kan lägga mer träningstid på Allsvenskan. På kort sikt kan det ge friskare ben och en tydligare veckorytm i den nationella slutspurten.',
      'Samtidigt försvinner chansen till större matchintäkter och fler internationella minuter. Ledningen behöver nu väga kontinuitet mot risken att spelare som visat sig i kvalet blir transfermål.'
    ],
    perspective: [
      'För klubben blir dubbelmötet ett konkret underlag för rekrytering, fysisk träning och matchplanering. Nästa steg är inte att försöka kopiera Salzburgs ekonomi, utan att höja tempot i den egna modellen och återinvestera Europaintäkterna klokt.',
      'För svensk fotboll visar mötet hur stort steget fortfarande är från en stark allsvensk vardag till etablerade europeiska utvecklingsmiljöer. Fler svenska lag behöver nå ligafaser återkommande om rankning, intäkter och vana vid internationellt tempo ska förbättras.'
    ]
  }
};

export function generateStaticParams() {
  return sportArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = sportArticleBySlug[slug];
  return article ? { title: `${article.title} | NackaSidan`, description: article.dek } : {};
}

export default async function SportArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = sportArticleBySlug[slug];
  if (!article) notFound();

  const special = matchDetails[slug];
  const isMatch = Boolean(special);
  const report = special?.report ?? [article.dek];
  const consequences = special?.consequences ?? (article.body[0]?.paragraphs ?? article.facts);
  const perspective = special?.perspective ?? [
    ...article.body.slice(1).flatMap(section => section.paragraphs),
    article.analysis
  ];

  return (
    <main>
      <article className="shell article match-article-body">
        <header className="page-hero">
          <div className="article-part-label">01 · Rubrik</div>
          <div className="kicker">{article.sport}</div>
          <h1>{article.title}</h1>
          <p>{article.dek}</p>
          <p className="meta">Publicerad {article.date}</p>
        </header>

        <section className="article-section">
          <div className="match-section-number">02 · Själva nyheten</div>
          <h2>{isMatch ? 'En kort rapport om matchen' : 'Kort om nyheten'}</h2>
          {report.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {!isMatch && (
            <ul className="standard-facts">
              {article.facts.map(fact => <li key={fact}>{fact}</li>)}
            </ul>
          )}
        </section>

        <section className="article-section">
          <div className="match-section-number">03 · Analys och konsekvenser</div>
          <h2>{isMatch ? 'Konsekvenser för laget' : 'Konsekvenser för de berörda'}</h2>
          {consequences.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <h2>{isMatch ? 'Ett större perspektiv för klubben och svensk fotboll' : 'Ett större perspektiv'}</h2>
          {perspective.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <h3>Det här följer vi</h3>
          <ul>
            {article.watch.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="article-section sport-article-sources">
          <div className="match-section-number">04 · Källhänvisning</div>
          <h2>Tydliga och klickbara källor</h2>
          <ul>
            {article.sources.map(source => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Fler sportartiklar</h2>
          <ul>
            {sportArticles.filter(item => item.slug !== slug).slice(0, 3).map(item => (
              <li key={item.slug}><Link href={`/sport/artikel/${item.slug}`}>{item.title} →</Link></li>
            ))}
          </ul>
          <p><Link className="button" href="/sport">Tillbaka till Sport</Link></p>
        </section>
      </article>
    </main>
  );
}
