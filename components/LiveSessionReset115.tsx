'use client';

import { useState } from 'react';

const keys = [
  'nackasidan-live-checklist',
  'nackasidan-live-session-notes',
  'nackasidan-live-last-section',
  'nackasidan-live-focus-mode',
  'nackasidan-live-compact-mode',
  'nackasidan-live-session-started-at',
  'nackasidan-live-session-paused-at',
  'nackasidan-live-session-snapshots',
  'nackasidan-live-session-goal',
  'nackasidan-live-session-goal-done',
  'nackasidan-live-session-goal-deadline',
  'nackasidan-live-next-step',
  'nackasidan-live-session-log',
  'nackasidan-live-release-notes',
  'nackasidan-live-final-qa',
];

export default function LiveSessionReset115() {
  const [armed, setArmed] = useState(false);

  const reset = () => {
    if (!armed) { setArmed(true); window.setTimeout(() => setArmed(false), 4000); return; }
    try { keys.forEach((key) => localStorage.removeItem(key)); } catch {}
    setArmed(false);
    window.location.reload();
  };

  return <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'-6px 0 18px'}}><button type="button" onClick={reset} style={{border:'1px solid #b6afa3',background:armed?'#fff1f0':'#fff',color:armed?'#9f1d20':'#5f5a52',padding:'7px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}>{armed?'Bekräfta: nollställ allt i arbetsrundan':'Nollställ arbetsrundan'}</button></div>;
}
