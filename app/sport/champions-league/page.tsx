import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata:Metadata={
  title:'Champions League 2026/27 – hela spelschemat',
  description:'Samtliga 144 matcher i Champions Leagues ligafas 2026/27, omgång för omgång, samt datumen för slutspelet.'
};

type Match={home:string;away:string;time:string};
type Day={date:string;matches:Match[]};
type Round={name:string;days:Day[]};

const raw=[
['Omgång 1',[
['Tisdag 8 september 2026','AEK Aten–LASK|18.45;Club Brugge–Aston Villa|18.45;Borussia Dortmund–Villarreal|21.00;Porto–Manchester City|21.00;Lille–Real Betis|21.00;Real Madrid–Inter|21.00'],
['Onsdag 9 september 2026','Barcelona–Feyenoord|18.45;Stuttgart–Viking|18.45;Liverpool–Atlético Madrid|21.00;Paris Saint-Germain–Slovan Bratislava|21.00;Sporting CP–Galatasaray|21.00;Napoli–Arsenal|21.00'],
['Torsdag 10 september 2026','Fenerbahçe–Roma|18.45;PSV Eindhoven–Shakhtar Donetsk|18.45;Como–Leipzig|21.00;Bayern München–Bodø/Glimt|21.00;Manchester United–Sabah|21.00;Slavia Prag–Lens|21.00']]],
['Omgång 2',[
['Tisdag 13 oktober 2026','Lens–Sporting CP|18.45;Sabah–Slavia Prag|18.45;Arsenal–Lille|21.00;Atlético Madrid–Manchester United|21.00;Inter–Club Brugge|21.00;Galatasaray–Barcelona|21.00;Leipzig–PSV Eindhoven|21.00;Viking–Bayern München|21.00;Villarreal–Napoli|21.00'],
['Onsdag 14 oktober 2026','Feyenoord–Como|18.45;LASK–Liverpool|18.45;Roma–Real Madrid|21.00;Aston Villa–Fenerbahçe|21.00;Shakhtar Donetsk–AEK Aten|21.00;Bodø/Glimt–Borussia Dortmund|21.00;Manchester City–Paris Saint-Germain|21.00;Real Betis–Porto|21.00;Slovan Bratislava–Stuttgart|21.00']]],
['Omgång 3',[
['Tisdag 20 oktober 2026','Fenerbahçe–Slavia Prag|18.45;Sabah–Borussia Dortmund|18.45;Roma–Slovan Bratislava|21.00;Porto–PSV Eindhoven|21.00;Liverpool–Villarreal|21.00;Manchester City–AEK Aten|21.00;Paris Saint-Germain–Barcelona|21.00;Napoli–Bodø/Glimt|21.00;Stuttgart–Atlético Madrid|21.00'],
['Onsdag 21 oktober 2026','Como–Manchester United|18.45;Lille–Galatasaray|18.45;Aston Villa–Viking|21.00;Club Brugge–Lens|21.00;Bayern München–Arsenal|21.00;Inter–Shakhtar Donetsk|21.00;Real Madrid–Leipzig|21.00;Real Betis–Feyenoord|21.00;Sporting CP–LASK|21.00']]],
['Omgång 4',[
['Tisdag 3 november 2026','Shakhtar Donetsk–Sporting CP|18.45;Galatasaray–Stuttgart|18.45;Atlético Madrid–Bayern München|21.00;Barcelona–Aston Villa|21.00;Feyenoord–Inter|21.00;Bodø/Glimt–Lille|21.00;LASK–Slovan Bratislava|21.00;Manchester United–Roma|21.00;Villarreal–Paris Saint-Germain|21.00'],
['Onsdag 4 november 2026','AEK Aten–Real Madrid|18.45;Fenerbahçe–Liverpool|18.45;Borussia Dortmund–Real Betis|21.00;Porto–Napoli|21.00;PSV Eindhoven–Club Brugge|21.00;Leipzig–Manchester City|21.00;Lens–Como|21.00;Slavia Prag–Arsenal|21.00;Viking–Sabah|21.00']]],
['Omgång 5',[
['Tisdag 24 november 2026','Bodø/Glimt–LASK|18.45;Galatasaray–Aston Villa|18.45;Arsenal–Borussia Dortmund|21.00;Como–AEK Aten|21.00;Feyenoord–Porto|21.00;Manchester City–Napoli|21.00;Leipzig–Lens|21.00;Real Madrid–PSV Eindhoven|21.00;Slovan Bratislava–Real Betis|21.00'],
['Onsdag 25 november 2026','Sabah–Barcelona|18.45;Slavia Prag–Villarreal|18.45;Atlético Madrid–Viking|21.00;Club Brugge–Liverpool|21.00;Inter–Stuttgart|21.00;Shakhtar Donetsk–Fenerbahçe|21.00;Lille–Bayern München|21.00;Paris Saint-Germain–Roma|21.00;Sporting CP–Manchester United|21.00']]],
['Omgång 6',[
['Tisdag 8 december 2026','Viking–Feyenoord|18.45;Villarreal–Sabah|18.45;AEK Aten–Galatasaray|21.00;Roma–Sporting CP|21.00;Aston Villa–Paris Saint-Germain|21.00;Barcelona–Manchester City|21.00;Bayern München–Slavia Prag|21.00;Manchester United–Leipzig|21.00;Napoli–Club Brugge|21.00'],
['Onsdag 9 december 2026','Real Betis–Como|18.45;Slovan Bratislava–Shakhtar Donetsk|18.45;Arsenal–Real Madrid|21.00;Borussia Dortmund–Inter|21.00;LASK–Fenerbahçe|21.00;Liverpool–Porto|21.00;PSV Eindhoven–Atlético Madrid|21.00;Lens–Bodø/Glimt|21.00;Stuttgart–Lille|21.00']]],
['Omgång 7',[
['Tisdag 19 januari 2027','Bodø/Glimt–Atlético Madrid|18.45;Galatasaray–Feyenoord|18.45;AEK Aten–Roma|21.00;Aston Villa–Borussia Dortmund|21.00;Inter–Liverpool|21.00;Porto–Slavia Prag|21.00;Lille–Slovan Bratislava|21.00;Real Madrid–LASK|21.00;Stuttgart–Club Brugge|21.00'],
['Onsdag 20 januari 2027','Fenerbahçe–Villarreal|18.45;Sabah–Napoli|18.45;Como–Paris Saint-Germain|21.00;Manchester United–Bayern München|21.00;Leipzig–Shakhtar Donetsk|21.00;Lens–Manchester City|21.00;Real Betis–Arsenal|21.00;Sporting CP–Barcelona|21.00;Viking–PSV Eindhoven|21.00']]],
['Omgång 8',[
['Onsdag 27 januari 2027','Arsenal–Sabah|21.00;Roma–Lille|21.00;Atlético Madrid–Fenerbahçe|21.00;Borussia Dortmund–AEK Aten|21.00;Club Brugge–Bodø/Glimt|21.00;Bayern München–Real Betis|21.00;Barcelona–Como|21.00;Shakhtar Donetsk–Real Madrid|21.00;Feyenoord–Leipzig|21.00;LASK–Porto|21.00;Liverpool–Lens|21.00;Manchester City–Sporting CP|21.00;Paris Saint-Germain–Galatasaray|21.00;PSV Eindhoven–Stuttgart|21.00;Slavia Prag–Aston Villa|21.00;Napoli–Viking|21.00;Villarreal–Manchester United|21.00;Slovan Bratislava–Inter|21.00']]]
] as const;

