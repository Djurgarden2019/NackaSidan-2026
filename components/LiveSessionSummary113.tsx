'use client';

import { useEffect, useState } from 'react';

type Summary = { focus:boolean; compact:boolean; checklist:number; notes:boolean };

function readSummary(): Summary {
  let focus=false, compact=false, checklist=0, notes=false;
  try {
    focus=localStorage.getItem('nackasidan-live-focus-mode')==='1';
    compact=localStorage.getItem('nackasidan-live-compact-mode')==='1';
    const saved=JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'null');
    if(Array.isArray(saved)) checklist=saved.filter(Boolean).length;
    notes=Boolean((localStorage.getItem('nackasidan-live-session-notes')||'').trim());
  } catch {}
  return {focus,compact,checklist,notes};
}

export default function LiveSessionSummary113(){
  const [summary,setSummary]=useState<Summary>({focus:false,compact:false,checklist:0,notes:false});
  useEffect(()=>{
    const update=()=>setSummary(readSummary());
    update();
    const timer=window.setInterval(update,2000);
    window.addEventListener('focus',update);
    window.addEventListener('storage',update);
    return()=>{window.clearInterval(timer);window.removeEventListener('focus',update);window.removeEventListener('storage',update);};
  },[]);
  const active=[summary.focus?'Fokusläge':null,summary.compact?'Kompaktläge':null].filter(Boolean).join(' · ');
  return <section className="live-focus-secondary" aria-label="Sessionsöversikt" style={{margin:'0 0 18px',padding:'10px 12px',borderLeft:'3px solid #171717',background:'#f4efe6',display:'flex',justifyContent:'space-between',gap:'14px',alignItems:'center',flexWrap:'wrap'}}><div><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Sessionsöversikt</strong><div style={{marginTop:'4px',fontSize:'.75rem',color:'#4f4a43'}}>{active||'Normalt arbetsläge'} · Checklista {summary.checklist}/4 · {summary.notes?'Anteckningar sparade':'Inga anteckningar'}</div></div><span style={{fontSize:'.68rem',fontWeight:800,color:summary.checklist===4?'#2f6b45':'#69645c'}}>{summary.checklist===4?'Arbetsrundan komplett ✓':'Arbetsrundan pågår'}</span></section>;
}
