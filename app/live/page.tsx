import Link from 'next/link';
import { getLiveNews } from '../../lib/liveNews';

export const revalidate = 900;
export const dynamic = 'force-dynamic';

function swedishTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value || 'Tid saknas';
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Stockholm', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(d);
}

export default async function LivePage({ searchParams }: { searchParams: Promise<{ section?: string }> }) {
  const data = await getLiveNews();
  const params = await searchParams;
  const selected = data.sections.includes(params.section || '') ? (params.section as string) : 'Alla';
  const visible = selected === 'Alla' ? data.items : data.items.filter(item => item.section === selected);

  return <main><div className="shell">
    <section className="live-hero live-hero-s11">
      <div className="kicker">Nacka Intelligence · Sprint 11</div>
      <h1>Nyhetsradarn</h1>
      <p>Liveflödet är nu ett redaktionellt radarverktyg. Signaler hämtas från originalkällor, ämnessorteras automatiskt och prioriteras för granskning. Klassificeringen är maskinell – publicering kräver fortfarande mänsklig verifiering.</p>
    </section>

    <section className="radar-stats">
      <article><strong>{data.items.length}</strong><span>signaler inne</span></article>
      <article><strong>{data.localCount}</strong><span>lokala signaler</span></article>
      <article><strong>{data.highPriority}</strong><span>hög prioritet</span></article>
      <article><strong>{data.feeds.filter(f=>f.status==='Ansluten').length}/{data.feeds.length}</strong><span>källor anslutna</span></article>
    </section>

    <section className="live-status-grid live-status-grid-s11">
      {data.feeds.map(feed => <article key={feed.name}>
        <span className={feed.status === 'Ansluten' ? 'live-dot live-dot-ok' : 'live-dot'} />
        <div><strong>{feed.name}</strong><small>{feed.section} · {feed.status} · {feed.count} poster</small>{feed.note && <small>{feed.note}</small>}<a href={feed.homepage} target="_blank" rel="noreferrer">Originalkälla ↗</a></div>
      </article>)}
    </section>

    <section className="live-stream">
      <div className="section-heading section-heading-stack"><div><div className="kicker">Automatisk ämnessortering</div><h2>Senaste signalerna</h2></div><p>Senast kontrollerat {swedishTime(data.fetchedAt)}. Rubriker länkar alltid till originalpubliceringen.</p></div>
      <nav className="radar-filters" aria-label="Filtrera liveflödet">
        {data.sections.map(section => <Link className={selected===section?'active':''} key={section} href={section==='Alla'?'/live':`/live?section=${encodeURIComponent(section)}`}>{section}<b>{data.sectionCounts[section]}</b></Link>)}
      </nav>
      <div className="radar-legend"><span><i className="priority-dot priority-high"/> Hög</span><span><i className="priority-dot priority-medium"/> Medel</span><span><i className="priority-dot priority-low"/> Låg</span><em>Automatisk redaktionell prioritet – inte en bedömning av sanningshalt.</em></div>
      {visible.length ? visible.slice(0,36).map((item, i) => <article className="live-row live-row-s11" key={`${item.link}-${i}`}>
        <time>{swedishTime(item.published)}</time>
        <div><div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div><h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3></div>
        <div className="radar-review"><span className={`priority-pill priority-${item.priority==='Hög'?'high':item.priority==='Medel'?'medium':'low'}`}>{item.priority}</span><span>Ej verifierad</span></div>
      </article>) : <div className="live-empty"><strong>Inga signaler i denna kategori just nu.</strong><p>Byt kategori eller invänta nästa automatiska kontroll. NackaSidan fyller aldrig ut flödet med påhittade poster.</p></div>}
    </section>
  </div></main>;
}
