'use client';

import { useState } from 'react';

export default function LiveSessionExport114(){
  const [copied,setCopied]=useState(false);
  const exportSession=async()=>{
    let focus=false,compact=false,done:boolean[]=[false,false,false,false],notes='';
    try{
      focus=localStorage.getItem('nackasidan-live-focus-mode')==='1';
      compact=localStorage.getItem('nackasidan-live-compact-mode')==='1';
      const saved=JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'null');
      if(Array.isArray(saved)&&saved.length===4)done=saved.map(Boolean);
      notes=localStorage.getItem('nackasidan-live-session-notes')||'';
    }catch{}
    const steps=['Redaktionsbordet','Källkontroll','Källjakt','Liveflödet'];
    const text=[
      'NackaSidan – arbetsrunda i Nyhetsradarn',
      `Arbetsläge: ${focus?'Fokusläge':'Normalt fokus'}${compact?' + kompakt':''}`,
      '',
      'Checklista:',
      ...steps.map((step,index)=>`${done[index]?'✓':'○'} ${step}`),
      '',
      `Anteckningar:${notes.trim()?`\n${notes.trim()}`:' inga sparade anteckningar'}`,
    ].join('\n');
    try{
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(()=>setCopied(false),1800);
    }catch{
      window.prompt('Kopiera arbetsrundan:',text);
    }
  };
  return <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'-6px 0 18px'}}><button type="button" onClick={exportSession} style={{border:'1px solid #9f1d20',background:'#fff',color:'#9f1d20',padding:'7px 10px',fontSize:'.7rem',fontWeight:800,cursor:'pointer'}}>{copied?'Arbetsrundan kopierad ✓':'Exportera arbetsrunda'}</button></div>;
}
