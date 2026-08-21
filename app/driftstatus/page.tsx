import Link from 'next/link';
import { getLiveNews } from '../../lib/liveNews';
import { getNewsHealth } from '../../lib/newsHealth';
import { getDeploymentIdentity } from '../../lib/deploymentIdentity';

export const revalidate = 900;

const reasonLabels: Record<string,string> = {
  SOURCE_DEGRADED: 'En eller flera källor svarar inte',
  SOURCE_STALE: 'En eller flera anslutna källor levererar för gammalt daterat innehåll',
  SOURCE_UNDATED: 'En eller flera anslutna källor saknar daterat innehåll i aktuell radar',
  LOCAL_EMPTY: 'Nacka/Lokalt saknar aktuella artiklar',
  RADAR_EMPTY: 'Nyhetsradarn saknar aktuellt innehåll',
  CATEGORY_EMPTY: 'En eller flera kategorier är tomma',
  ALL_SOURCES_DOWN: 'Alla källor är nere',
  ALL_LOCAL_SOURCES_DOWN: 'Alla Nacka/Lokalt-källor är nere',
  NEWS_STALE: 'Den nyaste daterade artikeln är för gammal',
};

const sourceStateLabels: Record<string,string> = {
  AKTIV: 'Ansluten och färsk',
  GAMMAL: 'Ansluten men gammal',
  INGEN_DATERAD_DATA: 'Ansluten men saknar daterad artikel',
  NERE: 'Källan svarar inte',
};

