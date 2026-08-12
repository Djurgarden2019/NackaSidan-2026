'use client';

import { useState } from 'react';

type Snapshot = { id: string; savedAt: number; notes: string; checklist: boolean[]; lastSection: string; focus: boolean; compact: boolean; startedAt: number | null };

export default function LiveSessionSnapshots117() {
  const [saved, setSaved] = useState(false);

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
      const existing = JSON.parse(localStorage.getItem('nackasidan-live-session-snapshots') || '[]');
      const next = [snapshot, ...(Array.isArray(existing) ? existing : [])].slice(0, 5);
      localStorage.setItem('nackasidan-live-session-snapshots', JSON.stringify(next));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 1600);
    } catch {}
  };

  return <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'-8px 0 18px'}}><button type="button" onClick={saveSnapshot} style={{border:'1px solid #171717',background:'#fff',color:'#171717',padding:'7px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}>{saved?'Ögonblicksbild sparad ✓':'Spara ögonblicksbild'}</button></div>;
}
