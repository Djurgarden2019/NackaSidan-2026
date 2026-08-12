'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionHealth137(){
  const [status,setStatus]=useState('Stabil');
  const [issues,setIssues]=useState<string[]>([]);
  useEffect(()=>{try{
    const problems:string[]=[];
    const deadline=localStorage.getItem('nackasidan-live-session-goal-deadline')||'';
    if(deadline&&new Date(deadline).getTime()<Date.now())problems.push('Deadline passerad');
    if(!localStorage.getItem('nackasidan-live-next-step'))problems.push('Nästa steg saknas');
    if(!localStorage.getItem('nackasidan-live-session-notes'))problems.push('Anteckningar saknas');
    setIssues(problems);
    setStatus(problems.length===0?'Stabil':problems.length===1?'Behöver uppmärksamhet':'Risk finns');
  }catch{}},[]);
  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:'#faf7f1'}} aria-label="Sessionshälsa"><div style={{display:'flex',justifyContent:'space-between',gap:'12px'}}><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Sessionshälsa</strong><span style={{fontSize:'.7rem',fontWeight:800,color:issues.length?'#9f1d20':'#356a44'}}>{status}</span></div>{issues.length>0&&<div style={{marginTop:'7px',fontSize:'.67rem',color:'#69645c'}}>{issues.join(' · ')}</div>}</section>;
}
