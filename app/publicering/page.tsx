export const dynamic = 'force-static';

const steg = [
  ['01', 'Uttryckligt beslut', 'Endast ett slutligt PUBLICERA-beslut får öppna publiceringssteget. Skicka tillbaka och Avbryt stoppar flödet.'],
  ['02', 'Redaktör', 'Ansvarig redaktör måste vara angiven och följer artikeln som publiceringssignatur.'],
  ['03', 'Källspår', 'Verifierade källor och kontrollkedjans resultat bevaras i revisionsposten.'],
  ['04', 'Tidsstämpel', 'Publiceringstillfället registreras så att det går att följa när beslutet verkställdes.'],
  ['05', 'Artikelsida', 'Det godkända utkastet kan därefter materialiseras som publicerad artikel med egen slug.'],
  ['06', 'Revisionslogg', 'Beslut, redaktör, tid, källspår och eventuell notering hålls ihop som en spårbar publiceringspost.'],
];

export default function PubliceringPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 32 · PUBLICERING & REVISIONSLOGG</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,90px)', lineHeight: .96, margin: '12px 0 22px' }}>Sista beslutet blir en spårbar publicering</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Main 32 definierar den kontrollerade övergången från godkänd förhandsgranskning till publicerad artikel. Varje publicering måste bära med sig redaktör, tidpunkt och källspår.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['BESLUT', 'PUBLICERA'], ['ANSVAR', 'NAMNGIVET'], ['KÄLLSPÅR', 'BEVARAT'], ['REVISION', 'SPÅRBAR']
        ].map(([name,value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Publiceringsregel:</strong> Ett utkast får inte bli artikel utan ett uttryckligt PUBLICERA-beslut, angiven redaktör och bevarat källspår.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Vad som registreras</h2>
        {steg.map(([n,title,text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px 250px 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ → REDAKTÖRENS BESLUT → PUBLICERINGSMOTORN → ARTIKELVERKSTADEN → FÖRHANDSGRANSKNING → PUBLICERING & REVISIONSLOGG
      </footer>
    </main>
  );
}
