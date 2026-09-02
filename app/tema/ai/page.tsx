import DailyDeskUpdate from '../../../components/DailyDeskUpdate';
import Link from 'next/link';
import { FactStrip, SectionIntro } from '../../../components/Editorial';
import DeskDepth from '../../../components/DeskDepth';
import {aiDepth} from '../../../content/deskDepth';

const timeline = [
  ['2022–2023', 'Generativ AI blir tillgänglig för en bred publik.'],
  ['2024–2025', 'Företag testar tekniken i kundservice, programmering och administration.'],
  ['2026', 'AI flyttar in i arbetsflöden, styrning och valrörelsens informationsmiljö.'],
  ['Nästa steg', 'Ansvar, kvalitet, kompetens och reglering blir de avgörande frågorna.'],
];

export default function AiTopicPage() {
  return (
    <main><DailyDeskUpdate desk="ai"/>
      <div className="shell">
        <section className="topic-hero">
          <div>
            <div className="kicker">NackaSidan Insight</div>
            <h1>AI</h1>
            <p>Nyheter, analyser, bakgrund och begrepp samlade på en sida. Här följer vi hur tekniken påverkar arbete, demokrati, utbildning och kultur.</p>
            <Link className="button" href="/artikel/ai-och-arbetsmarknaden">Läs huvudanalysen</Link>
          </div>
          <div className="topic-index">
            <span>Arbetsmarknad</span><span>Val & demokrati</span><span>Utbildning</span><span>Kultur</span><span>Reglering</span><span>Forskning</span>
          </div>
        </section>

        <section className="section">
          <SectionIntro title="AI på 60 sekunder" text="En snabb orientering innan du går vidare till artiklar och fördjupning." />
          <FactStrip items={[
            { label: 'Kärnan', value: 'Mönster + data' },
            { label: 'Största möjlighet', value: 'Produktivitet' },
            { label: 'Största risk', value: 'Fel i skala' },
            { label: 'Nyckelfråga', value: 'Ansvar' },
          ]} />
        </section>

        <section className="section topic-layout">
          <div>
            <div className="kicker">Tidslinje</div>
            <h2>Från experiment till infrastruktur</h2>
            <div className="timeline">
              {timeline.map(([year, text]) => <div className="timeline-item" key={year}><strong>{year}</strong><p>{text}</p></div>)}
            </div>
          </div>
          <aside className="topic-sidebar">
            <div className="kicker">Ordlista</div>
            <dl>
              <dt>Generativ AI</dt><dd>System som skapar text, bild, ljud eller kod.</dd>
              <dt>LLM</dt><dd>En stor språkmodell tränad på omfattande textmängder.</dd>
              <dt>Hallucination</dt><dd>När modellen ger ett övertygande men felaktigt svar.</dd>
              <dt>AI-agent</dt><dd>Ett system som kan planera och utföra flera steg mot ett mål.</dd>
            </dl>
          </aside>
        </section>

        <section className="section">
          <SectionIntro title="Fördjupa dig" text="Tre ingångar till hur AI förändrar samhälle och arbetsliv." />
          <div className="grid-3">
            <article className="card red"><div className="kicker">Arbetsmarknad</div><h3><Link href="/artikel/ai-och-arbetsmarknaden">AI och arbetsmarknaden</Link></h3><p>Vilka arbetsuppgifter förändras och vilka kompetenser blir viktigare?</p><Link className="button" href="/artikel/ai-och-arbetsmarknaden">Läs analysen</Link></article>
            <article className="card"><div className="kicker">Demokrati</div><h3><Link href="/sverige">Valrörelsen i AI-eran</Link></h3><p>Verifiering och källkritik blir en del av demokratins tekniska infrastruktur.</p><Link className="button" href="/sverige">Till Sverige</Link></article>
            <article className="card"><div className="kicker">Kultur</div><h3><Link href="/kulturdebatt">Vem äger den genererade kulturen?</Link></h3><p>Upphovsrätt, kreativitet och offentlighet möts i en ny kulturdebatt.</p><Link className="button" href="/kulturdebatt">Till kulturdebatten</Link></article>
          </div>
        </section>
        <DeskDepth eyebrow="AI Insight · Uppdaterad 30 augusti 2026" title="Från modell till makt, arbete och ansvar" {...aiDepth}/>
      </div>
    </main>
  );
}
