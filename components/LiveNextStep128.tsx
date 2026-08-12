'use client';

import { useEffect, useState } from 'react';

export default function LiveNextStep128(){
  const [value,setValue]=useState('');
  useEffect(()=>{try{setValue(localStorage.getItem('nackasidan-live-next-step')||'');}catch{}},[]);
  useEffect(()=>{const id=window.setTimeout(()=>{try{if(value.trim())localStorage.setItem('nackasidan-live-next-step',value);else localStorage.removeItem('nackasidan-live-next-step');}catch{}},450);return()=>window.clearTimeout(id);},[value]);
  return <section className="live-focus-secondary" style={{margin:'0 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:'#fff'}} aria-label="Nästa steg"><strong style={{display:'block',fontSize:'.7rem',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'7px'}}>Nästa steg</strong><input value={value} onChange={(e)=>setValue(e.target.value)} maxLength={100} placeholder="Vilket är nästa konkreta steg?" style={{width:'100%',boxSizing:'border-box',border:'1px solid #cfc8bb',padding:'8px 9px',fontSize:'.72rem'}}/><div style={{marginTop:'5px',fontSize:'.62rem',color:'#69645c',textAlign:'right'}}>{value.length}/100</div></section>;
}
