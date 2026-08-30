import type {Analysis} from './analyses';

export type ExtendedSection={heading:string;paragraphs:string[]};

export function buildExtendedAnalysis(item:Analysis):ExtendedSection[]{
 const facts=item.facts;
 const interpretations=item.interpretation;
 const uncertainties=item.uncertainties;
 const watch=item.watch;
 return [
  {
   heading:'Drivkrafterna bakom utvecklingen',
   paragraphs:[
    `${item.thesis} Det är analysens utgångspunkt, men den behöver läsas tillsammans med de konkreta förhållanden som redan är belagda. ${facts[0]} ${facts[1]??''} De uppgifterna beskriver inte hela utvecklingen, men de visar vilka krafter som just nu begränsar aktörernas handlingsutrymme och vilka beslut som kan få störst effekt.`,
    `${interpretations[0]} Ett centralt analytiskt misstag vore därför att bedöma händelsen isolerat. Politik, ekonomi, institutioner och människors beteende påverkar varandra över tid. En förändring på ett område kan förstärka eller bromsa utvecklingen på ett annat, vilket gör riktningen viktigare än en enskild dagsrubrik.`
   ]
  },
  {
   heading:'Vilka konsekvenser som kommer först',
   paragraphs:[
    `${interpretations[1]??interpretations[0]} Den första konsekvensen märks normalt hos de aktörer som har minst ekonomiska, politiska eller organisatoriska marginaler. De kan inte vänta ut osäkerheten på samma sätt som en stat, en stor institution eller ett kapitalstarkt företag. Därför kan en till synes begränsad förändring få stora följder långt innan helhetsbilden syns i officiell statistik.`,
    `${facts[2]??facts[0]} På kort sikt handlar besluten om anpassning och riskminskning. På längre sikt kan samma beslut förändra investeringar, förtroende och maktfördelning. Det är den övergången som avgör om utvecklingen blir tillfällig eller strukturell, och den går sällan att förstå genom att enbart följa vinnare, förlorare eller totalsiffror.`
   ]
  },
  {
   heading:'Motargument och alternativa förklaringar',
   paragraphs:[
    `Analysen måste samtidigt prövas mot andra möjliga förklaringar. ${uncertainties[0]} ${uncertainties[1]??''} Det innebär att sambandet mellan den senaste händelsen och den större utvecklingen inte ska beskrivas som säkrare än källorna medger. Nya uppgifter kan ändra både tidsperspektivet och bedömningen av vilka aktörer som faktiskt har störst inflytande.`,
    `Ett rimligt motargument är att etablerade system ofta är mer motståndskraftiga än de ser ut i ett pressat nyhetsläge. Aktörer kan kompromissa, flytta kostnader eller hitta tekniska och politiska reservlösningar. Men motståndskraft är inte kostnadsfri. Frågan är vem som betalar för anpassningen, hur länge den kan pågå och om den skapar nya problem som blir synliga först senare.`
   ]
  },
  {
   heading:'Scenarierna som avgör nästa fas',
   paragraphs:[
    `Ett försiktigt huvudscenario är att utvecklingen fortsätter stegvis snarare än genom ett enda avgörande. Då blir ${watch[0]?.toLowerCase()??'nästa beslut'} och ${watch[1]?.toLowerCase()??'de kommande beskeden'} de viktigaste signalerna. Om de rör sig i samma riktning stärks huvudtesen. Om de divergerar behöver analysen omprövas och större vikt läggas vid alternativa förklaringar.`,
    `Ett mer omvälvande scenario kräver att en central osäkerhet löses snabbt eller att en oväntad händelse förändrar aktörernas kalkyl. ${uncertainties[uncertainties.length-1]} Därför följer NackaSidan både det som kan mätas nu och de beslut som ännu inte är fattade. En seriös analys ska inte låtsas veta exakt vad som händer, men den ska tydliggöra vilka observationer som skulle förändra slutsatsen.`
   ]
  }
 ];
}
