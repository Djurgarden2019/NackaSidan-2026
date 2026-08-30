import Link from 'next/link';
import AnalysisFront from './AnalysisFront';

const routes=[
 {href:'/sverige',label:'Sverige',eyebrow:'Nationellt',text:'Valet 2026, ekonomi, samhälle och regioner'},
 {href:'/kultur',label:'Kultur',eyebrow:'Idéer & verk',text:'Böcker, film, musik och kulturdebatt'},
 {href:'/sport',label:'Sport',eyebrow:'Resultat & analys',text:'Resultat, publik och analys'}
];

export default function DemoReady263(){return <><AnalysisFront/><section className="section" aria-labelledby="explore-nackasidan"><div style={{borderTop:'4px solid #111',borderBottom:'1px solid #d4d4d4',padding:'28px 0'}}><div className="kicker">Utforska NackaSidan 2026</div><div style={{display:'flex',flexWrap:'wrap',alignItems:'end',justifyContent:'space-between',gap:16}}><div><h2 id="explore-nackasidan" style={{marginTop:6}}>Välj din väg in</h2><p className="lead" style={{maxWidth:760}}>Fyra redaktionella ingångar till det viktigaste vi bevakar och förklarar.</p></div><Link href="/sverige" className="text-link">Börja med Sverige →</Link></div><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:12,marginTop:22}}>{routes.map(route=><Link key={route.href} href={route.href} style={{display:'block',border:'1px solid #d4d4d4',borderRadius:10,padding:18,textDecoration:'none',color:'inherit',background:'#fff'}}><span style={{display:'block',fontSize:11,fontWeight:800,textTransform:'uppercase',letterSpacing:'.12em',color:'#737373'}}>{route.eyebrow}</span><strong style={{display:'block',fontSize:21,marginTop:5}}>{route.label} →</strong><span style={{display:'block',marginTop:7,fontSize:14,lineHeight:1.55,color:'#525252'}}>{route.text}</span></Link>)}</div></div></section></>}
