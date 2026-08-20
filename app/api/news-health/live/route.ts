import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    live: true,
    service: 'NackaSidan',
    checkedAt: new Date().toISOString(),
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
      'X-NackaSidan-Probe': 'live',
    },
  });
}
