export type SportArticle = {
  slug:string;sport:string;title:string;dek:string;date:string;publishedAt:string;lead:boolean;
  facts:string[];body:{heading:string;paragraphs:string[]}[];analysis:string;watch:string[];
  sources:{label:string;url:string}[];
};
export const SPORT_ARTICLE_MAX_AGE_HOURS=72;
const SPORT_ARTICLE_MAX_AGE_MS=SPORT_ARTICLE_MAX_AGE_HOURS*60*60*1000;

export const latestResults=[
 {competition:'Formel 1 · Italiens GP',match:'Monza',score:'1. Kimi Antonelli',note:'Antonelli vann från 19:e startrutan före George Russell och Max Verstappen.'},
 {competition:'Tennis · US Open',match:'Pegula–Cirstea',score:'6–3, 6–4',note:'Jessica Pegula avancerade till kvartsfinal.'},
 {competition:'Tennis · US Open',match:'Shelton–Tsitsipas',score:'6–2, 6–3, 6–4',note:'Ben Shelton ställs nu mot Carlos Alcaraz.'}
];

export const sportAgenda=[
 {time:'8 september',event:'Champions League: AEK Aten–LASK och Club Brugge–Aston Villa 18.45'},
 {time:'8 september',event:'Champions League: bland annat Real Madrid–Inter 21.00'},
 {time:'9 september',event:'Champions League: Barcelona–Feyenoord och Stuttgart–Viking 18.45'},
 {time:'9 september',event:'Champions League: Liverpool–Atlético Madrid och Napoli–Arsenal 21.00'},
 {time:'Pågår',event:'US Open går in i kvartsfinalerna i New York'}
];