export default async function DriftstatusPage() {
  const radar = await getLiveNews();
  const deployment = getDeploymentIdentity();
  const {
    unavailable,
    alerts,
    reasons,
    status,
    newestPublishedAt,
    newestAgeHours,
    staleAfterHours,
    sourceFreshness,
    staleSources,
    undatedSources,
    activeSources,
    downSources,
    sourceStaleAfterHours,
  } = getNewsHealth(radar);
  const freshnessLabel = newestAgeHours === null ? 'Okänd' : `${Math.round(newestAgeHours * 10) / 10} h`;

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 341 · DRIFTSTATUS</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(48px,7vw,82px)', lineHeight: .98, margin: '12px 0 18px' }}>Nyhetsradarns status</h1>
      <p style={{ fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45, maxWidth: 760 }}>
        Visuell kontroll av live-data, statusregler, orsakskoder, källhälsa och den deployment som faktiskt kör.
      </p>

      <nav aria-label="Driftverktyg" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
        <Link href="/driftpanel" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Öppna Driftpanelen</Link>
        <Link href="/api/news-health" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Visa health-JSON</Link>
        <Link href="/api/news-health/live" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Liveness-probe</Link>
        <Link href="/api/news-health/ready" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Readiness-probe</Link>
        <Link href="/" style={{ border: '1px solid #111', padding: '10px 14px', textDecoration: 'none', fontWeight: 700 }}>Till startsidan</Link>
      </nav>

      <section aria-label="Deployment-identitet" style={{ marginTop: 24, padding: '18px', border: '1px solid #111', background: '#f7f5f1' }}>
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1.4 }}>AKTUELL DEPLOYMENT</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14, marginTop: 14 }}>
          <div><strong>Commit</strong><div style={{ fontFamily: 'monospace', marginTop: 4 }}>{deployment.shortCommitSha ?? 'Okänd'}</div></div>
          <div><strong>Miljö</strong><div style={{ marginTop: 4 }}>{deployment.environment}</div></div>
          <div><strong>Git-ref</strong><div style={{ fontFamily: 'monospace', marginTop: 4 }}>{deployment.gitRef ?? 'Okänd'}</div></div>
          <div><strong>Deployment</strong><div style={{ marginTop: 4 }}>{deployment.deploymentUrl ? <a href={`https://${deployment.deploymentUrl}`} target="_blank" rel="noreferrer">Öppna körande deploy</a> : 'Okänd'}</div></div>
        </div>
      </section>

      <section aria-label="Probe-status" style={{ marginTop: 24, padding: '16px 18px', background: '#f7f5f1', lineHeight: 1.55 }}>
        <strong>Övervakningsprober:</strong> liveness svarar om själva appen kör. Readiness använder Nyhetsradarns hälsomodell och returnerar 503 endast vid ÅTGÄRD. Båda stöder GET och HEAD.
      </section>

      <section aria-label="Aktuell driftstatus" style={{ marginTop: 34, border: '3px solid #111', padding: '28px 26px', background: status === 'STABIL' ? '#eef4ec' : '#f7eee5' }}>
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1.6 }}>STATUS</div>
        <div style={{ fontFamily: 'Georgia,serif', fontSize: 54, lineHeight: 1, marginTop: 8 }}>{status}</div>
        {alerts.length ? <ul style={{ margin: '18px 0 0', paddingLeft: 20, lineHeight: 1.6 }}>{alerts.map(alert => <li key={alert}>{alert}</li>)}</ul> : <p style={{ margin: '16px 0 0' }}>Inga automatiska driftvarningar just nu.</p>}
      </section>

      {reasons.length ? (
        <section aria-label="Orsakskoder" style={{ marginTop: 24 }}>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 30 }}>Varför denna status?</h2>
          <div style={{ display: 'grid', gap: 10 }}>{reasons.map(reason => <div key={reason} style={{ borderLeft: '3px solid #a61919', padding: '10px 14px', background: '#f7f5f1' }}><strong style={{ fontFamily: 'monospace' }}>{reason}</strong><div style={{ marginTop: 4 }}>{reasonLabels[reason] ?? reason}</div></div>)}</div>
        </section>
      ) : null}

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginTop: 28 }}>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{radar.items.length}</strong><div>Aktuella artiklar</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{freshnessLabel}</strong><div>Nyaste artikelns ålder</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{activeSources.length}</strong><div>Aktiva källor</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{staleSources.length}</strong><div>Gamla källor</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{undatedSources.length}</strong><div>Utan daterad data</div></div>
        <div style={{ borderTop: '2px solid #111', paddingTop: 12 }}><strong style={{ fontSize: 34 }}>{downSources.length}</strong><div>Nere</div></div>
      </section>

      <section aria-label="Färskhetsgräns" style={{ marginTop: 24, padding: '16px 18px', background: '#f7f5f1' }}>
        <strong>Färskhetskontroll:</strong> BEVAKA aktiveras om den nyaste daterade artikeln är äldre än {staleAfterHours} timmar eller om en ansluten källa klassificeras som GAMMAL eller INGEN_DATERAD_DATA.
        {newestPublishedAt ? <div style={{ marginTop: 6 }}>Nyaste daterade publicering: {new Date(newestPublishedAt).toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}.</div> : null}
      </section>

      <section aria-label="Källstatus" style={{ marginTop: 34 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 30 }}>Status per källa</h2>
        <p style={{ lineHeight: 1.5 }}>Varje källa klassificeras separat. En ansluten källa räknas som gammal om dess senaste daterade artikel är äldre än {sourceStaleAfterHours} timmar.</p>
        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {sourceFreshness.map(source => {
            const age = source.ageHours === null ? 'Okänd ålder' : `${Math.round(source.ageHours * 10) / 10} h`;
            return (
              <div key={source.name} style={{ display: 'grid', gridTemplateColumns: 'minmax(220px,1fr) minmax(170px,.6fr) minmax(120px,.4fr)', gap: 12, borderTop: '1px solid #bbb', paddingTop: 10, alignItems: 'baseline' }}>
                <strong>{source.name}</strong>
                <span>{sourceStateLabels[source.state] ?? source.state}</span>
                <span>{age}</span>
              </div>
            );
          })}
        </div>
      </section>

      {unavailable.length ? <section style={{ marginTop: 34 }}><h2 style={{ fontFamily: 'Georgia,serif', fontSize: 30 }}>Nedkopplade källor</h2><ul style={{ lineHeight: 1.6 }}>{unavailable.map(feed => <li key={feed.name}>{feed.name}</li>)}</ul></section> : null}

      <p style={{ marginTop: 28, fontSize: 13, color: '#555' }}>Senast hämtad: {new Date(radar.fetchedAt).toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}. Data mellanlagras i 15 minuter.</p>
    </main>
  );
}
