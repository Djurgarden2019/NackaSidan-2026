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
  const selected = items.slice(0, 6);
  if (!selected.length) return null;

  return (
    <section className="section live-frontpage" aria-label="Senaste nyheter">
      <div className="live-frontpage-head">
        <div>
          <div className="kicker">Live · uppdateras automatiskt</div>
          <h2>Senaste från nyhetsradarn</h2>
        </div>
        <div className="live-frontpage-updated">
          Uppdaterad {timeLabel(fetchedAt)} · <a href="/live">Öppna radarn →</a>
        </div>
      </div>

      <div className="live-frontpage-grid">
        {selected.map((item, index) => (
          <article className={index === 0 ? 'live-frontpage-item lead-live' : 'live-frontpage-item'} key={item.link}>
            <div className="feed-meta">
              <span>{item.section}</span>
              <span>{timeLabel(item.published)}</span>
            </div>
            <h3>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h3>
            <p className="live-source">{item.source}</p>
          </article>
        ))}
      </div>

      <p className="live-frontpage-note">
        Rubrikerna hämtas direkt från anslutna källor. De länkar till originalpubliceringen och är inte omskrivna av NackaSidan.
      </p>
    </section>
  );
}
