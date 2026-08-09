import { getLiveNews } from '../lib/liveNews';
import { corroborate } from '../lib/sourceEngine';
import { huntSecondSources, isGenericHeadline } from '../lib/sourceHunter';

export default async function SourceHunter21() {
  const live = await getLiveNews();

  const candidates = live.items
    .filter(item => !isGenericHeadline(item.title))
    .filter(item => corroborate(item, live.items).independentSources.length < 2)
    .slice(0, 5);

  const hunted = await Promise.all(
    candidates.map(async item => ({ item, hunt: await huntSecondSources(item) }))
  );

  const found = hunted.filter(row => row.hunt.independentSources.length > 0).length;

  return (
    <section className="s21">
      <div className="s21-head">
        <div>
          <div className="kicker">Main 21 · Källjägaren</div>
          <h2>Aktiv jakt på andra källan</h2>
          <p>När Källmotorn bara hittar en källa söker Källjägaren efter oberoende publiceringar av samma konkreta händelse. Generiska samlingsrubriker sorteras bort.</p>
        </div>
        <div className="s21-stat">
          <strong>{found}</strong>
          <span>andra källor hittade</span>
        </div>
      </div>

      <div className="s21-list">
        {hunted.map(({item,hunt}, index) => (
          <article className="s21-card" key={item.link}>
            <div className="s21-no">{String(index + 1).padStart(2,'0')}</div>
            <div className="s21-main">
              <div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div>
              <h3>{item.title}</h3>
              <p className="s21-query">Sökning: {hunt.query || 'ej genomförd'}</p>

              {hunt.matches.length ? (
                <div className="s21-matches">
                  {hunt.matches.slice(0,3).map(match => (
                    <a href={match.link} target="_blank" rel="noreferrer" key={match.link}>
                      <span>{match.source}</span>
                      <strong>{match.title}</strong>
                      <small>{match.score}% rubrikmatchning</small>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="s21-empty">Ingen tillräckligt lik oberoende publicering hittades i sökningen.</p>
              )}
            </div>
            <div className="s21-status">
              <span className={hunt.independentSources.length ? 'found' : 'not-found'}>{hunt.status}</span>
              <strong>{hunt.independentSources.length + 1} källfamilj{hunt.independentSources.length ? 'er' : ''}</strong>
              <small>{hunt.independentSources.length ? hunt.independentSources.join(' · ') : 'Fortsatt manuell verifiering krävs'}</small>
            </div>
          </article>
        ))}
      </div>

      <div className="s21-rule">
        <strong>Viktigt:</strong> en sökträff är inte i sig en verifiering. Redaktionen ska kontrollera om den andra publiceringen verkligen bygger på ett oberoende underlag och inte bara återger samma ursprungskälla.
      </div>
    </section>
  );
}
