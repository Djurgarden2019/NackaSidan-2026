import { FeatureCard, AnalysisBox, SectionIntro } from '../../components/Editorial';
import { worldFeatures } from '../../content/data';

export default function WorldPage() {
  return (
    <main>
      <div className="shell">
        <div className="page-hero">
          <div className="kicker">Världen</div>
          <h1>En vecka där diplomati och risk rör sig samtidigt</h1>
          <p>Från Hormuzsundet till Europa och Asien: de viktigaste internationella skeendena, deras bakgrund och vad som står på spel.</p>
        </div>

        <section className="section no-top">
          <div className="feature-grid world-grid">
            {worldFeatures.map((item, index) => (
              <FeatureCard key={item.title} item={item} large={index === 0} />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionIntro
            title="Veckans sammanhang"
            text="Händelserna ser olika ut, men binds samman av handel, energi och politisk uthållighet."
          />
          <AnalysisBox>
            När flera konflikter och ekonomiska spänningar pågår samtidigt blir det svårare att bedöma varje händelse isolerat. Sjöfart, energipriser, val och teknisk konkurrens påverkar varandra snabbare än tidigare. Det gör diplomatiska signaler viktiga, men också lätta att övertolka innan de följts av konkreta förändringar.
          </AnalysisBox>
        </section>
      </div>
    </main>
  );
}
