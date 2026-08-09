export const dynamic = 'force-static';

const actions = [
  ['PUBLICERA', 'Endast ett uttryckligt redaktionellt beslut får flytta ett färdigt utkast vidare till publicering.'],
  ['SKICKA TILLBAKA', 'Om språk, källor eller sakuppgifter behöver ändras går artikeln tillbaka till Artikelverkstaden och vid behov verifieringskedjan.'],
  ['AVBRYT', 'Stoppar publiceringsförberedelsen utan att radera källspår, beslut eller tidigare granskning.'],
];

export default function ForhandsgranskningPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 31 · FÖRHANDSGRANSKNING</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,94px)', lineHeight: .95, margin: '12px 0 22px' }}>Sista kontrollen före publicering</h1>
      <p style={{ maxWidth: 860, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Här granskas det färdiga artikelutkastet som om det redan låg på sajten. Rubrik, ingress, brödtext, källspår och redaktionellt beslut visas tillsammans innan någon publicering kan ske.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['UTKAST', 'FÄRDIGT'], ['KÄLLSPÅR', 'SYNLIGT'], ['BESLUT', 'MANUELLT'], ['PUBLICERING', 'LÅST']
        ].map(([name,value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Publiceringsregel:</strong> Main 31 visar det sista beslutssteget. Ingen artikel publiceras utan ett uttryckligt redaktionellt beslut.
      </div>

      <section style={{ marginTop: 42, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 42 }}>
        <article style={{ borderTop: '3px solid #111', paddingTop: 20 }}>
          <div style={{ color: '#a61919', fontWeight: 800, letterSpacing: 1.4, fontSize: 12 }}>FÖRHANDSVISNING · EXEMPEL</div>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 46, lineHeight: 1.02, margin: '12px 0 16px' }}>Verifierad nyhet redo för sista redaktionella genomgång</h2>
          <p style={{ fontFamily: 'Georgia,serif', fontSize: 21, lineHeight: 1.45, marginBottom: 28 }}>
            Ingressen visar den verifierade kärnan i artikeln. Endast uppgifter som har stöd i kontrollkedjan ska finnas i denna version.
          </p>
          <p style={{ fontFamily: 'Georgia,serif', fontSize: 18, lineHeight: 1.7 }}>
            Brödtexten presenteras i samma läsordning som på den publika sajten. Redaktionella ändringar som påverkar en sakuppgift måste tillbaka till kontrollkedjan innan artikeln åter kan bli publiceringsklar.
          </p>
          <div style={{ marginTop: 28, padding: '16px 18px', background: '#f6f2e9', fontSize: 13, lineHeight: 1.6 }}>
            <strong>Källspår:</strong> primär källa, oberoende stöd, händelsematchning, slutkontroll, redaktörens beslut och tidsstämpel följer med till detta steg.
          </div>
        </article>

        <aside style={{ borderTop: '3px solid #111', paddingTop: 20 }}>
          <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 30, marginTop: 0 }}>Slutligt beslut</h3>
          {actions.map(([title,text], i) => (
            <div key={title} style={{ marginTop: i ? 12 : 0, padding: '16px', border: '1px solid #bbb', background: i === 0 ? '#eef8f0' : i === 1 ? '#fff8e8' : '#fff2f2' }}>
              <div style={{ fontWeight: 900, letterSpacing: .8 }}>{title}</div>
              <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>{text}</p>
            </div>
          ))}
        </aside>
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 42, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ → REDAKTÖRENS BESLUT → PUBLICERINGSMOTORN → ARTIKELVERKSTADEN → FÖRHANDSGRANSKNING
      </footer>
    </main>
  );
}
