import Link from 'next/link';
import { cultureStories } from '../../content/data';
import { AnalysisBox } from '../../components/Editorial';

export default function Culture() {
  return (
    <main>
      <div className="shell">
        <div className="page-hero">
          <div className="kicker">Kultur</div>
          <h1>Berättelserna som sätter tempot i perspektiv</h1>
          <p>Böcker, film, TV-serier, musik och kulturdebatt – med recensioner, sammanhang och redaktionella analyser.</p>
        </div>

        <div className="article-list">
          {cultureStories.map((story, index) => (
            <article className="article-row" key={story.title}>
              <div className="meta">{String(index + 1).padStart(2, '0')} · {story.section}</div>
              <div>
                <h2>{story.title}</h2>
                <p>{story.summary}</p>
                <AnalysisBox>
                  {story.section === 'Kulturdebatt'
                    ? 'Kulturfrågan handlar sällan bara om smak. Den rör också makt, finansiering och vilka röster som får en varaktig plats i offentligheten.'
                    : 'Det intressanta är inte bara verkets innehåll, utan vad publikens mottagande säger om vår tid och våra behov.'}
                </AnalysisBox>
                {story.href && <Link className="text-link" href={story.href}>Läs vidare</Link>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