const rounds:Round[]=raw.map(([name,days])=>({name,days:days.map(([date,list])=>({date,matches:list.split(';').map(item=>{const [teams,time]=item.split('|');const [home,away]=teams.split('–');return {home,away,time};})}))}));

export default function ChampionsLeaguePage(){
 return <main><div className="shell" style={{maxWidth:1120,paddingBottom:80}}>
  <header style={{padding:'44px 0 28px',borderBottom:'1px solid #d8d2c7'}}>
   <div className="kicker">Sport · Champions League · Uppdaterad 1 september 2026</div>
   <h1 style={{fontSize:'clamp(2.5rem,6vw,5.5rem)',lineHeight:.95,margin:'14px 0 20px'}}>Champions League 2026/27 – hela spelschemat</h1>
   <p className="lead" style={{maxWidth:820}}>Här finns samtliga 144 matcher i ligafasen, sorterade efter omgång och speldag. Ligafasen spelas från 8 september 2026 till 27 januari 2027.</p>
   <p><strong>Tider:</strong> Alla avsparkstider anges i svensk tid. Matchtider och datum kan ändras av UEFA.</p>
   <Link className="text-link" href="/sport">← Tillbaka till Sport</Link>
  </header>
  <nav aria-label="Omgångar" style={{display:'flex',flexWrap:'wrap',gap:10,padding:'24px 0'}}>
   {rounds.map((round,index)=><a key={round.name} href={'#omgang-'+(index+1)} style={{border:'1px solid #111',padding:'8px 12px',textDecoration:'none'}}>{round.name}</a>)}
  </nav>
  {rounds.map((round,index)=><section key={round.name} id={'omgang-'+(index+1)} style={{padding:'34px 0',borderTop:'3px solid #111'}}>
   <div className="kicker">Ligafasen</div><h2 style={{fontSize:'clamp(2rem,4vw,3.4rem)',margin:'8px 0 24px'}}>{round.name}</h2>
   {round.days.map(day=><div key={day.date} style={{marginBottom:30}}>
    <h3 style={{fontSize:'1.35rem',borderBottom:'1px solid #aaa',paddingBottom:8}}>{day.date}</h3>
    <div>{day.matches.map(match=><div key={match.home+match.away} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:16,padding:'11px 0',borderBottom:'1px solid #e0dbd2'}}>
      <span><strong>{match.home}</strong> – {match.away}</span><time>{match.time}</time>
    </div>)}</div>
   </div>)}
  </section>)}
  <section style={{padding:'40px 0',borderTop:'3px solid #111'}}>
   <div className="kicker">Efter ligafasen</div><h2>Slutspelskalendern</h2>
   <div style={{display:'grid',gap:10,maxWidth:760}}>
    <p><strong>Playoff:</strong> 16–17 och 23–24 februari 2027</p>
    <p><strong>Åttondelsfinaler:</strong> 9–10 och 16–17 mars 2027</p>
    <p><strong>Kvartsfinaler:</strong> 6–7 och 13–14 april 2027</p>
    <p><strong>Semifinaler:</strong> 27–28 april och 4–5 maj 2027</p>
    <p><strong>Final:</strong> 5 juni 2027 på Estadio Metropolitano i Madrid</p>
   </div>
  </section>
  <section style={{padding:'36px 0',borderTop:'1px solid #111'}}>
   <div className="kicker">Originalkällor</div><h2>Källor</h2>
   <ul>
    <li><a href="https://www.uefa.com/uefachampionsleague/news/02a8-2174c9e9019d-f909a77bd77a-1000--2026-27-champions-league-all-the-league-phase-fixtures/" target="_blank" rel="noopener noreferrer">UEFA: samtliga matcher i ligafasen 2026/27</a></li>
    <li><a href="https://www.uefa.com/uefachampionsleague/fixtures-results/" target="_blank" rel="noopener noreferrer">UEFA: officiella matcher och resultat</a></li>
    <li><a href="https://www.uefa.com/uefachampionsleague/news/02a6-20d57cfcd03e-407c22a7f465-1000--2026-27-champions-league-teams-dates-draws-format-final/" target="_blank" rel="noopener noreferrer">UEFA: datum, format och final</a></li>
   </ul>
  </section>
 </div></main>;
}
