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

// Live disruptions must come from current authoritative sources. Main 179 adds
// verified background/planned information only; it is deliberately not marked live.
export const stockholmTraffic168: StockholmTrafficItem[] = [
  {
    id: 'slussen-bussterminal-2028',
    mode: 'Buss',
    area: 'Slussen · Nacka/Värmdö',
    headline: 'Bussterminalen i Katarinaberget är senarelagd till 2028',
    summary: 'Region Stockholms årsredovisning för 2025 anger att färdigställandet har senarelagts till 2028 på grund av försenade arbeten med bussterminalen. Ett förnyat genomförandebeslut planeras under 2026.',
    impact: 'Stor',
    status: 'planned',
    validTo: '2028-12-31T23:59:59+01:00',
    checkedAt: '2026-08-13T12:20:00+02:00',
    sourceLabel: 'Region Stockholm – Årsredovisning 2025',
    sourceUrl: 'https://www.regionstockholm.se/498fc3/contentassets/c4853f1d3efe4d4ebac340a1d7fa56b3/arsredovisning-2025-for-region-stockholm.pdf'
  },
  {
    id: 'saltsjobanan-slussen-2028',
    mode: 'Pendeltåg',
    area: 'Saltsjöbanan · Nacka/Stockholm',
    headline: 'Saltsjöbanans tåg väntas nå Slussen igen 2028',
    summary: 'Region Stockholm uppger att förstärkande bussar fortsätter till 2028, då Saltsjöbanans tåg åter ska kunna gå hela vägen till Slussen.',
    impact: 'Stor',
    status: 'planned',
    validTo: '2028-12-31T23:59:59+01:00',
    checkedAt: '2026-08-13T12:20:00+02:00',
    sourceLabel: 'Region Stockholm – Årsredovisning 2025',
    sourceUrl: 'https://www.regionstockholm.se/49ae8f/contentassets/c4853f1d3efe4d4ebac340a1d7fa56b3/arsredovisning-2025-for-region-stockholm2.pdf'
  }
];

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
