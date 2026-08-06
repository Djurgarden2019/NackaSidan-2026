import { AnalysisBox, FactStrip } from '../../components/Editorial';

const articleTitles = [
  'Veckans viktigaste utveckling',
  'Bakgrunden som förklarar förändringen',
  'Konsekvenserna på kort och lång sikt',
  'Detta bör följas nästa vecka',
];

export default function Page() {
  return (
    <main>
      <div className="shell">
        <div className="page-hero">
          <div className="kicker">Sport</div>
          <h1>Resultat är bara början av berättelsen</h1>
          <p>Analys av prestation, ekonomi, publik och de beslut som formar modern idrott.</p>
        </div>

        <div className="article-list">
          {articleTitles.map((title, index) => (
            <article className="article-row" key={title}>
              <div className="meta">{String(index + 1).padStart(2, '0')} · Fördjupning</div>
              <div>
                <h2>{title}</h2>
                <p>En koncentrerad redaktionell genomgång som kopplar nyheten till större utvecklingslinjer och tydliggör vad som är säkert, osäkert och viktigt.</p>
                <AnalysisBox>
                  Det finns skäl att skilja mellan det omedelbara nyhetsvärdet och den långsiktiga betydelsen. Utfallet avgörs av om trenden bekräftas av fler data och beslut.
                </AnalysisBox>
              </div>
            </article>
          ))}
        </div>

        <section className="section">
          <FactStrip
            items={[
              { label: 'Artiklar', value: '4' },
              { label: 'Analyser', value: '4' },
              { label: 'Lästid', value: '18 min' },
              { label: 'Uppdatering', value: 'Veckovis' },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
