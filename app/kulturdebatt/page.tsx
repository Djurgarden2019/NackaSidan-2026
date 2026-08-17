import Link from 'next/link';
import { AnalysisBox, SectionIntro } from '../../components/Editorial';

const debates=[
 ['Bibliotek','Bibliotekens roll växer när informationsmiljön blir mer splittrad','Frågan är hur bibliotek ska förena fri tillgång, lokal närvaro och ett växande digitalt uppdrag.'],
 ['Public service','Oberoende medier blir en allt tydligare demokratisk konflikt','Debatten handlar både om finansiering och om vem som har förtroende att definiera ett gemensamt offentligt samtal.'],
 ['AI & kultur','Generativ AI utmanar både upphovsrätt och konstnärlig identitet','Konflikten gäller ersättning, transparens och skillnaden mellan inspiration och automatiserad reproduktion.'],
 ['Kulturpolitik','Kulturstödets mål blir svårare att formulera','Ska stödet prioritera bredd, kvalitet, regional spridning eller konstnärlig frihet?']
];

export const metadata={title:'Kulturdebatt | NackaSidan 2026',description:'Idé- och kulturfrågor om offentlighet, medier, AI, bibliotek och kulturpolitik.'};

export default function CultureDebate(){return <main><div className="shell">
 <div className="page-hero"><div className="kicker">Kulturdebatt</div><h1>Idéer som formar offentligheten</h1><p>Fyra kulturfrågor där makt, teknik, finansiering och demokrati möts.</p></div>
 <section className="section no-top"><SectionIntro eyebrow="Veckans idédebatt" title="Fyra frågor att följa" text="Vi följer inte bara utspelen, utan vad som händer när principerna blir regler, budgetar och institutionella beslut."/><div className="debate-grid">{debates.map(([section,title,text],index)=><article className="debate-card" key={title}><div className="meta">0{index+1} · {section}</div><h2>{title}</h2><p>{text}</p><AnalysisBox>Det avgörande blir hur principerna översätts till regler, finansiering och praktiska beslut. Därför skiljer vi mellan den aktuella konflikten och den långsiktiga samhällseffekten.</AnalysisBox></article>)}</div></section>
 <section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Fördjupa dig</div><h2>Från idédebatt till kulturbevakning</h2><p className="lead">Gå vidare till Kultur för recensioner och analyser, eller Vetenskap & AI för teknikens påverkan på samhälle och skapande.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/kultur">Kultur</Link><Link className="text-link" href="/vetenskap">Vetenskap & AI →</Link></div></section>
 </div></main>}
