import Link from 'next/link';
import { articles } from '../../../content/articles';

export const metadata = { title: 'NackaSidans redaktion' };

export default function AuthorPage() {
  return <main><div className="shell"><section className="author-hero"><div className="author-monogram">NS</div><div><div className="kicker">Författare</div><h1>NackaSidans redaktion</h1><p>Redaktionen skriver om nyheter, analys, ekonomi, kultur och teknik med fokus på sammanhang, tydliga källor och praktisk betydelse.</p><div className="expertise"><span>Geopolitik</span><span>Ekonomi</span><span>AI</span><span>Kultur</span></div></div></section><section className="section"><div className="section-heading"><h2>Senaste artiklarna</h2><p>{articles.length} publicerade texter i det centrala artikelregistret.</p></div><div className="author-articles">{articles.map((article) => <article key={article.slug}><div className="kicker">{article.section}</div><h2><Link href={`/artikel/${article.slug}`}>{article.title}</Link></h2><p>{article.intro}</p><div className="meta">{article.updated} · {article.readingTime} läsning</div></article>)}</div></section></div></main>;
}
