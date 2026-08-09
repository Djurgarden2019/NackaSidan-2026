import { runVerificationPipeline } from '../../lib/verificationPipeline';
import { checkSourceIndependence } from '../../lib/sourceIndependence';
import { runFinalControl } from '../../lib/finalControl';
import { buildEditorialQueue, editorialQueueSummary } from '../../lib/editorialQueue';

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

  const label = (status: string) =>
    status === 'REDO_FOR_REDAKTION'
      ? 'REDO FÖR REDAKTION'
      : status === 'KRAVER_MANUELL_KONTROLL'
        ? 'KRÄVER MANUELL KONTROLL'
        : 'STOPPAD';

  return (
    <main style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 27 · REDAKTIONSKÖN</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(54px,8vw,94px)', lineHeight: .95, margin: '12px 0 22px' }}>Från verifiering till redaktionellt beslut</h1>
      <p style={{ maxWidth: 840, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        Här samlas kandidater efter Källjägaren, Händelsematcharen, den oberoende källkontrollen och Slutkontrollen. Kön prioriterar vad redaktionen bör arbeta med först. Ingen artikel publiceras automatiskt.
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
        <strong>Publiceringsregel:</strong> Redo för redaktion betyder inte publicerad. Slutligt publiceringsbeslut fattas alltid redaktionellt.
      </div>

      <section style={{ marginTop: 42 }}>
        {rows.map((row, i) => {
          const ready = row.queueStatus === 'REDO_FOR_REDAKTION';
          const stopped = row.queueStatus === 'STOPPAD';
          return (
            <article key={row.id} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 240px', gap: 22, padding: '28px 0', borderTop: '1px solid #ccc' }}>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: '#777' }}>{row.section} · {row.source}</div>
                <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 27, margin: '7px 0 10px' }}>{row.title}</h2>
                <div style={{ padding: '12px 15px', background: '#f6f2e9', fontSize: 14 }}>
                  {row.finalControl.reasons.map((reason) => <div key={reason}>• {reason}</div>)}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: 38, fontWeight: 700 }}>{row.priority}/100</div>
                <div style={{ display: 'inline-block', marginTop: 7, padding: '7px 10px', border: `1px solid ${ready ? '#27834a' : stopped ? '#a61919' : '#a47b24'}`, fontWeight: 800, fontSize: 12 }}>
                  {label(row.queueStatus)}
                </div>
                <div style={{ marginTop: 9, fontSize: 12, color: '#666' }}>Slutkontroll: {row.finalControl.status.replaceAll('_', ' ')}</div>
              </div>
            </article>
          );
        })}
      </section>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 30, fontSize: 12 }}>
        NYHETSRADARN → KÄLLJÄGAREN → HÄNDELSEMATCHAREN → OBEROENDE KÄLLKONTROLL → SLUTKONTROLL → REDAKTIONSKÖ
      </footer>
    </main>
  );
}
