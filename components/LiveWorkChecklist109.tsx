'use client';

import { useEffect, useState } from 'react';

const steps = ['Redaktionsbordet','Källkontroll','Källjakt','Liveflödet'];

export default function LiveWorkChecklist109() {
  const [done, setDone] = useState<boolean[]>([false,false,false,false]);
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'null');if(Array.isArray(saved)&&saved.length===4)setDone(saved.map(Boolean));}catch{}},[]);
  const setStep=(index:number,value:boolean)=>{const next=done.map((v,i)=>i===index?value:v);setDone(next);try{localStorage.setItem('nackasidan-live-checklist',JSON.stringify(next));}catch{}};
  const count=done.filter(Boolean).length;
  return <section aria-label="Arbetschecklista" style={{margin:'0 0 22px',padding:'12px',border:'1px solid #d8d2c6',background:'#fff'}}><div style={{display:'flex',justifyContent:'space-between',gap:'10px',alignItems:'center',marginBottom:'9px'}}><strong style={{fontSize:'.76rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Arbetschecklista</strong><span style={{fontSize:'.72rem',fontWeight:800,color:count===4?'#2f6b45':'#9f1d20'}}>{count}/4 klara</span></div><div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>{steps.map((step,index)=><label key={step} style={{display:'flex',alignItems:'center',gap:'6px',fontSize:'.74rem',padding:'6px 8px',border:'1px solid #d8d2c6',background:done[index]?'#edf5ef':'#faf7f1',cursor:'pointer'}}><input type="checkbox" checked={done[index]} onChange={(e)=>setStep(index,e.target.checked)} />{step}</label>)}</div>{count>0&&<button type="button" onClick={()=>{setDone([false,false,false,false]);try{localStorage.removeItem('nackasidan-live-checklist');}catch{}}} style={{marginTop:'9px',border:0,background:'transparent',padding:0,fontSize:'.68rem',fontWeight:800,color:'#69645c',textDecoration:'underline',cursor:'pointer'}}>Nollställ checklistan</button>}</section>;
}
