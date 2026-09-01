import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
export const dynamic = 'force-dynamic';
export const revalidate = 900;
export async function GET() {
  return NextResponse.json(await getLiveNews(), {
    headers: { 'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800' }
  });
}
