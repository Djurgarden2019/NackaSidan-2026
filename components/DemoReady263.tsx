import Link from 'next/link';

const routes=[
 {href:'/sverige',label:'Sverige',text:'Valet 2026, ekonomi, samhälle och regioner'},
 {href:'/daily',label:'Nacka Daily',text:'Dagens viktigaste på fem minuter'},
 {href:'/kultur',label:'Kultur',text:'Böcker, film, musik och kulturdebatt'},
 {href:'/sport',label:'Sport',text:'Resultat, publik och analys'}
];
export default function DemoReady263(){return <section className="section" aria-labelledby="demo-ready"><div style={{borderTop:'4px solid #111',borderBottom:'1px solid #d4d4d4',padding:'24px 0'}}><div className="kicker">Utforska NackaSidan 2026</div><h2 id="demo-ready" style={{marginTop:6}}>Fyra bra ingångar till sajten</h2><p className="lead" style={{maxWidth:760}}>Börja här för en snabb rundtur genom nyhetsbevakning, briefing, kultur och sport.</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:12,marginTop:20}}>{routes.map(route=><Link key={route.href} href={route.href} style={{display:'block',border:'1px solid #d4d4d4',borderRadius:10,padding:16,textDecoration:'none',color:'inherit'}}><strong style={{display:'block',fontSize:20}}>{route.label} →</strong><span style={{display:'block',marginTop:6,fontSize:14,lineHeight:1.5,color:'#525252'}}>{route.text}</span></Link>)}</div></div></section>}
