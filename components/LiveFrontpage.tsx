'use client';

import { useEffect, useMemo, useState } from 'react';
import type { LiveNewsItem } from '../lib/liveNews';

function timeLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Nyss';
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' }).format(date);
}

function freshnessLabel(value: string, now: number | null) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Nyss';
  if (now === null) return timeLabel(value);
  const diffMinutes = Math.max(0, Math.floor((now - date.getTime()) / 60000));
  if (diffMinutes < 60) return diffMinutes <= 1 ? 'Nyss' : `${diffMinutes} min sedan`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} tim sedan`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} d sedan`;
}

function freshnessStatus(value: string, now: number | null) {
  if (now === null) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const diffHours = Math.max(0, (now - date.getTime()) / 3_600_000);
  if (diffHours < 2) return 'Färsk';
  if (diffHours < 24) return 'Idag';
  return 'Äldre';
}

function sourceLabel(source: string) {
  const normalized = source.toLowerCase();
  if (normalized.includes('svt')) return 'SVT';
  if (normalized.includes('sveriges radio') || normalized.includes('ekot') || normalized.includes('p4')) return 'SR';
  if (normalized.includes('bbc')) return 'BBC';
  return source;
}

function FreshnessBadge({ value, now }: { value: string; now: number | null }) {
  const status = freshnessStatus(value, now);
  if (!status) return null;
  return (
    <span style={{marginLeft:'7px',padding:'2px 5px',border:'1px solid currentColor',fontSize:'.62rem',fontWeight:800,letterSpacing:'.06em'}}>
      {status}
    </span>
  );
}

const FILTERS = ['Alla', 'Nacka/Lokalt', 'Sverige', 'Världen', 'Ekonomi', 'Kultur', 'Vetenskap', 'Sport'];

export default function LiveFrontpage({ items, fetchedAt }: { items: LiveNewsItem[]; fetchedAt: string }) {
  const [activeFilter, setActiveFilter] = useState('Alla');
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateClock = () => setNow(Date.now());
    updateClock();
    const interval = window.setInterval(updateClock, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === 'Alla') return items;
    return items.filter((item) => item.section === activeFilter);
  }, [items, activeFilter]);

  const selected = filtered.slice(0, 8);
  if (!items.length) return null;

  const lead = selected[0];
  const more = selected.slice(1);
  const counts = useMemo(() => Object.fromEntries(FILTERS.map((filter) => [filter, filter === 'Alla' ? items.length : items.filter((item) => item.section === filter).length])), [items]);
  const activeCount = counts[activeFilter] ?? 0;

  return (
    <section className="section live-frontpage" aria-label="Senaste nyheter">
      <div className="live-frontpage-head">
        <div><div className="kicker">Live · uppdateras automatiskt</div><h2>Senaste från nyhetsradarn</h2></div>
        <div className="live-frontpage-updated">
          Uppdaterad <span title={timeLabel(fetchedAt)}>{freshnessLabel(fetchedAt, now)}</span> · <a href="/live">Öppna radarn →</a>
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',gap:'18px',alignItems:'center',flexWrap:'wrap',margin:'12px 0 10px'}}>
        <p style={{margin:0,fontFamily:'Georgia, serif',fontSize:'1.05rem',color:'#4f4a43'}}>
          {activeFilter === 'Alla' ? `${activeCount} aktuella rubriker i radarn` : `${activeCount} aktuella rubriker inom ${activeFilter}`}
        </p>
        <span style={{fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'#9f1d20'}}>Senaste läget</span>
      </div>

      <div style={{display:'flex',flexWrap:'wrap',gap:'8px',margin:'14px 0 20px'}} aria-label="Filtrera nyhetsradarn">
        {FILTERS.map((filter) => {
          const active = activeFilter === filter;
          const count = counts[filter] ?? 0;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={active}
              style={{fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.06em',padding:'7px 10px',border:'1px solid #cfc8bb',background:active ? '#171717' : 'transparent',color:active ? '#fff' : '#171717',cursor:'pointer'}}
            >
              {filter} <span style={{opacity:.65}}>({count})</span>
            </button>
          );
        })}
      </div>

      {!lead ? (
        <div style={{borderTop:'4px solid #171717',padding:'28px 0',color:'#69645c'}}>
          Inga aktuella nyheter i kategorin {activeFilter} just nu. Välj en annan kategori eller öppna hela nyhetsradarn.
        </div>
      ) : (
        <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(0,1fr)',gap:'44px',borderTop:'4px solid #171717',paddingTop:'24px'}}>
          <article style={{paddingRight:'36px',borderRight:'1px solid #d8d2c6'}}>
            <div className="kicker" style={{marginBottom:'10px'}}>{activeFilter === 'Alla' ? 'Viktigast just nu' : `Viktigast inom ${activeFilter}`}</div>
            <div className="feed-meta"><span>{lead.section}<FreshnessBadge value={lead.published} now={now} /></span><span title={timeLabel(lead.published)}>{freshnessLabel(lead.published, now)}</span></div>
            <h3 style={{fontFamily:'Georgia, serif',fontSize:'clamp(2rem,3.5vw,3.5rem)',lineHeight:1.02,letterSpacing:'-.035em',margin:'14px 0 18px'}}>
              <a href={lead.link} target="_blank" rel="noreferrer">{lead.title}</a>
            </h3>
            <p className="live-source"><strong>{sourceLabel(lead.source)}</strong> · {lead.source}</p>
            <a className="button" href={lead.link} target="_blank" rel="noreferrer">Läs originalet</a>
          </article>

          <div>
            {more.map((item, index) => (
              <article key={item.link} style={{display:'grid',gridTemplateColumns:'42px 1fr',gap:'14px',padding:'0 0 15px',marginBottom:'15px',borderBottom:'1px solid #d8d2c6'}}>
                <span style={{fontFamily:'Georgia, serif',fontSize:'1.2rem',color:'#9f1d20'}}>{String(index + 2).padStart(2, '0')}</span>
                <div>
                  <div className="feed-meta"><span>{item.section}<FreshnessBadge value={item.published} now={now} /></span><span title={timeLabel(item.published)}>{freshnessLabel(item.published, now)}</span></div>
                  <h3 style={{fontFamily:'Georgia, serif',fontSize:'1.18rem',lineHeight:1.12,margin:'5px 0 4px'}}><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
                  <p className="live-source" style={{margin:0}}><strong>{sourceLabel(item.source)}</strong> · {item.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      <div style={{display:'flex',justifyContent:'space-between',gap:'24px',alignItems:'center',marginTop:'22px',paddingTop:'16px',borderTop:'1px solid #d8d2c6',fontSize:'.76rem',color:'#69645c'}}>
        <p style={{margin:0,maxWidth:'760px'}}>Filtrera direkt mellan Nacka/Lokalt, Sverige, Världen, Ekonomi, Kultur, Vetenskap och Sport. Rubrikerna hämtas från anslutna källor och länkar till originalpubliceringen.</p>
        <a className="button" href="/live">Se hela nyhetsradarn</a>
      </div>
    </section>
  );
}
