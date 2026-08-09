export const dynamic = 'force-static';

const checks = [
  ['01', 'Källtillgänglighet', 'Kontrollerar hur stor andel av de bevakade källorna som svarar och signalerar varning eller kritiskt läge vid tydliga bortfall.'],
  ['02', 'Matchningsgrad', 'Följer hur stor andel kandidater som kan kopplas till verifierade händelser och fångar plötsliga kvalitetsfall.'],
  ['03', 'Stoppandel', 'Följer hur många kandidater som stoppas i kontrollkedjan och flaggar onormalt höga nivåer.'],
  ['04', 'Publiceringsfel', 'Ett enda registrerat publiceringsfel klassas som kritiskt och ska vidare till Larm & avvikelser.'],
  ['05', 'Deploy-status', 'Bekräftar att senaste deploy är frisk innan systemet betraktas som fullt operativt.'],
];

export default function HalsokontrollPage() {
  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 36 · AUTOMATISK HÄLSOKONTROLL</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,92px)', lineHeight: .95, margin: '12px 0 22px' }}>Systemet kontrollerar sig självt – redaktionen fattar besluten</h1>
      <p style={{ maxWidth: 860, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Hälsokontrollen sammanställer återkommande signaler från källor, matchning, stoppandel, publicering och deploy till en gemensam status: OK, VARNING eller KRITISK. Resultatet kan matas vidare till Driftpanelen och Larmsidan.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['KÖRNING', 'ÅTERKOMMANDE'], ['STATUS', '3 NIVÅER'], ['LARM', 'KOPPLAT'], ['BESLUT', 'MÄNSKLIGT']
        ].map(([name,value]) => (
          <div key={name} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 27 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, marginTop: 5 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Driftregel:</strong> Hälsokontrollen får klassificera systemstatus och skapa larmsignaler, men aldrig ändra eller publicera redaktionellt innehåll.
      </div>

      <section style={{ marginTop: 42 }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 38 }}>Det som kontrolleras</h2>
        {checks.map(([n,title,text]) => (
          <article key={n} style={{ display: 'grid', gridTemplateColumns: '64px 250px 1fr', gap: 22, padding: '24px 0', borderTop: '1px solid #ccc' }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{n}</div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 25, margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{text}</p>
          </article>
        ))}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        AUTOMATISK HÄLSOKONTROLL → DRIFTPANEL → LARM & AVVIKELSER → REDAKTIONELL GRANSKNING
      </footer>
    </main>
  );
}
