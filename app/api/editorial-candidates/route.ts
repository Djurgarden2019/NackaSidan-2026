import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { buildEditorialCandidates } from '../../../lib/editorialEngine';

export const revalidate = 900;

export async function GET() {
  const live = await getLiveNews();
  const candidates = buildEditorialCandidates(live.items);

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    sourceSignals: live.items.length,
    candidates: candidates.slice(0, 20)
  }, {
    headers: { 'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800' }
  });
}
