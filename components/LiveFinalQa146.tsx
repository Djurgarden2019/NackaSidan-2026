'use client';

import { useEffect, useState } from 'react';

const labels=['Desktop kontrollerad','Mobil kontrollerad','Källor kontrollerade','Navigation testad','Backup/export testad'];

export default function LiveFinalQa146(){
  const [done,setDone]=useState<boolean[]>([false,false,false,false,false]);
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('nackasidan-live-final-qa')||'[]');if(Array.isArray(saved)&&saved.length===5)setDone(saved.map(Boolean));}catch{}},[]);
  const toggle=(index:number)=>{const next=done.map((value,i)=>i===index?!value:value);setDone(next);try{localStorage.setItem('nackasidan-live-final-qa',JSON.stringify(next));}catch{}};
  const count=done.filter(Boolean).length;
  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:count===5?'#edf5ef':'#fff'}} aria-label="Slutlig QA"><div style={{display:'flex',justifyContent:'space-between',gap:'12px',marginBottom:'8px'}}><strong style={{fontSize:'.72rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Slutlig QA</strong><span style={{fontSize:'.68rem',fontWeight:800}}>{count}/5</span></div><div style={{display:'grid',gap:'6px'}}>{labels.map((label,index)=><label key={label} style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'.68rem',cursor:'pointer'}}><input type="checkbox" checked={done[index]} onChange={()=>toggle(index)}/><span>{label}</span></label>)}</div></section>;
}
