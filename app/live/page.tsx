import { getLiveNews } from '../../lib/liveNews';

export const revalidate = 900;

function swedishTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value || 'Tid saknas';
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm', day: 'numeric', month: 'short',
    hour: '2-digit', minute: '2-digit'
  }).format(d);
}

export default async function LivePage() {
  const data = await getLiveNews();
  return (
    <main>
      <div className="shell">
        <section className="live-hero">
          <div className="kicker">Nacka Intelligence · Sprint 10</div>
          <h1>Livekällor</h1>
          <p>Här hämtar NackaSidan rubriker direkt från anslutna originalkällors RSS-flöden. Flödet uppdateras automatiskt ungefär var 15:e minut. Ingenting i listan är en NackaSidan-publicering förrän redaktionen har verifierat och bearbetat materialet.</p>
        </section>

        <section className="live-status-grid">
          {data.feeds.map(feed => <article key={feed.name}>
            <span className={feed.status === 'Ansluten' ? 'live-dot live-dot-ok' : 'live-dot'} />
            <div><strong>{feed.name}</strong><small>{feed.section} · {feed.status} · {feed.count} poster</small>
            <a href={feed.homepage} target="_blank" rel="noreferrer">Originalkälla ↗</a></div>
          </article>)}
        </section>

        <section className="live-stream">
          <div className="section-heading section-heading-stack">
            <div className="kicker">Automatiskt inflöde</div>
            <h2>Senaste signalerna</h2>
            <p>Senast kontrollerat {swedishTime(data.fetchedAt)}. Klick leder alltid till originalpubliceringen.</p>
          </div>
          {data.items.length ? data.items.slice(0,24).map((item, i) => (
            <article className="live-row" key={`${item.link}-${i}`}>
              <time>{swedishTime(item.published)}</time>
              <div><div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div>
              <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3></div>
              <span className="live-review">Ej redaktionellt verifierad</span>
            </article>
          )) : <div className="live-empty"><strong>Inga poster kunde hämtas just nu.</strong><p>Originalkällorna finns kvar i källregistret. NackaSidan visar aldrig påhittade liveposter när en anslutning är nere.</p></div>}
        </section>
      </div>
    </main>
  );
}
