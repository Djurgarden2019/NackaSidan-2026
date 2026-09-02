export type WorldLongRead = {
  eyebrow: string;
  title: string;
  lead: string;
  news: string[];
  analysis: string[];
  depth: string[];
  sources: { label: string; href: string }[];
};

export const worldLongReads: WorldLongRead[] = [
  {
    eyebrow: 'USA–Iran · Säkerhet och energi',
    title: 'Nya attacker gör Hormuz till konfliktens avgörande nerv',
    lead: 'USA har genomfört en ny våg av angrepp mot mål kopplade till Irans revolutionsgarde. Iran har svarat med robotar och drönare mot amerikanska mål i regionen. Konflikten påverkar samtidigt sjöfarten genom Hormuzsundet och därmed världens energiförsörjning.',
    news: [
      'USA:s militär uppger att angreppen riktades mot bland annat luftförsvar, radar, marina resurser, minläggningsförmåga och kommunikationsanläggningar. Iran säger sig i sin tur ha angripit amerikanska militära mål i Jordanien, Bahrain och Irak. Uppgifterna om skador och eventuella förluster går isär och måste därför behandlas försiktigt.',
      'Den civila kostnaden blir allt tydligare. En attack nära Sirik vid Hormuzsundet uppges ha dödat flera människor och skadat många fler. Samtidigt har attacker mot tankfartyg och hot mot kommersiell sjöfart skapat ny osäkerhet kring en transportled som är central för den globala oljemarknaden.'
    ],
    analysis: [
      'Konfliktens kärna är inte bara vilka militära mål som träffas. Den viktigaste strategiska frågan är om parterna kan begränsa striderna utan att förlora trovärdighet inför sina egna befolkningar och regionala allierade. USA försöker minska Irans förmåga att hota sjöfarten. Iran försöker visa att kostnaden för fortsatt amerikanskt tryck kan spridas till baser, allierade och energiflöden i hela regionen.',
      'Gulfstaterna hamnar i ett särskilt svårt läge. De är beroende av amerikanska säkerhetsgarantier men vill undvika att deras territorier och energianläggningar blir en del av slagfältet. Ju fler iranska projektiler som riktas mot amerikansk närvaro i regionen, desto svårare blir det för dessa regeringar att hålla en diplomatisk distans.',
      'För Europa och Sverige går den snabbaste konsekvenskedjan via energipriser, inflation och marknadsräntor. Ett varaktigt riskpåslag på olja och transporter kan fördyra drivmedel, industrins insatsvaror och sjöfrakt. Effekten blir störst om osäkerheten består i månader, även utan en total stängning av Hormuz.'
    ],
    depth: [
      'Tre scenarier är viktigast att följa. I det första återgår parterna till begränsade angrepp och indirekta kontakter. I det andra fortsätter en utdragen militär kraftmätning som successivt försvagar handel och investeringar. I det tredje angrips kritisk energiinfrastruktur eller ett fartyg med stora civila förluster, vilket kan utlösa en betydligt bredare regional konfrontation.',
      'Det avgörande är därför inte en enskild attack utan om det finns fungerande kanaler för deeskalering, vilka mål parterna väljer och om Gulfstaterna lyckas begränsa användningen av deras territorier. Även marknadens bedömning av försäkringsrisker och tillgången på tankfartyg blir en tidig signal om hur allvarligt läget är.'
    ],
    sources: [
      { label: 'Reuters: USA avslutar senaste angreppsvågen mot Iran', href: 'https://www.reuters.com/world/middle-east/us-military-says-it-completed-latest-wave-strikes-iran-2026-09-02/' },
      { label: 'Reuters: USA och Iran utbyter nya attacker', href: 'https://www.reuters.com/world/middle-east/us-iran-exchange-attacks-lull-war-appears-over-2026-09-02/' },
      { label: 'Reuters: Oljepriserna stiger efter attackerna', href: 'https://www.reuters.com/business/energy/oil-up-nearly-1-us-iran-trade-fresh-strikes-2026-09-02/' }
    ]
  },
  {
    eyebrow: 'Ukraina · Flygsäkerhet',
    title: 'Drönarkriget flyttar riskerna långt bakom fronten',
    lead: 'Ukraina säger att återkommande drönaroperationer har gjort delar av det ryska luftrummet osäkert. Samtidigt fortsätter ryska robot- och drönarangrepp mot ukrainska städer och infrastruktur.',
    news: [
      'President Volodymyr Zelenskyj har uppmanat flygbolag och försäkringsbolag att väga in den växande risken i ryskt luftrum. Europeiska och amerikanska bolag undviker redan området, medan flera flygbolag från andra regioner fortfarande använder ryska rutter.',
      'Utvecklingen följer på intensifierade ryska angrepp mot Kyiv och andra ukrainska städer. Ukraina har samtidigt ökat sina långräckviddiga drönarangrepp mot rysk energi-, transport- och militär infrastruktur.'
    ],
    analysis: [
      'Det långräckviddiga drönarkriget förändrar konfliktens geografi. Frontlinjen är fortfarande central, men kostnaderna sprids nu till flygplatser, raffinaderier, lager och transporter långt inne i Ryssland. Det tvingar Moskva att fördela luftförsvar över ett mycket större område.',
      'För civilflyget uppstår en svår kombination av osäker information, elektronisk störning och risken för felidentifiering. Även om Ukraina säger att civila flyg inte är mål kan ett tätare militärt operationsmönster öka risken för misstag. Flygbolagens ruttval blir därför både en säkerhetsfråga och en konkurrensfråga.',
      'För Europa kan följderna bli längre flygrutter, högre försäkringskostnader och ytterligare press på energimarknaden om ryska exportanläggningar skadas. Samtidigt kan Ukrainas förmåga att nå mål på djupet stärka landets förhandlingsläge utan att automatiskt förändra situationen vid fronten.'
    ],
    depth: [
      'Den viktigaste militära frågan är om drönarangreppen kan skapa varaktiga kapacitetsproblem eller främst tillfälliga störningar. För att få strategisk effekt krävs upprepade träffar, svårersatta komponenter och att Ryssland inte snabbt kan reparera eller flytta verksamheten.',
      'Det som bör följas är antalet stängda flygplatser, försäkringsbolagens riskklassningar, förändrade internationella flygrutter och hur Ryssland omgrupperar sitt luftförsvar. Dessa indikatorer säger mer om den långsiktiga effekten än dramatiska bilder från en enskild attack.'
    ],
    sources: [
      { label: 'Reuters: Ukraina varnar för riskerna i ryskt luftrum', href: 'https://www.reuters.com/business/aerospace-defense/zelenskiy-says-ukrainian-drones-have-effectively-closed-russian-airspace-2026-09-01/' },
      { label: 'Reuters: Angreppen mot Kyivregionen', href: 'https://www.reuters.com/world/europe/explosions-heard-ukraines-kyiv-four-people-injured-2026-09-01/' }
    ]
  },
  {
    eyebrow: 'Världsekonomi · Räntor',
    title: 'Olja, inflation och statsskulder driver en ny global räntechock',
    lead: 'Statsobligationsräntor har stigit kraftigt i flera stora ekonomier. Dyrare olja, inflationsoro, omfattande upplåning och stora investeringar i AI-infrastruktur förstärker trycket samtidigt.',
    news: [
      'Räntan på amerikanska tioåriga statsobligationer har närmat sig fem procent. Japans tioårsränta har passerat tre procent för första gången på omkring tre decennier, samtidigt som räntorna i bland annat Tyskland och Australien har nått flerårshögsta nivåer.',
      'Brentoljan har stigit till omkring 95 dollar per fat i samband med konflikten mellan USA och Iran. Marknaden oroar sig för att energipriserna åter ska driva upp inflationen och tvinga centralbanker att behålla eller höja räntorna.'
    ],
    analysis: [
      'Det här är mer än en normal marknadsrörelse. När investerare kräver högre ränta för att låna ut till stater blir finanspolitiken dyrare. Länder med stora underskott får mindre utrymme för försvar, välfärd, klimatinvesteringar och skattesänkningar. Samma räntor används dessutom som utgångspunkt för bolån och företagsfinansiering.',
      'Centralbankerna står inför ett obekvämt val. Höga energipriser talar för stramare penningpolitik, medan svagare konjunktur talar för lättnader. Om inflationen främst beror på en geopolitisk utbudschock kan högre räntor dämpa efterfrågan men inte skapa mer olja eller säkrare sjöfart.',
      'För Sverige kan genomslaget komma genom kronan, internationella marknadsräntor, drivmedelspriser och bankernas finansiering. Även om Riksbanken styr den korta styrräntan påverkas längre bolåneräntor av den globala obligationsmarknaden.'
    ],
    depth: [
      'Marknaden väger nu samman tre risker: geopolitisk energibrist, strukturellt stora statliga lånebehov och snabbt växande kapitalbehov för AI och elinfrastruktur. När alla tre förstärks samtidigt kan räntorna förbli höga även om den löpande inflationen senare faller.',
      'Viktiga indikatorer är oljeprisets varaktighet, inflationsförväntningar, statsauktionernas efterfrågan och skillnaden mellan korta och långa räntor. Om långa räntor fortsätter upp trots svagare tillväxt tyder det på att investerarna främst oroar sig för skuld och inflation.'
    ],
    sources: [
      { label: 'Reuters: Den globala utförsäljningen av obligationer', href: 'https://www.reuters.com/world/asia-pacific/bond-selloff-deepens-inflation-oil-prices-jolt-markets-2026-09-02/' },
      { label: 'Reuters: Dollarn stärks när oljan stiger', href: 'https://www.reuters.com/world/china/dollar-holds-firm-middle-east-hostilities-lift-oil-2026-09-02/' }
    ]
  },
  {
    eyebrow: 'G20 · Ryssland och diplomati',
    title: 'Rysslands återkomst testar västländernas gemensamma linje',
    lead: 'Ryska företrädare deltar åter i G20-möten efter flera år av mer begränsad närvaro. Kontakterna skapar irritation bland europeiska deltagare men visar samtidigt hur ekonomiska forum används för att återöppna politiska kanaler.',
    news: [
      'Rysslands finansminister har deltagit i G20-sammanhang och haft kontakt med amerikanska företrädare. För europeiska regeringar väcker detta frågor om huruvida Moskva gradvis normaliseras trots det fortsatta kriget mot Ukraina.',
      'G20 är inte en militär allians och rymmer länder med mycket olika syn på Ryssland. Många stater i det globala syd vill hålla ekonomiska och diplomatiska kontakter öppna och motsätter sig att forumet helt underordnas västvärldens säkerhetspolitiska prioriteringar.'
    ],
    analysis: [
      'Diplomatisk närvaro är inte samma sak som politisk rehabilitering, men symboliken spelar roll. När högnivåmöten återupptas får Ryssland möjlighet att visa att isoleringen är begränsad. USA kan samtidigt använda kontakterna för att sondera ekonomi, energi eller möjliga förhandlingsvägar.',
      'EU:s problem är att unionen vill upprätthålla trycket mot Moskva men inte ensam bestämmer G20:s dagordning. En hård europeisk linje kan bevara sanktionernas trovärdighet, men den kan också minska EU:s inflytande över länder som prioriterar handel och strategisk autonomi.',
      'För Ukraina är processen känslig eftersom små diplomatiska förändringar kan påverka förväntningar om sanktioner och framtida stöd. Det avgörande blir om mötena leder till konkreta eftergifter eller endast är begränsade arbetskontakter.'
    ],
    depth: [
      'G20 visar en mer multipolär världsordning där väst inte längre ensamt kan definiera vilka stater som ska isoleras. Indien, Kina, Brasilien, Gulfstater och andra makter använder konkurrensen mellan blocken för att bevara handlingsfrihet.',
      'Fortsättningen bör bedömas genom mötenas nivå, eventuella gemensamma uttalanden, sanktionsbeslut och praktiska överenskommelser om energi eller betalningar. Bilder på handslag är politiskt betydelsefulla, men de verkliga konsekvenserna syns först i policy.'
    ],
    sources: [
      { label: 'Sveriges Radio: Ryssland tillbaka i G20', href: 'https://www.sverigesradio.se/artikel/9288207' },
      { label: 'Axios: Amerikansk-ryskt möte vid G20', href: 'https://www.axios.com/2026/08/31/bessent-russia-g20-europe' }
    ]
  },
  {
    eyebrow: 'Teknikpolitik · G20',
    title: 'USA:s krav på friare AI möter Europas säkerhetslinje',
    lead: 'USA har uppmanat G20-länder att undvika omfattande reglering av artificiell intelligens. Budskapet skärper den globala konflikten mellan snabb innovation, industriell konkurrenskraft och krav på ansvar.',
    news: [
      'Vid ett G20-möte med handelsministrar och teknikföretag argumenterade USA för en mer återhållsam regleringsmodell. Den amerikanska linjen betonar investeringar, innovation och risken att detaljerade regler låser fast tekniken för tidigt.',
      'EU har i stället byggt sin strategi kring riskklasser, krav på transparens och särskilda skyldigheter för system som kan påverka säkerhet, rättigheter eller samhällsviktiga funktioner. Skillnaden får betydelse för företag som verkar på båda marknaderna.'
    ],
    analysis: [
      'AI-regleringen handlar i grunden om vem som sätter standarderna för nästa tekniska infrastruktur. USA har ledande modell- och molnföretag och tjänar på snabb global spridning. EU har en mindre plattformssektor men en stor marknad och använder reglering för att påverka globala normer.',
      'En alltför lös modell kan flytta kostnaderna till användare och samhälle när system diskriminerar, sprider fel eller används i kritiska beslut. En alltför tung modell kan samtidigt gynna de största företagen, eftersom bara de har råd med juridik, dokumentation och tester.',
      'För svenska företag innebär skillnaderna att efterlevnad blir en konkurrensfråga. Bolag måste kunna visa vilka data och modeller som används, hur risker hanteras och vilka regler som gäller i varje marknad.'
    ],
    depth: [
      'En möjlig kompromiss är gemensamma krav på testning, incidentrapportering och ursprungsmärkning, men större nationell frihet kring tillstånd och produktlansering. Det skulle minska de värsta gränsöverskridande riskerna utan att skapa helt identiska regelverk.',
      'Det som avgör är inte bara lagtexten utan hur tillsynen finansieras, om standarder blir internationellt kompatibla och hur snabbt regler kan anpassas. G20 kan skapa en gemensam miniminivå, men konkurrensen om teknik och säkerhet gör ett helt enhetligt system osannolikt.'
    ],
    sources: [
      { label: 'Reuters: USA vill se en återhållsam AI-reglering i G20', href: 'https://www.reuters.com/legal/litigation/us-urges-hands-off-approach-ai-regulation-g20-tech-meeting-2026-09-01/' }
    ]
  }
];
