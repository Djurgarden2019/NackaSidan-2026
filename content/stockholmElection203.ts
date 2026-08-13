export type StockholmElectionClaim203 = {
  id: string;
  actor: string;
  claim: string;
  topic: string;
  sourceUrl: string;
  sourceDate: string;
  checkedAt: string;
  context?: string;
  status: 'quoted' | 'context-added' | 'corrected';
};

export const stockholmElectionClaims203: StockholmElectionClaim203[] = [];

export const stockholmElectionDesk203 = {
  title: 'Valet i Stockholm 2026',
  areas: ['Bostäder', 'Skola', 'Trygghet', 'Trafik', 'Klimat', 'Skatt', 'Äldreomsorg', 'Stadsutveckling'],
  formats: ['Partiernas förslag', 'Sakfråga för sakfråga', 'Faktakoll', 'Intervjuer', 'Vallöfteskollen'],
  rules: [
    'Samma journalistiska kriterier ska gälla alla relevanta partier.',
    'Påståenden ska länkas till originalkälla när möjligt.',
    'Fakta, citat och redaktionell analys ska hållas isär.',
    'Rubriker ska inte förstärka konflikt utöver vad underlaget visar.',
    'Rättelser ska vara synliga och tidsstämplade.'
  ]
};
