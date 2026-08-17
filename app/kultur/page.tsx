import Link from 'next/link';
import { cultureStories } from '../../content/data';
import { AnalysisBox } from '../../components/Editorial';

export const metadata={title:'Kultur | NackaSidan 2026',description:'Böcker, film, TV, musik och kulturdebatt med sammanhang och analys.'};

export default function Culture() {
  const lead=cultureStories[0];
  const rest=cultureStories.slice(1);
  return (
    <main><div className="shell">
      <div className="page-hero"><div className="kicker">Kultur</div><h1>Berättelserna som sätter tempot i perspektiv</h1><p>Böcker, film, TV-serier, musik och kulturdebatt – med recensioner, sammanhang och redaktionella analyser.</p></div>
      {lead&&<section className="section" style={{borderTop:'4px solid #111',paddingTop:22}} aria-labelledby="culture-lead"><div className="kicker">Redaktionens val · {lead.section}</div><h2 id="culture-lead" style={{fontSize:'clamp(2rem,5vw,3.8rem)',maxWidth:900,marginTop:8}}>{lead.title}</h2><p className="lead" style={{maxWidth:820}}>{lead.summary}</p><AnalysisBox>Det intressanta är inte bara verkets innehåll, utan vad publikens mottagande säger om vår tid och våra behov.</AnalysisBox>{lead.href&&<Link className="button" href={lead.href}>Läs vidare</Link>}</section>}
      <section className="section"><div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:16,borderBottom:'1px solid #d4d4d4',paddingBottom:12}}><div><div className="kicker">Mer kultur</div><h2>Recensioner, idéer och debatt</h2></div><Link className="text-link" href="/kulturdebatt">Kulturdebatt →</Link></div><div className="article-list">{rest.map((story,index)=><article className="article-row" key={story.title}><div className="meta">{String(index+2).padStart(2,'0')} · {story.section}</div><div><h2>{story.title}</h2><p>{story.summary}</p><AnalysisBox>{story.section==='Kulturdebatt'?'Kulturfrågan handlar sällan bara om smak. Den rör också makt, finansiering och vilka röster som får en varaktig plats i offentligheten.':'Vi placerar verket i ett större sammanhang: vad säger det om publiken, branschen och tiden vi lever i?'}</AnalysisBox>{story.href&&<Link className="text-link" href={story.href}>Läs vidare</Link>}</div></article>)}</div></section>
      <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fortsätt utforska</div><h2>Kultur är en del av helheten</h2><p className="lead">Gå vidare till Nacka Daily för dagens urval eller Sverige för politik, ekonomi och samhälle.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/daily">Nacka Daily</Link><Link className="text-link" href="/sverige">Sverige →</Link></div></section>
    </div></main>
  );
}
