import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../../lib/liveNews';
import { getNewsHealth } from '../../../../lib/newsHealth';

export const revalidate = 900;

export async function GET() {
  const radar = await getLiveNews();
  const { status, reasons } = getNewsHealth(radar);
  const ready = status !== 'ÅTGÄRD';

  return NextResponse.json({
    ready,
    status,
    reasons,
    checkedAt: radar.fetchedAt,
  }, {
    status: ready ? 200 : 503,
    headers: {
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      'X-NackaSidan-Probe': 'ready',
      'X-NackaSidan-Health': status,
    },
  });
}
