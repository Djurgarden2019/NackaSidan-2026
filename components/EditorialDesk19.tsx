import { getLiveNews } from '../lib/liveNews';
import { buildEditorialCandidates } from '../lib/editorialEngine';

function timeLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Tid saknas';
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

export default async function EditorialDesk19() {
  const live = await getLiveNews();
  const candidates = buildEditorialCandidates(live.items).slice(0, 5);
  const green = candidates.filter(item => item.risk === 'Grön').length;
  const yellow = candidates.filter(item => item.risk === 'Gul').length;
  const red = candidates.filter(item => item.risk === 'Röd').length;

  return (
    <section className="s19-desk">
      <div className="s19-head">
        <div>
          <div className="kicker">Main 19 · Redaktionell prioritering</div>
          <h2>Redaktionens toppkandidater</h2>
          <p>Nyhetsradarn grupperar liknande signaler, väger aktualitet och källstöd och markerar vad som kräver ytterligare kontroll.</p>
        </div>
        <div className="s19-summary">
          <span><strong>{green}</strong> gröna</span>
          <span><strong>{yellow}</strong> gula</span>
          <span><strong>{red}</strong> röda</span>
        </div>
      </div>

      <div className="s19-list">
        {candidates.map((item, index) => (
          <article key={item.id} className="s19-item">
            <div className={`s19-score risk-${item.risk.toLowerCase()}`}>
              <strong>{item.score}</strong><span>/100</span>
            </div>
            <div className="s19-copy">
              <div className="feed-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{item.section}</span>
                <span>{timeLabel(item.published)}</span>
                <span>{item.sourceCount} {item.sourceCount === 1 ? 'källa' : 'källor'}</span>
              </div>
              <h3>{item.title}</h3>
              <p><strong>Varför viktig:</strong> {item.reason}</p>
              <p><strong>Föreslagen vinkel:</strong> {item.angle}</p>
              <div className="s19-sources">{item.sources.join(' · ')}</div>
            </div>
            <div className="s19-gate">
              <span className={`s19-badge risk-${item.risk.toLowerCase()}`}>{item.risk}</span>
              <small>{item.needsSecondSource ? 'Andra källa krävs' : 'Flera källor hittade'}</small>
              <a href={item.links[0]} target="_blank" rel="noreferrer">Öppna original ↗</a>
            </div>
          </article>
        ))}
      </div>

      <div className="s19-rule">
        <strong>Publiceringsregel:</strong> Main 19 publicerar inte automatiskt. Grön kandidat betyder endast att signalen kan gå vidare till slutkontroll; publicering kräver fortfarande redaktionellt beslut.
      </div>
    </section>
  );
}
