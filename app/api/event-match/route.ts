import { NextResponse } from 'next/server';
import { getLiveNews } from '../../../lib/liveNews';
import { corroborate } from '../../../lib/sourceEngine';
import { huntSecondSources, isGenericHeadline } from '../../../lib/sourceHunter';
import { matchEvent } from '../../../lib/eventMatcher';

export const revalidate = 900;

export async function GET() {
  const live=await getLiveNews();
  const unresolved=live.items.filter(x=>!isGenericHeadline(x.title)).filter(x=>corroborate(x,live.items).independentSources.length<2).slice(0,8);
  const rows=await Promise.all(unresolved.map(async item=>{
    const hunt=await huntSecondSources(item);
    const matches=hunt.matches.map(m=>matchEvent(item,m)).sort((a,b)=>b.eventScore-a.eventScore);
    const best=matches[0] || null;
    return {item,query:hunt.query,matches,best,confirmed:!!best && best.eventScore>=85};
  }));
  return NextResponse.json({generatedAt:new Date().toISOString(),checked:rows.length,confirmed:rows.filter(x=>x.confirmed).length,probable:rows.filter(x=>x.best && x.best.eventScore>=68).length,results:rows},{headers:{'Cache-Control':'public, s-maxage=900, stale-while-revalidate=1800'}});
}
