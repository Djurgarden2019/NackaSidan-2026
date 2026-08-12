'use client';

import { useEffect, useState } from 'react';

export default function LiveCompactMode112() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    try { setCompact(localStorage.getItem('nackasidan-live-compact-mode') === '1'); } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.liveCompact = compact ? '1' : '0';
    try { localStorage.setItem('nackasidan-live-compact-mode', compact ? '1' : '0'); } catch {}
    return () => { delete document.documentElement.dataset.liveCompact; };
  }, [compact]);

  return (
    <>
      <style>{`html[data-live-compact="1"] .live-focus-main > div{margin-bottom:12px!important} html[data-live-compact="1"] .live-focus-main section{margin-top:10px!important;margin-bottom:10px!important} html[data-live-compact="1"] .live-focus-main article{padding-top:10px!important;padding-bottom:10px!important}`}</style>
      <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'0 0 14px'}}>
        <button type="button" onClick={() => setCompact((value) => !value)} aria-pressed={compact} style={{border:'1px solid #8d877d',background:compact?'#f1ece3':'#fff',color:'#171717',padding:'7px 10px',fontSize:'.7rem',fontWeight:800,cursor:'pointer'}}>
          {compact ? 'Normalt avstånd' : 'Kompakt läge'}
        </button>
      </div>
    </>
  );
}
