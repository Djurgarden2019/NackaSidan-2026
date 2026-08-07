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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz_map.png?width=1400',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Artificial_intelligence_%26_AI_%26_machine_learning_-_30212411048.jpg?width=1400',
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
  }
];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
