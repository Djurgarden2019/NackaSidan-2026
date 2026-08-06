import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../../content/articles';
import { knowledgeBySlug, knowledgeEntries } from '../../../content/knowledge';

export function generateStaticParams() { return knowledgeEntries.map((entry) => ({ slug: entry.slug })); }

export default async function KnowledgeEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = knowledgeBySlug[slug];
  if (!entry) notFound();
  const related = articles.filter((article) => article.tags.some((tag) => entry.relatedTags.includes(tag)));
  return <main><div className="shell"><section className="knowledge-topic-hero"><div className="kicker">NackaPedia · {entry.category}</div><h1>{entry.title}</h1><p>{entry.intro}</p></section><section className="knowledge-definition"><div><div className="kicker">Kort förklaring</div><h2>Vad är {entry.title.toLowerCase()}?</h2><p>{entry.definition}</p></div><aside><strong>Varför spelar det roll?</strong><p>{entry.whyItMatters}</p></aside></section><section className="section knowledge-details"><div><div className="kicker">Det viktigaste</div><h2>Fyra nyckelpunkter</h2><ul className="key-point-list">{entry.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul></div><aside className="knowledge-glossary"><div className="kicker">Ordlista</div><dl>{entry.glossary.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.definition}</dd></div>)}</dl></aside></section><section className="section"><div className="kicker">Tidslinje</div><h2 className="display-heading">Så utvecklades ämnet</h2><div className="pedia-timeline">{entry.timeline.map((item) => <div key={item.year}><strong>{item.year}</strong><p>{item.text}</p></div>)}</div></section><section className="section"><div className="section-heading"><h2>Relaterade artiklar</h2><p>Fördjupningar från NackaSidans centrala artikelregister.</p></div><div className="grid-3">{related.length ? related.map((article) => <article className="card" key={article.slug}><div className="kicker">{article.section}</div><h3>{article.title}</h3><p>{article.intro}</p><Link className="button" href={`/artikel/${article.slug}`}>Läs artikeln</Link></article>) : <p>Inga relaterade artiklar ännu.</p>}</div></section></div></main>;
}
