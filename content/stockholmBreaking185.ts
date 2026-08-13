export type StockholmBreakingItem185 = {
  id: string;
  headline: string;
  summary: string;
  occurredAt?: string;
  publishedAt: string;
  checkedAt: string;
  sourceUrl: string;
  sourceLabel: string;
  confirmed: boolean;
  severity: 'info' | 'important' | 'major';
};

export const stockholmBreaking185: StockholmBreakingItem185[] = [];

export const stockholmBreakingRules185 = {
  maxAgeHours: 24,
  liveRefreshMinutes: 60,
  rules: [
    'Breaking-raden får aldrig fyllas med ett obekräftat utkast.',
    'Tidpunkt för händelse och senaste kontroll ska visas när de är kända.',
    'Vid olyckor och brott ska uppgifter om skadade, misstänkta och orsaker attribueras tydligt.',
    'En rättelse ska synas i artikeln när en central uppgift ändras.',
    'När en händelse inte längre är breaking flyttas den till vanliga Senaste nytt.'
  ]
};
