'use client';

import { useEffect, useState } from 'react';

const sections = [
  ['redaktionsbordet', 'Redaktionsbordet'],
  ['kallkontroll', 'Källkontroll'],
  ['kalljakt', 'Källjakt'],
  ['liveflodet', 'Liveflödet'],
] as const;

export default function LiveCopySection107() {
  const [current, setCurrent] = useState<{ id: string; label: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible?.target.id) return;
      const match = sections.find(([id]) => id === visible.target.id);
      if (match) setCurrent({ id: match[0], label: match[1] });
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] });
    sections.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  if (!current) return null;

  const copy = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${current.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.hash = current.id;
    }
  };

  return <div style={{display:'flex',justifyContent:'flex-end',margin:'-8px 0 18px'}}><button type="button" onClick={copy} style={{border:0,background:'transparent',padding:'4px 0',fontSize:'.7rem',fontWeight:800,color:'#9f1d20',cursor:'pointer',textDecoration:'underline'}}>{copied?'Länk kopierad ✓':`Kopiera länk till ${current.label}`}</button></div>;
}
