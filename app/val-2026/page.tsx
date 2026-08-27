import Link from 'next/link';
import { election2026 } from '../../content/election2026';

export const metadata={title:'Valet i Nacka 2026 | NackaSidan',description:'Partier, mandat, sakfrågor och praktisk information inför kommunvalet i Nacka 2026.'};
const electionUrl='https://www.nacka.se/kommun--politik/delta-och-paverka/val-2026/';
const parties=[
 ['Moderaterna',20,'Skola, lugnare stadsbyggande och trafik'],['Socialdemokraterna',13,'Skola, välfärd och hållbar samhällsutveckling'],['Nackalistan',7,'Lokala frågor och stadsutveckling'],['Centerpartiet',5,'Klimat, skola, mobilitet och hållbar stadsbyggnad'],['Vänsterpartiet',4,'Välfärd och jämlikhet'],['Sverigedemokraterna',4,'Kommunpolitik och trygghet'],['Liberalerna',3,'Kommunpolitik och skola'],['Miljöpartiet',3,'Miljö, klimat och hållbar utveckling'],['Kristdemokraterna',2,'Kommunpolitik och välfärd']
];

export default function ElectionPage(){return <main><div className="shell">
 <section className="section"><div className="kicker">NackaSidan · Val 2026</div><h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(42px,7vw,76px)',lineHeight:1,margin:'10px 0 18px'}}>Valet i Nacka 2026</h1><p className="lead">Den 13 september väljer Nackaborna ett nytt kommunfullmäktige. Här samlar vi partierna, mandatläget, sakfrågorna och det praktiska inför valet.</p></section>
 <section className="section"><h2>Mandatläget efter valet 2022</h2><p>Det här är utgångsläget inför valet 2026.</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:14}}>{parties.map(([name,mandates,focus])=><a key={name} href={electionUrl} target="_blank" rel="noreferrer" style={{borderTop:'2px solid #111',paddingTop:12}}><div className="kicker">{mandates} mandat</div><h3 style={{fontFamily:'Georgia,serif',fontSize:25,margin:'5px 0'}}>{name}</h3><p>{focus}</p><span className="text-link">Läs valinformationen →</span></a>)}</div></section>
 <section className="section"><h2>Sju frågor som kan avgöra Nacka</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>{election2026.focus.map((focus,index)=><a key={focus} href={electionUrl} target="_blank" rel="noreferrer" style={{borderTop:index===0?'4px solid #a61919':'2px solid #111',paddingTop:12}}><div className="kicker">Fråga {index+1}</div><h3 style={{fontFamily:'Georgia,serif',fontSize:24}}>{focus}</h3><p>NackaSidan jämför partiernas besked och verifierbara fakta.</p><span className="text-link">Följ valfrågan →</span></a>)}</div></section>
 <section className="section"><h2>Så röstar du</h2><p>Förtidsröstningen startar {election2026.earlyVotingStarts} och valdagen är {election2026.electionDay}.</p><a className="button" href={electionUrl} target="_blank" rel="noreferrer">Praktisk valinformation hos Nacka kommun</a></section>
 <section className="section"><Link className="text-link" href="/">← Till startsidan</Link></section>
 </div></main>}
