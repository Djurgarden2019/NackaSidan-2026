import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const headers = {
  'Cache-Control': 'no-store',
  'X-NackaSidan-Probe': 'live',
};

export async function GET() {
  return NextResponse.json({
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
