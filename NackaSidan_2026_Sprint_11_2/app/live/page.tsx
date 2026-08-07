import { getLiveNews } from "../../lib/liveNews";
import LiveRadarClient from "../../components/LiveRadarClient";

function swedishTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value || "Tid saknas";
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export default async function LivePage() {
  const data = await getLiveNews();

  return (
    <main>
      <div className="shell">
        <section className="live-hero live-hero-s11">
          <div className="kicker">Nacka Intelligence · Sprint 11.2</div>
          <h1>Nyhetsradarn</h1>
          <p>
            Signaler hämtas från originalkällor när webbplatsen byggs, ämnessorteras automatiskt
            och prioriteras för granskning. Kategorifiltret fungerar direkt i webbläsaren utan
            dynamiska URL-parametrar, vilket gör sidan kompatibel med projektets statiska export.
          </p>
        </section>

        <section className="radar-stats">
          <article><strong>{data.items.length}</strong><span>signaler inne</span></article>
          <article><strong>{data.localCount}</strong><span>lokala signaler</span></article>
          <article><strong>{data.highPriority}</strong><span>hög prioritet</span></article>
          <article>
            <strong>{data.feeds.filter(f => f.status === "Ansluten").length}/{data.feeds.length}</strong>
            <span>källor anslutna</span>
          </article>
        </section>

        <section className="live-status-grid live-status-grid-s11">
          {data.feeds.map(feed => (
            <article key={feed.name}>
              <span className={feed.status === "Ansluten" ? "live-dot live-dot-ok" : "live-dot"} />
              <div>
                <strong>{feed.name}</strong>
                <small>{feed.section} · {feed.status} · {feed.count} poster</small>
                {feed.note && <small>{feed.note}</small>}
                <a href={feed.homepage} target="_blank" rel="noreferrer">Originalkälla ↗</a>
              </div>
            </article>
          ))}
        </section>

        <section className="live-stream">
          <div className="section-heading section-heading-stack">
            <div>
              <div className="kicker">Automatisk ämnessortering</div>
              <h2>Senaste signalerna</h2>
            </div>
            <p>
              Hämtat vid senaste webbbygget: {swedishTime(data.fetchedAt)}.
              Rubriker länkar alltid till originalpubliceringen.
            </p>
          </div>

          <LiveRadarClient
            items={data.items}
            sections={data.sections}
            sectionCounts={data.sectionCounts}
          />
        </section>
      </div>
    </main>
  );
}