export const sportArticles:SportArticle[]=[
 {
  slug:'antonelli-vinner-italiens-gp-monza',sport:'Formel 1 · Monza',title:'Antonelli vann Italiens GP från näst sista startrutan',dek:'Kimi Antonelli stod för en sensationell hemmaseger på Monza efter att ha startat 19:e. Den 20-årige Mercedesföraren passerade George Russell sent och utökade sin VM-ledning.',
  date:'7 september 2026',publishedAt:'2026-09-07T07:30:00Z',lead:true,
  facts:['Antonelli startade 19:e efter motorrelaterade bestraffningar.','Han vann före George Russell och Max Verstappen.','Segern gav honom en ledning på 66 poäng efter 13 lopp.'],
  body:[
   {heading:'En historisk upphämtning',paragraphs:['Kimi Antonelli tog sig genom fältet på Monza och avgjorde med en sen omkörning av stallkamraten George Russell. Segern var den första för en italienare på Monza sedan 1966.','Loppet innehöll rödflagg, skiftande strategier och en virtuell säkerhetsbil. Ferrari missade pallen på sin hemmabana.']},
   {heading:'Analys och konsekvenser',paragraphs:['Vinsten stärker Antonellis grepp om VM men visar också hur snabbt ett lopp kan förändras genom däck, säkerhetsbilar och depåtiming. Mercedes fick både maximal utdelning och en känslig intern duell.','För Ferrari blev helgen en sportslig motgång inför rekordpubliken. Charles Leclerc bröt efter en kraftig krasch, medan Lewis Hamilton slutade sexa.']},
   {heading:'Längre fördjupning',paragraphs:['Antonellis förmåga att undvika incidenter genom fältet var minst lika viktig som farten. En förare som startar långt bak måste balansera aggressivitet mot däckslitage och risken att fastna i trafik.','Nästa fråga är om Mercedes låter förarna tävla fritt när VM-striden skärps. En ledning på 66 poäng är betydande men inte avgörande med många poäng kvar.']}
  ],
  analysis:'Antonelli kombinerade tempo, riskkontroll och ett sent avgörande. Segern förändrar mästerskapet från en öppen intern kamp till ett läge där Russell behöver börja ta poäng snabbt.',
  watch:['Mercedes stallorder','Antonellis ledning inför nästa lopp','Ferraris reaktion efter hemmamisslyckandet'],
  sources:[{label:'Reuters: Antonelli wins Italian Grand Prix from back of grid',url:'https://www.reuters.com/sports/formula1/antonelli-takes-sensational-home-italian-gp-win-back-grid-2026-09-06/'},{label:'Reuters: Wolff hails Antonellis Monza miracle',url:'https://www.reuters.com/sports/formula1/like-walk-water-wolff-hails-antonellis-monza-miracle-2026-09-06/'}]
 },
 {
  slug:'champions-league-premiar-8-september',sport:'Fotboll · Champions League',title:'Champions League startar – 18 matcher under premiäromgången',dek:'Ligafasen 2026/27 börjar den 8 september. Real Madrid–Inter, Liverpool–Atlético Madrid, Barcelona–Feyenoord och Napoli–Arsenal hör till premiärens största matcher.',
  date:'7 september 2026',publishedAt:'2026-09-07T10:00:00Z',lead:false,
  facts:['Premiäromgången spelas 8–10 september.','Ligafasen omfattar åtta omgångar och avslutas 27 januari 2027.','Hela spelschemat finns på NackaSidans Champions League-sida.'],
  body:[
   {heading:'Tre kvällar med premiärmatcher',paragraphs:['AEK Aten–LASK och Club Brugge–Aston Villa öppnar på tisdagen klockan 18.45. Senare samma kväll möts bland andra Real Madrid och Inter.','Onsdagens program innehåller Barcelona–Feyenoord, Liverpool–Atlético Madrid och Napoli–Arsenal. Den första omgången avslutas på torsdagen.']},
   {heading:'Analys och konsekvenser',paragraphs:['Det nya ligaupplägget gör varje poäng viktig redan från start eftersom samtliga lag konkurrerar i samma tabell. Samtidigt är åtta matcher tillräckligt många för att ett tidigt poängtapp ska kunna repareras.','Truppernas bredd blir central när ligaspel och nationella serier överlappar. De klubbar som kan rotera utan stort kvalitetstapp får ett tydligt övertag.']},
   {heading:'Längre fördjupning',paragraphs:['Motståndets styrka varierar mellan lagens åtta matcher. En tabelljämförelse måste därför väga in spelschema, hemmafördel och vilka resor lagen gör.','NackaSidan publicerar hela programmet separat och hänvisar till UEFA för sena ändringar av tider och datum.']}
  ],
  analysis:'Premiären blir ett första test av hur lagen prioriterar mellan ligafasen och det nationella spelet. Storklubbarna har större felmarginal men också högre belastning.',
  watch:['Startelvor och sena skador','Hur nykomlingarna klarar tempot','UEFA:s eventuella tidsändringar'],
  sources:[{label:'UEFA: hela ligafasens spelschema 2026/27',url:'https://www.uefa.com/uefachampionsleague/news/02a8-2174c9e9019d-f909a77bd77a-1000--2026-27-champions-league-all-the-league-phase-fixtures/'},{label:'UEFA: officiella matcher och resultat',url:'https://www.uefa.com/uefachampionsleague/fixtures-results/'}]
 },
 {
  slug:'pegula-kvartsfinal-us-open',sport:'Tennis · US Open',title:'Pegula vidare till kvartsfinal efter seger mot Cirstea',dek:'Jessica Pegula vann med 6–3, 6–4 och fortsätter jakten på sin första Grand Slam-titel. Matchen blev samtidigt Sorana Cirsteas sista framträdande i US Open.',
  date:'7 september 2026',publishedAt:'2026-09-07T08:15:00Z',lead:false,
  facts:['Pegula vann med 6–3, 6–4.','Hon jagar sin första Grand Slam-titel.','Cirstea gjorde sitt sista Grand Slam-framträdande.'],
  body:[
   {heading:'Pegula höll ihop spelet',paragraphs:['Första set innehöll flera servegenombrott, men Pegula tog kontroll när de viktigaste poängen skulle avgöras. Ett avgörande break räckte i andra set.','Segern för Pegula vidare till ännu en kvartsfinal i New York.']},
   {heading:'Analys och konsekvenser',paragraphs:['Pegulas styrka är den höga lägstanivån från baslinjen. Mot kvarvarande toppspelare behöver hon samtidigt vinna fler enkla poäng på serven.','För Cirstea avslutades en lång Grand Slam-karriär efter en sen återkomst till världens 20 bästa.']},
   {heading:'Längre fördjupning',paragraphs:['I en andra Grand Slam-vecka blir återhämtning och korta matchtider viktiga. En seger i raka set sparar både fysisk och mental energi.','Pegulas väg mot titeln avgörs nu av hur hon hanterar motståndare som kan ta initiativet tidigare i duellerna.']}
  ],
  analysis:'Pegula vann utan att spela riskfritt. Förmågan att ta de stora poängen är positiv, men nästa nivå kräver en ännu stabilare förstaserve.',
  watch:['Pegulas serveprocent','Kvartsfinalen mot Emma Navarro','Belastningen inför semifinalerna'],
  sources:[{label:'Reuters: Pegula powers past Cirstea',url:'https://www.reuters.com/sports/tennis/pegula-powers-past-cirstea-romanian-bids-farewell-us-open-2026-09-07/'}]
 },
 {
  slug:'shelton-alcaraz-us-open',sport:'Tennis · US Open',title:'Shelton besegrade Tsitsipas – ställs mot Alcaraz',dek:'Ben Shelton vann i raka set med 6–2, 6–3, 6–4 och tog sig till kvartsfinal. Där väntar regerande mästaren Carlos Alcaraz.',
  date:'7 september 2026',publishedAt:'2026-09-07T07:50:00Z',lead:false,
  facts:['Shelton vann med 6–2, 6–3, 6–4.','Tsitsipas tog medicinsk timeout i andra set.','Shelton möter Carlos Alcaraz i kvartsfinal.'],
  body:[
   {heading:'Shelton satte tempot direkt',paragraphs:['Sheltons kraftfulla serve och offensiva position gav honom kommandot från början. Första set var över på 31 minuter.','Tsitsipas fick behandling under andra set och lyckades aldrig förändra matchbilden.']},
   {heading:'Analys och konsekvenser',paragraphs:['Mot Alcaraz behöver Shelton behålla servetrycket utan att ge bort för många returer. Alcaraz försvar och variation kommer att tvinga fram fler slag per poäng.','Segern håller hoppet om en amerikansk herrmästare levande. Den senaste var Andy Roddick 2003.']},
   {heading:'Längre fördjupning',paragraphs:['Sheltons publikstöd och vana vid Arthur Ashe Stadium kan jämna ut en del av skillnaden i erfarenhet. Samtidigt är Alcaraz bättre på att ändra rytm under en match.','Nyckeln blir om Shelton kan vinna korta poäng och ändå ha tålamod när Alcaraz förlänger duellerna.']}
  ],
  analysis:'Sheltons form är tydlig, men Alcaraz är ett betydligt mer komplett test. Matchen avgörs sannolikt av Sheltons andraserve och förmåga att försvara efter första attacken.',
  watch:['Sheltons andraserve','Alcaraz returer','Hur publiken påverkar matchtempot'],
  sources:[{label:'Reuters: Shelton stops Tsitsipas',url:'https://www.reuters.com/sports/tennis/shelton-stops-tsitsipas-sets-up-alcaraz-showdown-us-open-2026-09-07/'}]
 },
 {
  slug:'kina-vander-basket-vm',sport:'Basket · VM',title:'Kina vände och tog viktig VM-seger efter förlängning',dek:'Kinas damlandslag reste sig efter storförlusten mot USA och vann en dramatisk match efter att ha hämtat upp ett underläge i slutsekunderna.',
  date:'7 september 2026',publishedAt:'2026-09-06T18:00:00Z',lead:false,
  facts:['Han gjorde 22 poäng och tog 14 returer.','Kina tvingade fram förlängning efter ett sent underläge.','Segern kom efter en premiärförlust med 94–61 mot USA.'],
  body:[
   {heading:'En mental vändning',paragraphs:['Kina var pressat efter den klara premiärförlusten mot USA men lyckades rädda matchen sent och ta kommandot i förlängningen.','Hans dominans nära korgen gav laget både poäng och extra anfall.']},
   {heading:'Analys och konsekvenser',paragraphs:['Segern visar att Kina kan återhämta sig mentalt under en kort turnering. Samtidigt kvarstår frågan hur laget står sig mot snabbare motstånd som kan dra ut spelet från korgen.','Poängen är viktig för fortsatt avancemang och minskar pressen inför nästa gruppmatch.']},
   {heading:'Längre fördjupning',paragraphs:['Kinas storlek är en tydlig konkurrensfördel, men den kräver att bollhållarna kan leverera bollen utan många turnovers.','Motståndarna kommer sannolikt försöka höja tempot och attackera i omställning innan Kinas försvar hinner organisera sig.']}
  ],
  analysis:'Kina vann genom tålamod och fysisk styrka. För att gå långt krävs dock jämnare guardspel och bättre kontroll mot lag som pressar över hela planen.',
  watch:['Hans belastning','Kinas bolltapp','Gruppens kamp om slutspelsplatserna'],
  sources:[{label:'Reuters: Towering China get World Cup campaign back on track',url:'https://www.reuters.com/sports/towering-china-get-world-cup-campaign-back-track-2026-09-06/'}]
 }
];

export function isSportArticleFresh(article:SportArticle,now=Date.now()){const published=Date.parse(article.publishedAt);const age=now-published;return Number.isFinite(published)&&age>=0&&age<=SPORT_ARTICLE_MAX_AGE_MS}
export function getFreshSportArticles(now=Date.now()){return sportArticles.filter(article=>isSportArticleFresh(article,now)).sort((a,b)=>Date.parse(b.publishedAt)-Date.parse(a.publishedAt))}
export const sportArticleBySlug:Record<string,SportArticle>=Object.fromEntries(sportArticles.map(article=>[article.slug,article]));
export function getFreshSportArticleBySlug(slug:string,now=Date.now()){const article=sportArticleBySlug[slug];return article&&isSportArticleFresh(article,now)?article:undefined}
