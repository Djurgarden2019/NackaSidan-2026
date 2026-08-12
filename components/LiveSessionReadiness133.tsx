'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionReadiness133(){
  const [score,setScore]=useState(0);
  const [missing,setMissing]=useState<string[]>([]);
  useEffect(()=>{
    const refresh=()=>{
      try{
        const checks=[
          ['mål',!!localStorage.getItem('nackasidan-live-session-goal')],
          ['deadline',!!localStorage.getItem('nackasidan-live-session-goal-deadline')],
          ['nästa steg',!!localStorage.getItem('nackasidan-live-next-step')],
          ['anteckningar',!!localStorage.getItem('nackasidan-live-session-notes')],
        ] as [string,boolean][];
        setScore(checks.filter(([,ok])=>ok).length);
        setMissing(checks.filter(([,ok])=>!ok).map(([name])=>name));
      }catch{}
    };
    refresh(); const id=window.setInterval(refresh,1200); return()=>window.clearInterval(id);
  },[]);
  return <section className="live-focus-secondary" style={{margin:'-8px 0 18px',padding:'9px 11px',border:'1px solid #d8d2c6',background:score===4?'#edf5ef':'#faf7f1'}} aria-label="Arbetsrundans beredskap"><div style={{display:'flex',justifyContent:'space-between',gap:'10px',alignItems:'center'}}><strong style={{fontSize:'.68rem'}}>Arbetsrundan {score}/4 förberedd</strong><span style={{fontSize:'.64rem',fontWeight:800}}>{score===4?'Redo ✓':`${4-score} kvar`}</span></div>{missing.length>0&&<div style={{marginTop:'4px',fontSize:'.62rem',color:'#69645c'}}>Saknas: {missing.join(', ')}.</div>}</section>;
}
