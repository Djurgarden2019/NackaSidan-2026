import Link from 'next/link';
import { getLiveNews } from '../../lib/liveNews';
import { getNewsHealth } from '../../lib/newsHealth';

export const revalidate = 900;

export default async function DriftstatusPage() {
  const radar = await getLiveNews();
  const { unavailable, alerts, status } = getNewsHealth(radar);

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 327 · DRIFTSTATUS</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(48px,7vw,82px)', lineHeight: .98, margin: '12px 0 18px' }}>Nyhetsradarns status</h1>
      <p style={{ fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45, maxWidth: 760 }}>
        En enkel visuell kontroll av samma live-data och samma hälsomodell som Driftpanelen och API-endpointen använder.
      </p>

      <nav aria-label="Driftverktyg" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
        <Link href="/driftpanel" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Öppna Driftpanelen</Link>
        <Link href="/api/news-health" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Visa health-JSON</Link>
        <Link href="/" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Till startsidan</Link>
      </nav>

      <section aria-label="Aktuell driftstatus" style={{ marginTop: 34, border: '3px solid #111', padding: '28px 26px', background: status === 'STABIL' ? '#eef4ec' : '#f7eee5' }}>
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1.6 }}>STATUS</div>
        <div style={{ fontFamily: 'Georgia,serif', fontSize: 54, lineHeight: 1, marginTop: 8 }}>{status}</div>
        {alerts.length ? (
          <ul style={{ margin: '18px 0 0', paddingLeft: 20, lineHeight: 1.6 }}>
            {alerts.map(alert => <li key={alert}>{alert}</li>)}
          </ul>
        ) : (
          <p style={{ margin: '16px 0 0' }}>Inga automatiska driftvarningar just nu.</p>
        )}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14, marginTop: 28 }}>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{radar.items.length}</strong><div>Aktuella artiklar</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{radar.localCount}</strong><div>Nacka/Lokalt</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{radar.highPriority}</strong><div>Hög prioritet</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{radar.feeds.length - unavailable.length}/{radar.feeds.length}</strong><div>Källor online</div></div>
      </section>

      {unavailable.length ? (
        <section style={{ marginTop: 34 }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 30 }}>Källor som behöver kontrolleras</h2>
          <ul style={{ lineHeight: 1.6 }}>
            {unavailable.map(feed => <li key={feed.name}>{feed.name}</li>)}
          </ul>
        </section>
      ) : null}

      <p style={{ marginTop: 28, fontSize: 13, color: '#555' }}>
        Senast hämtad: {new Date(radar.fetchedAt).toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}. Data mellanlagras i 15 minuter.
      </p>
    </main>
  );
}
