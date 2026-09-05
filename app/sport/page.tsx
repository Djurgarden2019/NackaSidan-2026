import type { Metadata } from 'next';
import Link from 'next/link';
import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import {
  getFreshSportArticles,
  latestResults,
  SPORT_ARTICLE_MAX_AGE_HOURS,
  sportAgenda
} from '../../content/sportArticles';

export const metadata: Metadata = {
  title: 'Sport',
  description: 'Sportnyheter publicerade under de senaste 48 timmarna.'
};

export const revalidate = 900;

function updatedLabel(now: Date) {
  return new Intl.DateTimeFormat('sv-SE', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Stockholm'
  }).format(now);
}

export default function SportPage() {
  const now = new Date();
  const currentArticles = getFreshSportArticles(now.getTime());
  const [lead, ...rest] = currentArticles;

  return (
    <main>
      <div className="shell sport-desk">
        <header className="sport-desk-head">
          <div>
            <div className="kicker">Sport · Uppdaterad {updatedLabel(now)}</div>
            <p className="lead">Verifierade sportnyheter från de senaste {SPORT_ARTICLE_MAX_AGE_HOURS} timmarna.</p>
          </div>
          <nav aria-label="Sportområden">
            <a href="#resultat">Resultat</a>
            <Link href="/sport/champions-league">Champions League</Link>
            <a href="#senaste">Senaste nytt</a>
            <a href="#standard">Redaktionell standard</a>
          </nav>
        </header>

        <section className="sport-results" id="resultat">
          <div className="sport-section-title">
            <div className="kicker">Senast avgjort</div>
            <h2>Aktuella resultat</h2>
          </div>
          <div className="sport-score-grid">
            {latestResults.map(result => (
              <article key={result.match}>
                <span>{result.competition}</span>
                <h3>{result.match}</h3>
                <strong>{result.score}</strong>
                <p>{result.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sport-agenda">
          <div>
            <div className="kicker">Sportkalender</div>
            <h2>Detta följer vi nu</h2>
            <p>Program och bevakning uppdateras tillsammans med det senaste sportflödet.</p>
          </div>
          <ul>
            {sportAgenda.map(item => (
              <li key={item.event}><strong>{item.time}</strong><span>{item.event}</span></li>
            ))}
          </ul>
        </section>

        {lead ? (
          <>
            <section className="sport-lead">
              <article>
                <div className="kicker">Huvudnyhet · {lead.sport}</div>
                <h2><Link href={`/sport/artikel/${lead.slug}`}>{lead.title}</Link></h2>
                <p className="lead">{lead.dek}</p>
                <ul>{lead.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
                <Link className="button" href={`/sport/artikel/${lead.slug}`}>Läs hela artikeln</Link>
              </article>
              <aside>
                <div className="kicker">Aktuellt sportläge</div>
                <strong>{currentArticles.length}</strong>
                <span>artiklar inom 48 timmar</span>
                <hr />
                <p>Äldre artiklar tas automatiskt bort från sportlistan och kan inte öppnas via direktlänk.</p>
              </aside>
            </section>

            <section className="sport-news" id="senaste">
              <div className="sport-section-title">
                <div className="kicker">Senaste nytt</div>
                <h2>Nyheter och fördjupning</h2>
              </div>
              <div className="sport-news-grid">
                {rest.map((article, index) => (
                  <article key={article.slug} className={index === 0 ? 'sport-card sport-card-wide' : 'sport-card'}>
                    <div className="kicker">{article.sport} · {article.date}</div>
                    <h3><Link href={`/sport/artikel/${article.slug}`}>{article.title}</Link></h3>
                    <p>{article.dek}</p>
                    <p className="sport-card-fact"><strong>Detta vet vi:</strong> {article.facts[0]}</p>
                    <Link className="text-link" href={`/sport/artikel/${article.slug}`}>Läs artikeln →</Link>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="section" id="senaste">
            <div className="kicker">Senaste nytt</div>
            <h2>Inga verifierade sportartiklar yngre än 48 timmar</h2>
            <p>Redaktionen publicerar nästa artikel när nya uppgifter har kontrollerats.</p>
          </section>
        )}

        <section className="sport-sources" id="standard">
          <div className="kicker">Redaktionell standard</div>
          <h2>Så hålls sporten aktuell</h2>
          <div>
            <p><strong>Tidsgräns:</strong> Endast artiklar publicerade de senaste 48 timmarna visas.</p>
            <p><strong>Verifiering:</strong> Varje redaktionell artikel länkar till sin primärkälla.</p>
            <p><strong>Automatik:</strong> Sportklassade RSS-nyheter följer samma 48-timmarsgräns.</p>
          </div>
        </section>
      </div>
      <DailyDeskUpdate desk="sport" />
    </main>
  );
}
