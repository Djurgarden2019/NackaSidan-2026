'use client';

import { useEffect, useState } from 'react';

export default function LiveBackToTop104() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 900);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  if (!visible) return null;
  return <button type="button" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Till toppen" style={{position:'fixed',right:'18px',bottom:'18px',zIndex:55,border:'1px solid #171717',background:'#171717',color:'#fff',padding:'10px 12px',fontSize:'.72rem',fontWeight:800,cursor:'pointer',boxShadow:'0 4px 16px rgba(0,0,0,.18)'}}>Till toppen ↑</button>;
}
