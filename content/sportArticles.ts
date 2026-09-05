export type SportArticle = {
  slug: string;
  sport: string;
  title: string;
  dek: string;
  date: string;
  publishedAt: string;
  lead: boolean;
  facts: string[];
  body: { heading: string; paragraphs: string[] }[];
  analysis: string;
  watch: string[];
  sources: { label: string; url: string }[];
};

export const SPORT_ARTICLE_MAX_AGE_HOURS = 48;
const SPORT_ARTICLE_MAX_AGE_MS = SPORT_ARTICLE_MAX_AGE_HOURS * 60 * 60 * 1000;

export const latestResults = [
  { competition: 'Rugby · Pacific Nations Cup', match: 'Japan–Kanada', score: '57–12', note: 'Japan gjorde nio försök i en klar premiärseger.' },
  { competition: 'Tennis · US Open dubbel', match: 'Williams/Williams–Joint/Chan', score: '1–2', note: 'Serena och Venus föll i ett avgörande matchtiebreak.' },
  { competition: 'Tennis · US Open', match: 'Dag sex', score: 'Favoriter vidare', note: 'Flera toppseedade spelare tog sig vidare i New York.' }
];

export const sportAgenda = [
  { time: 'I dag', event: 'US Open fortsätter i New York' },
  { time: 'I dag', event: 'U20-VM för damer inleds i Polen' },
  { time: 'Kommande', event: 'Japan fortsätter Pacific Nations Cup' }
];

