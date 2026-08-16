import Link from 'next/link';
import { swedenArticleFeed239 } from '../../content/swedenArticleFeed239';

const fmt=(iso:string)=>new Intl.DateTimeFormat('sv-SE',{hour:'2-digit',minute:'2-digit',day:'numeric',month:'short'}).format(new Date(iso));
export default function SwedenLatestUpdate257(){
  const latest=swedenArticleFeed239()[0];
  if(!latest)return null;
  return <section className="border-b border-neutral-300 bg-neutral-50 px-4 py-3 sm:px-5" aria-label="Senaste verifierade uppdatering">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3"><span className="shrink-0 rounded-full bg-neutral-950 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.16em] text-white">Senast</span><div className="min-w-0 text-sm"><span className="font-bold text-neutral-500">{fmt(latest.updatedAt)} · </span><Link href={`/sverige/artikel/${latest.slug}`} className="font-black hover:underline">{latest.title}</Link></div></div>
      <Link href="#senaste-sverige" className="shrink-0 text-xs font-black uppercase tracking-wide underline underline-offset-4">Alla senaste ↓</Link>
    </div>
  </section>;
}
