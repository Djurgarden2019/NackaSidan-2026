export type StockholmHomepageCandidate200 = {
  slug: string;
  title: string;
  section: string;
  publishedAt: string;
  status: 'published' | 'verify-before-publish';
  localImpact?: number;
  sourceStrength?: number;
  originality?: number;
};

const ageHours = (iso: string, now = Date.now()) => Math.max(0, (now - Date.parse(iso)) / 3600000);

export function scoreStockholmHomepage200(item: StockholmHomepageCandidate200, now = Date.now()) {
  if (item.status !== 'published') return -Infinity;
  const freshness = Math.max(0, 30 - ageHours(item.publishedAt, now) / 8);
  return freshness + (item.localImpact ?? 0) * 5 + (item.sourceStrength ?? 0) * 4 + (item.originality ?? 0) * 2;
}

export function composeStockholmHomepage200(items: StockholmHomepageCandidate200[], now = Date.now()) {
  const ranked = items.map(item => ({ item, score: scoreStockholmHomepage200(item, now) })).filter(x => Number.isFinite(x.score)).sort((a,b) => b.score-a.score);
  const used = new Set<string>();
  const take = (count: number, predicate = (_: StockholmHomepageCandidate200) => true) => ranked.filter(x => !used.has(x.item.slug) && predicate(x.item)).slice(0,count).map(x => { used.add(x.item.slug); return x.item; });
  return {
    lead: take(1)[0],
    latest: take(5),
    traffic: take(3, x => /trafik/i.test(x.section)),
    housing: take(3, x => /bostad|stadsutveckling/i.test(x.section)),
    culture: take(3, x => /kultur/i.test(x.section)),
    business: take(3, x => /näringsliv|ekonomi/i.test(x.section)),
    more: take(8)
  };
}

export const stockholmHomepageEngineRules200 = {
  neverPublishUnverified: true,
  ordinaryNewsMaxAgeDays: 10,
  principle: 'Förstasidan ska styras av verifiering, lokal betydelse och aktualitet – inte av manuellt påhittad dramatik.'
};
