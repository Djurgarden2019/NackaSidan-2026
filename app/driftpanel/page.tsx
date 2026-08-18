import { getLiveNews } from '../../lib/liveNews';

export const revalidate = 900;

const controls = [
  ['01', 'Inflöde', 'Visar hur många aktuella artiklar Nyhetsradarn har efter åldersfilter och deduplicering.'],
  ['02', 'Lokalt innehåll', 'Följer hur många artiklar som faktiskt klassificeras som Nacka/Lokalt från betrodda lokala signaler.'],
  ['03', 'Prioritet', 'Visar hur många artiklar som just nu är markerade med hög prioritet i den redaktionella sorteringen.'],
  ['04', 'Källstatus', 'Visar vilka RSS-källor som svarar och hur många poster varje källa levererar till parsern.'],
  ['05', 'Kategoribalans', 'Gör det lättare att upptäcka om en kategori plötsligt blir tom eller ovanligt stor.'],
  ['06', 'Driftvarningar', 'Samlar tydliga varningar när källor är nere, Nacka-innehåll saknas eller en kategori blir tom.'],
];

export default async function DriftpanelPage() {
  const radar = await getLiveNews();
  const connected = radar.feeds.filter(feed => feed.status === 'Ansluten').length;
  const unavailableFeeds = radar.feeds.filter(feed => feed.status !== 'Ansluten');
  const emptySections = radar.sections.filter(section => section !== 'Alla' && (radar.sectionCounts[section] ?? 0) === 0);
  const alerts = [
    ...unavailableFeeds.map(feed => `${feed.name} är tillfälligt otillgänglig.`),
    ...(radar.localCount === 0 ? ['Nacka/Lokalt har inga aktuella artiklar. Kontrollera de officiella Nacka-flödena innan publicering.'] : []),
    ...(radar.items.length === 0 ? ['Nyhetsradarn saknar helt aktuellt innehåll. Kontrollera RSS-inflödet omedelbart.'] : []),
    ...(emptySections.length ? [`Tomma kategorier just nu: ${emptySections.join(', ')}.`] : []),
  ];
  const health = alerts.length === 0 ? 'STABIL' : unavailableFeeds.length || radar.items.length === 0 ? 'ÅTGÄRD' : 'BEVAKA';
  const metrics = [
    ['AKTUELLA', String(radar.items.length), 'Artiklar kvar efter åldersfilter, sortering och deduplicering'],
    ['NACKA/LOKALT', String(radar.localCount), 'Aktuella artiklar klassificerade som lokala'],
    ['HÖG PRIORITET', String(radar.highPriority), 'Artiklar som just nu kräver extra redaktionell uppmärksamhet'],
    ['KÄLLOR ONLINE', `${connected}/${radar.feeds.length}`, unavailableFeeds.length ? `${unavailableFeeds.length} källa/källor är tillfälligt otillgängliga` : 'Alla konfigurerade källor svarar'],
  ];

  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 323 · DRIFTVARNINGAR</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,90px)', lineHeight: .96, margin: '12px 0 22px' }}>Se Nyhetsradarn som ett levande system</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Driftpanelen använder samma live-data som Nyhetsradarn och lyfter nu automatiskt fram tillstånd som behöver bevakas eller åtgärdas.
      </p>

      <section aria-label="Driftstatus" style={{ marginTop: 34, padding: '22px 24px', border: '3px solid #111', background: alerts.length ? '#f7eee5' : '#eef4ec' }}>
        <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 1.5 }}>DRIFTSTATUS · {health}</div>
        {alerts.length ? (
          <ul style={{ margin: '12px 0 0', paddingLeft: 20, lineHeight: 1.55 }}>
            {alerts.map(alert => <li key={alert}>{alert}</li>)}
          </ul>
        ) : (
          <p style={{ margin: '10px 0 0' }}>Inga automatiska driftvarningar just nu.</p>
        )}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {metrics.map(([name,value,desc]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 40 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 3 }}>{name}</div>
            <div style={{ fontSize: 12, color: '#666', lineHeight: 1.4, marginTop: 8 }}>{desc}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Senast hämtad:</strong> {new Date(radar.fetchedAt).toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}. Data mellanlagras i 15 minuter för stabilitet.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Källhälsa</h2>
        <div style={{ borderTop: '1px solid #ccc' }}>
          {radar.feeds.map(feed => (
            <article key={feed.name} style={{ display: 'grid', gridTemplateColumns: 'minmax(230px,1.2fr) 130px 90px minmax(220px,1fr)', gap: 18, padding: '16px 0', borderBottom: '1px solid #ddd', alignItems: 'start' }}>
              <div>
                <strong>{feed.name}</strong>
                {feed.note ? <div style={{ color: '#666', fontSize: 12, marginTop: 4 }}>{feed.note}</div> : null}
              </div>
              <div style={{ fontWeight: 700 }}>{feed.status}</div>
              <div>{feed.count} poster</div>
              <a href={feed.homepage} target="_blank" rel="noreferrer">Öppna källan</a>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Kategoribalans</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12 }}>
          {radar.sections.filter(section => section !== 'Alla').map(section => (
            <div key={section} style={{ borderTop: '2px solid #111', padding: '12px 4px' }}>
              <strong style={{ fontFamily: 'Georgia,serif', fontSize: 28 }}>{radar.sectionCounts[section] ?? 0}</strong>
              <div style={{ fontSize: 12, fontWeight: 800, marginTop: 4 }}>{section}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Vad vi följer</h2>
        {controls.map(([n,title,text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px minmax(190px,250px) 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLHÄLSA → DRIFTVARNING → REDAKTIONELL KONTROLL → PUBLICERING
      </footer>
    </main>
  );
}
