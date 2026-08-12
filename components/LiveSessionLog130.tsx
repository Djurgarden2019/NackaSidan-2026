'use client';

import { useEffect, useState } from 'react';

type Entry={id:string;time:number;text:string};

export default function LiveSessionLog130(){
  const [open,setOpen]=useState(false);const [text,setText]=useState('');const [entries,setEntries]=useState<Entry[]>([]);
  useEffect(()=>{try{const parsed=JSON.parse(localStorage.getItem('nackasidan-live-session-log')||'[]');if(Array.isArray(parsed))setEntries(parsed.slice(0,12));}catch{}},[]);
  const persist=(next:Entry[])=>{setEntries(next);try{localStorage.setItem('nackasidan-live-session-log',JSON.stringify(next));}catch{}};
  const add=()=>{const value=text.trim();if(!value)return;persist([{id:String(Date.now()),time:Date.now(),text:value},...entries].slice(0,12));setText('');};
  return <section className="live-focus-secondary" aria-label="Sessionslogg" style={{margin:'0 0 18px',border:'1px solid #d8d2c6',background:'#faf7f1'}}><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} style={{display:'flex',justifyContent:'space-between',width:'100%',border:0,background:'transparent',padding:'9px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}><span>Sessionslogg ({entries.length})</span><span>{open?'−':'+'}</span></button>{open&&<div style={{padding:'0 10px 10px'}}><div style={{display:'flex',gap:'7px',marginBottom:'8px'}}><input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter')add();}} maxLength={120} placeholder="Logga en milstolpe eller ett beslut…" style={{flex:1,border:'1px solid #cfc8bb',padding:'7px 8px',fontSize:'.68rem'}}/><button type="button" onClick={add} disabled={!text.trim()} style={{border:'1px solid #171717',background:'#171717',color:'#fff',padding:'7px 9px',fontSize:'.66rem',fontWeight:800,opacity:text.trim()?1:.5}}>Lägg till</button></div><div style={{display:'grid',gap:'5px'}}>{entries.map(entry=><div key={entry.id} style={{display:'flex',justifyContent:'space-between',gap:'10px',fontSize:'.66rem',padding:'6px 7px',background:'#fff'}}><span>{entry.text}</span><time style={{whiteSpace:'nowrap',color:'#69645c'}}>{new Date(entry.time).toLocaleTimeString('sv-SE',{hour:'2-digit',minute:'2-digit'})}</time></div>)}</div></div>}</section>;
}
