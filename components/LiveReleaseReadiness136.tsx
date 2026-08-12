'use client';

import { useEffect, useState } from 'react';

export default function LiveReleaseReadiness136(){
  const [score,setScore]=useState(0);
  useEffect(()=>{try{
    const qa=JSON.parse(localStorage.getItem('nackasidan-live-final-qa')||'[]');
    const checks=[
      !!localStorage.getItem('nackasidan-live-session-goal'),
      !!localStorage.getItem('nackasidan-live-session-goal-deadline'),
      !!localStorage.getItem('nackasidan-live-next-step'),
      !!localStorage.getItem('nackasidan-live-session-notes'),
      JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'[]').filter(Boolean).length===4,
      !!localStorage.getItem('nackasidan-live-release-notes'),
      Array.isArray(qa)&&qa.length===5&&qa.every(Boolean),
    ];
    setScore(checks.filter(Boolean).length);
  }catch{}},[]);
  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:'#fff'}} aria-label="Release-status"><div style={{display:'flex',justifyContent:'space-between',gap:'12px',alignItems:'center'}}><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Release-status</strong><span style={{fontSize:'.72rem',fontWeight:800,color:score===7?'#356a44':'#9f6b1d'}}>{score}/7 redo</span></div><div style={{height:'5px',background:'#eee8dd',marginTop:'8px'}}><div style={{height:'100%',width:`${(score/7)*100}%`,background:score===7?'#356a44':'#9f1d20'}}/></div></section>;
}
