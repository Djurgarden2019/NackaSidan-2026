export const dynamic = 'force-static';

const metrics = [
  ['KANDIDATER', '12', 'Senaste körningen genom verifieringskedjan'],
  ['REDO', '2', 'Kandidater som nådde redaktionen'],
  ['STOPPADE', '10', 'Kandidater som stoppades av kvalitetsreglerna'],
  ['PUBLICERADE', '0', 'Faktiska publiceringar registreras här när flödet används skarpt'],
];

const controls = [
  ['01', 'Inflöde', 'Visar hur många kandidater Nyhetsradarn skickar in i kedjan och om inflödet förändras ovanligt mycket.'],
  ['02', 'Verifieringsgrad', 'Följer hur stor andel som får stark händelsematchning och oberoende källstöd.'],
  ['03', 'Stopporsaker', 'Samlar de vanligaste skälen till att kandidater underkänns eller kräver manuell kontroll.'],
  ['04', 'Redaktionella beslut', 'Visar hur många artiklar som godkänns, skickas tillbaka eller avvisas efter mänsklig granskning.'],
  ['05', 'Publiceringskvalitet', 'Följer verifieringspoäng, komplett revisionsspår och eventuella sakfel som upptäcks efter publicering.'],
  ['06', 'Driftfel', 'Ger plats för fel i datakällor, matchning, build/deploy och andra avbrott i publiceringskedjan.'],
];

export default function DriftpanelPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 34 · DRIFTPANEL & KVALITETSKONTROLL</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,90px)', lineHeight: .96, margin: '12px 0 22px' }}>Se hela redaktionen som ett system</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Driftpanelen samlar nyckeltal för hela kedjan – från kandidat till publicering – så att redaktionen kan upptäcka svagheter, ovanliga mönster och kvalitetsproblem innan de blir redaktionella fel.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {metrics.map(([name,value,desc]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 40 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 3 }}>{name}</div>
            <div style={{ fontSize: 12, color: '#666', lineHeight: 1.4, marginTop: 8 }}>{desc}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Kvalitetsprincip:</strong> Driftpanelen ska hjälpa redaktionen hitta fel i systemet – inte ersätta redaktionell bedömning.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Vad vi följer</h2>
        {controls.map(([n,title,text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px 250px 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ → REDAKTÖRENS BESLUT → PUBLICERINGSMOTORN → ARTIKELVERKSTADEN → FÖRHANDSGRANSKNING → PUBLICERING → REVISIONSVY → DRIFTPANEL
      </footer>
    </main>
  );
}
