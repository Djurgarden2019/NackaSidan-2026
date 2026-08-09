export const dynamic = 'force-static';

export default function PubliceringsmotorPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 29 · PUBLICERINGSMOTORN</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,94px)', lineHeight: .95, margin: '12px 0 22px' }}>Från godkänt beslut till färdigt artikelutkast</h1>
      <p style={{ maxWidth: 840, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Publiceringsmotorn tar endast emot material som redaktionen uttryckligen har godkänt. Den förbereder ett spårbart artikelutkast – men publicerar fortfarande ingenting automatiskt.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['IN', 'GODKÄND'],
          ['UT', 'UTKAST'],
          ['KÄLLOR', 'BEVARAS'],
          ['PUBLICERING', 'MANUELL'],
        ].map(([name, value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Säkerhetsregel:</strong> Main 29 kan skapa publiceringsförberedelse, aldrig själv publicera en artikel. Slutligt publiceringsbeslut ligger hos redaktionen.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Artikelpaketet</h2>
        {[
          ['01', 'Rubrik', 'Byggs från den verifierade händelsen – inte från en enskild källas formulering.'],
          ['02', 'Ingress', 'Sammanfattar det som verifieringskedjan faktiskt har stöd för.'],
          ['03', 'Brödtext', 'Struktureras för redaktionell bearbetning utan att lägga till obekräftade uppgifter.'],
          ['04', 'Källspår', 'Primär källa, oberoende stöd, matchningsbedömning och slutkontroll följer med utkastet.'],
          ['05', 'Redaktionell signatur', 'Godkännande, redaktör och tidsstämpel ska följa materialet till publiceringsförberedelsen.'],
        ].map(([n, title, text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px 220px 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ → REDAKTÖRENS BESLUT → PUBLICERINGSMOTORN
      </footer>
    </main>
  );
}
