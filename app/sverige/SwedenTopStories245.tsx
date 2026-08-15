import Link from 'next/link';
import { swedenArticleFeed239 } from '../../content/swedenArticleFeed239';

export default function SwedenTopStories245(){
  const stories=swedenArticleFeed239().slice(0,4);
  if(!stories.length)return null;
  return <section className="border-b border-neutral-300 py-6" aria-labelledby="topstories-sweden">
    <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
      <div><p className="text-xs font-black uppercase tracking-[.18em] text-neutral-500">Just nu</p><h2 id="topstories-sweden" className="mt-1 text-xl font-black">Sverige i fokus</h2></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stories.map((story,index)=><article key={story.slug} className="border-l-2 border-neutral-950 pl-4"><div className="text-[11px] font-black uppercase tracking-wide text-neutral-500">{index+1} · {story.region||story.section}</div><h3 className="mt-1 text-base font-black leading-snug"><Link href={`/sverige/artikel/${story.slug}`} className="hover:underline">{story.title}</Link></h3></article>)}</div>
    </div>
  </section>;
}
