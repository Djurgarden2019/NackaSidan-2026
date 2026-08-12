'use client';

import { useEffect, useState } from 'react';

type Snapshot = { id: string; savedAt: number; notes: string; checklist: boolean[]; lastSection: string; focus: boolean; compact: boolean; startedAt: number | null };

export default function LiveSessionSnapshots117() {
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(false);
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [restoring, setRestoring] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem('nackasidan-live-session-snapshots') || '[]');
      setSnapshots(Array.isArray(parsed) ? parsed.slice(0,5) : []);
    } catch { setSnapshots([]); }
  };

  useEffect(load, []);

  const persist = (next: Snapshot[]) => {
    setSnapshots(next);
    try { localStorage.setItem('nackasidan-live-session-snapshots', JSON.stringify(next)); } catch {}
  };

  const saveSnapshot = () => {
    try {
      const checklist = JSON.parse(localStorage.getItem('nackasidan-live-checklist') || '[false,false,false,false]');
      const snapshot: Snapshot = {
        id: String(Date.now()),
        savedAt: Date.now(),
        notes: localStorage.getItem('nackasidan-live-session-notes') || '',
        checklist: Array.isArray(checklist) ? checklist.map(Boolean).slice(0, 4) : [false,false,false,false],
        lastSection: localStorage.getItem('nackasidan-live-last-section') || '',
        focus: localStorage.getItem('nackasidan-live-focus-mode') === '1',
        compact: localStorage.getItem('nackasidan-live-compact-mode') === '1',
        startedAt: Number(localStorage.getItem('nackasidan-live-session-started-at')) || null,
      };
      persist([snapshot, ...snapshots].slice(0, 5));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 1600);
    } catch {}
  };

  const restore = (snapshot: Snapshot) => {
    if (restoring !== snapshot.id) { setRestoring(snapshot.id); window.setTimeout(() => setRestoring(null), 4000); return; }
    try {
      localStorage.setItem('nackasidan-live-checklist', JSON.stringify(snapshot.checklist));
      localStorage.setItem('nackasidan-live-session-notes', snapshot.notes || '');
      if (snapshot.lastSection) localStorage.setItem('nackasidan-live-last-section', snapshot.lastSection); else localStorage.removeItem('nackasidan-live-last-section');
      localStorage.setItem('nackasidan-live-focus-mode', snapshot.focus ? '1' : '0');
      localStorage.setItem('nackasidan-live-compact-mode', snapshot.compact ? '1' : '0');
      if (snapshot.startedAt) localStorage.setItem('nackasidan-live-session-started-at', String(snapshot.startedAt));
      window.location.reload();
    } catch {}
  };

  const remove = (snapshot: Snapshot) => {
    if (deleting !== snapshot.id) { setDeleting(snapshot.id); window.setTimeout(() => setDeleting(null), 4000); return; }
    persist(snapshots.filter((item) => item.id !== snapshot.id));
    setDeleting(null);
  };

  return <section className="live-focus-secondary" aria-label="Sparade arbetsrundor" style={{margin:'-8px 0 18px',border:'1px solid #d8d2c6',background:'#fff'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',padding:'9px 10px'}}><button type="button" onClick={saveSnapshot} style={{border:'1px solid #171717',background:'#fff',color:'#171717',padding:'7px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}>{saved?'Ögonblicksbild sparad ✓':'Spara ögonblicksbild'}</button><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} style={{border:0,background:'transparent',padding:'4px',fontSize:'.68rem',fontWeight:800,cursor:'pointer',color:'#5f5a52'}}>Historik ({snapshots.length}) {open?'−':'+'}</button></div>{open&&<div style={{borderTop:'1px solid #e4ded4',padding:'8px 10px'}}>{snapshots.length===0?<p style={{margin:0,fontSize:'.7rem',color:'#69645c'}}>Inga sparade ögonblicksbilder ännu.</p>:<div style={{display:'grid',gap:'6px'}}>{snapshots.map((snapshot)=><div key={snapshot.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',padding:'7px 8px',background:'#faf7f1',fontSize:'.68rem'}}><div><div>{new Date(snapshot.savedAt).toLocaleString('sv-SE',{dateStyle:'short',timeStyle:'short'})}</div><div style={{color:'#69645c',marginTop:'2px'}}>{snapshot.checklist.filter(Boolean).length}/4 klara · {snapshot.notes?'anteckningar':'inga anteckningar'}</div></div><div style={{display:'flex',gap:'6px'}}><button type="button" onClick={()=>restore(snapshot)} style={{border:'1px solid #b6afa3',background:restoring===snapshot.id?'#fff1f0':'#fff',padding:'6px 8px',fontSize:'.64rem',fontWeight:800,cursor:'pointer',color:restoring===snapshot.id?'#9f1d20':'#171717'}}>{restoring===snapshot.id?'Bekräfta återställning':'Återställ'}</button><button type="button" onClick={()=>remove(snapshot)} style={{border:'1px solid #d8d2c6',background:'#fff',padding:'6px 8px',fontSize:'.64rem',fontWeight:800,cursor:'pointer',color:deleting===snapshot.id?'#9f1d20':'#69645c'}}>{deleting===snapshot.id?'Bekräfta ta bort':'Ta bort'}</button></div></div>)}</div>}</div>}</section>;
}
