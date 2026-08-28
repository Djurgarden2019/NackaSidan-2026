export type SwedenArticle220 = { slug:string; section:string; title:string; intro:string; publishedAt:string; updatedAt:string; status:'published'|'verify-before-publish'; sourceUrls:string[]; body:{heading?:string;paragraphs:string[]}[]; tags:string[]; region?:string };

const updatedAt = '2026-08-28T15:20:00+02:00';

export const swedenArticles220: SwedenArticle220[] = [
  {
    slug:'regeringen-hojer-bnp-prognosen-2026', section:'ekonomi', title:'Regeringen höjer BNP-prognosen inför valet',
    intro:'Sveriges ekonomi väntas växa med 2,5 procent under 2026, enligt regeringens nya prognos. Uppjusteringen är liten men politiskt betydelsefull inför valet.',
    publishedAt:'2026-08-27T18:30:00+02:00', updatedAt, status:'published', region:'Sverige',
    sourceUrls:['https://www.reuters.com/world/europe/swedish-government-raises-gdp-forecast-ahead-september-election-2026-08-27/','https://www.scb.se/hitta-statistik/temaomraden/sveriges-ekonomi/'],
    body:[
      {heading:'Prognosen skrivs upp',paragraphs:['Regeringen höjer prognosen för BNP-tillväxten 2026 från 2,3 till 2,5 procent. Prognosen för 2027 ligger kvar på 2,5 procent. Förändringen signalerar en något starkare återhämtning, men nya uppgifter om konsumtion, export eller arbetsmarknad kan snabbt ändra bilden.','En prognos är inte ett bokslut. Den bygger på antaganden om räntor, inflation, internationell efterfrågan och hushållens konsumtion. Uppjusteringen bör därför läsas tillsammans med kommande statistik från SCB.']},
      {heading:'Konsekvenser för hushåll och företag',paragraphs:['Om tillväxten blir starkare kan efterfrågan, skatteunderlag och investeringar förbättras. Effekten kommer dock med fördröjning och fördelas ojämnt mellan branscher och delar av landet.','För hushållen är reallöner, boräntor och risken att förlora jobbet mer påtagliga än BNP-talet. En växande ekonomi kan därför samexistera med fortsatt pressade marginaler.']},
      {heading:'Analys: ett ekonomiskt budskap i valrörelsen',paragraphs:['Uppjusteringen stärker regeringens berättelse om att ekonomin är på väg ur en svag period. Oppositionen kan samtidigt peka på osäkerheten och på att hushållens upplevelse ofta släpar efter de nationella indikatorerna.','Svensk ekonomi är starkt beroende av omvärlden. Export, energipriser och europeisk efterfrågan kan väga tyngre än inhemska reformer under enskilda kvartal. Prognosen är viktig, men inte ett facit.']}
    ], tags:['Ekonomi','BNP','Valet 2026']
  },
  {
    slug:'valrorelsen-regeringsfragan-skarps', section:'politik', title:'Regeringsfrågan skärps när valdagen närmar sig',
    intro:'Partiernas röda linjer kan göra regeringsbildningen komplicerad även om ett block får ett tydligt övertag. Frågan är vem som faktiskt kan samla stöd i riksdagen.',
    publishedAt:'2026-08-27T19:25:00+02:00', updatedAt, status:'published', region:'Sverige',
    sourceUrls:['https://www.svt.se/nyheter/inrikes/senaste-nytt-om-val-2026','https://www.val.se/'],
    body:[
      {heading:'Regeringsalternativen hamnar i centrum',paragraphs:['Med kort tid kvar till valdagen får partiernas besked om samarbeten och ministerposter större betydelse. Väljarna tar inte bara ställning till sakfrågor utan också till vilka partier som kan tolerera eller aktivt stödja en regering.','En statsminister kan tillträda så länge inte en majoritet av riksdagen röstar emot. Förhandlingarna efter valet kan därför bli avgörande även om styrkeförhållandet ser tydligt ut på valnatten.']},
      {heading:'Konsekvenser för partierna',paragraphs:['Små partier kan få stort inflytande om mandatfördelningen blir jämn. Samtidigt kan hårda ultimatum före valet minska handlingsutrymmet efteråt.','För väljarna ökar behovet av att skilja mellan partiernas önskade regering och de kompromisser som kan bli nödvändiga för att få igenom en budget.']},
      {heading:'Analys: mandat är bara början',paragraphs:['Relationerna inom blocken kan bli lika avgörande som avståndet mellan dem, särskilt i frågor om migration, klimat, skatter och Sverigedemokraternas inflytande.','Ett utdraget regeringsskifte är inte i sig ett demokratiskt misslyckande. Den verkliga prövningen blir om en ny regering kan hålla ihop när svåra prioriteringar ska omsättas i beslut.']}
    ], tags:['Valet 2026','Regeringsbildning','Politik']
  },
  {
    slug:'sverige-kraver-mindre-eu-budget', section:'politik', title:'Sverige kräver nedskärningar i EU:s långtidsbudget',
    intro:'Sverige och fem andra nettobetalande länder vill minska EU-kommissionens budgetförslag. Konflikten gäller både budgetens storlek och unionens prioriteringar.',
    publishedAt:'2026-08-27T17:40:00+02:00', updatedAt, status:'published', region:'Sverige',
    sourceUrls:['https://www.reuters.com/business/six-eu-net-contributors-demand-hundreds-billions-cuts-blocs-long-term-budget-2026-08-27/','https://commission.europa.eu/strategy-and-policy/eu-budget/long-term-eu-budget_en'],
    body:[
      {heading:'Sex länder pressar kommissionen',paragraphs:['Tyskland, Danmark, Nederländerna, Österrike, Finland och Sverige anser att EU-kommissionens föreslagna långtidsbudget på omkring två biljoner euro är för stor.','Länderna vill prioritera försvar, konkurrenskraft, migration och europeisk suveränitet. De motsätter sig också ny gemensam upplåning.']},
      {heading:'Konsekvenser för Sverige',paragraphs:['En mindre budget kan hålla nere den svenska EU-avgiften men samtidigt minska stöd till jordbruk, regional utveckling och forskning. Frågan gäller därför både vad Sverige betalar och vad svenska aktörer får tillbaka.','Om försvar och konkurrenskraft prioriteras måste andra områden få mindre. Regeringen behöver visa vilka besparingar den vill göra och vilka svenska intressen den vill skydda.']},
      {heading:'Analys: sparlinjen möter nya krav',paragraphs:['Sveriges restriktiva budgetlinje utmanas av att EU samtidigt förväntas göra mer inom säkerhet, energi och industri. Utan nya resurser uppstår ett glapp mellan ambition och kapacitet.','Sveriges position blir starkare om regeringen presenterar konkreta omprioriteringar, inte bara ett lägre slutbelopp. Förhandlingen handlar ytterst om vilken roll EU ska ha.']}
    ], tags:['EU','Budget','Sverige']
  },
  {
    slug:'valet-2026-viktiga-datum', section:'politik', title:'Valet 2026: datumen du behöver ha koll på',
    intro:'Sverige går till val den 13 september 2026. Här är hållpunkterna, vad väljaren behöver göra och varför förtidsröstningen förändrar valrörelsen.',
    publishedAt:'2026-08-13T18:00:00+02:00', updatedAt, status:'published', region:'Sverige',
    sourceUrls:['https://www.val.se/','https://www.val.se/servicelankar/other-languages/english-engelska.html'],
    body:[
      {heading:'Valdagen och förtidsröstningen',paragraphs:['Valdagen är söndagen den 13 september. Väljarna röstar samtidigt till riksdagen, regionfullmäktige och kommunfullmäktige. De tre valen gäller olika politiska nivåer.','Förtidsröstningen började den 26 augusti. Den som röstar tidigt bör kontrollera lokal och öppettider hos Valmyndigheten eller kommunen och ta med röstkort och identitetshandling.']},
      {heading:'Konsekvenser för valrörelsen',paragraphs:['Många väljare fattar sitt beslut innan partiernas sista debatter är genomförda. Sena utspel kan därför få mindre räckvidd, även om dramatiska händelser fortfarande kan påverka osäkra väljare.','Kommuner och myndigheter behöver samtidigt säkerställa tillgängliga lokaler, korrekt information och en robust rösträkning. Förtroendet för processen är lika viktigt som valdeltagandet.']},
      {heading:'Analys: tre val formar vardagen',paragraphs:['Riksdagsvalet får mest uppmärksamhet, men region- och kommunvalen påverkar vård, kollektivtrafik, skola, äldreomsorg och samhällsplanering.','En seriös valbevakning måste granska både regeringsalternativ och lokala konsekvenser. Fakta, partiernas löften och redaktionell analys ska hållas tydligt åtskilda.']}
    ], tags:['Valet 2026','Valmyndigheten','Politik']
  },
  {
    slug:'sverige-ekonomi-laget-2026', section:'ekonomi', title:'Svensk ekonomi 2026: så läser du de viktigaste siffrorna',
    intro:'BNP, konsumtion, export och arbetsmarknad berättar olika delar av samma historia. Ingen ensam indikator räcker för att avgöra hur Sverige mår.',
    publishedAt:'2026-08-13T18:10:00+02:00', updatedAt, status:'published', region:'Sverige',
    sourceUrls:['https://www.scb.se/hitta-statistik/temaomraden/sveriges-ekonomi/','https://www.riksbank.se/sv/penningpolitik/'],
    body:[
      {heading:'Fyra mått ger helhetsbilden',paragraphs:['BNP beskriver den samlade ekonomiska aktiviteten. Kvartalsförändringar kan vara ryckiga och revideras, så de bör jämföras både över kvartal och år.','Konsumtionen visar inhemsk efterfrågan, exporten omvärldens betydelse och arbetsmarknaden hur utvecklingen når människor. Inflation och räntor avgör hur inkomster och skulder känns i vardagen.']},
      {heading:'Konsekvenser för hushåll och välfärd',paragraphs:['En exportdriven återhämtning kan gynna industrin utan att omedelbart lyfta handeln. Om arbetslösheten förblir hög kan kommuners och regioners skatteintäkter utvecklas svagt trots positiv BNP-tillväxt.','För hushåll spelar räntor, boendekostnader och löneutveckling störst roll. Olika grupper kan därför uppleva samma konjunktur på helt olika sätt.']},
      {heading:'Analys: kvaliteten på tillväxten avgör',paragraphs:['En återhämtning med högre produktivitet, investeringar och fler arbetade timmar är starkare än en tillfällig konsumtionsökning. Det viktiga är både hur snabbt och hur brett ekonomin växer.','En robust vändning kräver en kombination av stabilare inflation, stigande sysselsättning och ökade investeringar. Ett ensamt BNP-tal räcker inte.']}
    ], tags:['Ekonomi','SCB','BNP']
  },
  {
    slug:'arbetsloshet-varfor-siffrorna-skiljer-sig', section:'samhälle', title:'Arbetslösheten: därför kan två officiella siffror skilja sig',
    intro:'AKU och BAS mäter arbetsmarknaden på olika sätt. Skillnaderna behöver inte vara fel, men de kan förändra den politiska berättelsen om jobben.',
    publishedAt:'2026-08-13T18:20:00+02:00', updatedAt, status:'published', region:'Sverige',
    sourceUrls:['https://www.scb.se/hitta-statistik/statistik-efter-amne/arbetsmarknad/arbetskraftsundersokningar/arbetskraftsundersokningarna-aku/','https://www.scb.se/hitta-statistik/statistik-efter-amne/arbetsmarknad/sysselsattning-forvarvsarbete-och-arbetstider/befolkningens-arbetsmarknadsstatus/'],
    body:[
      {heading:'Två system mäter olika saker',paragraphs:['AKU bygger på en urvalsundersökning och följer internationella definitioner. BAS bygger huvudsakligen på administrativa uppgifter. Systemen har olika styrkor, populationer och publiceringstakt.','Skillnader i åldersgrupper, referensperioder och definitioner gör att procenttal inte kan jämföras rakt av. Metod och period måste alltid stå nära siffran.']},
      {heading:'Konsekvenser för politiken',paragraphs:['Två politiska påståenden kan låta motsägelsefulla trots att båda bygger på officiell statistik. Det kan försvaga förtroendet när den verkliga skillnaden handlar om metod.','AKU är viktigt för internationella jämförelser, medan registerdata kan ge mer detaljer om grupper och geografiska områden. Beslut bör bygga på flera serier.']},
      {heading:'Analys: frågan bakom procentsatsen',paragraphs:['Långtidsarbetslöshet, ungdomars etablering och skillnader mellan utbildningsgrupper säger mer om strukturella problem än en liten månadsförändring i totalen.','Sysselsättningsgrad, arbetade timmar och arbetskraftsdeltagande behövs också. Arbetslösheten kan sjunka utan att fler får jobb om människor lämnar arbetskraften.']}
    ], tags:['Arbetsmarknad','SCB','AKU','BAS']
  },
  {
    slug:'goteborg-regionbevakning', section:'regioner', title:'Göteborg och Västsverige: industrins omställning möter kompetensjakt',
    intro:'Näringsliv, bostäder, infrastruktur och välfärd hänger ihop. Göteborgsregionens utveckling får konsekvenser långt utanför kommungränsen.',
    publishedAt:'2026-08-13T19:20:00+02:00', updatedAt, status:'published', region:'Göteborg och Västsverige',
    sourceUrls:['https://www.scb.se/hitta-statistik/statistik-efter-amne/','https://www.vgregion.se/regional-utveckling/statistik-och-analys/'],
    body:[
      {heading:'Fyra frågor formar Västsverige',paragraphs:['Göteborg och Västsverige präglas av exportindustri, logistik, stora pendlingsflöden och en växande tjänstesektor. Jobb, företagande, bostäder och befolkning måste följas tillsammans.','Kommungränser beskriver inte hela arbetsmarknaden. Beslut om hamn, järnväg, vägar och bostäder påverkar ett betydligt större område.']},
      {heading:'Konsekvenser för invånare och kommuner',paragraphs:['Nya jobb ökar efterfrågan på bostäder, skolor, vård och kollektivtrafik. Om byggande och infrastruktur släpar efter kan kompetensbrist och längre restider bromsa tillväxten.','Industrins omställning kan skapa kvalificerade jobb men också snabba teknikskiften. Utbildningssystemet behöver svara mot både ingenjörsyrken och yrkesutbildad arbetskraft.']},
      {heading:'Analys: styrkan är också en sårbarhet',paragraphs:['Exportinriktningen ger produktivitet och investeringar men gör regionen känslig för handelskonflikter och svag global efterfrågan.','Regional konkurrenskraft kräver samordning. Bostäder, kompetens, elförsörjning och transporter måste utvecklas i takt med företagens investeringar.']}
    ], tags:['Göteborg','Västsverige','Regioner']
  },
  {
    slug:'malmo-oresund-regionbevakning', section:'regioner', title:'Malmö och Öresund: arbetsmarknaden växer över gränserna',
    intro:'Jobb, bostäder, transporter och företagande formar en region där vardagen ofta går tvärs över kommun- och nationsgränser.',
    publishedAt:'2026-08-13T19:25:00+02:00', updatedAt, status:'published', region:'Malmö och Öresund',
    sourceUrls:['https://www.scb.se/hitta-statistik/statistik-efter-amne/','https://www.oresundsinstituttet.org/fakta/'],
    body:[
      {heading:'En region med flera nivåer',paragraphs:['Malmö och sydvästra Skåne påverkas av både svenska och danska arbetsmarknader. Pendling och företagsetableringar gör att utvecklingen inte kan förstås genom Malmö kommuns statistik ensam.','Kommun, län och Öresundsregion beskriver olika saker. Tydliga geografiska nivåer, källor och perioder är avgörande vid jämförelser.']},
      {heading:'Konsekvenser för jobb och bostäder',paragraphs:['En större arbetsmarknad ger företag fler rekryteringsmöjligheter och invånare fler jobb. Men pendlingen påverkas av valuta, skatteregler, biljettpriser och trafikstörningar.','Ökad attraktivitet pressar bostäder och kollektivtrafik. Om kapaciteten inte följer med riskerar tillväxten att förstärka skillnader mellan områden.']},
      {heading:'Analys: integration kräver mer än en bro',paragraphs:['Verklig integration avgörs av hur enkelt människor kan arbeta, studera och driva företag över gränsen. Förutsägbara regler är lika viktiga som fysisk infrastruktur.','Regionens framgång bör mätas i fler jobb och högre produktivitet, men också i hur brett möjligheterna fördelas mellan stadsdelar och kommuner.']}
    ], tags:['Malmö','Öresund','Skåne']
  },
  {
    slug:'norrland-regionbevakning', section:'regioner', title:'Norra Sverige: miljardinvesteringar prövar hela samhällsbygget',
    intro:'Industriinvesteringar måste vägas mot kompetensförsörjning, bostäder och offentlig service. Omställningen berör betydligt mer än fabrikerna.',
    publishedAt:'2026-08-13T19:30:00+02:00', updatedAt, status:'published', region:'Norra Sverige',
    sourceUrls:['https://www.scb.se/hitta-statistik/statistik-efter-amne/','https://www.tillvaxtverket.se/tillvaxtverket/statistikochanalys.1882.html'],
    body:[
      {heading:'Investeringarna förändrar samhället',paragraphs:['Stora industri- och energiprojekt kan skapa jobb och leverantörskedjor. Men investeringsbelopp säger inte ensamma hur en region utvecklas. Befolkning, sysselsättning, bostäder och service måste följas parallellt.','Umeå och Luleå är regionala nav, men omställningen omfattar ett större område. Avstånd, elnät, järnväg och arbetskraft påverkar genomförandet.']},
      {heading:'Konsekvenser för kommuner och jobb',paragraphs:['Snabb inflyttning kan stärka skattebasen men kräver bostäder, skolor och service innan alla intäkter har kommit. Kostnaderna uppstår tidigt medan vinsterna är osäkra.','Kompetensbrist kan skapa konkurrens om personal mellan industrin, byggsektorn och välfärden. Utbildning, inflyttning och matchning blir avgörande.']},
      {heading:'Analys: trovärdigheten avgörs lokalt',paragraphs:['Om projekten lyckas kan norra Sverige få en starkare ekonomi. Vid förseningar riskerar kommuner att stå med kostnader och planer byggda på alltför optimistiska antaganden.','Sverige behöver förena industri-, bostads-, energi-, transport- och utbildningspolitik. Hanteras systemen var för sig uppstår flaskhalsar; samordnas de kan omställningen bli varaktig.']}
    ], tags:['Norrland','Umeå','Luleå','Regional ekonomi']
  }
];

export const swedenArticleRules220 = {maxOrdinaryNewsAgeDays:10,requireSource:true,requirePublishedAt:true,principles:['Publicerade nyhetsartiklar ska bygga på verifierbara källor.','Analys ska tydligt skiljas från verifierbara fakta.','Gamla artiklar får inte få nytt publiceringsdatum bara för att se färska ut.','Väsentliga uppdateringar ska ändra updatedAt och beskrivas öppet.']};
