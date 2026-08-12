'use client';

import { useEffect, useState } from 'react';

export default function LiveScrollProgress103() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div aria-hidden="true" style={{position:'fixed',top:0,left:0,right:0,height:'3px',zIndex:60,pointerEvents:'none'}}><div style={{height:'100%',width:`${progress}%`,background:'#9f1d20',transition:'width 80ms linear'}} /></div>;
}
