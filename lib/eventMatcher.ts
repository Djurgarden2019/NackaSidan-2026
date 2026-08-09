import type { HuntMatch } from './sourceHunter';
import type { LiveNewsItem } from './liveNews';

export type EventMatch = HuntMatch & {
  eventScore: number;
  verdict: 'SAMMA HÄNDELSE' | 'TROLIG MATCH' | 'OSÄKER' | 'ANNAN HÄNDELSE';
  signals: string[];
};

const stop = new Set(['efter','under','över','från','med','som','inte','säger','nytt','kring','flera','stora','dagens','och','eller','till','mot','vid','har','att','den','det','för']);

function tokens(text:string) {
  return text.toLowerCase().replace(/[^a-zåäö0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>=4 && !stop.has(w));
}

function overlap(a:string,b:string) {
  const A=new Set(tokens(a)), B=new Set(tokens(b));
  if(!A.size || !B.size) return 0;
  const common=[...A].filter(w=>B.has(w)).length;
  return common / Math.max(1, Math.min(A.size,B.size));
}

function numbers(text:string) { return new Set(text.match(/\b\d+\b/g) || []); }
function sharedNumbers(a:string,b:string) { const A=numbers(a), B=numbers(b); return [...A].filter(x=>B.has(x)).length; }

function dateDistanceHours(a?:string,b?:string) {
  if(!a || !b) return null;
  const x=Date.parse(a), y=Date.parse(b);
  if(Number.isNaN(x)||Number.isNaN(y)) return null;
  return Math.abs(x-y)/36e5;
}

export function matchEvent(item:LiveNewsItem, candidate:HuntMatch):EventMatch {
  const lexical=overlap(item.title,candidate.title);
  const nums=sharedNumbers(item.title,candidate.title);
  const hours=dateDistanceHours(item.published,candidate.published);
  let score=Math.round(lexical*72 + Math.min(candidate.score,100)*0.18);
  const signals:string[]=[];
  if(lexical>=0.65){ score+=8; signals.push('starkt gemensamt händelsespråk'); }
  else if(lexical>=0.4) signals.push('delvis gemensamt händelsespråk');
  if(nums>0){ score+=6; signals.push('gemensamma tal/fakta'); }
  if(hours!==null && hours<=24){ score+=6; signals.push('nära i tid'); }
  else if(hours!==null && hours>96){ score-=10; signals.push('stor tidsskillnad'); }
  score=Math.max(0,Math.min(100,score));
  const verdict:EventMatch['verdict']=score>=85?'SAMMA HÄNDELSE':score>=68?'TROLIG MATCH':score>=45?'OSÄKER':'ANNAN HÄNDELSE';
  return {...candidate,eventScore:score,verdict,signals};
}
