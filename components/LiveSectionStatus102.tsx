'use client';

import { useEffect, useState } from 'react';

const sections = [
  ['redaktionsbordet', 'Redaktionsbordet'],
  ['kallkontroll', 'Källkontroll'],
  ['kalljakt', 'Källjakt'],
  ['liveflodet', 'Liveflödet'],
] as const;

export default function LiveSectionStatus102() {
  const [active, setActive] = useState('Översikt');
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit' }).format(new Date()));
    tick();
    const timer = window.setInterval(tick, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (!visible) return;
      const label = sections.find(([id]) => id === visible.target.id)?.[1];
      if (label) setActive(label);
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .15, .4] });
    sections.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div aria-live="polite" style={{display:'flex',justifyContent:'space-between',gap:'12px',flexWrap:'wrap',margin:'-16px 0 24px',fontSize:'.72rem',fontWeight:800,color:'#69645c'}}>
      <span>Du är i: <strong style={{color:'#171717'}}>{active}</strong></span>
      <span>Stockholm {time}</span>
    </div>
  );
}
