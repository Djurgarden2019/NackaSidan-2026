'use client';

import { useEffect, useState } from 'react';

const sections = [
  ['redaktionsbordet', 'Redaktionsbordet'],
  ['kallkontroll', 'Källkontroll'],
  ['kalljakt', 'Källjakt'],
  ['liveflodet', 'Liveflödet'],
] as const;

export default function LiveResume106() {
  const [saved, setSaved] = useState<{ id: string; label: string } | null>(null);

  useEffect(() => {
    try {
      const id = localStorage.getItem('nackasidan-live-last-section');
      const match = sections.find(([sectionId]) => sectionId === id);
      if (match) setSaved({ id: match[0], label: match[1] });
    } catch {}

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible?.target.id) return;
      const match = sections.find(([sectionId]) => sectionId === visible.target.id);
      if (!match) return;
      try { localStorage.setItem('nackasidan-live-last-section', match[0]); } catch {}
      setSaved({ id: match[0], label: match[1] });
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] });

    sections.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  if (!saved) return null;
  return <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'12px',flexWrap:'wrap',margin:'10px 0 18px',padding:'10px 12px',border:'1px solid #d8d2c6',background:'#faf7f1'}}><span style={{fontSize:'.78rem',color:'#4f4a43'}}>Senast arbetade du i <strong>{saved.label}</strong>.</span><button type="button" onClick={() => document.getElementById(saved.id)?.scrollIntoView({behavior:'smooth',block:'start'})} style={{border:'1px solid #171717',background:'#171717',color:'#fff',padding:'7px 10px',fontSize:'.72rem',fontWeight:800,cursor:'pointer'}}>Fortsätt där jag var →</button></div>;
}
