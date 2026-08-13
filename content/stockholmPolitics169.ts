export type StockholmPoliticalPromise = {
  id: string;
  subject: string;
  promise: string;
  actor: string;
  sourceUrl: string;
  sourceDate: string;
  status: 'registrerat' | 'pågår' | 'genomfört' | 'delvis' | 'ej genomfört' | 'oklart';
  evidence?: string[];
  checkedAt?: string;
};

export const stockholmPoliticalPromises169: StockholmPoliticalPromise[] = [];

export const stockholmCityHallDesk169 = {
  title: 'Stadshuset – beslut, pengar och ansvar',
  purpose: 'Göra Stockholms kommunpolitik begriplig och möjlig att följa över tid.',
  coverage: [
    'Kommunfullmäktiges större beslut',
    'Budget, investeringar och ekonomiska avvikelser',
    'Bostäder och stadsutveckling',
    'Skola, socialtjänst och äldreomsorg',
    'Trafik, klimat och offentliga miljöer',
    'Vallöften och uppföljning efter valet 2026'
  ],
  editorialRules: [
    'Länka till beslut, protokoll, budget eller annan primär handling när sådan finns.',
    'Skilj mellan politiskt förslag, fattat beslut och genomförd åtgärd.',
    'Redovisa kostnad och finansiering när de är kända.',
    'Ge berörda politiska sidor utrymme när en fråga är omstridd.',
    'Märk analys tydligt och håll den skild från verifierbara fakta.'
  ]
};
