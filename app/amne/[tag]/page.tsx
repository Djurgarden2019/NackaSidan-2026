import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../../content/articles';

const tags = Array.from(new Set(articles.flatMap((article) => article.tags)));
const slugify = (value: string) => value.toLowerCase().replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function generateStaticParams() { return tags.map((tag) => ({ tag: slugify(tag) })); }

export default async function TopicPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const label = tags.find((item) => slugify(item) === tag);
  if (!label) notFound();
  const matches = articles.filter((article) => article.tags.includes(label));
  return <main><div className="shell"><section className="topic-page-hero"><div className="kicker">Ämne</div><h1>{label}</h1><p>Nyheter, bakgrund och analyser som hjälper dig att förstå ämnet.</p></section><section className="topic-article-grid">{matches.map((article, index) => <article className={index === 0 ? 'topic-featured' : ''} key={article.slug}>{article.image && <img src={article.image} alt="" />}<div><div className="kicker">{article.section}</div><h2><Link href={`/artikel/${article.slug}`}>{article.title}</Link></h2><p>{article.intro}</p><div className="meta">{article.readingTime} läsning · Uppdaterad {article.updated}</div></div></article>)}</section><section className="section topic-directory"><h2>Fler ämnen</h2><div className="tag-cloud">{tags.filter((item) => item !== label).map((item) => <Link key={item} href={`/amne/${slugify(item)}`}>{item}</Link>)}</div></section></div></main>;
}
