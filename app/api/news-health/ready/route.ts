import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../../lib/liveNews';
import { getNewsHealth } from '../../../../lib/newsHealth';

export const revalidate = 900;

const CONTRACT_VERSION = 1;

async function getReadiness() {
  const radar = await getLiveNews();
  const { status, reasons } = getNewsHealth(radar);
  const ready = status !== 'ÅTGÄRD';
  const severity = status === 'ÅTGÄRD' ? 2 : status === 'BEVAKA' ? 1 : 0;
  const headers = {
    'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
    'X-NackaSidan-Probe': 'ready',
    'X-NackaSidan-Probe-Version': String(CONTRACT_VERSION),
    'X-NackaSidan-Health': status,
    'X-NackaSidan-Severity': String(severity),
  };

  return { radar, status, reasons, ready, severity, headers };
}

export async function GET() {
  const { radar, status, reasons, ready, severity, headers } = await getReadiness();

  return NextResponse.json({
    contractVersion: CONTRACT_VERSION,
    ready,
    status,
    severity,
    reasons,
    checkedAt: radar.fetchedAt,
  }, {
    status: ready ? 200 : 503,
    headers,
  });
}

export async function HEAD() {
  const { ready, headers } = await getReadiness();

  return new NextResponse(null, {
    status: ready ? 200 : 503,
    headers,
  });
}