export const sportArticles: SportArticle[] = [
  {
    slug: 'williams-systrarna-us-open-aterkomst',
    sport: 'Tennis · US Open',
    title: 'Williams-systrarnas återkomst blev en fest trots förlust',
    dek: 'Serena och Venus Williams spelade tillsammans i US Open för första gången på fyra år. De pressade Maya Joint och Chan Hao-ching till ett avgörande matchtiebreak inför 23 000 åskådare.',
    date: '5 september 2026',
    publishedAt: '2026-09-05T03:18:00Z',
    lead: true,
    facts: [
      'Joint och Chan vann med 6–3, 6–7 (6), 7–6 (10–7).',
      'Det var systrarnas första gemensamma US Open-match på fyra år.',
      'Omkring 23 000 åskådare såg matchen på Arthur Ashe Stadium.'
    ],
    body: [
      {
        heading: 'En efterlängtad återkomst',
        paragraphs: [
          'Serena och Venus Williams fick ett varmt mottagande när de återvände till US Open-dubbeln. Efter att ha tappat första set arbetade de sig tillbaka och tvingade fram ett avgörande matchtiebreak.',
          'Där var Maya Joint och Chan Hao-ching starkast. Förlusten avslutade tävlingen, men kvällen visade att systrarnas dragningskraft fortfarande är exceptionell.'
        ]
      },
      {
        heading: 'Större än resultatet',
        paragraphs: [
          'Matchen blev både elitidrott och ett möte med tennishistorien. Publiktrycket visade hur starkt Williams-systrarna fortfarande förknippas med sportens moderna genombrott.'
        ]
      }
    ],
    analysis: 'Det sportsliga utfallet var mindre viktigt än nivån på motståndet de kunde erbjuda efter ett långt uppehåll. Samtidigt ska en enstaka jämn match inte tolkas som bevis för en full återkomst till touren.',
    watch: ['Om systrarna spelar fler tävlingar', 'Hur dubbelparet Joint/Chan följer upp segern', 'US Opens fortsatta publikutveckling'],
    sources: [
      { label: 'Reuters: Williams-systrarnas US Open-återkomst', url: 'https://www.reuters.com/sports/tennis/williams-sisters-us-open-return-becomes-celebration-despite-first-round-exit-2026-09-05/' }
    ]
  },
  {
    slug: 'japan-kanada-rugby-57-12',
    sport: 'Rugby · Landslag',
    title: 'Japan körde över Kanada med nio försök',
    dek: 'Japan vann med 57–12 i Pacific Nations Cup efter en offensivt stark insats där Kouta Harada gjorde två försök.',
    date: '5 september 2026',
    publishedAt: '2026-09-05T08:01:00Z',
    lead: false,
    facts: [
      'Japan vann med 57–12.',
      'Laget gjorde nio försök.',
      'Kouta Harada stod för två av försöken.'
    ],
    body: [
      {
        heading: 'Japan tog kommandot',
        paragraphs: [
          'Japan byggde tidigt ett övertag och fortsatte att skapa genombrott efter paus. Den höga försökssiffran speglar både tempo och effektivitet nära Kanadas mållinje.',
          'Kanada fick perioder med boll men hade svårt att bromsa Japans variation i anfallsspelet.'
        ]
      },
      {
        heading: 'Viktig start på turneringen',
        paragraphs: [
          'Segern ger Japan arbetsro inför fortsättningen av Pacific Nations Cup. Motståndet hårdnar, men premiären gav ett tydligt kvitto på lagets offensiva potential.'
        ]
      }
    ],
    analysis: 'Resultatet är starkt, men värdet ligger främst i att Japan kunde hålla intensiteten genom hela matchen. Nästa test blir om samma anfallstempo fungerar mot mer fysiskt och disciplinerat motstånd.',
    watch: ['Japans disciplin mot starkare motstånd', 'Kanadas defensiva justeringar', 'Kouta Haradas fortsatta roll'],
    sources: [
      { label: 'Reuters: Japan–Kanada 57–12', url: 'https://www.reuters.com/sports/japan-score-nine-tries-comfortable-57-12-win-over-canada-2026-09-05/' }
    ]
  },
  {
    slug: 'us-open-dag-sex-2026',
    sport: 'Tennis · US Open',
    title: 'Favoriterna höll när US Open gick in i nästa fas',
    dek: 'Aryna Sabalenka, Jessica Pegula och Carlos Alcaraz var bland spelarna som tog sig vidare under US Opens sjätte tävlingsdag.',
    date: '4 september 2026',
    publishedAt: '2026-09-04T20:00:00Z',
    lead: false,
    facts: [
      'Sabalenka och Pegula tog sig vidare på damsidan.',
      'Alcaraz och Shelton fortsatte sina turneringar.',
      'Resultaten förde turneringen närmare den avgörande andra veckan.'
    ],
    body: [
      {
        heading: 'Toppspelarna stod emot',
        paragraphs: [
          'När belastningen ökar i en Grand Slam blir förmågan att vinna utan onödig energiförbrukning viktig. Flera av de högst rankade spelarna klarade den uppgiften under dag sex.',
          'Samtidigt blir marginalerna mindre för varje omgång och en svag start kan snabbt förändra en match.'
        ]
      },
      {
        heading: 'Andra veckan närmar sig',
        paragraphs: [
          'Nu blir återhämtning, serveprocent och förmågan att hantera pressade poäng allt mer avgörande. De kvarvarande spelarna har mindre utrymme för svackor.'
        ]
      }
    ],
    analysis: 'Avancemang säger inte allt om formen, men spelare som vinner kontrollerat bygger ett tydligt energiövertag. Det kan bli avgörande när matcherna blir längre och motståndet starkare.',
    watch: ['Sabalenkas servenivå', 'Alcaraz belastning', 'Vilka spelare som når andra veckan med minst speltid'],
    sources: [
      { label: 'Reuters: US Open dag sex', url: 'https://www.reuters.com/sports/tennis/us-open-day-six-2026-09-04/' }
    ]
  }
];

export function isSportArticleFresh(article: SportArticle, now = Date.now()) {
  const published = Date.parse(article.publishedAt);
  const age = now - published;
  return Number.isFinite(published) && age >= 0 && age <= SPORT_ARTICLE_MAX_AGE_MS;
}

export function getFreshSportArticles(now = Date.now()) {
  return sportArticles
    .filter(article => isSportArticleFresh(article, now))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export const sportArticleBySlug: Record<string, SportArticle> = Object.fromEntries(
  sportArticles.map(article => [article.slug, article])
);

export function getFreshSportArticleBySlug(slug: string, now = Date.now()) {
  const article = sportArticleBySlug[slug];
  return article && isSportArticleFresh(article, now) ? article : undefined;
}
