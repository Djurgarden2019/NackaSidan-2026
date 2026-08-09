type HuntMatch = { title: string; link: string; source: string; published: string; score: number };
type HuntResult = { query: string; matches: HuntMatch[]; independentSources: string[]; status: string };
type HuntRow = { item: { title: string; source: string; category?: string; published?: string }; result: HuntResult };

async function getHunt() {
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const res = await fetch(`${base}/api/source-hunt`, { next: { revalidate: 900 } });
  if (!res.ok) return { generatedAt: '', checked: 0, secondSourceFound: 0, results: [] as HuntRow[] };
  return res.json();
}

export default async function KalljagarenPage() {
  const data = await getHunt();
  const possible = data.results.filter((x: HuntRow) => x.result.matches.length > 0).length;
  const ready = data.results.filter((x: HuntRow) => x.result.independentSources.length > 0).length;

  return <main style={{maxWidth:1120,margin:'0 auto',padding:'72px 28px 100px'}}>
    <p style={{color:'#a61919',fontWeight:800,letterSpacing:2,fontSize:13}}>MAIN 21 · KÄLLJÄGAREN</p>
    <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(54px,8vw,96px)',lineHeight:.95,margin:'12px 0 22px'}}>Aktiv jakt på andra källan</h1>
    <p style={{maxWidth:780,fontFamily:'Georgia,serif',fontSize:20,lineHeight:1.45}}>Källjägaren söker efter samma händelse hos andra källfamiljer. Rubriker behöver inte vara identiska: systemet jämför händelseord, källfamilj och matchningsgrad innan en kandidat går vidare till slutkontroll.</p>

    <section style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',borderTop:'1px solid #bbb',borderBottom:'3px solid #111',marginTop:42}}>
      {[['UNDERSÖKTA',data.checked],['MÖJLIGA MATCHNINGAR',possible],['OBEROENDE STÖD',ready]].map(([label,value])=><div key={String(label)} style={{padding:'25px 18px',borderRight:'1px solid #ddd'}}><strong style={{fontFamily:'Georgia,serif',fontSize:42}}>{value}</strong><div style={{fontSize:12,fontWeight:800,letterSpacing:1.4}}>{label}</div></div>)}
    </section>

    <div style={{marginTop:18,padding:'14px 18px',background:'#f1eadf',borderLeft:'3px solid #a61919',fontSize:13}}><strong>Kontrollprincip:</strong> en träff är inte samma sak som verifiering. Endast en annan källfamilj kan ge oberoende stöd, och publicering kräver fortfarande redaktionellt beslut.</div>

    <section style={{marginTop:42}}>
      {data.results.map((row:HuntRow,i:number)=>{
        const best=row.result.matches[0]; const supported=row.result.independentSources.length>0;
        return <article key={`${row.item.title}-${i}`} style={{display:'grid',gridTemplateColumns:'60px 1fr 220px',gap:20,padding:'28px 0',borderTop:'1px solid #ccc'}}>
          <div style={{fontFamily:'Georgia,serif',fontSize:24,color:'#a61919'}}>{String(i+1).padStart(2,'0')}</div>
          <div>
            <div style={{fontSize:12,fontWeight:800,letterSpacing:1.2,color:'#777'}}>{row.item.category || 'NYHET'} · {row.item.source}</div>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:27,margin:'7px 0 10px'}}>{row.item.title}</h2>
            <div style={{fontSize:13,color:'#555'}}>Sökning: {row.result.query || '—'}</div>
            {best && <div style={{marginTop:15,padding:'14px 16px',background:'#f6f2e9'}}><strong>Möjlig bekräftelse: {best.source}</strong><br/><span>Händelsematchning: {best.score}% · {best.title}</span><br/><a href={best.link} target="_blank" rel="noreferrer" style={{fontWeight:800,color:'#111'}}>ÖPPNA KÄLLA ↗</a></div>}
          </div>
          <div>
            <div style={{fontFamily:'Georgia,serif',fontSize:34,fontWeight:700}}>{best ? `${best.score}%` : '—'}</div>
            <div style={{display:'inline-block',marginTop:7,padding:'7px 10px',border:`1px solid ${supported?'#27834a':'#a47b24'}`,color:supported?'#27834a':'#8b671b',fontWeight:800,fontSize:12}}>{supported?'REDO FÖR SLUTKONTROLL':'SÖKER ANDRA KÄLLAN'}</div>
            <div style={{fontSize:12,marginTop:9,color:'#666'}}>{row.result.independentSources.length} oberoende källfamilj{row.result.independentSources.length===1?'':'er'}</div>
          </div>
        </article>
      })}
    </section>

    <footer style={{borderTop:'3px solid #111',paddingTop:18,marginTop:30,fontSize:12}}>SIGNAL → KÄLLJÄGAREN → HÄNDELSEMATCHNING → OBEROENDE KÄLLA → SLUTKONTROLL</footer>
  </main>;
}
