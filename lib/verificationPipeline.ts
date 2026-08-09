import { getLiveNews } from './liveNews';
import { corroborate } from './sourceEngine';
import { huntSecondSources, isGenericHeadline } from './sourceHunter';
import { matchEvent } from './eventMatcher';

export type VerificationRow = {
  item: any;
  query: string;
  matches: ReturnType<typeof matchEvent>[];
  best: ReturnType<typeof matchEvent> | null;
  confirmed: boolean;
};

export type VerificationData = {
  generatedAt: string;
  checked: number;
  confirmed: number;
  probable: number;
  results: VerificationRow[];
};

export async function runVerificationPipeline(limit = 8): Promise<VerificationData> {
  const live = await getLiveNews();
  const unresolved = live.items
    .filter(item => !isGenericHeadline(item.title))
    .filter(item => corroborate(item, live.items).independentSources.length < 2)
    .slice(0, limit);

  const rows = await Promise.all(unresolved.map(async item => {
    const hunt = await huntSecondSources(item);
    const matches = hunt.matches
      .map(match => matchEvent(item, match))
      .sort((a, b) => b.eventScore - a.eventScore);
    const best = matches[0] || null;
    return {
      item,
      query: hunt.query,
      matches,
      best,
      confirmed: !!best && best.eventScore >= 85
    };
  }));

  return {
    generatedAt: new Date().toISOString(),
    checked: rows.length,
    confirmed: rows.filter(row => row.confirmed).length,
    probable: rows.filter(row => row.best && row.best.eventScore >= 68).length,
    results: rows
  };
}
