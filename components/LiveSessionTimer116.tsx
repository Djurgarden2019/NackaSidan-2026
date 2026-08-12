'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionTimer116() {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [pausedAt, setPausedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let start = Date.now();
    let paused: number | null = null;
    try {
      const saved = Number(localStorage.getItem('nackasidan-live-session-started-at'));
      if (Number.isFinite(saved) && saved > 0) start = saved;
      else localStorage.setItem('nackasidan-live-session-started-at', String(start));
      const savedPaused = Number(localStorage.getItem('nackasidan-live-session-paused-at'));
      if (Number.isFinite(savedPaused) && savedPaused > 0) paused = savedPaused;
    } catch {}
    setStartedAt(start);
    setPausedAt(paused);
    const timer = window.setInterval(() => setNow(Date.now()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  const togglePause = () => {
    if (!startedAt) return;
    if (pausedAt) {
      const resumedAt = Date.now();
      const shiftedStart = startedAt + (resumedAt - pausedAt);
      setStartedAt(shiftedStart);
      setPausedAt(null);
      setNow(resumedAt);
      try {
        localStorage.setItem('nackasidan-live-session-started-at', String(shiftedStart));
        localStorage.removeItem('nackasidan-live-session-paused-at');
      } catch {}
    } else {
      const pause = Date.now();
      setPausedAt(pause);
      setNow(pause);
      try { localStorage.setItem('nackasidan-live-session-paused-at', String(pause)); } catch {}
    }
  };

  if (!startedAt) return null;
  const end = pausedAt || now;
  const minutes = Math.max(0, Math.floor((end - startedAt) / 60000));
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const duration = hours ? `${hours} h ${rest} min` : `${minutes} min`;

  return <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',alignItems:'center',gap:'8px',margin:'-10px 0 14px'}}><span style={{fontSize:'.68rem',fontWeight:800,color:pausedAt?'#9f1d20':'#69645c'}}>Arbetsrunda · {duration}{pausedAt?' · pausad':''}</span><button type="button" onClick={togglePause} style={{border:'1px solid #b6afa3',background:'#fff',padding:'5px 8px',fontSize:'.64rem',fontWeight:800,cursor:'pointer'}}>{pausedAt?'Fortsätt':'Pausa'}</button></div>;
}
