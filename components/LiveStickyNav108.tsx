'use client';

import { useEffect, useState } from 'react';

const links = [
  ['redaktionsbordet', 'Redaktion'],
  ['kallkontroll', 'Källkontroll'],
  ['kalljakt', 'Källjakt'],
  ['liveflodet', 'Liveflödet'],
] as const;

export default function LiveStickyNav108() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return <nav aria-label="Snabbnavigering i Nyhetsradarn" style={{position:'fixed',top:'10px',left:'50%',transform:'translateX(-50%)',zIndex:80,display:'flex',gap:'5px',padding:'6px',background:'rgba(23,23,23,.94)',boxShadow:'0 4px 18px rgba(0,0,0,.18)',maxWidth:'calc(100vw - 24px)',overflowX:'auto'}}>{links.map(([id,label])=><button key={id} type="button" onClick={()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})} style={{border:'1px solid #fff',background:'transparent',color:'#fff',padding:'6px 8px',fontSize:'.66rem',fontWeight:800,whiteSpace:'nowrap',cursor:'pointer'}}>{label}</button>)}</nav>;
}
