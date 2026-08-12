'use client';

import { useEffect, useState } from 'react';

export default function LiveFocusMode111() {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    try { setFocus(localStorage.getItem('nackasidan-live-focus-mode') === '1'); } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.liveFocus = focus ? '1' : '0';
    try { localStorage.setItem('nackasidan-live-focus-mode', focus ? '1' : '0'); } catch {}
    return () => { delete document.documentElement.dataset.liveFocus; };
  }, [focus]);

  return (
    <>
      <style>{`html[data-live-focus="1"] .live-focus-secondary{display:none!important} html[data-live-focus="1"] .live-focus-main{max-width:1180px;margin-left:auto;margin-right:auto}`}</style>
      <div className="live-focus-secondary" style={{display:'flex',justifyContent:'flex-end',margin:'8px 0 16px'}}>
        <button type="button" onClick={() => setFocus((value) => !value)} aria-pressed={focus} style={{border:'1px solid #171717',background:focus?'#171717':'#fff',color:focus?'#fff':'#171717',padding:'8px 11px',fontSize:'.72rem',fontWeight:800,cursor:'pointer'}}>
          {focus ? 'Avsluta fokusläge' : 'Fokusläge'}
        </button>
      </div>
      {focus && <div style={{position:'fixed',right:'18px',bottom:'72px',zIndex:45}}><button type="button" onClick={() => setFocus(false)} style={{border:'1px solid #171717',background:'#fff',padding:'8px 10px',fontSize:'.7rem',fontWeight:800,cursor:'pointer',boxShadow:'0 4px 16px rgba(0,0,0,.12)'}}>Visa verktygen igen</button></div>}
    </>
  );
}
