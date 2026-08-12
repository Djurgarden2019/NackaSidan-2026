'use client';

import { useEffect, useState } from 'react';

export default function LiveSessionTimer116() {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let start = Date.now();
    try {
      const saved = Number(localStorage.getItem('nackasidan-live-session-started-at'));
      if (Number.isFinite(saved) && saved > 0) start = saved;
      else localStorage.setItem('nackasidan-live-session-started-at', String(start));
    } catch {}
    setStartedAt(start);
    const timer = window.setInterval(() => setNow(Date.now()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  if (!startedAt) return null;
  const minutes = Math.max(0, Math.floor((now - startedAt) / 60000));
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const duration = hours ? `${hours} h ${rest} min` : `${minutes} min`;

  return <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'-10px 0 14px'}}><span style={{fontSize:'.68rem',fontWeight:800,color:'#69645c'}}>Arbetsrunda · {duration}</span></div>;
}
