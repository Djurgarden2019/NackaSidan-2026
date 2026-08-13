export type StockholmTrafficMode = 'Tunnelbana' | 'Pendeltåg' | 'Buss' | 'Väg' | 'Cykel' | 'Sjötrafik';

export type StockholmTrafficItem = {
  id: string;
  mode: StockholmTrafficMode;
  area: string;
  headline: string;
  summary: string;
  impact: 'Låg' | 'Medel' | 'Stor';
  status: 'live' | 'planned' | 'verify-before-publish';
  validFrom?: string;
  validTo?: string;
  checkedAt?: string;
  sourceLabel: string;
  sourceUrl: string;
};

// Main 168 introduces the editorial data model for Trafikkollen Stockholm.
// Live disruptions must be populated from current primary/authoritative sources
// and should never be presented as current when checkedAt is stale.
export const stockholmTraffic168: StockholmTrafficItem[] = [];

export const stockholmTrafficEditorialRules168 = {
  title: 'Trafikkollen Stockholm',
  description: 'En samlad vy över störningar, planerade arbeten och större trafikförändringar i Stockholm.',
  freshnessMinutes: 60,
  modes: ['Tunnelbana', 'Pendeltåg', 'Buss', 'Väg', 'Cykel', 'Sjötrafik'] as StockholmTrafficMode[],
  rules: [
    'Aktuella störningar ska tidsstämplas och länka till källan.',
    'Uppgifter äldre än freshnessMinutes får inte märkas som live utan ny kontroll.',
    'Planerade arbeten ska ha start- och slutdatum när källan anger det.',
    'Skilj på trafikstörning, planerat arbete och redaktionell analys.',
    'Prioritera Region Stockholm/SL, Trafikverket och Stockholms stad som primärkällor.',
    'Visa särskilt påverkan på resor mellan Stockholm och Nacka/Värmdö när den är betydande.'
  ]
};
