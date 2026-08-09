export type SourceRef = {
  label: string;
  url?: string;
  type: 'Primärkälla' | 'Statistik' | 'Bakgrund' | 'Redaktionell källa';
};

export type KnowledgePoint = {
  label: string;
  text: string;
};

export type Article = {
  slug: string;
  section: string;
  title: string;
  intro: string;
  author: string;
  published: string;
  updated: string;
  readingTime: string;
  image?: string;
  imageCaption?: string;
  body: { heading?: string; paragraphs: string[] }[];
  knowledge: KnowledgePoint[];
  facts: string[];
  analysis: string;
  consequences: string[];
  sources: SourceRef[];
  tags: string[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: 'veckans-analys',
    section: 'Veckans stora analys',
    title: 'Hormuzsundet: diplomatin köper tid – men löser inte krisen',
    intro: 'En preliminär överenskommelse kan minska den omedelbara risken för militär upptrappning. Den underliggande konflikten om säkerhet, energi och regional makt består.',
    author: 'NackaSidans redaktion',
    published: '6 augusti 2026',
    updated: '6 augusti 2026 kl. 18.30',
    readingTime: '9 min',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=1400',
    imageCaption: 'Hormuzsundet är en av världshandelns mest strategiska passager. Karta: Wikimedia Commons.',
    body: [
      {
        heading: 'En flaskhals för världsekonomin',
        paragraphs: [
          'Hormuzsundet är en av världsekonomins mest känsliga flaskhalsar. När spänningen ökar påverkas inte bara oljepriset, utan också försäkringar, fraktkostnader och företagens riskbedömningar långt utanför regionen.',
          'Veckans diplomatiska signaler bör därför ses som ett andrum snarare än ett avgörande genombrott. De viktigaste frågorna är om sjöfarten kan fungera stabilt, om parterna accepterar en verifierbar ordning och om regionala aktörer lyckas hålla kommunikationen öppen.'
        ]
      },
      {
        heading: 'Varför detta spelar roll för Sverige',
        paragraphs: [
          'För Sverige är effekten indirekt men verklig. Energipriser, inflation och industrins kostnader påverkas snabbt av störningar i globala handelsflöden.',
          'Den ekonomiska kedjan går från frakt och försäkring till drivmedel, el, insatsvaror och hushållens köpkraft. En regional säkerhetskris kan därför snabbt bli en svensk konjunkturfråga.'
        ]
      }
    ],
    knowledge: [
      { label: 'Vad hände?', text: 'Parterna signalerar en preliminär diplomatisk öppning efter en period av militär upptrappning.' },
      { label: 'Varför viktigt?', text: 'Sundet är centralt för energi- och varuflöden och påverkar snabbt priser och riskbedömningar.' },
      { label: 'Vad händer nu?', text: 'Marknaden väntar på verifierbar säkerhet för sjöfarten och konkreta eftergifter från parterna.' },
      { label: 'Osäkerhet', text: 'Det är ännu oklart hur hållbar överenskommelsen är och vilka kontrollmekanismer som finns.' }
    ],
    facts: [
      'Sundet förbinder Persiska viken med Omanviken och Indiska oceanen.',
      'Störningar påverkar oljehandel, LNG-transporter, försäkringspremier och fraktpriser.',
      'Regional diplomati och amerikansk militär närvaro är båda centrala delar av riskbilden.'
    ],
    analysis: 'Det avgörande är inte den politiska formuleringen utan om den kan översättas till stabil sjöfart och mätbara säkerhetsförbättringar. Ett andrum kan minska den omedelbara risken, men de strukturella konflikterna om regional makt, kärnprogram och militära allianser består.',
    consequences: [
      'Kort sikt: lägre riskpremier om sjöfarten normaliseras.',
      'Medellång sikt: fortsatt känslighet i energi- och fraktpriser.',
      'Lång sikt: behov av diversifierade energiflöden och robustare leveranskedjor.'
    ],
    sources: [
      { label: 'Internationella sjöfartsdata och offentliga lägesbilder', type: 'Bakgrund' },
      { label: 'Offentliga uttalanden från berörda regeringar', type: 'Primärkälla' },
      { label: 'Marknadsdata för energi och frakt', type: 'Statistik' }
    ],
    tags: ['Mellanöstern', 'Energi', 'Geopolitik', 'Världshandel'],
    related: ['veckan-pa-tio-minuter', 'ai-och-arbetsmarknaden']
  },
  {
    slug: 'veckan-pa-tio-minuter',
    section: 'NackaSidan Briefing',
    title: 'Veckan på 10 minuter',
    intro: 'Fyra skeenden som hjälper dig att förstå veckan – och vad som kan bli viktigt härnäst.',
    author: 'NackaSidans redaktion',
    published: '6 augusti 2026',
    updated: '6 augusti 2026 kl. 17.00',
    readingTime: '10 min',
    body: [
      { heading: 'Mellanöstern', paragraphs: ['Diplomatin kring Hormuzsundet har dämpat den omedelbara risken, men marknaden väntar på konkreta bevis på att trafiken normaliseras.'] },
      { heading: 'Svensk ekonomi', paragraphs: ['Den lägre inflationen stärker hushållens utsikter, medan den sega arbetsmarknaden fortfarande präglar den politiska debatten.'] },
      { heading: 'AI och valet', paragraphs: ['Generativ AI blir en tydlig del av valrörelsens infrastruktur. Frågan är inte längre om manipulerat material förekommer, utan hur snabbt det kan verifieras och bemötas.'] },
      { heading: 'Kultur', paragraphs: ['Kulturveckan präglas av nya böcker och filmatiseringar, men också av en större debatt om vem som får synas och höras i offentligheten.'] }
    ],
    knowledge: [
      { label: 'Veckans riktning', text: 'Lägre ekonomisk press i Sverige men fortsatt hög geopolitisk osäkerhet.' },
      { label: 'Veckans risk', text: 'Snabba informationskriser där falskt material sprids före verifiering.' },
      { label: 'Veckans möjlighet', text: 'Fördjupning, källtransparens och bättre struktur kan öka förtroendet.' }
    ],
    facts: ['Fyra huvudteman', '10 minuters lästid', 'Länkar vidare till fördjupningar'],
    analysis: 'Veckans händelser binds samman av en gemensam fråga: hur institutioner och marknader hanterar osäkerhet när information, säkerhet och ekonomi förändras samtidigt.',
    consequences: ['Fortsatt fokus på verifiering', 'Större efterfrågan på bakgrund och sammanhang', 'Politiska frågor blir mer beroende av teknisk beredskap'],
    sources: [{ label: 'NackaSidans veckosammanställning', type: 'Redaktionell källa' }],
    tags: ['Briefing', 'Sverige', 'Världen', 'Kultur'],
    related: ['veckans-analys', 'ai-och-arbetsmarknaden']
  },
  {
    slug: 'ai-och-arbetsmarknaden',
    section: 'Tema: AI',
    title: 'AI och arbetsmarknaden: från experiment till vardagsverktyg',
    intro: 'När generativ AI flyttar in i kontor, skolor och myndigheter förändras både arbetsuppgifter och kraven på kompetens.',
    author: 'NackaSidans redaktion',
    published: '6 augusti 2026',
    updated: '6 augusti 2026 kl. 16.15',
    readingTime: '8 min',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg?width=1400',
    imageCaption: 'AI blir ett allt vanligare verktyg i kunskapsarbete. Foto: Mike MacKenzie/Wikimedia Commons.',
    body: [
      { heading: 'Från enskilda tester till arbetsflöden', paragraphs: ['Företag går från att låta medarbetare prova fristående AI-tjänster till att bygga in tekniken i kundservice, analys, dokumenthantering och programmering.', 'Det förändrar inte bara produktiviteten utan också vem som ansvarar för kvalitet, granskning och beslut.'] },
      { heading: 'Kompetensen blir dubbel', paragraphs: ['Arbetsmarknaden efterfrågar både teknisk förståelse och ämneskunskap. Den som kan bedöma ett AI-svar, hitta brister och sätta resultatet i rätt sammanhang blir mer värdefull än den som bara kan formulera en instruktion.'] }
    ],
    knowledge: [
      { label: 'Vad förändras?', text: 'Rutinmässig textproduktion, analys och administration automatiseras delvis.' },
      { label: 'Vem påverkas?', text: 'Kunskapsarbetare, serviceyrken, utvecklare, lärare och offentlig förvaltning.' },
      { label: 'Nyckelfrågan', text: 'Hur ansvar, kvalitet och kompetens fördelas när AI blir en del av arbetsflödet.' },
      { label: 'Vad händer nu?', text: 'Fler organisationer inför styrning, utbildning och granskningskrav.' }
    ],
    facts: ['AI används främst som stöd, inte som helt självständig beslutsfattare.', 'Dataskydd och upphovsrätt påverkar vilka verktyg som kan användas.', 'Produktivitetsvinster varierar kraftigt mellan yrken och arbetsuppgifter.'],
    analysis: 'Den stora förändringen är inte att alla jobb försvinner, utan att arbetsuppgifter omformas. Organisationer som kombinerar teknik med tydligt ansvar och kompetensutveckling får ett försprång framför dem som bara inför verktyg utan att ändra arbetssätt.',
    consequences: ['Nya roller för granskning och AI-styrning', 'Större krav på fortbildning', 'Ökad skillnad mellan organisationer som kan och inte kan använda tekniken systematiskt'],
    sources: [{ label: 'Offentliga forskningsrapporter och arbetsmarknadsstudier', type: 'Bakgrund' }, { label: 'Företags- och myndighetsrapporter om AI-användning', type: 'Redaktionell källa' }],
    tags: ['AI', 'Arbetsmarknad', 'Produktivitet', 'Kompetens'],
    related: ['veckan-pa-tio-minuter', 'veckans-analys']
  },
  {
    slug: 'ai-i-valrorelsen-2026',
    section: 'Sverige',
    title: 'AI får större roll i valrörelsen – och höjer kraven på källkritik',
    intro: 'Inför valet den 13 september har generativ AI blivit en del av informationsmiljön. Samtidigt skärper myndigheterna arbetet mot desinformation och andra försök att störa förtroendet för valet.',
    author: 'NackaSidans redaktion',
    published: '9 augusti 2026',
    updated: '9 augusti 2026 kl. 13.30',
    readingTime: '6 min',
    body: [
      { heading: 'Ett val i en ny informationsmiljö', paragraphs: ['Generativ AI gör det enklare att skapa text, bilder, ljud och video som ser trovärdiga ut. Det ger väljare nya verktyg för att söka och sammanfatta information, men gör också avsändare och ursprung svårare att bedöma.', 'Valmyndigheten beskriver desinformation som en växande risk för valgenomförandet och har inför 2026 fått ett tydligare ansvar för att samordna skyddet av valen. Myndigheten betonar samtidigt att det svenska systemet är decentraliserat, transparent och bygger på offentlig rösträkning.'] },
      { heading: 'AI förändrar källkritiken', paragraphs: ['Mediemyndigheten konstaterar att generativ AI snabbt förändrar medielandskapet och att tekniken kan användas både för legitim innehållsproduktion och för desinformation. Forskningen om nordiska förhållanden är fortfarande begränsad.', 'För väljaren blir den praktiska frågan därför mindre om ett budskap ”ser äkta ut” och mer om uppgiften går att kontrollera hos en identifierbar primärkälla. Datum, avsändare och originalmaterial blir viktigare när syntetiskt innehåll blir billigare att producera.'] },
      { heading: 'Det svenska skyddet', paragraphs: ['Inför årets val arbetar Valmyndigheten tillsammans med kommuner, länsstyrelser och andra myndigheter. Bland åtgärderna finns utbildning, incidentrapportering, skydd av IT-system och tydlig information till allmänheten.', 'Det gör inte informationsmiljön riskfri. Men det innebär att själva röstningen och rösträkningen har flera separata kontrollpunkter. Skillnaden mellan påverkan på debatten och påverkan på valets praktiska genomförande är därför central.'] }
    ],
    knowledge: [
      { label: 'När är valet?', text: 'Val till riksdag, region- och kommunfullmäktige hålls den 13 september 2026.' },
      { label: 'Vad är nytt?', text: 'Valmyndigheten har fått ett utökat ansvar för att samordna skyddet av allmänna val.' },
      { label: 'AI-risken', text: 'Generativ AI kan sänka tröskeln för att skapa övertygande falskt eller vilseledande material.' },
      { label: 'Motmedlet', text: 'Kontrollera avsändare, originalkälla, datum och om uppgiften bekräftas av oberoende källor.' }
    ],
    facts: ['Valdagen är 13 september 2026.', 'All röstmottagning och rösträkning i Sverige är offentlig.', 'Mediemyndigheten pekar på tydliga kunskapsluckor om AI-desinformation i nordiska förhållanden.'],
    analysis: 'AI:s största kortsiktiga betydelse för valet ligger sannolikt i informationsmiljön snarare än i själva rösträkningen. När mängden trovärdigt utformat material ökar blir snabb verifiering, tydliga primärkällor och transparens viktigare för både medier, myndigheter och väljare.',
    consequences: ['Fler politiska påståenden kommer behöva verifieras mot originalkällor.', 'Medier får större behov av rutiner för bild-, ljud- och videokontroll.', 'Myndigheternas tydliga och snabba information blir viktig för att motverka falska uppgifter om hur valet går till.'],
    sources: [
      { label: 'Valmyndigheten – Valsäkerhet', url: 'https://www.val.se/det-svenska-valsystemet/sakra-och-trygga-val/valsakerhet', type: 'Primärkälla' },
      { label: 'Valmyndigheten – Så arbetar Valmyndigheten för att skydda årets val', url: 'https://www.val.se/servicelankar/servicelankar/pressrum/nyheter--pressmeddelanden/pressmeddelande-nya/2026-06-16-sa-arbetar-valmyndigheten-for-att-skydda-arets-val', type: 'Primärkälla' },
      { label: 'Mediemyndigheten – AI och desinformation på sociala medier', url: 'https://mediemyndigheten.se/rapporter-och-analyser/AI-och-desinformation-pa-sociala-medier/', type: 'Bakgrund' }
    ],
    tags: ['Val 2026', 'AI', 'Demokrati', 'Källkritik'],
    related: ['veckan-pa-tio-minuter', 'ai-och-arbetsmarknaden']
  },
  {
    slug: 'odesa-hamn-attack',
    section: 'Världen',
    title: 'Ny rysk attack mot Odesa – hamn och civila åter i skottlinjen',
    intro: 'Ryska robotangrepp mot Odesa och Kharkiv har dödat och skadat civila. Attacken visar åter hur hamnstaden vid Svarta havet är både ett militärt mål och en strategisk knutpunkt för Ukrainas ekonomi.',
    author: 'NackaSidans redaktion',
    published: '9 augusti 2026',
    updated: '9 augusti 2026 kl. 13.30',
    readingTime: '6 min',
    body: [
      { heading: 'Nya angrepp under natten', paragraphs: ['Ryska robotangrepp träffade under natten mål i bland annat Odesa och Kharkiv. Enligt Associated Press dödades människor och flera civila skadades. Ryssland uppgav att anfallen riktades mot bland annat bränsle- och drönarrelaterad infrastruktur.', 'Uppgifterna kommer samtidigt som Ukraina genomför egna långdistansangrepp mot mål i Ryssland. Kriget fortsätter därmed att flytta trycket långt bortom den omedelbara frontlinjen.'] },
      { heading: 'Varför Odesa är strategiskt', paragraphs: ['Odesa är en av Ukrainas viktigaste portar mot Svarta havet. Hamnarna i regionen är centrala för export, import och landets ekonomiska förbindelser med omvärlden.', 'Angrepp mot hamn-, energi- och transportinfrastruktur får därför två effekter samtidigt: de påverkar Ukrainas militära och logistiska kapacitet och kan dessutom slå mot civil ekonomi, elförsörjning och handel.'] },
      { heading: 'Luftförsvaret under press', paragraphs: ['Ukraina fortsätter att efterfråga fler avancerade luftvärnssystem. Bristen på kvalificerade robotar för att möta ballistiska hot gör varje större rysk attack till en fråga om prioritering: vilka städer, anläggningar och system ska skyddas först?', 'Det är en av krigets mest avgörande resursfrågor inför hösten. Även när en stor del av inkommande drönare och robotar stoppas kan de som tar sig igenom orsaka omfattande skador.'] }
    ],
    knowledge: [
      { label: 'Vad hände?', text: 'Ryska angrepp träffade Odesa och Kharkiv samtidigt som Ukraina genomförde drönarangrepp mot mål i Ryssland.' },
      { label: 'Varför Odesa?', text: 'Staden och regionens hamnar är strategiska för Ukrainas handel, logistik och tillgång till Svarta havet.' },
      { label: 'Nyckelfrågan', text: 'Tillgången till luftvärn och robotar som kan möta avancerade ryska anfall.' },
      { label: 'Vad följer vi?', text: 'Skador på hamn- och energiinfrastruktur samt utvecklingen av Ukrainas luftförsvar.' }
    ],
    facts: ['Odesa är en central hamnregion vid Svarta havet.', 'Angreppen den 9 augusti drabbade både Odesa och Kharkiv.', 'Ukraina har återkommande efterfrågat fler Patriot-system och luftvärnsrobotar.'],
    analysis: 'Odesa har en betydelse som går långt utöver den enskilda attacken. Så länge hamn- och energiinfrastruktur kan slås ut med återkommande angrepp tvingas Ukraina använda knappa luftvärnsresurser långt från fronten. Det ökar också den ekonomiska kostnaden för kriget.',
    consequences: ['Fortsatt risk för störningar i hamn- och energisystem.', 'Ökat tryck på västländer att leverera luftvärn och ammunition.', 'Högre kostnader för återuppbyggnad och skydd av kritisk infrastruktur.'],
    sources: [
      { label: 'Associated Press – Russia, Ukraine exchange overnight strikes', url: 'https://apnews.com/article/4f1dd5120278884bf36ce85efe84e5d9', type: 'Redaktionell källa' }
    ],
    tags: ['Ukraina', 'Ryssland', 'Odesa', 'Säkerhet'],
    related: ['veckans-analys', 'veckan-pa-tio-minuter']
  },
  {
    slug: 'the-weeknd-stockholm-2026',
    section: 'Kultur',
    title: 'The Weeknd fyller Strawberry Arena under tre kvällar i Stockholm',
    intro: 'Den 8–10 augusti tar The Weeknd sin After Hours Til Dawn Stadium Tour till Solna. Tre konserter i följd gör Stockholm till ett av sensommarens största svenska musikevenemang.',
    author: 'NackaSidans redaktion',
    published: '9 augusti 2026',
    updated: '9 augusti 2026 kl. 13.30',
    readingTime: '5 min',
    body: [
      { heading: 'Tre kvällar på Strawberry Arena', paragraphs: ['The Weeknd spelar på Strawberry Arena den 8, 9 och 10 augusti. Arenan och Visit Stockholm listar tre konsertdatum, med Playboi Carti som special guest på Europadelen av turnén.', 'Stockholmsstoppen ingår i After Hours Til Dawn Stadium Tour, som under 2026 går vidare genom stora arenor i bland annat Europa och Storbritannien.'] },
      { heading: 'En turné byggd kring tre album', paragraphs: ['Turnéns nuvarande upplaga knyter samman albumen After Hours från 2020, Dawn FM från 2022 och Hurry Up Tomorrow från 2025. Samtidigt rymmer konserterna material från en längre karriär som gjort Abel Tesfaye till en av 2010- och 2020-talens största globala popartister.', 'Formatet är uttalat storskaligt: stadionproduktion, stora visuella element och en repertoar som är byggd för en publik på tiotusentals personer.'] },
      { heading: 'Mer än en konserthelg', paragraphs: ['Tre arenakvällar i rad innebär också ett stort flöde av besökare till Solna och Stockholm. Arenan rekommenderar kollektivtrafik och tidig ankomst, med Solna station som en av de viktigaste knutpunkterna.', 'Som del av turnén går dessutom 12 kronor per såld biljett till Global Citizen och FN:s World Food Programme genom XO Humanitarian Fund, enligt Strawberry Arena.'] }
    ],
    knowledge: [
      { label: 'När?', text: '8, 9 och 10 augusti 2026.' },
      { label: 'Var?', text: 'Strawberry Arena i Solna.' },
      { label: 'Gäst', text: 'Playboi Carti följer med på turnéns konserter i Europa och Storbritannien.' },
      { label: 'Turnén', text: 'After Hours Til Dawn Stadium Tour knyter ihop The Weeknds tre senaste albumperioder.' }
    ],
    facts: ['Tre konserter hålls i Solna 8–10 augusti.', 'Åldersgränsen anges till 13 år av arenan.', '12 kronor per såld biljett doneras enligt arenan till Global Citizen och World Food Programme.'],
    analysis: 'Tre kvällar i Sveriges största arenamiljö visar hur den internationella konsertmarknaden koncentreras kring ett mindre antal artister som kan bära mycket stora produktioner. För Stockholm är evenemanget samtidigt turism, transportlogistik och kulturindustri i samma paket.',
    consequences: ['Stora publikflöden i Arenastaden under tre dagar.', 'Fortsatt stark konkurrens om publikens konsertbudget.', 'Stockholm befäster sin roll som stopp för de största internationella stadionturnéerna.'],
    sources: [
      { label: 'Strawberry Arena – The Weeknd', url: 'https://strawberryarena.se/evenemang/musik-show/the-weeknd/', type: 'Primärkälla' },
      { label: 'Visit Stockholm – The Weeknd, After Hours Til Dawn Stadium Tour', url: 'https://www.visitstockholm.se/event/the-weeknd-concert/2026-08-09/', type: 'Bakgrund' }
    ],
    tags: ['The Weeknd', 'Stockholm', 'Musik', 'Konsert'],
    related: ['veckan-pa-tio-minuter', 'ai-och-arbetsmarknaden']
  }

];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
