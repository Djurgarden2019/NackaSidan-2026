import Link from 'next/link';
import { editorialSources, newsroomRules } from '../content/sources';
import { intakeQueue } from '../content/intake';

export function EditorialIntake({ compact = false }: { compact?: boolean }) {
  const items = compact ? intakeQueue.slice(0, 3) : intakeQueue;
  return (
    <section className="intake">
      <div className="intake-head">
        <div><div className="kicker">Nacka Intelligence</div><h2>Nyhetsdesk</h2></div>
        <span className="intake-badge">Redaktionell kö · Sprint 10</span>
      </div>
      <p className="intake-note">Detta är arbetsflödet för inkommande signaler. De första externa RSS-källorna är nu anslutna automatiskt. Den här kön är fortfarande redaktionens arbetsyta: råa liveposter publiceras aldrig automatiskt som NackaSidan-artiklar.</p>
      <div className="intake-list">
        {items.map(item => (
          <article key={item.id}>
            <time>{item.time}</time>
            <div>
              <div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div>
              <h3>{item.headline}</h3><p>{item.reason}</p>
            </div>
            <div className="intake-state"><b>{item.signal}</b><span>{item.state}</span></div>
          </article>
        ))}
      </div>
      {compact && <Link className="text-link" href="/redaktion">Öppna hela nyhetsdesken →</Link>}
    </section>
  );
}

export function SourceRegistry() {
  return (
    <section className="source-registry">
      <div className="section-heading"><div className="kicker">Källor</div><h2>Källregister</h2><p>Offentliga och redaktionella källor som nästa integrationssteg kan hämta från automatiskt.</p></div>
      <div className="source-grid">
        {editorialSources.map(source => (
          <article key={source.name}>
            <div className="feed-meta"><span>{source.category}</span><span>{source.status}</span></div>
            <h3>{source.name}</h3><p>{source.role}</p>
            <a href={source.url} target="_blank" rel="noreferrer">Öppna originalkälla ↗</a>
          </article>
        ))}
      </div>
      <div className="rules-box"><h3>NackaSidans publiceringsregler</h3>{newsroomRules.map((r,i)=><p key={r}><b>0{i+1}</b> {r}</p>)}</div>
    </section>
  );
}
