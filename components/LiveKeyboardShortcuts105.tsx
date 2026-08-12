'use client';

import { useEffect, useState } from 'react';

const targets: Record<string,string> = { '1':'redaktionsbordet', '2':'kallkontroll', '3':'kalljakt', '4':'liveflodet' };

export default function LiveKeyboardShortcuts105() {
  const [showHelp, setShowHelp] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT','TEXTAREA','SELECT'].includes(target.tagName)) return;
      if (event.key === '?') { setShowHelp(v => !v); return; }
      if (event.key.toLowerCase() === 't') { window.scrollTo({top:0,behavior:'smooth'}); return; }
      const id = targets[event.key];
      if (id) document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return <>
    <button type="button" onClick={() => setShowHelp(v => !v)} aria-expanded={showHelp} style={{position:'fixed',left:'18px',bottom:'18px',zIndex:54,border:'1px solid #cfc8bb',background:'#fff',color:'#171717',padding:'8px 10px',fontSize:'.68rem',fontWeight:800,cursor:'pointer'}}>Genvägar ?</button>
    {showHelp && <div role="dialog" aria-label="Tangentbordsgenvägar" style={{position:'fixed',left:'18px',bottom:'58px',zIndex:56,width:'min(320px,calc(100vw - 36px))',background:'#fff',border:'1px solid #171717',boxShadow:'0 8px 28px rgba(0,0,0,.18)',padding:'14px'}}>
      <strong style={{display:'block',marginBottom:'8px'}}>Tangentbordsgenvägar</strong>
      <div style={{display:'grid',gridTemplateColumns:'30px 1fr',gap:'6px 10px',fontSize:'.78rem'}}><kbd>1</kbd><span>Redaktionsbordet</span><kbd>2</kbd><span>Källkontroll</span><kbd>3</kbd><span>Källjakt</span><kbd>4</kbd><span>Liveflödet</span><kbd>T</kbd><span>Till toppen</span><kbd>?</kbd><span>Visa/dölj denna ruta</span></div>
    </div>}
  </>;
}
