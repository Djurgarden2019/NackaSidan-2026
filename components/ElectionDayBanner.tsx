const swedishDate=()=>new Intl.DateTimeFormat('sv-SE',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date());

export default function ElectionDayBanner(){
 const date=swedishDate();
 if(date!=='2026-09-13')return null;
 return <aside aria-label="Valet 2026" style={{background:'#a61919',color:'#fff',borderBottom:'3px solid #111'}}>
  <div className="shell" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:18,paddingTop:13,paddingBottom:13,flexWrap:'wrap'}}>
   <div><strong style={{fontSize:18}}>Valdagen 2026</strong><span style={{marginLeft:12}}>Vallokalerna stänger klockan 20. Följ den preliminära rösträkningen här.</span></div>
   <div style={{display:'flex',gap:18,flexWrap:'wrap'}}><a href="https://resultat.val.se/val2026" target="_blank" rel="noopener noreferrer" style={{color:'#fff',fontWeight:800,textDecoration:'underline'}}>Officiellt resultat ↗</a><a href="https://www.svt.se/nyheter/inrikes/senaste-nytt-om-val-2026" target="_blank" rel="noopener noreferrer" style={{color:'#fff',fontWeight:800,textDecoration:'underline'}}>SVT:s valbevakning ↗</a><a href="/val-2026" style={{color:'#fff',fontWeight:800,textDecoration:'underline'}}>Valet i Nacka →</a></div>
  </div>
 </aside>
}