export type StockholmRankableStory = {
  id: string;
  publishedAt: string;
  verified: boolean;
  localImpact: 0 | 1 | 2 | 3 | 4 | 5;
  publicInterest: 0 | 1 | 2 | 3 | 4 | 5;
  urgency: 0 | 1 | 2 | 3 | 4 | 5;
  originality: 0 | 1 | 2 | 3 | 4 | 5;
  sourceStrength: 0 | 1 | 2 | 3 | 4 | 5;
};

export function stockholmEditorialScore183(story: StockholmRankableStory, now = new Date()) {
  if (!story.verified) return -1000;
  const ageHours = Math.max(0, (now.getTime() - new Date(story.publishedAt).getTime()) / 3_600_000);
  const freshness = Math.max(0, 5 - ageHours / 48);
  return Math.round((
    story.localImpact * 3 +
    story.publicInterest * 2.5 +
    story.urgency * 2 +
    story.originality * 1.5 +
    story.sourceStrength * 2 +
    freshness * 2
  ) * 10) / 10;
}

export function rankStockholmStories183<T extends StockholmRankableStory>(stories: T[], now = new Date()) {
  return [...stories].sort((a, b) => stockholmEditorialScore183(b, now) - stockholmEditorialScore183(a, now));
}
