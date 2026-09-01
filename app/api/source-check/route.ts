import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { corroborate } from '../../../lib/sourceEngine';

export const dynamic = 'force-dynamic';
export const revalidate = 900;

export async function GET() {
  const live = await getLiveNews();
  const results = live.items.slice(0, 40).map(item => ({
    title: item.title,
    section: item.section,
    source: item.source,
    published: item.published,
    ...corroborate(item, live.items)
  })).sort((a,b) => b.confidence - a.confidence);

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    checkedSignals: live.items.length,
    verifiedCandidates: results.filter(x => x.status === 'Verifierad kandidat').length,
    results
  }, { headers: { 'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800' } });
}
