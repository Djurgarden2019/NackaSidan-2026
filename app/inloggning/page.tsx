export const dynamic = 'force-static';

const steps = [
  ['01', 'Identifiera användaren', 'Inloggningen ska koppla en verifierad identitet till ett användarkonto.'],
  ['02', 'Skapa session', 'Efter lyckad inloggning skapas en tidsbegränsad session med användar-id, namn, e-post och roll.'],
  ['03', 'Kontrollera roll', 'Sessionens roll kopplas till Main 38:s behörighetsmodell innan redaktionella funktioner öppnas.'],
  ['04', 'Skydda känsliga sidor', 'Redaktionskö, publicering, revisionsspår, larm och administration ska kräva aktiv session och rätt behörighet.'],
  ['05', 'Avsluta session', 'Utloggning och utgången session ska omedelbart ta bort åtkomst till interna funktioner.'],
];

export default function InloggningPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 39 · INLOGGNING & SESSIONER</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,90px)', lineHeight: .96, margin: '12px 0 22px' }}>Rollerna kopplas till riktiga användarsessioner</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Main 39 etablerar sessionslagret mellan användarens identitet och Main 38:s behörigheter. Det här är grunden för riktig åtkomstkontroll, men inte en komplett autentiseringsleverantör i sig.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['IDENTITET', 'VERIFIERAD'], ['SESSION', 'TIDSBUNDEN'], ['ROLL', 'KOPPLAD'], ['ÅTKOMST', 'KONTROLLERAD']
        ].map(([name,value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Säkerhetsregel:</strong> Main 39 skapar sessionsmodellen och åtkomstprinciperna. Produktion kräver fortfarande en riktig autentiseringslösning med säker cookie/token-hantering och serverside-kontroller.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Inloggningskedjan</h2>
        {steps.map(([n,title,text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px 250px 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        IDENTITET → SESSION → ROLL → BEHÖRIGHET → REDAKTIONELL FUNKTION → REVISIONSLOGG
      </footer>
    </main>
  );
}
