import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { corroborate } from '../../../lib/sourceEngine';
import { huntSecondSources, isGenericHeadline } from '../../../lib/sourceHunter';

export const revalidate = 900;

export async function GET() {
  const live = await getLiveNews();
  const unresolved = live.items
    .filter(item => !isGenericHeadline(item.title))
    .filter(item => corroborate(item, live.items).independentSources.length < 2)
    .slice(0, 8);

  const hunted = await Promise.all(unresolved.map(async item => ({
    item,
    result: await huntSecondSources(item)
  })));

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    checked: hunted.length,
    secondSourceFound: hunted.filter(x => x.result.independentSources.length > 0).length,
    results: hunted
  }, { headers: { 'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800' } });
}
