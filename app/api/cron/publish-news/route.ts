import { NextRequest, NextResponse } from 'next/server';
import { runAutomaticPublishing } from '../../../../lib/autoPublisher';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    return NextResponse.json({ ok: true, ...(await runAutomaticPublishing()), completedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json({ ok: false, error: 'Den automatiska publiceringen kunde inte slutföras.' }, { status: 500 });
  }
}
