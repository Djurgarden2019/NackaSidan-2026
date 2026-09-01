export type NewsFeedItem = {
  time: string;
  section: string;
  title: string;
  summary: string;
  href: string;
  type: 'Briefing' | 'Analys' | 'Fördjupning';
};

export const latestNews: NewsFeedItem[] = [
  {time:'1 sep · 16.35',section:'Ukraina',title:'Dödstalet stiger till 12 efter sjätte raka angreppsdagen',summary:'Ryska robot- och drönarangrepp har dödat minst 12 människor i Kyivregionen. Järnvägsarbetare finns bland offren och Ukraina efterlyser mer luftvärn.',href:'https://www.reuters.com/world/europe/explosions-heard-ukraines-kyiv-four-people-injured-2026-09-01/',type:'Briefing'},
  {time:'1 sep · 16.20',section:'Iran · Energi',title:'Irans oljeexport har nästan stannat under blockaden',summary:'Exporten föll från omkring två miljoner fat per dag i mars till cirka 220 000–255 000 fat per dag i augusti, enligt Reuters sammanställning.',href:'https://www.reuters.com/business/energy/blockade-succeeds-where-sanctions-failed-iran-oil-exports-stall-2026-09-01/',type:'Analys'},
  {time:'1 sep · 16.05',section:'Ukraina · Ekonomi',title:'Parlamentet stoppar lag kopplad till IMF- och EU-stöd',summary:'Förslaget om skatt på mindre utlandspaket fick inte tillräckligt stöd. Beslutet kan försvåra tillgången till flera miljarder euro i extern finansiering.',href:'https://www.reuters.com/world/ukraine-parliament-fails-pass-parcel-tax-law-tied-imf-eu-funding-2026-09-01/',type:'Fördjupning'},
  {time:'1 sep · 15.50',section:'Världsekonomi',title:'Höga oljepriser och räntor pressar marknaderna',summary:'Globala obligationsräntor fortsätter upp och amerikanska börser öppnade lägre när investerare oroar sig för energidriven inflation och stramare penningpolitik.',href:'https://www.reuters.com/',type:'Analys'},
  {time:'1 sep · 15.25',section:'Sverige · Ekonomi',title:'Matpriserna uppges ha sjunkit 5,5 procent efter momssänkningen',summary:'Matpriskommissionens första redovisning visar ett tydligt prisfall sedan matmomsen halverades. Effekten behöver vägas mot andra kostnadsförändringar.',href:'/sverige',type:'Fördjupning'},
  {time:'1 sep · 15.05',section:'Stockholm · Rågsved',title:'Två tonårspojkar gripna efter misshandel vid tunnelbanan',summary:'En tonårsflicka ska ha blivit slagen och sparkad vid Rågsveds tunnelbanestation. De tidiga uppgifterna kan ändras när utredningen fortsätter.',href:'https://www.aftonbladet.se/stockholm',type:'Briefing'},
  {time:'1 sep · 14.40',section:'Val 2026',title:'Oppositionen leder med 5,7 procentenheter i senaste Demoskop',summary:'Oppositionen samlar 51,7 procent mot Tidöpartiernas 46,0. KD når 8,5 procent medan Liberalerna ligger på 2,0.',href:'https://demoskop.se/extra-valjarbarometer-augusti-2026/',type:'Analys'},
  {time:'1 sep · 14.15',section:'Ukraina · Odesa',title:'Angrepp mot hamnar och exportvägar fördjupar Ukrainas press',summary:'Ryska attacker har skadat hamn-, energi- och gränsinfrastruktur i Odesaregionen och stoppat trafik vid en övergång mot Rumänien.',href:'https://www.reuters.com/world/russia-hits-port-export-facilities-ukraines-odesa-region-kyiv-says-2026-09-01/',type:'Fördjupning'}
];
