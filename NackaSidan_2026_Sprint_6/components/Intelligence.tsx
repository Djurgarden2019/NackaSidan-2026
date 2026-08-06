'use client';

import { useState } from 'react';
import type { Article } from '../content/articles';

const modes = ['Sammanfatta', 'Förklara', 'Bakgrund', 'Vad betyder det?'] as const;
type Mode = (typeof modes)[number];

function contentFor(article: Article, mode: Mode) {
  if (mode === 'Sammanfatta') return article.knowledge.slice(0, 3).map((point) => `${point.label}: ${point.text}`);
  if (mode === 'Förklara') return [article.intro, `Kärnan i analysen: ${article.analysis}`];
  if (mode === 'Bakgrund') return article.facts;
  return article.consequences;
}

export function IntelligencePanel({ article }: { article: Article }) {
  const [active, setActive] = useState<Mode>('Sammanfatta');
  const content = contentFor(article, active);
  return (
    <section className="intelligence-panel">
      <div className="intelligence-heading">
        <div><div className="kicker">Läs med NackaSidan</div><h2>Välj hur du vill förstå artikeln</h2></div>
        <span>Bygger på artikelns redaktionellt granskade innehåll</span>
      </div>
      <div className="intelligence-tabs" role="tablist" aria-label="Välj läsläge">
        {modes.map((mode) => <button key={mode} className={active === mode ? 'active' : ''} onClick={() => setActive(mode)}>{mode}</button>)}
      </div>
      <div className="intelligence-content" role="tabpanel">
        <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
