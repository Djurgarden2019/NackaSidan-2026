import type { LiveNewsItem } from '../lib/liveNews';

function timeLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Nyss';
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' }).format(date);
}

export default function LiveFrontpage({ items, fetchedAt }: { items: LiveNewsItem[]; fetchedAt: string }) {
  const selected = items.slice(0, 8);
  if (!selected.length) return null;
  const [lead, ...more] = selected;

  return (
    <section className="section live-frontpage" aria-label="Senaste nyheter">
      <div className="live-frontpage-head">
        <div><div className="kicker">Live · uppdateras automatiskt</div><h2>Senaste från nyhetsradarn</h2></div>
        <div className="live-frontpage-updated">Uppdaterad {timeLabel(fetchedAt)} · <a href="/live">Öppna radarn →</a></div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(0,1fr)',gap:'44px',borderTop:'4px solid #171717',paddingTop:'24px'}}>
        <article style={{paddingRight:'36px',borderRight:'1px solid #d8d2c6'}}>
          <div className="kicker" style={{marginBottom:'10px'}}>Viktigast just nu</div>
          <div className="feed-meta"><span>{lead.section}</span><span>{timeLabel(lead.published)}</span></div>
          <h3 style={{fontFamily:'Georgia, serif',fontSize:'clamp(2rem,3.5vw,3.5rem)',lineHeight:1.02,letterSpacing:'-.035em',margin:'14px 0 18px'}}>
            <a href={lead.link} target="_blank" rel="noreferrer">{lead.title}</a>
          </h3>
          <p className="live-source">{lead.source}</p>
          <a className="button" href={lead.link} target="_blank" rel="noreferrer">Läs originalet</a>
        </article>

        <div>
          {more.map((item, index) => (
            <article key={item.link} style={{display:'grid',gridTemplateColumns:'42px 1fr',gap:'14px',padding:'0 0 15px',marginBottom:'15px',borderBottom:'1px solid #d8d2c6'}}>
              <span style={{fontFamily:'Georgia, serif',fontSize:'1.2rem',color:'#9f1d20'}}>{String(index + 2).padStart(2, '0')}</span>
              <div>
                <div className="feed-meta"><span>{item.section}</span><span>{timeLabel(item.published)}</span></div>
                <h3 style={{fontFamily:'Georgia, serif',fontSize:'1.18rem',lineHeight:1.12,margin:'5px 0 4px'}}><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
                <p className="live-source" style={{margin:0}}>{item.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',gap:'24px',alignItems:'center',marginTop:'22px',paddingTop:'16px',borderTop:'1px solid #d8d2c6',fontSize:'.76rem',color:'#69645c'}}>
        <p style={{margin:0,maxWidth:'760px'}}>Rubrikerna hämtas direkt från anslutna källor och länkar till originalpubliceringen. NackaSidan prioriterar flödet redaktionellt men skriver inte om rubrikerna.</p>
        <a className="button" href="/live">Se hela nyhetsradarn</a>
      </div>
    </section>
  );
}
