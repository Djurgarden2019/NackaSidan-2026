export type StockholmHousingProject = {
  id: string;
  name: string;
  district: string;
  homes?: number;
  tenure?: string;
  stage: 'idé' | 'planering' | 'samråd' | 'beslutad' | 'byggstart' | 'byggs' | 'klar';
  nextMilestone?: string;
  sourceUrl: string;
  checkedAt: string;
};

// Verified statistical baseline. This is historical construction data, not a live project list.
export const stockholmHousingProjects170: StockholmHousingProject[] = [];

export const stockholmHousingBaseline179 = {
  year: 2024,
  checkedAt: '2026-08-13',
  sourceUrl: 'https://start.stockholm/globalassets/start/om-stockholms-stad/utredningar-statistik-och-fakta/statistik/arsbok/statistisk-arsbok-for-stockholm-2026.pdf',
  sourceLabel: 'Stockholms stad – Statistisk årsbok 2026',
  completedHomes: {
    wholeCity: 5006,
    vasterort: 1819,
    innerCity: 930,
    soderort: 2257,
    jarva: 1394,
    hagerstenAlvsjo: 1138,
    enskedeArstaVantor: 671,
    sodermalm: 529,
    bromma: 325
  },
  note: 'Avser nybyggda bostäder 2024 enligt stadens statistiska årsbok. Ska visas som bakgrundsstatistik och inte som byggstarter 2026.'
};

export const stockholmHousingPolicy179 = {
  checkedAt: '2026-08-13',
  sourceUrl: 'https://start.stockholm/globalassets/start/om-stockholms-stad/sa-anvands-dina-skattepengar/stadens-budget-ar-fran-ar/stockholms-stads-budget-2026.pdf',
  sourceLabel: 'Stockholms stads budget 2026',
  facts: [
    'Budgeten anger att minst hälften av det som byggs ska vara hyresrätter.',
    'Staden anger en långsiktig målsättning att allmännyttan ska öka i alla stadsdelar.',
    'Budgeten anger mål om fler stora lägenheter samt fler student- och seniorbostäder.'
  ]
};

export const stockholmHousingDesk170 = {
  title: 'Bostadskollen Stockholm',
  intro: 'NackaSidan följer var Stockholm bygger, hur många bostäder som faktiskt blir av och hur planerna förändras från första besked till inflyttning.',
  metrics: [
    'Planerade bostäder',
    'Antagna detaljplaner',
    'Byggstarter',
    'Färdigställda bostäder',
    'Hyresrätt/bostadsrätt/student- och specialbostäder',
    'Förseningar och ändrade projekt'
  ],
  editorialRules: [
    'Ange projektets aktuella planeringsskede.',
    'Skilj mellan planerat antal bostäder och faktiskt byggstartade bostäder.',
    'Tidsstämpla senaste kontrollen.',
    'Använd i första hand Stockholms stad, exploateringskontoret och stadsbyggnadskontoret som källor.',
    'Följ även konsekvenser för skolor, parker, trafik och lokal service.'
  ]
};
