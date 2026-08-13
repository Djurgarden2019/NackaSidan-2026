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

export const stockholmHousingProjects170: StockholmHousingProject[] = [];

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
