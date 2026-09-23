import type {DailyDeskKey} from '../content/dailyDeskUpdates';
import {getLiveNews} from '../lib/liveNews';

const deskSections:Partial<Record<DailyDeskKey,string[]>>={
 start:['Världen','Internationella medier','Sverige','Ekonomi','Politisk debatt','Kultur','Vetenskap','Sport'],
 senaste:['Världen','Internationella medier','Sverige','Ekonomi','Kultur','Vetenskap','Sport'],
 varlden:['Världen','Internationella medier'],sverige:['Sverige'],stockholm:['Stockholm'],
 eu:['EU'],ekonomi:['Ekonomi'],kultur:['Kultur'],vetenskap:['Vetenskap'],ai:['Vetenskap'],
 sport:['Sport'],analys:['Världen','EU','Sverige','Ekonomi','Vetenskap'],helg:['Kultur','Vetenskap']
};
function updatedLabel(){return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date())}
function timeLabel(value:string){return new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'Europe/Stockholm'}).format(new Date(value))}
function ageLimit(desk:DailyDeskKey){return desk==='start'?24:desk==='sport'?48:72}
function isSwedishSource(source:string){return source.startsWith('SVT')||source.startsWith('Sveriges Radio')||source.startsWith('Sveriges Riksbank')||source.startsWith('SCB')}
function swedishAnalysis(section:string){const map:Record<string,string>={Världen:'Utvecklingen kan påverka säkerhetsläget och Sveriges omvärld. Nästa besked från regeringar och internationella organisationer blir avgörande.',EU:'Frågan prövar balansen mellan nationella intressen och gemensamma EU-beslut. Genomförande och finansiering avgör den verkliga effekten.',Sverige:'Följderna märks främst i hushållens villkor, välfärdens prioriteringar och förtroendet för besluten.',Ekonomi:'Effekten behöver följas genom räntor, priser, sysselsättning och hushållens marginaler, inte bara genom marknadens första reaktion.',Kultur:'Nyheten påverkar vilka berättelser och röster som får utrymme och hur kulturen når sin publik.',Vetenskap:'Resultatet behöver bekräftas oberoende innan det kan betraktas som ett praktiskt genombrott.',Sport:'Den större betydelsen avgörs av utvecklingen över flera matcher, truppens hållbarhet och kommande motstånd.'};return map[section]||map.Sverige}

export default async function DailyDeskUpdate({desk}:{desk:DailyDeskKey}){
 const live=await getLiveNews();const allowed=deskSections[desk]??[];const maxAge=ageLimit(desk)*60*60*1000;const now=Date.now();
 const stories=live.items.filter(item=>(allowed.includes(item.section)||allowed.includes(item.sourceSection))&&(!['start','ekonomi'].includes(desk)||isSwedishSource(item.source))).filter(item=>{const published=Date.parse(item.published);const age=now-published;return Number.isFinite(published)&&age>=0&&age<=maxAge}).sort((a,b)=>Date.parse(b.published)-Date.parse(a.published));
 const withImages=stories.filter(item=>Boolean(item.image));const selected=[...withImages,...stories.filter(item=>!item.image)].filter((item,index,array)=>array.findIndex(candidate=>candidate.link===item.link)===index).slice(0,4);if(!selected.length)return null;
 return <div className="shell"><section className="section daily-desk-update" aria-labelledby={`daily-${desk}`} style={{borderTop:'4px solid #a61919',marginTop:28,paddingTop:22}}>
  <div className="kicker">Uppdaterad {updatedLabel()}</div><h2 id={`daily-${desk}`} style={{fontFamily:'Georgia,serif',fontSize:'clamp(30px,4vw,46px)',margin:'8px 0 22px'}}>Senaste i avdelningen</h2>
  <div className="daily-desk-grid">{selected.map(story=><article key={story.link} style={{borderTop:'1px solid #222'}}>
   <a href={story.link} aria-label={`Öppna: ${story.title}`} style={{display:'block',height:'100%',paddingTop:16,color:'inherit'}}>
    {story.image&&<span style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:14}}><img src={story.image} alt="" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}}/></span>}
    <span className="kicker">{story.source} · {timeLabel(story.published)}</span>
    <strong style={{display:'block',fontFamily:'Georgia,serif',fontSize:26,lineHeight:1.1,margin:'10px 0'}}>{story.title}</strong>
    {story.summary&&<span style={{display:'block',fontSize:16,lineHeight:1.55}}>{story.summary}</span>}
    {desk==='start'&&<span className="analysis-thesis" style={{display:'block',fontSize:16,lineHeight:1.55,marginTop:10}}><strong>Svensk analys:</strong> {swedishAnalysis(story.section)}</span>}
    <span className="text-link" style={{display:'inline-block',marginTop:12}}>Läs hos källan →</span>
   </a>
  </article>)}</div>
 </section></div>
}
