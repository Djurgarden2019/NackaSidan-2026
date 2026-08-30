import { EditorialIntake, SourceRegistry } from '../../components/LiveDesk';
import Link from 'next/link';
import { articles } from '../../content/articles';
import { knowledgeEntries } from '../../content/knowledge';
import { latestNews } from '../../content/news';

const planned = [
  ['08 aug', 'AI och valet', 'Utkast', 'Sverige'],
  ['09 aug', 'Veckans kulturval', 'Idé', 'Kultur'],
];

const editorialNav = [
  ['Redaktionskö', '/redaktionskon', 'Kandidater som väntar på redaktionell hantering.'],
  ['Publicerade', '/publicerade', 'Publicerade artiklar med revisionsspår.'],
  ['Driftpanel', '/driftpanel', 'Nyckeltal för flöde, verifiering och publicering.'],
  ['Larm & avvikelser', '/larm', 'Källfel, matchningsproblem och publiceringsfel.'],
  ['Hälsokontroll', '/halsokontroll', 'Samlad systemstatus: OK, VARNING eller KRITISK.'],
  ['Förhandsgranskning', '/forhandsgranskning', 'Sista läsarvyn före publiceringsbeslut.'],
];

export default function EditorialPage() {
  const sourceCount = articles.reduce((sum, article) => sum + article.sources.length, 0);
  const tagCount = new Set(articles.flatMap((article) => article.tags)).size;
  return (
    <main>
      <div className="shell">
        <section className="editorial-command-hero">
          <div>
            <div className="kicker">Main 37 · Central redaktionsöversikt</div>
            <h1>Redaktionens kontrollcenter</h1>
            <p>En samlad startsida för arbetskö, publicering, drift, larm, hälsokontroll, planering och kvalitetskontroll.</p>
          </div>

        </section>

        <section style={{ margin: '28px 0 42px' }}>
          <div className="section-heading section-heading-stack">
            <div className="kicker">Redaktionens nav</div>
            <h2>Allt viktigt på ett ställe</h2>
            <p>Öppna rätt arbetsyta direkt. Översikten visar vägen men fattar inga redaktionella beslut.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
            {editorialNav.map(([title, href, text]) => (
              <Link key={href} href={href} style={{ display: 'block', border: '1px solid #d5d5d5', padding: 20, color: 'inherit', textDecoration: 'none', minHeight: 150 }}>
                <div className="kicker">Öppna</div>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 24, margin: '8px 0 10px' }}>{title}</h3>
                <p style={{ margin: 0, lineHeight: 1.5 }}>{text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-live-callout">
          <div><div className="kicker">Nacka Intelligence · Live</div><h2>Riktiga källor är nu anslutna</h2><p>LIVE hämtas efter sidladdning i webbläsaren. Externa källfel kan därför inte stoppa Vercel-bygget. Inkommande poster markeras som ej verifierade tills redaktionen har granskat dem.</p></div>
          <Link className="button" href="/live">Öppna Livekällor</Link>
        </section>

        <section className="editorial-kpis">
          <div><span>Publicerade artiklar</span><strong>{articles.length}</strong></div>
          <div><span>Kunskapssidor</span><strong>{knowledgeEntries.length}</strong></div>
          <div><span>Ämnen och taggar</span><strong>{tagCount}</strong></div>
          <div><span>Redovisade källor</span><strong>{sourceCount}</strong></div>
        </section>

        <section className="editorial-live-panel">
          <div>
            <div className="kicker">Publiceringsflöde</div>
            <h2>Senaste redaktionella aktivitet</h2>
            <p>Det här är samma datalager som visas för läsaren på sidan Senaste.</p>
          </div>
          <div className="editorial-live-list">{latestNews.map((item) => <div key={item.title}><span>{item.time}</span><strong>{item.title}</strong><small>{item.section} · {item.type}</small></div>)}</div>
        </section>

        <section className="editorial-workspace">
          <div>
            <div className="section-heading section-heading-stack"><div className="kicker">Innehåll</div><h2>Publicerade artiklar</h2><p>Ändra innehållet i <code>content/articles.ts</code>. Dynamiska artikelsidor, sökning och ämnessidor uppdateras automatiskt.</p></div>
            <div className="editorial-table-wrap">
              <table className="editorial-table">
                <thead><tr><th>Rubrik</th><th>Avdelning</th><th>Status</th><th>Uppdaterad</th><th>Lästid</th></tr></thead>
                <tbody>{articles.map((article) => <tr key={article.slug}><td><Link href={`/artikel/${article.slug}`}>{article.title}</Link></td><td>{article.section}</td><td><span className="status-published">Publicerad</span></td><td>{article.updated}</td><td>{article.readingTime}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
          <aside className="editorial-sidebar">
            <div className="kicker">Publiceringskalender</div>
            <h2>Närmast på tur</h2>
            {planned.map(([date, title, status, section]) => <div className="calendar-item" key={title}><span>{date}</span><div><strong>{title}</strong><small>{section} · {status}</small></div></div>)}
            <div className="quality-check">
              <div className="kicker">Kvalitetskontroll</div>
              <p>✓ Rubrik och ingress</p><p>✓ Kunskapskort</p><p>✓ Analys markerad</p><p>✓ Källor redovisade</p><p>✓ Relaterat innehåll</p>
            </div>
          </aside>
        </section>

        <section className="section cms-guide">
          <div><div className="kicker">Så publicerar du</div><h2>En artikel på ett ställe</h2><ol><li>Kopiera ett artikelobjekt i <code>content/articles.ts</code>.</li><li>Ändra slug, rubrik, ingress, brödtext, kunskapskort och källor.</li><li>Ladda upp ändringen till GitHub.</li><li>Vercel bygger och publicerar automatiskt.</li></ol></div>
          <div className="cms-note"><strong>Nästa CMS-steg</strong><p>När arbetsflödet är godkänt kan samma fält kopplas till Sanity. Sprint 10 har nu kopplat in de första RSS-källorna; nästa steg är fler källor och redaktionella åtgärder men skapar inget externt beroende.</p></div>
        </section>
        <EditorialIntake />
        <SourceRegistry />
      </div>
    </main>
  );
}
