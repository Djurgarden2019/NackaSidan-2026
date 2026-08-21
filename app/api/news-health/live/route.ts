import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const CONTRACT_VERSION = 1;
const headers = {
  'Cache-Control': 'no-store',
  'X-NackaSidan-Probe': 'live',
  'X-NackaSidan-Probe-Version': String(CONTRACT_VERSION),
};

export async function GET() {
  return NextResponse.json({
    contractVersion: CONTRACT_VERSION,
    live: true,
    service: 'NackaSidan',
    checkedAt: new Date().toISOString(),
  }, {
    status: 200,
    headers,
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers,
  });
}
