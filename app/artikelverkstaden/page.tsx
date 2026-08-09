export const dynamic = 'force-static';

const delar = [
  ['01', 'Verifierat underlag', 'Artikelverkstaden tar endast emot publiceringsförberedda utkast från Publiceringsmotorn. Källspår och redaktionellt beslut följer med.'],
  ['02', 'Rubrik och ingress', 'Formuleras utifrån det verifierade händelseunderlaget. Inga nya sakuppgifter får introduceras i bearbetningen.'],
  ['03', 'Brödtext', 'Utkastet struktureras till en läsbar artikel med tydlig åtskillnad mellan verifierade fakta, attribution och sådant som kräver fortsatt kontroll.'],
  ['04', 'Källnoteringar', 'Källfamiljer, oberoende stöd, händelsematchning och slutkontroll bevaras som redaktionellt granskningsspår.'],
  ['05', 'Redaktionell bearbetning', 'Redaktören kan ändra språk, disposition och vinkel men måste göra ny kontroll om en ändring tillför eller förändrar sakuppgifter.'],
  ['06', 'Leverans', 'Resultatet är ett komplett artikelutkast redo för sista redaktionella genomgång – inte en publicerad artikel.'],
];

export default function ArtikelverkstadenPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 30 · ARTIKELVERKSTADEN</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,94px)', lineHeight: .95, margin: '12px 0 22px' }}>Här blir det verifierade utkastet en artikel</h1>
      <p style={{ maxWidth: 850, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Artikelverkstaden förädlar Publiceringsmotorns godkända artikelpaket till ett komplett redaktionellt utkast. Den får förbättra språk och struktur, men aldrig hitta på fakta eller kringgå verifieringskedjan.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['UNDERLAG', 'VERIFIERAT'], ['BEARBETNING', 'REDAKTIONELL'], ['KÄLLSPÅR', 'BEVARAT'], ['PUBLICERING', 'SPÄRRAD']
        ].map(([name,value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Redaktionell regel:</strong> Om bearbetningen ändrar en sakuppgift måste uppgiften tillbaka genom kontrollkedjan. Main 30 publicerar ingenting automatiskt.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Från underlag till komplett utkast</h2>
        {delar.map(([n,title,text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px 250px 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ → REDAKTÖRENS BESLUT → PUBLICERINGSMOTORN → ARTIKELVERKSTADEN
      </footer>
    </main>
  );
}
