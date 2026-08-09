import type { HuntMatch } from './sourceHunter';

export type IndependenceCheck = {
  family: string;
  independent: boolean;
  reason: string;
};

const agencyPatterns = [
  { pattern: /\btt\b|tidningarnas telegrambyrå/i, family: 'TT' },
  { pattern: /\breuters\b/i, family: 'Reuters' },
  { pattern: /associated press|\bap\b/i, family: 'AP' },
  { pattern: /agence france-presse|\bafp\b/i, family: 'AFP' }
];

export function normalizedSourceFamily(source: string) {
  const s = source.toLowerCase().trim();
  if (s.includes('svt')) return 'SVT';
  if (s.includes('sveriges radio') || s.includes('ekot')) return 'Sveriges Radio';
  if (s.includes('aftonbladet')) return 'Aftonbladet';
  if (s.includes('expressen')) return 'Expressen';
  if (s.includes('dagens nyheter') || /^dn\b/.test(s)) return 'Dagens Nyheter';
  if (s.includes('svenska dagbladet') || s.includes('svd')) return 'Svenska Dagbladet';
  for (const agency of agencyPatterns) if (agency.pattern.test(source)) return agency.family;
  return source.trim() || 'Okänd källa';
}

function agencyFamily(text: string) {
  for (const agency of agencyPatterns) if (agency.pattern.test(text)) return agency.family;
  return null;
}

export function checkSourceIndependence(originSource: string, match: HuntMatch): IndependenceCheck {
  const originFamily = normalizedSourceFamily(originSource);
  const candidateFamily = normalizedSourceFamily(match.source);
  if (originFamily === candidateFamily) {
    return { family: candidateFamily, independent: false, reason: 'samma källfamilj' };
  }
  const originAgency = agencyFamily(originSource);
  const candidateAgency = agencyFamily(`${match.source} ${match.title}`);
  if (originAgency && candidateAgency && originAgency === candidateAgency) {
    return { family: candidateFamily, independent: false, reason: `samma byråmaterial (${originAgency})` };
  }
  return { family: candidateFamily, independent: true, reason: 'separat källfamilj' };
}

export function independentMatches(originSource: string, matches: HuntMatch[]) {
  return matches.map(match => ({ match, check: checkSourceIndependence(originSource, match) }));
}
