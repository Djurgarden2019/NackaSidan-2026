export type FreshnessClass = 'live' | 'today' | 'recent' | 'background' | 'stale';

export type VerificationInput = {
  publishedAt?: string;
  checkedAt?: string;
  sourceUrl?: string;
  sourceType?: string;
  live?: boolean;
};

const DAY = 24 * 60 * 60 * 1000;

export function classifyFreshness(input: VerificationInput, now = new Date()): FreshnessClass {
  const stamp = input.checkedAt ?? input.publishedAt;
  if (!stamp) return 'stale';
  const age = Math.max(0, now.getTime() - new Date(stamp).getTime());
  if (input.live && age <= 60 * 60 * 1000) return 'live';
  if (age <= DAY) return 'today';
  if (age <= 10 * DAY) return 'recent';
  if (age <= 365 * DAY) return 'background';
  return 'stale';
}

export function canAppearAsCurrentNews(input: VerificationInput, now = new Date()) {
  const freshness = classifyFreshness(input, now);
  return freshness === 'live' || freshness === 'today' || freshness === 'recent';
}

export const stockholmSourcePriority180 = [
  'Stockholms stad och dess förvaltningar',
  'Region Stockholm och SL',
  'Trafikverket',
  'Polisen och domstolar',
  'SCB och andra myndigheter',
  'Officiella kulturinstitutioner och arrangörer',
  'Bolagets egen primärinformation kompletterad med oberoende kontroll',
  'Etablerade redaktionella sekundärkällor'
];

export const stockholmFreshnessRules180 = {
  ordinaryNewsMaxDays: 10,
  trafficLiveMaxMinutes: 60,
  eventRule: 'Evenemang ska kontrolleras mot arrangör eller officiell plats innan publicering.',
  politicsRule: 'Skilj på förslag, fattat beslut och genomförande.',
  statisticsRule: 'Äldre statistik ska märkas med statistikens år och får inte beskrivas som dagens läge.',
  emptySearchRule: 'Om färsk sökning inte ger verifierbara träffar ska modulen visa tomläge eller bakgrund, inte konstruerade nyheter.'
};
