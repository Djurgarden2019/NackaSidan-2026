'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionNotes110() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(()=>{try{setNotes(localStorage.getItem('nackasidan-live-session-notes')||'');}catch{}},[]);

  const save=()=>{try{localStorage.setItem('nackasidan-live-session-notes',notes);setSaved(true);window.setTimeout(()=>setSaved(false),1600);}catch{}};
  const clear=()=>{setNotes('');try{localStorage.removeItem('nackasidan-live-session-notes');}catch{}};

  return <section style={{margin:'0 0 24px',border:'1px solid #d8d2c6',background:'#faf7f1'}} aria-label="Sessionsanteckningar"><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} style={{display:'flex',justifyContent:'space-between',width:'100%',border:0,background:'transparent',padding:'10px 12px',fontSize:'.74rem',fontWeight:800,cursor:'pointer',textAlign:'left'}}><span>Sessionsanteckningar {notes?'· sparade':''}</span><span>{open?'−':'+'}</span></button>{open&&<div style={{padding:'0 12px 12px'}}><textarea value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Skriv korta arbetsanteckningar, uppföljningar eller sådant som ska kontrolleras senare…" rows={4} style={{width:'100%',boxSizing:'border-box',resize:'vertical',border:'1px solid #cfc8bb',padding:'9px',font:'inherit',lineHeight:1.45,background:'#fff'}}/><div style={{display:'flex',gap:'10px',alignItems:'center',marginTop:'8px'}}><button type="button" onClick={save} style={{border:'1px solid #171717',background:'#171717',color:'#fff',padding:'7px 10px',fontSize:'.7rem',fontWeight:800,cursor:'pointer'}}>{saved?'Sparat ✓':'Spara anteckningar'}</button>{notes&&<button type="button" onClick={clear} style={{border:0,background:'transparent',padding:0,fontSize:'.68rem',fontWeight:800,color:'#69645c',textDecoration:'underline',cursor:'pointer'}}>Rensa</button>}<span style={{marginLeft:'auto',fontSize:'.65rem',color:'#69645c'}}>Sparas bara i denna webbläsare</span></div></div>}</section>;
}
