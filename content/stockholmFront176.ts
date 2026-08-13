export type StockholmFrontModule = {
  id: string;
  title: string;
  kind: 'lead' | 'latest' | 'traffic' | 'districts' | 'business' | 'culture' | 'safety' | 'housing';
  priority: number;
  source: string;
};

export const stockholmFront176: StockholmFrontModule[] = [
  { id: 'stockholm-lead', title: 'Toppnyhet Stockholm', kind: 'lead', priority: 1, source: 'stockholmArticles163 + verified Stockholm articles' },
  { id: 'stockholm-latest', title: 'Senaste från Stockholm', kind: 'latest', priority: 2, source: 'published Stockholm articles sorted by publishedAt' },
  { id: 'stockholm-traffic', title: 'Trafikkollen', kind: 'traffic', priority: 3, source: 'stockholmTraffic168' },
  { id: 'stockholm-districts', title: 'Din stadsdel', kind: 'districts', priority: 4, source: 'stockholmDistricts175' },
  { id: 'stockholm-housing', title: 'Bostadskollen', kind: 'housing', priority: 5, source: 'stockholmHousing170' },
  { id: 'stockholm-business', title: 'Näringsliv', kind: 'business', priority: 6, source: 'stockholmBusiness172' },
  { id: 'stockholm-culture', title: 'Kultur & Stockholm', kind: 'culture', priority: 7, source: 'stockholmCulture171' },
  { id: 'stockholm-safety', title: 'Trygghet', kind: 'safety', priority: 8, source: 'stockholmSafety174' }
];

export const stockholmFrontRules176 = {
  route: '/stockholm',
  label: 'Stockholm',
  intro: 'Nyheter, trafik, politik, bostäder, kultur och vardagsliv i Stockholm – med tydliga källor och lokal fördjupning.',
  rules: [
    'Startsidan ska prioritera verifierade publicerade artiklar framför utkast.',
    'verify-before-publish får aldrig visas som färsk nyhet.',
    'Senaste-listan sorteras på publiceringstid och märks med datum och tid.',
    'Trafikmodulen ska dölja stale live-data enligt Trafikkollens freshness-regel.',
    'Stockholm och Nacka ska kunna korslänka när en nyhet påverkar båda områdena.'
  ]
};
