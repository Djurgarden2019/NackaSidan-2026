export type StockholmBusinessStory = {
  id: string;
  companyOrArea: string;
  category: 'Etablering' | 'Jobb' | 'Fastighet' | 'Tech' | 'Handel' | 'Besöksnäring' | 'Småföretag' | 'Ekonomi';
  headline: string;
  summary: string;
  publishedAt: string;
  sourceUrl: string;
  sourceType: 'Primärkälla' | 'Myndighet' | 'Bolag' | 'Sekundärkälla';
  status: 'published' | 'verify-before-publish';
};

export const stockholmBusinessStories172: StockholmBusinessStory[] = [];

export const stockholmBusinessDesk172 = {
  title: 'Stockholm Näringsliv',
  focus: [
    'Nya etableringar och nedläggningar',
    'Arbetsmarknad och större arbetsgivare',
    'Tech, AI och startups',
    'Kontor, handel och fastigheter',
    'Hotell, restaurang och besöksnäring',
    'Småföretagens villkor',
    'Kommunala beslut som påverkar näringslivet'
  ],
  editorialRules: [
    'Företagsuppgifter ska kontrolleras mot primärkälla eller myndighetsuppgift när möjligt.',
    'Pressmeddelanden ska bearbetas journalistiskt och inte återges som reklam.',
    'Redovisa investeringar, jobb eller omsättning med tydlig källa.',
    'Vanliga nyheter ska normalt vara högst tio dagar gamla.',
    'Analyser kan använda äldre data när tidsperioden anges tydligt.'
  ]
};
