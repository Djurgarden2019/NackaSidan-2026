'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionCloseout135(){
  const [open,setOpen]=useState(false); const [state,setState]=useState([false,false,false]);
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('nackasidan-live-closeout')||'[]');if(Array.isArray(saved)&&saved.length===3)setState(saved.map(Boolean));}catch{}},[]);
  const toggle=(i:number)=>{const next=state.map((v,index)=>index===i?!v:v);setState(next);try{localStorage.setItem('nackasidan-live-closeout',JSON.stringify(next));}catch{}};
  const labels=['Nästa steg är tydligt','Viktiga beslut är loggade','Arbetsrundan är exporterad/backupad'];
  const complete=state.every(Boolean);
  return <section className="live-focus-secondary" style={{margin:'-8px 0 18px',border:'1px solid #d8d2c6',background:complete?'#edf5ef':'#faf7f1'}} aria-label="Avsluta arbetsrundan"><button type="button" onClick={()=>setOpen(v=>!v)} style={{display:'flex',justifyContent:'space-between',width:'100%',border:0,background:'transparent',padding:'9px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}><span>Avsluta arbetsrundan {complete?'✓':''}</span><span>{open?'−':'+'}</span></button>{open&&<div style={{padding:'0 10px 10px'}}>{labels.map((label,i)=><label key={label} style={{display:'flex',gap:'8px',alignItems:'center',padding:'5px 0',fontSize:'.68rem'}}><input type="checkbox" checked={state[i]} onChange={()=>toggle(i)}/><span>{label}</span></label>)}</div>}</section>;
}
