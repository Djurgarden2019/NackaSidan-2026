export const dynamic = 'force-static';

const roles = [
  ['LÄSARE', 'Publikt innehåll', 'Kan läsa publicerade artiklar men får inte tillgång till redaktionens interna arbetsflöde.'],
  ['REDAKTÖR', 'Redaktionellt arbete', 'Kan granska kandidater, bearbeta artiklar, fatta publiceringsbeslut, se revisionsspår och hantera larm.'],
  ['ADMINISTRATÖR', 'Full kontroll', 'Har redaktörens rättigheter och kan dessutom administrera användare, roller och systembehörigheter.'],
];

const matrix = [
  ['Läsa publicerat', '✓', '✓', '✓'],
  ['Öppna redaktionssystemet', '–', '✓', '✓'],
  ['Granska kandidater', '–', '✓', '✓'],
  ['Redigera artikelutkast', '–', '✓', '✓'],
  ['Publicera artiklar', '–', '✓', '✓'],
  ['Se revisionsspår', '–', '✓', '✓'],
  ['Hantera larm', '–', '✓', '✓'],
  ['Administrera användare', '–', '–', '✓'],
];

export default function BehorigheterPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 38 · ROLLSTYRNING & BEHÖRIGHETER</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,90px)', lineHeight: .96, margin: '12px 0 22px' }}>Rätt person får göra rätt sak</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Behörighetsmodellen delar upp NackaSidans redaktionella system i tre roller. Principen är minsta nödvändiga behörighet: publika läsare kan läsa, redaktörer kan arbeta redaktionellt och administratörer kan även styra åtkomst.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 42 }}>
        {roles.map(([role, scope, text]) => (
          <article key={role} style={{ borderTop: '4px solid #111', padding: '20px 4px 24px' }}>
            <div style={{ color: '#a61919', fontWeight: 800, fontSize: 12, letterSpacing: 1.4 }}>{scope}</div>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 30, margin: '8px 0 12px' }}>{role}</h2>
            <p style={{ lineHeight: 1.55, margin: 0 }}>{text}</p>
          </article>
        ))}
      </section>

      <div style={{ marginTop: 20, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Säkerhetsregel:</strong> Ett dolt gränssnitt är inte ett behörighetsskydd. När autentisering kopplas in ska samma rättighetskontroll även göras på serversidan för varje känslig åtgärd.
      </div>

      <section style={{ marginTop: 44 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Behörighetsmatris</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
            <thead><tr>{['Funktion', 'Läsare', 'Redaktör', 'Administratör'].map(h => <th key={h} style={{ textAlign: 'left', borderBottom: '3px solid #111', padding: '14px 12px' }}>{h}</th>)}</tr></thead>
            <tbody>{matrix.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={i} style={{ borderBottom: '1px solid #ccc', padding: '14px 12px', fontWeight: i ? 800 : 400 }}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 38, fontSize: 12 }}>
        IDENTITET → ROLL → BEHÖRIGHET → REDAKTIONELL ÅTGÄRD → REVISIONSLOGG
      </footer>
    </main>
  );
}
