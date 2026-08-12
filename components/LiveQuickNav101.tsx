'use client';

const links = [
  ['redaktionsbordet', 'Redaktionsbordet'],
  ['kallkontroll', 'Källkontroll'],
  ['kalljakt', 'Källjakt'],
  ['liveflodet', 'Liveflödet'],
] as const;

export default function LiveQuickNav101() {
  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav aria-label="Snabbnavigering i Nyhetsradarn" style={{display:'flex',gap:'8px',flexWrap:'wrap',margin:'18px 0 28px',padding:'10px 0',borderTop:'1px solid #d8d2c6',borderBottom:'1px solid #d8d2c6'}}>
      <span style={{fontSize:'.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',padding:'8px 2px',color:'#69645c'}}>Hoppa till:</span>
      {links.map(([id,label]) => (
        <button key={id} type="button" onClick={() => jumpTo(id)} style={{border:'1px solid #cfc8bb',background:'#fff',color:'#171717',padding:'8px 10px',fontSize:'.72rem',fontWeight:800,cursor:'pointer'}}>{label}</button>
      ))}
    </nav>
  );
}
