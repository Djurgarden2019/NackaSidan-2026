'use client';

import { useState } from 'react';

export default function LiveSessionExport114(){
  const [copied,setCopied]=useState(false);
  const exportSession=async()=>{
    let focus=false,compact=false,done:boolean[]=[false,false,false,false],notes='',goal='',deadline='',nextStep='',releaseNotes='',log:any[]=[];
    try{
      focus=localStorage.getItem('nackasidan-live-focus-mode')==='1';
      compact=localStorage.getItem('nackasidan-live-compact-mode')==='1';
      const saved=JSON.parse(localStorage.getItem('nackasidan-live-checklist')||'null');
      if(Array.isArray(saved)&&saved.length===4)done=saved.map(Boolean);
      notes=localStorage.getItem('nackasidan-live-session-notes')||'';
      goal=localStorage.getItem('nackasidan-live-session-goal')||'';
      deadline=localStorage.getItem('nackasidan-live-session-goal-deadline')||'';
      nextStep=localStorage.getItem('nackasidan-live-next-step')||'';
      releaseNotes=localStorage.getItem('nackasidan-live-release-notes')||'';
      const savedLog=JSON.parse(localStorage.getItem('nackasidan-live-session-log')||'[]');
      if(Array.isArray(savedLog))log=savedLog.slice(0,12);
    }catch{}
    const steps=['Redaktionsbordet','Källkontroll','Källjakt','Liveflödet'];
    const logLines=log.map((item:any)=>`• ${item.text||item.label||''}${item.at?` (${new Date(item.at).toLocaleString('sv-SE')})`:''}`).filter((line:string)=>line!=='• ');
    const text=[
      'NackaSidan – arbetsrunda i Nyhetsradarn',
      `Arbetsläge: ${focus?'Fokusläge':'Normalt fokus'}${compact?' + kompakt':''}`,
      `Arbetsmål: ${goal.trim()||'ej angivet'}`,
      `Deadline: ${deadline||'ej angiven'}`,
      `Nästa steg: ${nextStep.trim()||'ej angivet'}`,
      '',
      'Checklista:',
      ...steps.map((step,index)=>`${done[index]?'✓':'○'} ${step}`),
      '',
      `Anteckningar:${notes.trim()?`\n${notes.trim()}`:' inga sparade anteckningar'}`,
      '',
      `Releaseanteckningar:${releaseNotes.trim()?`\n${releaseNotes.trim()}`:' inga releaseanteckningar'}`,
      '',
      'Sessionslogg:',
      ...(logLines.length?logLines:['inga loggposter']),
    ].join('\n');
    try{
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(()=>setCopied(false),1800);
    }catch{
      window.prompt('Kopiera arbetsrundan:',text);
    }
  };
  return <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'-6px 0 18px'}}><button type="button" onClick={exportSession} style={{border:'1px solid #9f1d20',background:'#fff',color:'#9f1d20',padding:'7px 10px',fontSize:'.7rem',fontWeight:800,cursor:'pointer'}}>{copied?'Arbetsrundan kopierad ✓':'Exportera komplett arbetsrunda'}</button></div>;
}
