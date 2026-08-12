'use client';

import { useEffect, useState } from 'react';

export default function LivePublishGate138(){
  const [ready,setReady]=useState(false);
  const [missing,setMissing]=useState<string[]>([]);
  useEffect(()=>{try{
    const qa=JSON.parse(localStorage.getItem('nackasidan-live-final-qa')||'[]');
    const checks:[string,boolean][]=[
      ['mål',!!localStorage.getItem('nackasidan-live-session-goal')],
      ['deadline',!!localStorage.getItem('nackasidan-live-session-goal-deadline')],
      ['nästa steg',!!localStorage.getItem('nackasidan-live-next-step')],
      ['anteckningar',!!localStorage.getItem('nackasidan-live-session-notes')],
      ['checklista',JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'[]').filter(Boolean).length===4],
      ['releaseanteckningar',!!localStorage.getItem('nackasidan-live-release-notes')],
      ['slutlig QA',Array.isArray(qa)&&qa.length===5&&qa.every(Boolean)],
    ];
    const absent=checks.filter(([,ok])=>!ok).map(([name])=>name);
    setMissing(absent);setReady(absent.length===0);
  }catch{}},[]);
  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:`1px solid ${ready?'#8bb197':'#d8d2c6'}`,background:ready?'#edf5ef':'#fff'}} aria-label="Publiceringsgrind"><div style={{display:'flex',justifyContent:'space-between',gap:'12px',alignItems:'center'}}><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Publiceringsgrind</strong><span style={{fontSize:'.7rem',fontWeight:800,color:ready?'#356a44':'#9f6b1d'}}>{ready?'Redo för release ✓':'Inte redo'}</span></div>{!ready&&<div style={{marginTop:'7px',fontSize:'.67rem',color:'#69645c'}}>Saknas: {missing.join(', ')}</div>}</section>;
}
