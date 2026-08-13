export type StockholmRelatedCandidate = {
  slug: string;
  tags?: string[];
  districts?: string[];
  section?: string;
  publishedAt?: string;
};

function overlap(a: string[] = [], b: string[] = []) {
  const set = new Set(a);
  return b.filter((item) => set.has(item)).length;
}

export function scoreRelatedStockholm189(current: StockholmRelatedCandidate, candidate: StockholmRelatedCandidate) {
  if (current.slug === candidate.slug) return -Infinity;
  let score = 0;
  score += overlap(current.tags, candidate.tags) * 3;
  score += overlap(current.districts, candidate.districts) * 4;
  if (current.section && current.section === candidate.section) score += 2;
  if (candidate.publishedAt) {
    const ageDays = Math.max(0, (Date.now() - Date.parse(candidate.publishedAt)) / 86400000);
    score += Math.max(0, 3 - ageDays / 30);
  }
  return score;
}

export function relatedStockholm189(current: StockholmRelatedCandidate, candidates: StockholmRelatedCandidate[], limit = 4) {
  return candidates
    .map((candidate) => ({ candidate, score: scoreRelatedStockholm189(current, candidate) }))
    .filter((item) => Number.isFinite(item.score) && item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}

export const stockholmRelatedRules189 = {
  title: 'Relaterat',
  rules: [
    'Stadsdel väger tyngre än generell ämneslikhet.',
    'Nyare relevant material får en mindre bonus men får inte slå ut stark lokal relevans.',
    'Samma artikel får aldrig relateras till sig själv.',
    'Max fyra relaterade artiklar rekommenderas i artikelvyn.'
  ]
};
