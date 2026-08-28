export type WeekendArticle = {
  slug: string;
  section: string;
  title: string;
  intro: string;
  published: string;
  readingTime: string;
  lead?: boolean;
  news: { heading: string; paragraphs: string[] }[];
  analysis: string[];
  consequences: string[];
  sources: { label: string; url: string }[];
};

export const weekendArticles: WeekendArticle[] = [
  {
    slug: 'stockholm-miljonstad-nasta-kapitel', section: 'Helgens stora reportage', lead: true,
    title: 'När Stockholm blir en miljonstad börjar den verkliga berättelsen',
    intro: 'Miljonstrecket är passerat. Men bakom jubileet växer en mer krävande stad fram: med färre barn, fler äldre och mycket olika utveckling mellan stadsdelarna.',
    published: '28 augusti 2026', readingTime: '11 min',
    news: [
      { heading: 'En symbolisk gräns', paragraphs: ['Stockholm har passerat en miljon invånare. Det är en siffra som passar på vykort och i högtidstal, men som säger mindre om stadens framtid än den först verkar göra. Befolkningsprognosen pekar mot fortsatt tillväxt fram till 2035, fast i lugnare takt än under delar av 2010-talet.', 'Den stora förändringen finns i åldrarna. Antalet barn och unga väntas minska samtidigt som gruppen över 80 år växer kraftigt. Därmed förändras kommunens uppdrag även om den totala befolkningen fortsätter uppåt. Skolor kan få färre elever i ett område samtidigt som äldreomsorg och tillgängliga bostäder behöver byggas ut i ett annat.'] },
      { heading: 'En stad med flera riktningar', paragraphs: ['Järva väntas fortsätta växa och passera 100 000 invånare, medan prognosen är svagare i andra delar av staden. Det gör begreppet miljonstad missvisande om det används som en enda berättelse. Stockholm består av lokala arbetsmarknader, bostadsmönster och servicebehov som rör sig i olika riktningar.', 'För den enskilde stockholmaren märks omvandlingen inte i en befolkningssiffra utan i restiden, skolans elevunderlag, kötiden till en bostad och möjligheten att få omsorg nära hemmet. Den kommunala planeringen måste därför bli mer geografiskt precis.'] }
    ],
    analysis: ['Miljonstrecket bör ses som början på en ny planeringsfas. Den gamla tillväxtberättelsen utgick ofta från fler invånare, fler bostäder och fler skolplatser. Nu måste Stockholm klara samtidig tillväxt, åldrande och lokala befolkningsminskningar.', 'Det svåraste blir att flytta resurser i tid. En skola, vårdcentral eller kollektivtrafiklinje har lång planeringshorisont, medan flyttmönster och födelsetal kan ändras snabbare. Prognoserna behöver därför följas öppet och justeras utan att varje förändring blir en politisk prestigefråga.'],
    consequences: ['Fler investeringar behöver styras av stadsdelsdata, inte bara totalsiffran för Stockholm.', 'Efterfrågan på äldreomsorg, vård och tillgängliga bostäder ökar under nästa decennium.', 'Minskande elevkullar kan leda till sammanslagningar och nya diskussioner om skolors placering.', 'Kollektivtrafik och bostadsbyggande måste anpassas till att olika delar av staden växer olika snabbt.'],
    sources: [{ label: 'Stockholms stad: Fler stockholmare – men färre barn och fler äldre', url: 'https://start.stockholm/aktuellt/nyheter/2026/06/fler-stockholmare--men-farre-barn-och-fler-aldre/' }, { label: 'SCB: Befolkningsstatistik', url: 'https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/befolkningens-sammansattning-och-utveckling/befolkningsstatistik/' }]
  },
  {
    slug: 'hushallen-vantar-pa-vandningen', section: 'Samhälle & ekonomi',
    title: 'Siffrorna vänder före känslan – därför tvekar hushållen',
    intro: 'BNP-prognosen pekar uppåt, men den ekonomiska återhämtningen blir inte verklig för väljarna förrän marginalerna i vardagen växer.',
    published: '28 augusti 2026', readingTime: '8 min',
    news: [{ heading: 'En ljusare prognos', paragraphs: ['Regeringen har höjt prognosen för svensk BNP-tillväxt 2026 från 2,3 till 2,5 procent. Lägre inflation och en gradvis förbättring på arbetsmarknaden anges som stöd för återhämtningen.', 'Samtidigt lever hushållen med minnet av flera års pris- och ränteuppgång. Mat, boende och andra fasta utgifter ligger kvar på höga nivåer även när inflationstakten sjunker. Därför kan den nationella statistiken förbättras långt innan privatekonomin upplevs som trygg.'] }],
    analysis: ['Skillnaden mellan nivå och förändring är avgörande. Lägre inflation betyder att priserna stiger långsammare, inte att de återgår till tidigare nivåer. På samma sätt kan BNP växa utan att alla branscher, kommuner eller hushåll får del av uppgången.', 'Inför valet blir fördelningen viktigare än decimalen i tillväxtprognosen. Reallöner, arbetslöshet, bolåneräntor och kommunala avgifter är de mått som snabbast översätter makroekonomi till vardag.'],
    consequences: ['Konsumtionen kan förbli försiktig trots starkare BNP.', 'Bostadsmarknaden och byggandet återhämtas långsamt om finansieringen förblir dyr.', 'Kommuner kan möta fortsatt kostnadspress även när staten beskriver en vändning.'],
    sources: [{ label: 'Reuters: Sverige höjer BNP-prognosen inför valet', url: 'https://www.reuters.com/world/europe/swedish-government-raises-gdp-forecast-ahead-september-election-2026-08-27/' }, { label: 'SCB: Sveriges ekonomi', url: 'https://www.scb.se/hitta-statistik/temaomraden/sveriges-ekonomi/' }]
  },
  {
    slug: 'arendt-offentligheten-och-flodet', section: 'Kulturessä',
    title: 'Hannah Arendt, flödet och konsten att dela en verklighet',
    intro: 'Vad händer med demokratin när vi fortfarande talar med varandra, men allt mer sällan utgår från samma fakta?',
    published: '28 augusti 2026', readingTime: '9 min',
    news: [{ heading: 'Det offentliga rummet', paragraphs: ['För Hannah Arendt var politik något som uppstod när människor trädde fram inför varandra, talade och handlade i en gemensam värld. Det offentliga rummet var inte bara en fysisk plats eller en institution, utan själva förutsättningen för att människor skulle kunna vara både olika och jämlika.', 'Dagens digitala offentlighet ger fler möjlighet att tala, men plattformarnas sortering gör det svårare att veta vad andra faktiskt ser. Ett gemensamt samtal kan fragmenteras till parallella flöden där fakta, tolkning och påstående blandas.'] }],
    analysis: ['Arendts tänkande hjälper oss att se att yttrandefrihet inte ensam skapar en fungerande offentlighet. Det krävs också institutioner som kontrollerar fakta, platser där argument möts och människor som accepterar ansvar för det de för vidare.', 'Problemet är därför inte bara desinformation. Det är förlusten av en gemensam referensram. När varje grupp får sin egen version av händelser blir kompromissen svårare, eftersom oenigheten inte längre gäller vad något betyder utan om det alls har hänt.'],
    consequences: ['Journalistikens uppgift att skilja verifierade uppgifter från analys blir viktigare.', 'Skolor och bibliotek får en större roll som gemensamma kunskapsinstitutioner.', 'Digitala plattformars sortering blir en demokratifråga, inte bara en teknisk produktfråga.'],
    sources: [{ label: 'Stanford Encyclopedia of Philosophy: Hannah Arendt', url: 'https://plato.stanford.edu/entries/arendt/' }, { label: 'Encyclopaedia Britannica: Hannah Arendt', url: 'https://www.britannica.com/biography/Hannah-Arendt' }]
  },
  {
    slug: 'ai-i-operationssalen', section: 'Vetenskap & idéer',
    title: 'När AI följer med in i operationssalen förändras också ansvaret',
    intro: 'Realtidsstöd under hjärnkirurgi kan sprida specialistkunskap. Men tekniken gör frågan om vem som ansvarar för ett råd akut.',
    published: '28 augusti 2026', readingTime: '8 min',
    news: [{ heading: 'Stöd medan ingreppet pågår', paragraphs: ['UCL och UCLH har uppgett att den första patienten genomgått hjärntumörkirurgi med AI-assistans i realtid. Systemet användes för att hjälpa kirurgen identifiera kritiska strukturer under ett pågående ingrepp.', 'Det är ett viktigt steg från AI som analyserar bilder före eller efter vårdmötet. När ett råd ges mitt i en operation kan det påverka ett omedelbart och irreversibelt beslut. Tekniken befinner sig i en klinisk studie och är ännu inte etablerad rutinvård.'] }],
    analysis: ['Precision är bara en del av säkerheten. Sjukhus behöver också kunna visa hur systemets råd skapades, när läkaren ska bortse från dem och hur en avvikelse granskas i efterhand.', 'Den troligaste utvecklingen är inte en autonom robotkirurg utan avgränsade stöd som gör en specialist bättre under tidspress. Värdet blir stort först när resultaten kan upprepas mellan patienter och kliniker.'],
    consequences: ['Vårdgivare behöver tydliga ansvarskedjor mellan läkare, sjukhus och leverantör.', 'Kliniska studier måste visa resultat för olika patientgrupper.', 'Loggning och möjlighet att förklara avvikelser blir en del av patientsäkerheten.'],
    sources: [{ label: 'UCL: First patient in live AI-assisted brain surgery', url: 'https://www.ucl.ac.uk/news/2026/aug/first-patient-live-ai-assisted-sight-saving-brain-surgery' }]
  },
  {
    slug: 'svensk-fotboll-europa-steget', section: 'Sportens långläsning',
    title: 'Det europeiska steget mäts i tempo, truppbredd och tålamod',
    intro: 'Mjällbys uttåg mot Salzburg var en förlust, men också en ovanligt tydlig karta över vad svensk klubbfotboll behöver förbättra.',
    published: '28 augusti 2026', readingTime: '9 min',
    news: [{ heading: 'En hård nivåmätare', paragraphs: ['Salzburg vann returen mot Mjällby med 3–0 och playoffmötet med sammanlagt 4–0. När Mjällby behövde flytta fram laget kunde motståndaren utnyttja ytorna och behålla sin intensitet längre.', 'För Mjällby är Europahösten över. Laget får en tydligare allsvensk veckorytm, men går samtidigt miste om fler internationella matcher, större intäkter och erfarenhet för truppen.'] }],
    analysis: ['Svenska klubbar kan sällan konkurrera med de största utvecklingsklubbarnas budgetar. Vägen framåt ligger i bättre scouting, fysisk kapacitet, försäljningar och konsekvent återinvestering. En enstaka kvalframgång räcker inte; kunskapen måste stanna i organisationen.', 'För svensk fotboll är återkommande deltagande viktigare än ett isolerat resultat. Fler ligafasmatcher ger rankingpoäng, pengar och vana vid högre tempo. Det stärker även Allsvenskan genom att spelare och tränare tar erfarenheten tillbaka till den nationella miljön.'],
    consequences: ['Mjällby kan prioritera Allsvenskan under hösten.', 'Spelare som synts i kvalet kan bli transfermål.', 'Svenska klubbars ranking förbättras först genom återkommande europeiska resultat.'],
    sources: [{ label: 'UEFA: Europa League-kvalets resultat och format', url: 'https://www.uefa.com/uefaeuropaleague/news/02a6-20e5db0029dd-8241a8d00925-1000--europa-league-qualifying-all-the-results-how-it-worked/' }, { label: 'Svensk fotboll: Svenska cupen och klubblagsfotboll', url: 'https://www.svenskfotboll.se/serier-cuper/' }]
  }
];

export const weekendArticleBySlug = Object.fromEntries(weekendArticles.map(article => [article.slug, article]));
