import Link from 'next/link';
import { knowledgeEntries } from '../../content/knowledge';
import DeskDepth from '../../components/DeskDepth';
import {knowledgeDepth} from '../../content/deskDepth';

export const metadata = { title: 'Kunskap | NackaSidan' };

export default function KnowledgeLibrary() {
  return <main><div className="shell"><section className="knowledge-library-hero"><div className="kicker">NackaPedia · Uppdaterad 30 augusti 2026</div><h1>Kunskap bakom rubrikerna</h1><p>Grundförklaringar, tidslinjer och ordlistor som kopplar samman aktuella artiklar med ett större sammanhang.</p></section><section className="knowledge-library-grid">{knowledgeEntries.map((entry, index) => <article className={index === 0 ? 'knowledge-entry featured' : 'knowledge-entry'} key={entry.slug}><div className="kicker">{entry.category}</div><h2><Link href={`/kunskap/${entry.slug}`}>{entry.title}</Link></h2><p>{entry.intro}</p><div className="knowledge-entry-meta">{entry.timeline.length} tidslinjepunkter · {entry.glossary.length} begrepp</div><Link className="text-link" href={`/kunskap/${entry.slug}`}>Utforska ämnet</Link></article>)}</section><DeskDepth eyebrow="Kunskapsmetod" title="Så använder du kunskapen bakom nyheterna" {...knowledgeDepth}/></div></main>;
}
