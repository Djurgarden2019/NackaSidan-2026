'use client';

import { useEffect, useState } from 'react';

export default function LiveFocusSummary127() {
  const [summary, setSummary] = useState({goal:'', deadline:'', checklist:0, notes:false});
  useEffect(()=>{
    const read=()=>{try{const checklist=JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'[]');setSummary({goal:localStorage.getItem('nackasidan-live-session-goal')||'',deadline:localStorage.getItem('nackasidan-live-session-goal-deadline')||'',checklist:Array.isArray(checklist)?checklist.filter(Boolean).length:0,notes:Boolean(localStorage.getItem('nackasidan-live-session-notes'))});}catch{}};
    read(); const id=window.setInterval(read,1200); return()=>window.clearInterval(id);
  },[]);
  if(!summary.goal && !summary.checklist && !summary.notes) return null;
  const deadline=summary.deadline?new Date(summary.deadline).toLocaleString('sv-SE',{dateStyle:'short',timeStyle:'short'}):'';
  return <section className="live-focus-secondary" aria-label="Dagens fokus" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:'#faf7f1'}}><strong style={{display:'block',fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'7px'}}>Dagens fokus</strong><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'8px',fontSize:'.68rem'}}><div><b>Mål:</b> {summary.goal||'Ej satt'}</div><div><b>Checklista:</b> {summary.checklist}/4</div><div><b>Anteckningar:</b> {summary.notes?'Finns':'Inga'}</div><div><b>Deadline:</b> {deadline||'Ingen'}</div></div></section>;
}
