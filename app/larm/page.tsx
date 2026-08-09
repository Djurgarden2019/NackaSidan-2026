export const dynamic = 'force-static';

const larm = [
  ['KÄLLA NERE', 'HÖG', 'En bevakad källa svarar inte eller har slutat leverera nya poster inom förväntat intervall.'],
  ['MATCHNING FALLER', 'MEDEL', 'Andelen kandidater som kan kopplas till samma verifierade händelse faller tydligt mot normalnivån.'],
  ['OVANLIGT MÅNGA STOPP', 'MEDEL', 'Slutkontrollen stoppar en onormalt stor andel kandidater och bör granskas för käll- eller regelproblem.'],
  ['PUBLICERINGSFEL', 'KRITISK', 'Ett godkänt utkast kan inte materialiseras eller revisionsspåret saknar obligatorisk information.'],
  ['DEPLOY-FEL', 'HÖG', 'En ny version når inte produktion eller en kontroll i leveranskedjan misslyckas.'],
];

export default function LarmPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 35 · LARM & AVVIKELSER</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,92px)', lineHeight: .95, margin: '12px 0 22px' }}>När kedjan avviker ska redaktionen se det direkt</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Larmcentralen kompletterar Driftpanelen med tydliga avvikelser för källor, verifiering, matchning, publicering och deploy. Ett larm är en signal för granskning – aldrig ett automatiskt redaktionellt beslut.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['STATUS', 'BEVAKNING'], ['NIVÅER', '4'], ['ÅTGÄRD', 'MANUELL'], ['PUBLICERING', 'SKYDDAD']
        ].map(([name,value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Larmregel:</strong> Kritiska fel i publiceringssteget ska stoppa flödet tills en redaktör har granskat orsaken. Övriga larm ska synliggöras och följas upp.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Avvikelser som ska fångas</h2>
        {larm.map(([title, level, text], i) => (
          <article key={title} style={{ display: 'grid', gridTemplateColumns: '64px 230px 120px 1fr', gap: 20, padding: '24px 0', borderTop: '1px solid #ccc', alignItems: 'start' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{String(i + 1).padStart(2, '0')}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 23, margin: 0 }}>{title}</h3>
            <strong style={{ fontSize: 12, letterSpacing: 1.2 }}>{level}</strong>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        DRIFTPANEL → LARM & AVVIKELSER → REDAKTIONELL GRANSKNING → ÅTGÄRD → ÅTERSTÄLLT FLÖDE
      </footer>
    </main>
  );
}
