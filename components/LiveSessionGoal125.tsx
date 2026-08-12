'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionGoal125() {
  const [goal, setGoal] = useState('');
  const [done, setDone] = useState(false);
  const [deadline, setDeadline] = useState('');

  useEffect(()=>{try{setGoal(localStorage.getItem('nackasidan-live-session-goal')||'');setDone(localStorage.getItem('nackasidan-live-session-goal-done')==='1');setDeadline(localStorage.getItem('nackasidan-live-session-goal-deadline')||'');}catch{}},[]);
  useEffect(()=>{const timer=window.setTimeout(()=>{try{if(goal.trim())localStorage.setItem('nackasidan-live-session-goal',goal);else localStorage.removeItem('nackasidan-live-session-goal');}catch{}},500);return()=>window.clearTimeout(timer);},[goal]);
  useEffect(()=>{try{if(deadline)localStorage.setItem('nackasidan-live-session-goal-deadline',deadline);else localStorage.removeItem('nackasidan-live-session-goal-deadline');}catch{}},[deadline]);

  const toggleDone=()=>{const next=!done;setDone(next);try{localStorage.setItem('nackasidan-live-session-goal-done',next?'1':'0');}catch{}};
  const deadlineText = deadline ? new Date(deadline).toLocaleString('sv-SE',{dateStyle:'short',timeStyle:'short'}) : '';
  const overdue = Boolean(deadline && !done && new Date(deadline).getTime() < Date.now());

  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:done?'#edf5ef':overdue?'#fff1f0':'#fff'}} aria-label="Arbetsmål"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',marginBottom:'7px'}}><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Arbetsmål</strong><button type="button" onClick={toggleDone} disabled={!goal.trim()} style={{border:'1px solid #b6afa3',background:'#fff',padding:'6px 8px',fontSize:'.64rem',fontWeight:800,cursor:goal.trim()?'pointer':'default',opacity:goal.trim()?1:.5}}>{done?'Mål klart ✓':'Markera klart'}</button></div><input value={goal} onChange={(e)=>{setGoal(e.target.value);if(done)setDone(false);}} maxLength={120} placeholder="Vad ska vara klart när den här arbetsrundan är färdig?" style={{width:'100%',boxSizing:'border-box',border:'1px solid #cfc8bb',padding:'8px 9px',fontSize:'.72rem',background:'#fff'}}/><div style={{display:'flex',justifyContent:'space-between',gap:'10px',alignItems:'center',marginTop:'7px',flexWrap:'wrap'}}><label style={{fontSize:'.64rem',fontWeight:800,color:'#69645c'}}>Deadline <input type="datetime-local" value={deadline} onChange={(e)=>setDeadline(e.target.value)} style={{marginLeft:'6px',border:'1px solid #cfc8bb',padding:'5px 6px',fontSize:'.64rem',background:'#fff'}}/></label><span style={{fontSize:'.62rem',color:overdue?'#9f1d20':'#69645c',fontWeight:overdue?800:400}}>{deadlineText ? `${overdue?'Försenat · ':''}${deadlineText}` : `${goal.length}/120`}</span></div></section>;
}
