import { runVerificationPipeline } from '../../lib/verificationPipeline';
import { checkSourceIndependence } from '../../lib/sourceIndependence';
import { runFinalControl } from '../../lib/finalControl';
import { buildEditorialQueue, editorialQueueSummary } from '../../lib/editorialQueue';
import EditorialDecisionPanel from './EditorialDecisionPanel';

export const revalidate = 900;

export default async function RedaktionskonPage() {
  const verification = await runVerificationPipeline(12);

  const queueInput = verification.results.map((row, index) => {
    const best = row.best;
    const independence = best
      ? checkSourceIndependence(row.item.source || '', best)
      : { family: '', independent: false, reason: 'ingen verifierad andrakälla' };

    const finalControl = runFinalControl({
      eventScore: best?.eventScore || 0,
      independentSourceFamilies: best && independence.independent ? 2 : 1,
      sourceIndependenceApproved: !!best && independence.independent,
      hasSharedAgencyMaterial: independence.reason.includes('byråmaterial'),
    });

    return {
      id: `${index}-${row.item.title}`,
      title: row.item.title,
      section: row.item.category || 'Nyhet',
      source: row.item.source || 'Okänd källa',
      finalControl,
    };
  });

  const rows = buildEditorialQueue(queueInput);
  const summary = editorialQueueSummary(rows);

  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 28 · REDAKTÖRENS BESLUT</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,94px)', lineHeight: .95, margin: '12px 0 22px' }}>Redaktionen tar över där maskinen slutar</h1>
      <p style={{ maxWidth: 840, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Verifieringskedjan prioriterar kandidater och visar varför. Main 28 lägger det mänskliga redaktionella beslutet ovanpå systemet: godkänn för publiceringsförberedelse, skicka till manuell kontroll eller avvisa.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid #bbb', borderBottom: '3px solid #111', marginTop: 42 }}>
        {[
          ['TOTALT', summary.total],
          ['REDO', summary.ready],
          ['MANUELL', summary.manual],
          ['STOPPADE', summary.stopped],
        ].map(([name, value]) => (
          <div key={String(name)} style={{ padding: '25px 18px', borderRight: '1px solid #ddd' }}>
            <strong style={{ fontFamily: 'Georgia,serif', fontSize: 42 }}>{value}</strong>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4 }}>{name}</div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 18, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Publiceringsregel:</strong> Godkänd betyder godkänd för publiceringsförberedelse. Main 28 publicerar fortfarande ingenting automatiskt.
      </div>

      <EditorialDecisionPanel rows={rows} />

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ → REDAKTÖRENS BESLUT
      </footer>
    </main>
  );
}
