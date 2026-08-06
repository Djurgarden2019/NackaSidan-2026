import { AnalysisBox, SectionIntro } from '../../components/Editorial';

const debates = [
  ['Bibliotek', 'Bibliotekens roll växer när informationsmiljön blir mer splittrad', 'Frågan är hur bibliotek ska förena fri tillgång, lokal närvaro och ett växande digitalt uppdrag.'],
  ['Public service', 'Oberoende medier blir en allt tydligare demokratisk konflikt', 'Debatten handlar både om finansiering och om vem som har förtroende att definiera ett gemensamt offentligt samtal.'],
  ['AI & kultur', 'Generativ AI utmanar både upphovsrätt och konstnärlig identitet', 'Konflikten gäller ersättning, transparens och skillnaden mellan inspiration och automatiserad reproduktion.'],
  ['Kulturpolitik', 'Kulturstödets mål blir svårare att formulera', 'Ska stödet prioritera bredd, kvalitet, regional spridning eller konstnärlig frihet?'],
];

export default function CultureDebate() {
  return (
    <main>
      <div className="shell">
        <div className="page-hero">
          <div className="kicker">Kulturdebatt</div>
          <h1>Vem formar den gemensamma offentligheten?</h1>
          <p>Veckans mest intressanta idé- och kulturfrågor, sammanfattade och analyserade.</p>
        </div>

        <section className="section no-top">
          <SectionIntro
            title="Fyra debatter att följa"
            text="Frågorna är kulturella, men konsekvenserna är politiska, ekonomiska och demokratiska."
          />
          <div className="debate-grid">
            {debates.map(([section, title, text]) => (
              <article className="debate-card" key={title}>
                <div className="kicker">{section}</div>
                <h2>{title}</h2>
                <p>{text}</p>
                <AnalysisBox>
                  Det avgörande blir hur principerna översätts till regler, finansiering och institutionella beslut. Debatten bör därför följas bortom de mest uppmärksammade utspelen.
                </AnalysisBox>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
