'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionGoal125() {
  const [goal, setGoal] = useState('');
  const [done, setDone] = useState(false);

  useEffect(()=>{try{setGoal(localStorage.getItem('nackasidan-live-session-goal')||'');setDone(localStorage.getItem('nackasidan-live-session-goal-done')==='1');}catch{}},[]);
  useEffect(()=>{const timer=window.setTimeout(()=>{try{if(goal.trim())localStorage.setItem('nackasidan-live-session-goal',goal);else localStorage.removeItem('nackasidan-live-session-goal');}catch{}},500);return()=>window.clearTimeout(timer);},[goal]);

  const toggleDone=()=>{const next=!done;setDone(next);try{localStorage.setItem('nackasidan-live-session-goal-done',next?'1':'0');}catch{}};

  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:done?'#edf5ef':'#fff'}} aria-label="Arbetsmål"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',marginBottom:'7px'}}><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Arbetsmål</strong><button type="button" onClick={toggleDone} disabled={!goal.trim()} style={{border:'1px solid #b6afa3',background:'#fff',padding:'6px 8px',fontSize:'.64rem',fontWeight:800,cursor:goal.trim()?'pointer':'default',opacity:goal.trim()?1:.5}}>{done?'Mål klart ✓':'Markera klart'}</button></div><input value={goal} onChange={(e)=>{setGoal(e.target.value);if(done)setDone(false);}} maxLength={120} placeholder="Vad ska vara klart när den här arbetsrundan är färdig?" style={{width:'100%',boxSizing:'border-box',border:'1px solid #cfc8bb',padding:'8px 9px',fontSize:'.72rem',background:'#fff'}}/><div style={{marginTop:'5px',fontSize:'.62rem',color:'#69645c',textAlign:'right'}}>{goal.length}/120</div></section>;
}
