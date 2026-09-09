import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { runAutomaticPublishing } from '../../../../lib/autoPublisher';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await runAutomaticPublishing();
    const sectionPages = ['sverige','stockholm','internationella-medier','senaste','sport'];
    revalidatePath('/');
    sectionPages.forEach(path => revalidatePath(`/${path}`));
    return NextResponse.json({ ok: true, ...result, homepageRevalidated: true, sectionPagesRevalidated: sectionPages, completedAt: new Date().toISOString() });
  } catch (error) {
    console.error('[cron:publish-news] failed', { error: String(error), stack: error instanceof Error ? error.stack : undefined });
    return NextResponse.json({ ok: false, error: 'Den automatiska publiceringen kunde inte slutföras.' }, { status: 500 });
  }
}
