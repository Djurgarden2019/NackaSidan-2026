export type NewsFeedItem = {
  time: string;
  section: string;
  title: string;
  summary: string;
  href: string;
  type: 'Briefing' | 'Analys' | 'Fördjupning';
};

export const latestNews: NewsFeedItem[] = [
  {time:'4 sep · 07.20',section:'Världen · Energi',title:'Oljepriset mot största veckouppgången sedan juli',summary:'Brentoljan handlas omkring 96 dollar per fat när konflikten mellan USA och Iran ökar oron för leveranser genom Hormuz.',href:'https://www.reuters.com/business/energy/oil-set-steepest-weekly-gain-since-mid-july-over-intensifying-us-iran-tensions-2026-09-04/',type:'Analys'},
  {time:'4 sep · 07.05',section:'USA · Ekonomi',title:'Jobbrapporten blir nytt test för Federal Reserve',summary:'Ekonomer väntar en försiktig återhämtning i sysselsättningen och oförändrad arbetslöshet på 4,1 procent.',href:'https://www.reuters.com/business/us-job-growth-expected-rebound-august-unemployment-rate-forecast-steady-41-2026-09-04/',type:'Briefing'},
  {time:'4 sep · 06.50',section:'Sverige · Val 2026',title:'Utlandsrösterna går mot rekord',summary:'Valrörelsen går in i slutskedet inför den 13 september. Förtidsröstningen fortsätter till och med valdagen.',href:'https://www.svt.se/nyheter/inrikes/senaste-nytt-om-val-2026',type:'Briefing'},
  {time:'4 sep · 06.35',section:'Kultur',title:'Fyra år av kulturpolitik granskas inför valet',summary:'SVT Kultur sammanfattar kulturministerns mandatperiod med finansiering, kulturkanon och institutionernas ekonomi i centrum.',href:'https://www.svt.se/kultur/genomgangen-detta-ar-parisa-liljestrands-fyra-ar',type:'Fördjupning'},
  {time:'4 sep · 06.20',section:'Japan · Ekonomi',title:'Yenen går mot sin starkaste vecka på en månad',summary:'Förväntningar om en möjlig japansk räntehöjning har stärkt yenen samtidigt som marknaden inväntar amerikanska jobbdata.',href:'https://www.reuters.com/world/asia-pacific/yen-headed-strongest-week-month-dollar-flat-ahead-payroll-data-2026-09-04/',type:'Analys'},
  {time:'4 sep · 06.05',section:'Vetenskap · Klimat',title:'El Niño kan bli den starkaste som uppmätts',summary:'WMO bedömer att väderfenomenet med stor sannolikhet består till februari 2027 och varnar för omfattande följder.',href:'https://www.reuters.com/business/environment/el-nino-likely-strengthen-further-persist-into-2027-wmo-says-2026-09-03/',type:'Fördjupning'},
  {time:'4 sep · 05.50',section:'Nacka',title:'Två nya skyddade områden har invigts',summary:'Baggensstäkets kulturreservat och Svartkärrsbergets biotopskyddsområde får ett långsiktigt skydd.',href:'https://www.nacka.se/nyheter-start/',type:'Briefing'},
  {time:'4 sep · 05.35',section:'Sport · Friidrott',title:'Diamond League-finalen inleds i Bryssel',summary:'Världseliten samlas den 4–5 september för finaler i löpning, hopp och kast.',href:'https://www.svt.se/sport/friidrott/guide-diamond-league-2026',type:'Briefing'},
  {time:'4 sep · 05.20',section:'Ekonomi · Fördjupning',title:'Makroläget i Sverige, USA, EU, Japan och Kina',summary:'NackaSidan jämför tillväxt, inflation, räntor och risker i fem centrala ekonomier.',href:'/ekonomi/makrolaget',type:'Fördjupning'}
];