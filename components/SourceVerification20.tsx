import { getLiveNews } from '../lib/liveNews';
import { corroborate } from '../lib/sourceEngine';

export default async function SourceVerification20() {
  const live = await getLiveNews();
  const rows = live.items
    .map(item => ({ item, check: corroborate(item, live.items) }))
    .sort((a,b) => b.check.confidence - a.check.confidence)
    .slice(0, 6);

  const verified = rows.filter(x => x.check.status === 'Verifierad kandidat').length;

  return (
    <section className="s20">
      <div className="s20-head">
        <div>
          <div className="kicker">Main 20 · Källmotorn</div>
          <h2>Källverifiering</h2>
          <p>Systemet söker stöd för samma händelse bland de anslutna nyhetskällorna, skiljer källfamiljer åt och visar om en signal har oberoende stöd.</p>
        </div>
        <div className="s20-number"><strong>{verified}</strong><span>verifierade kandidater</span></div>
      </div>

      <div className="s20-flow">
        <span>Signal</span><b>→</b><span>Matchning</span><b>→</b><span>Oberoende källa</span><b>→</b><span>Slutkontroll</span>
      </div>

      <div className="s20-table">
        {rows.map(({item,check}, i) => (
          <article className="s20-row" key={item.link}>
            <div className="s20-index">{String(i+1).padStart(2,'0')}</div>
            <div>
              <div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div>
              <h3>{item.title}</h3>
              <div className="s20-sources">
                {check.independentSources.map(source => <span key={source}>● {source}</span>)}
              </div>
            </div>
            <div className="s20-result">
              <strong>{check.confidence}/100</strong>
              <span className={check.status === 'Verifierad kandidat' ? 'verified' : check.status.startsWith('Känslig') ? 'sensitive' : 'pending'}>
                {check.status}
              </span>
              <small>{check.independentSources.length} oberoende källfamilj{check.independentSources.length === 1 ? '' : 'er'}</small>
            </div>
          </article>
        ))}
      </div>

      <div className="s20-note">
        <strong>Kontrollprincip:</strong> två källor betyder inte automatiskt att en uppgift är sann. Källmotorn används för att hitta oberoende stöd; känsliga eller omstridda uppgifter kräver alltid manuell kontroll av originalmaterialet.
      </div>
    </section>
  );
}
