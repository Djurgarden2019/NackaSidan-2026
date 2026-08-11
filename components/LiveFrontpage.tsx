import type { LiveNewsItem } from '../lib/liveNews';

function timeLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Nyss';
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'short',
  }).format(date);
}

export default function LiveFrontpage({ items, fetchedAt }: { items: LiveNewsItem[]; fetchedAt: string }) {
  const selected = items.slice(0, 8);
  if (!selected.length) return null;

  const [lead, ...more] = selected;

  return (
    <section className="section live-frontpage live-frontpage-46" aria-label="Senaste nyheter">
      <div className="live-frontpage-head">
        <div>
          <div className="kicker">Live · uppdateras automatiskt</div>
          <h2>Senaste från nyhetsradarn</h2>
        </div>
        <div className="live-frontpage-updated">
          Uppdaterad {timeLabel(fetchedAt)} · <a href="/live">Öppna radarn →</a>
        </div>
      </div>

      <div className="live46-layout">
        <article className="live46-lead">
          <div className="live46-label">Viktigast just nu</div>
          <div className="feed-meta">
            <span>{lead.section}</span>
            <span>{timeLabel(lead.published)}</span>
          </div>
          <h3>
            <a href={lead.link} target="_blank" rel="noreferrer">{lead.title}</a>
          </h3>
          <p className="live-source">{lead.source}</p>
          <a className="live46-read" href={lead.link} target="_blank" rel="noreferrer">Läs originalet →</a>
        </article>

        <div className="live46-list">
          {more.map((item, index) => (
            <article className="live46-item" key={item.link}>
              <span className="live46-number">{String(index + 2).padStart(2, '0')}</span>
              <div>
                <div className="feed-meta">
                  <span>{item.section}</span>
                  <span>{timeLabel(item.published)}</span>
                </div>
                <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
                <p className="live-source">{item.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="live46-footer">
        <p>Rubrikerna hämtas direkt från anslutna källor och länkar till originalpubliceringen. NackaSidan prioriterar flödet redaktionellt men skriver inte om rubrikerna.</p>
        <a href="/live">Se hela nyhetsradarn →</a>
      </div>
    </section>
  );
}
