'use client';

import { useEffect, useRef, useState } from 'react';

export default function LiveSessionNotes110() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);
  const hydrated = useRef(false);

  useEffect(()=>{try{setNotes(localStorage.getItem('nackasidan-live-session-notes')||'');}catch{} hydrated.current=true;},[]);

  useEffect(()=>{
    if(!hydrated.current) return;
    const timer=window.setTimeout(()=>{try{localStorage.setItem('nackasidan-live-session-notes',notes);setSaved(true);window.setTimeout(()=>setSaved(false),1200);}catch{}},650);
    return()=>window.clearTimeout(timer);
  },[notes]);

  const clear=()=>{setNotes('');try{localStorage.removeItem('nackasidan-live-session-notes');}catch{}};

  return <section style={{margin:'0 0 24px',border:'1px solid #d8d2c6',background:'#faf7f1'}} aria-label="Sessionsanteckningar"><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} style={{display:'flex',justifyContent:'space-between',width:'100%',border:0,background:'transparent',padding:'10px 12px',fontSize:'.74rem',fontWeight:800,cursor:'pointer',textAlign:'left'}}><span>Sessionsanteckningar {notes?'· sparade':''}</span><span>{open?'−':'+'}</span></button>{open&&<div style={{padding:'0 12px 12px'}}><textarea value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Skriv korta arbetsanteckningar, uppföljningar eller sådant som ska kontrolleras senare…" rows={4} style={{width:'100%',boxSizing:'border-box',resize:'vertical',border:'1px solid #cfc8bb',padding:'9px',font:'inherit',lineHeight:1.45,background:'#fff'}}/><div style={{display:'flex',gap:'10px',alignItems:'center',marginTop:'8px'}}><span style={{fontSize:'.68rem',fontWeight:800,color:saved?'#2f6b45':'#69645c'}}>{saved?'Autosparat ✓':'Autosparas efter 0,65 s'}</span>{notes&&<button type="button" onClick={clear} style={{border:0,background:'transparent',padding:0,fontSize:'.68rem',fontWeight:800,color:'#69645c',textDecoration:'underline',cursor:'pointer'}}>Rensa</button>}<span style={{marginLeft:'auto',fontSize:'.65rem',color:'#69645c'}}>Sparas bara i denna webbläsare</span></div></div>}</section>;
}
