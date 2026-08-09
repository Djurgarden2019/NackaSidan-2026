export const dynamic = 'force-static';

const exempel = [
  {
    title: 'Trafikolycka vid Kungens kurva – tre bilar i krock',
    slug: 'trafikolycka-kungens-kurva-tre-bilar',
    editor: 'SS',
    publishedAt: '2026-08-10T00:00:00+02:00',
    score: 90,
    sources: ['Primärkälla', 'Oberoende andrakälla'],
  },
  {
    title: 'Skogsbrand i skärgården',
    slug: 'skogsbrand-i-skargarden',
    editor: 'SS',
    publishedAt: '2026-08-10T00:00:00+02:00',
    score: 90,
    sources: ['Primärkälla', 'Oberoende andrakälla'],
  },
];

export default function PubliceradePage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 33 · PUBLICERADE ARTIKLAR & REVISIONSVY</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,90px)', lineHeight: .96, margin: '12px 0 22px' }}>Varje publicering ska kunna granskas i efterhand</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Här samlas publicerade artiklar tillsammans med sitt revisionsspår. Redaktionen ska snabbt kunna se vem som publicerade, när beslutet togs, vilka källor som låg bakom och vilken verifieringsnivå artikeln hade.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['PUBLICERADE', exempel.length], ['SPÅRBARA', exempel.length], ['MED KÄLLSPÅR', exempel.length], ['REVISION', 'AKTIV']
        ].map(([name,value]) => (
          <div key={String(name)} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 30 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Revisionsprincip:</strong> En publicerad artikel ska aldrig förlora kopplingen till beslut, redaktör, tidpunkt och verifieringsspår.
      </div>

      <section style={{ marginTop: 42 }}>
        {exempel.map((item, i) => (
          <article key={item.slug} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 300px', gap: 22, padding: '28px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: '#777' }}>PUBLICERAD · /artikel/{item.slug}</div>
              <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 28, margin: '7px 0 12px' }}>{item.title}</h2>
              <div style={{ padding: '12px 15px', background: '#f6f2e9', fontSize: 14 }}>
                <div><strong>Källspår:</strong> {item.sources.join(' + ')}</div>
                <div style={{ marginTop: 5 }}><strong>Verifiering:</strong> {item.score}/100</div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: 34, fontWeight: 700 }}>{item.score}/100</div>
              <div style={{ marginTop: 9, fontSize: 13 }}><strong>Redaktör:</strong> {item.editor}</div>
              <div style={{ marginTop: 5, fontSize: 13 }}><strong>Publicerad:</strong> {new Date(item.publishedAt).toLocaleString('sv-SE')}</div>
              <div style={{ marginTop: 12, padding: '8px 10px', border: '1px solid #27834a', display: 'inline-block', fontWeight: 800, fontSize: 12 }}>REVISIONSSPÅR KOMPLETT</div>
            </div>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        PUBLICERING → PUBLICERADE ARTIKLAR → REVISIONSVY
      </footer>
    </main>
  );
}
