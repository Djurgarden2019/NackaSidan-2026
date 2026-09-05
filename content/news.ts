export type NewsFeedItem = {
  time: string;
  section: string;
  title: string;
  summary: string;
  href: string;
  type: 'Briefing' | 'Analys' | 'Fördjupning';
};

export const latestNews: NewsFeedItem[] = [
  {time:'5 sep · 17.05',section:'Världen · Ukraina',title:'USA:s planerade fredsresor fortfarande osäkra',summary:'Washington söker säkerhetsgarantier inför möjliga besök i Moskva och Kyiv samtidigt som attackerna fortsätter.',href:'https://www.reuters.com/world/europe/trump-envoys-visit-russia-ukraine-weekend-tass-reports-2026-09-04/',type:'Analys'},
  {time:'5 sep · 16.50',section:'Vetenskap · Klimat',title:'Extrem vårvärme ger hög brandrisk kring Sydney',summary:'Temperaturen steg till omkring 33 grader och myndigheterna införde totalt eldningsförbud i delar av regionen.',href:'https://www.reuters.com/business/environment/sydney-sweats-spring-hot-spell-faces-extreme-bushfire-risk-2026-09-05/',type:'Fördjupning'},
  {time:'5 sep · 16.35',section:'Ekonomi · USA',title:'Stark jobbrapport ökar trycket på Federal Reserve',summary:'USA skapade 162 000 jobb i augusti och arbetslösheten låg kvar på 4,1 procent.',href:'https://www.reuters.com/business/fed-rate-hike-back-focus-after-strong-jobs-report-2026-09-04/',type:'Analys'},
  {time:'5 sep · 16.20',section:'Sport · Friidrott',title:'Kamga femma i Diamond League-finalen',summary:'Vanessa Kamga kastade 62,53 meter i diskus. Finalhelgen fortsätter i Bryssel under lördagskvällen.',href:'https://www.svt.se/sport/friidrott/liverapportering-friidrott-2026',type:'Briefing'},
  {time:'5 sep · 16.05',section:'Stockholm',title:'Tjejmilen avgörs på Gärdet',summary:'Det 10 kilometer långa loppet samlar löpare och publik i Stockholm under lördagen.',href:'https://www.svt.se/sport/friidrott/guide-arets-storsta-loparfester-i-sverige-2026',type:'Briefing'},
  {time:'5 sep · 15.50',section:'Sverige · Val 2026',title:'Valrörelsen går in i sin sista hela vecka',summary:'Förtidsröstningen fortsätter inför valdagen den 13 september och utlandsrösterna går mot rekord.',href:'https://www.svt.se/nyheter/inrikes/senaste-nytt-om-val-2026',type:'Fördjupning'},
  {time:'5 sep · 15.35',section:'Kultur',title:'Kulturens finansiering och självständighet prövas i valet',summary:'Debatten gäller både anslag, privata pengar, kulturkanon och principen om armlängds avstånd.',href:'https://www.svt.se/kultur/genomgangen-detta-ar-parisa-liljestrands-fyra-ar',type:'Analys'},
  {time:'5 sep · 15.20',section:'Nacka',title:'Två nya skyddade områden öppnar för helgutflykt',summary:'Baggensstäkets kulturreservat och Svartkärrsbergets biotopskyddsområde har invigts.',href:'https://www.nacka.se/nyheter-start/',type:'Briefing'},
  {time:'5 sep · 15.05',section:'Ekonomi · Fördjupning',title:'Makroläget i Sverige, USA, EU, Japan och Kina',summary:'NackaSidan jämför tillväxt, inflation, räntor och risker i fem centrala ekonomier.',href:'/ekonomi/makrolaget',type:'Fördjupning'}
];