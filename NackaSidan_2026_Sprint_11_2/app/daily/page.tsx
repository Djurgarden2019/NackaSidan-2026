import Link from 'next/link';
import { dailyEdition } from '../../content/daily';

export const metadata = {
  title: 'Nacka Daily | NackaSidan',
  description: 'Dagens viktigaste nyheter, analys, siffror och kultur på fem minuter.',
};

export default function DailyPage() {
  return (
    <main>
      <div className="shell">
        <section className="daily-hero">
          <div className="daily-date">{dailyEdition.date}</div>
          <div className="kicker">Nacka Daily</div>
          <h1>{dailyEdition.title}</h1>
          <p>{dailyEdition.intro}</p>
          <div className="daily-meta"><span>5 min läsning</span><span>Uppdaterad 07.00</span><span>Gratis briefing</span><span>Redaktionellt urval</span></div>
        </section>

        <section className="daily-lead">
          <div className="daily-index">01</div>
          <div>
            <div className="kicker">{dailyEdition.lead.label}</div>
            <h2>{dailyEdition.lead.title}</h2>
            <p>{dailyEdition.lead.text}</p>
            <Link className="button" href={dailyEdition.lead.href}>Läs huvudanalysen</Link>
          </div>
        </section>

        <section className="daily-grid">
          {dailyEdition.items.map((item, index) => (
            <article key={item.title}>
              <div className="daily-index">{String(index + 2).padStart(2, '0')}</div>
              <div className="kicker">{item.label}</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {item.href && <Link className="text-link" href={item.href}>Fördjupa dig</Link>}
            </article>
          ))}
        </section>

        <section className="daily-source-note"><div className="kicker">Transparens</div><h2>Så är briefingen byggd</h2><p>Nacka Daily sammanfattar och länkar vidare till NackaSidans publicerade analyser och ämnessidor. Sprint 8 använder ingen extern automatisk nyhetswire; innehållet uppdateras redaktionellt i projektets innehållsfiler.</p></section>

        <section className="daily-insights">
          <div className="daily-number">
            <div className="kicker">Dagens siffra</div>
            <strong>{dailyEdition.number.value}</strong>
            <h2>{dailyEdition.number.label}</h2>
            <p>{dailyEdition.number.text}</p>
          </div>
          <div className="daily-watch">
            <div className="kicker">Detta följer vi i dag</div>
            <ol>{dailyEdition.watch.map((item) => <li key={item}>{item}</li>)}</ol>
          </div>
        </section>

        <blockquote className="daily-quote">“{dailyEdition.quote}”</blockquote>

        <section className="daily-signoff">
          <div>
            <div className="kicker">Nästa briefing</div>
            <h2>I morgon kl. 07.00</h2>
            <p>Nacka Daily är prototypen för en återkommande morgonbriefing. I nästa steg kan innehållet kopplas till ett visuellt CMS och ett riktigt nyhetsbrev.</p>
          </div>
          <Link className="button" href="/">Till startsidan</Link>
        </section>
      </div>
    </main>
  );
}
