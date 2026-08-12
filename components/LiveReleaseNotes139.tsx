'use client';

import { useEffect, useState } from 'react';

export default function LiveReleaseNotes139(){
  const [open,setOpen]=useState(false);
  const [notes,setNotes]=useState('');
  const [saved,setSaved]=useState(false);
  useEffect(()=>{try{setNotes(localStorage.getItem('nackasidan-live-release-notes')||'');}catch{}},[]);
  useEffect(()=>{const timer=window.setTimeout(()=>{try{if(notes.trim())localStorage.setItem('nackasidan-live-release-notes',notes);else localStorage.removeItem('nackasidan-live-release-notes');setSaved(true);window.setTimeout(()=>setSaved(false),900);}catch{}},600);return()=>window.clearTimeout(timer);},[notes]);
  return <section className="live-focus-secondary" style={{margin:'0 0 18px',border:'1px solid #d8d2c6',background:'#faf7f1'}} aria-label="Releaseanteckningar"><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} style={{display:'flex',justifyContent:'space-between',width:'100%',border:0,background:'transparent',padding:'9px 10px',fontSize:'.7rem',fontWeight:800,cursor:'pointer'}}><span>Releaseanteckningar {notes?'· finns':''}</span><span>{open?'−':'+'}</span></button>{open&&<div style={{padding:'0 10px 10px'}}><textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={4} placeholder="Vad ändrades, vad ska dubbelkollas och vad ska kommuniceras i releasen?" style={{width:'100%',boxSizing:'border-box',resize:'vertical',border:'1px solid #cfc8bb',padding:'8px',font:'inherit',fontSize:'.7rem',background:'#fff'}}/><div style={{marginTop:'5px',fontSize:'.62rem',color:'#69645c',textAlign:'right'}}>{saved?'Autosparat ✓':'Autosparas lokalt'}</div></div>}</section>;
}
