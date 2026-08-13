export const swedenElectionCalendar224 = [
  { date: '2026-08-14', title: 'Kvalifikationsdag', description: 'Rösträtten bestäms 30 dagar före valdagen.', source: 'Valmyndigheten', sourceUrl: 'https://www.val.se/valresultat-och-statistik/statistik-och-data/radata-val-2026' },
  { date: '2026-08-26', title: 'Förtidsröstningen börjar', description: 'Väljare kan förtidsrösta i Sverige från denna dag.', source: 'Valmyndigheten', sourceUrl: 'https://www.val.se/kommande-val/val-2026---riksdag-region-och-kommun' },
  { date: '2026-09-13', title: 'Valdagen', description: 'Val till riksdag, region- och kommunfullmäktige.', source: 'Valmyndigheten', sourceUrl: 'https://www.val.se/kommande-val/val-2026---riksdag-region-och-kommun' }
] as const;

export const swedenElectionCalendarRules224 = {
  checkedAt: '2026-08-13',
  source: 'Valmyndigheten',
  distinguishElectionTypes: true,
  note: 'Datum ska kontrolleras mot Valmyndigheten innan de ändras eller kompletteras.'
};
