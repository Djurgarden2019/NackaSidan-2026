export type StockholmMostReadItem = {
  slug: string;
  title: string;
  views: number;
  window: '24h' | '7d';
  measuredAt: string;
};

export const stockholmMostRead188: StockholmMostReadItem[] = [];

export const stockholmMostReadRules188 = {
  title: 'Mest läst',
  emptyState: 'Mest läst visas när riktig läsdata finns.',
  rules: [
    'Visa aldrig påhittade visningssiffror.',
    'Mätperiod och senaste mättid ska följa varje datapunkt.',
    '24 timmar och 7 dagar ska hållas isär.',
    'Redaktionell prioritering får inte beskrivas som läsarstatistik.',
    'Integrationen kan senare kopplas till verklig analytics-provider.'
  ]
};
