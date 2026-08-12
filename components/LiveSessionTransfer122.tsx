'use client';

import { useState } from 'react';

const keys = [
  'nackasidan-live-checklist',
  'nackasidan-live-session-notes',
  'nackasidan-live-last-section',
  'nackasidan-live-focus-mode',
  'nackasidan-live-compact-mode',
  'nackasidan-live-session-started-at',
  'nackasidan-live-session-paused-at',
  'nackasidan-live-session-snapshots',
  'nackasidan-live-session-goal',
  'nackasidan-live-session-goal-done',
  'nackasidan-live-session-goal-deadline',
  'nackasidan-live-next-step',
  'nackasidan-live-session-log',
  'nackasidan-live-release-notes',
];

export default function LiveSessionTransfer122() {
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState('');
  const [status, setStatus] = useState('');

  const exportBackup = async () => {
    try {
      const data: Record<string,string> = {};
      keys.forEach((key) => { const value = localStorage.getItem(key); if (value !== null) data[key] = value; });
      const text = JSON.stringify({ version: 1, exportedAt: Date.now(), data }, null, 2);
      setPayload(text);
      await navigator.clipboard?.writeText(text);
      setStatus('Backup kopierad ✓');
      window.setTimeout(() => setStatus(''), 1800);
    } catch { setStatus('Kunde inte skapa backup'); }
  };

  const importBackup = () => {
    try {
      const parsed = JSON.parse(payload);
      if (!parsed || parsed.version !== 1 || typeof parsed.data !== 'object') throw new Error('invalid');
      keys.forEach((key) => {
        const value = parsed.data[key];
        if (typeof value === 'string') localStorage.setItem(key, value);
      });
      setStatus('Backup importerad ✓');
      window.setTimeout(() => window.location.reload(), 700);
    } catch { setStatus('Ogiltig backup'); }
  };

  return <section className="live-focus-secondary" style={{margin:'-8px 0 18px',border:'1px solid #d8d2c6',background:'#faf7f1'}} aria-label="Backup av arbetsrunda"><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} style={{display:'flex',justifyContent:'space-between',width:'100%',border:0,background:'transparent',padding:'9px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}><span>Backup / flytta arbetsrunda</span><span>{open?'−':'+'}</span></button>{open&&<div style={{padding:'0 10px 10px'}}><div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'8px'}}><button type="button" onClick={exportBackup} style={{border:'1px solid #171717',background:'#171717',color:'#fff',padding:'7px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}>Kopiera backup</button><button type="button" onClick={importBackup} disabled={!payload.trim()} style={{border:'1px solid #b6afa3',background:'#fff',padding:'7px 10px',fontSize:'.68rem',fontWeight:800,cursor:payload.trim()?'pointer':'default',opacity:payload.trim()?1:.55}}>Importera backup</button>{status&&<span style={{fontSize:'.68rem',fontWeight:800,alignSelf:'center'}}>{status}</span>}</div><textarea value={payload} onChange={(e)=>setPayload(e.target.value)} rows={5} placeholder="Klistra in en backup här för att flytta arbetsrundan till denna webbläsare…" style={{width:'100%',boxSizing:'border-box',resize:'vertical',border:'1px solid #cfc8bb',padding:'8px',fontFamily:'monospace',fontSize:'.65rem',background:'#fff'}}/></div>}</section>;
}
