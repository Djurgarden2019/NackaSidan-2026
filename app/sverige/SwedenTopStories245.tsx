import Link from 'next/link';
import { swedenArticleFeed239 } from '../../content/swedenArticleFeed239';

const time=(iso:string)=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date(iso));
export default function SwedenTopStories245(){
  const stories=swedenArticleFeed239().slice(0,4);
  if(!stories.length)return null;
  return <section className="border-b border-neutral-300 py-7" aria-labelledby="topstories-sweden">
    <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-neutral-500">Just nu</p><h2 id="topstories-sweden" className="mt-1 text-2xl font-black">Sverige i fokus</h2></div><span className="hidden text-xs font-bold uppercase tracking-wide text-neutral-500 sm:block">Senast verifierat</span></div>
    <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr_1fr]">
      {stories.map((story,index)=><article key={story.slug} className={`${index===0?'border-t-4 border-neutral-950 pt-4 lg:row-span-2':'border-t border-neutral-300 pt-3'} ${index===3?'lg:col-start-3':''}`}><div className="flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wide text-neutral-500"><span>{story.region||story.section}</span><span>·</span><span>{time(story.updatedAt)}</span></div><h3 className={`mt-2 font-black leading-tight ${index===0?'text-3xl sm:text-4xl':'text-xl'}`}><Link href={`/sverige/artikel/${story.slug}`} className="hover:underline">{story.title}</Link></h3>{index===0?<p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">{story.intro}</p>:null}<Link href={`/sverige/artikel/${story.slug}`} className="mt-3 inline-block text-sm font-black underline underline-offset-4">Läs vidare</Link></article>)}
    </div>
  </section>;
}
