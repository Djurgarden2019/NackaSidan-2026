"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { liveFeeds, type FeedDefinition } from "../content/liveFeeds";

type Priority = "Hög" | "Medel" | "Låg";
type DeskState = "Ny" | "Bevaka" | "Skriv" | "Kontrollera" | "Avfärda";
type LiveItem = { title:string; link:string; published:string; source:string; section:string; priority:Priority; local:boolean };
type FeedStatus = FeedDefinition & { status:"Väntar"|"Ansluten"|"Otillgänglig"; count:number };
type Story = LiveItem & { score:number; reason:string; angle:string; cluster:number; sources:string[]; state:DeskState };

const sections=["Alla","Nacka/Lokalt","Sverige","Världen","Ekonomi","Kultur","Vetenskap","Sport"];
const rules=[
 {section:"Nacka/Lokalt",words:["nacka","saltsjöbaden","sickla","älta","boo","fisksätra","orminge","värmdö","stockholm","region stockholm","slussen"]},
 {section:"Ekonomi",words:["ränta","inflation","krona","kronan","riksbank","ekonomi","konjunktur","börs","bank","bolag","företag","arbetslöshet","bnp"]},
 {section:"Vetenskap",words:["forskning","forskare","vetenskap","rymd","klimat","studie","universitet","karolinska","kth"," ai ","artificiell intelligens"]},
 {section:"Kultur",words:["kultur","film","bok","böcker","musik","teater","konst","museum","författare"]},
 {section:"Sport",words:["sport","fotboll","hockey","allsvenskan","landslaget"," os "," vm "," em ","match","mål"]},
 {section:"Världen",words:["usa","ukraina","ryssland","iran","israel","gaza","kina"," eu ","nato","trump","världen","utrikes"]},
];
function classify(title:string,fallback:string){const text=` ${title.toLowerCase()} `;for(const r of rules)if(r.words.some(w=>text.includes(w)))return r.section;if(fallback==="Ekonomi")return"Ekonomi";if(fallback==="Stockholm")return"Nacka/Lokalt";return"Sverige"}
function priorityFor(title:string,section:string):Priority{const t=title.toLowerCase();if(["just nu","olycka","brand","skjut","explosion","kris","varning","ränta","reporänta","nacka"].some(w=>t.includes(w)))return"Hög";if(["Nacka/Lokalt","Ekonomi","Världen"].includes(section))return"Medel";return"Låg"}
function swedishTime(value:string){const d=new Date(value);if(Number.isNaN(d.getTime()))return value||"Tid saknas";return new Intl.DateTimeFormat("sv-SE",{timeZone:"Europe/Stockholm",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}).format(d)}
function words(s:string){return s.toLowerCase().replace(/[^a-zåäö0-9 ]/g," ").split(/\s+/).filter(w=>w.length>4)}
function similarity(a:string,b:string){const A=new Set(words(a)),B=new Set(words(b));const hit=[...A].filter(x=>B.has(x)).length;return hit/Math.max(1,Math.min(A.size,B.size))}
function scoreFor(item:LiveItem){let s=item.local?72:item.section==="Ekonomi"?61:item.section==="Världen"?56:48;if(item.priority==="Hög")s+=16;if(item.priority==="Medel")s+=7;const age=(Date.now()-(Date.parse(item.published)||Date.now()))/36e5;if(age<3)s+=8;else if(age<12)s+=4;return Math.min(99,Math.max(20,Math.round(s)))}
function editorial(item:LiveItem,score:number){if(item.local)return{reason:"Direkt lokal relevans och hög närhet till Nacka/Stockholmsområdet.",angle:"Vad betyder detta konkret för människor, företag eller verksamheter i Nacka?"};if(item.section==="Ekonomi")return{reason:"Ekonomisk signal med möjlig påverkan på hushåll och lokala företag.",angle:"Översätt beskedet till konsekvenser för Nackabor och den lokala ekonomin."};if(score>=70)return{reason:"Aktuell signal med tydligt nyhetsvärde som bör bedömas snabbt.",angle:"Verifiera kärnuppgiften och förklara varför utvecklingen är viktig just nu."};return{reason:"Relevant omvärldssignal, men kräver mer kontext eller lokal koppling.",angle:"Sök en tydlig Nacka-koppling eller lägg signalen på bevakning."}}
async function fetchFeed(feed:FeedDefinition):Promise<LiveItem[]>{const endpoint=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;const r=await fetch(endpoint,{cache:"no-store"});if(!r.ok)throw new Error();const d=await r.json();if(d?.status&&d.status!=="ok")throw new Error();return (Array.isArray(d?.items)?d.items:[]).slice(0,16).map((x:any)=>{const title=String(x?.title||"").trim(),section=classify(title,feed.section);return{title,link:String(x?.link||"").trim(),published:String(x?.pubDate||x?.published||""),source:feed.name,section,priority:priorityFor(title,section),local:section==="Nacka/Lokalt"}}).filter((x:LiveItem)=>x.title&&x.link)}

export default function LiveRadarBrowser(){
 const[items,setItems]=useState<LiveItem[]>([]),[feeds,setFeeds]=useState<FeedStatus[]>(liveFeeds.map(f=>({...f,status:"Väntar",count:0})));
 const[selected,setSelected]=useState("Alla"),[loading,setLoading]=useState(true),[checkedAt,setCheckedAt]=useState(""),[refreshNo,setRefreshNo]=useState(0);
 const[states,setStates]=useState<Record<string,DeskState>>({}),[draft,setDraft]=useState<Story|null>(null);
 const load=useCallback(async()=>{setLoading(true);const results=await Promise.all(liveFeeds.map(async feed=>{try{return{feed,items:await fetchFeed(feed),ok:true as const}}catch{return{feed,items:[] as LiveItem[],ok:false as const}}}));const merged=results.flatMap(r=>r.items);setItems(Array.from(new Map(merged.map(i=>[i.link||i.title,i])).values()).sort((a,b)=>(Date.parse(b.published)||0)-(Date.parse(a.published)||0)));setFeeds(results.map(r=>({...r.feed,status:r.ok?"Ansluten":"Otillgänglig",count:r.items.length})));setCheckedAt(new Date().toISOString());setLoading(false)},[]);
 useEffect(()=>{load();const timer=window.setInterval(load,15*60*1000);return()=>window.clearInterval(timer)},[load,refreshNo]);
 const stories=useMemo(()=>items.map((item,i)=>{const score=scoreFor(item);const peers=items.filter((x,j)=>j!==i&&similarity(item.title,x.title)>=.45);const ed=editorial(item,score);return{...item,score,...ed,cluster:1+peers.length,sources:Array.from(new Set([item.source,...peers.map(x=>x.source)])),state:states[item.link]||"Ny"} as Story}).sort((a,b)=>b.score-a.score),[items,states]);
 const visible=selected==="Alla"?stories:stories.filter(i=>i.section===selected);const counts=Object.fromEntries(sections.map(s=>[s,s==="Alla"?stories.length:stories.filter(i=>i.section===s).length]));
 const high=stories.filter(i=>i.score>=75).length,local=stories.filter(i=>i.local).length,connected=feeds.filter(f=>f.status==="Ansluten").length;
 return <>
  <section className="radar-stats"><article><strong>{loading?"…":stories.length}</strong><span>signaler inne</span></article><article><strong>{loading?"…":local}</strong><span>lokala signaler</span></article><article><strong>{loading?"…":high}</strong><span>redaktionell prio 75+</span></article><article><strong>{loading?"…":`${connected}/${feeds.length}`}</strong><span>källor anslutna</span></article></section>
  <section className="live-status-grid live-status-grid-s11">{feeds.map(f=><article key={f.name}><span className={f.status==="Ansluten"?"live-dot live-dot-ok":f.status==="Väntar"?"live-dot live-dot-wait":"live-dot"}/><div><strong>{f.name}</strong><small>{f.section} · {f.status} · {f.count} poster</small>{f.note&&<small>{f.note}</small>}<a href={f.homepage} target="_blank" rel="noreferrer">Originalkälla ↗</a></div></article>)}</section>
  <section className="live-stream"><div className="section-heading section-heading-stack"><div><div className="kicker">Sprint 12 · Redaktionell AI-motor</div><h2>Redaktionens nyhetskö</h2></div><div className="live-refresh-box"><p>{checkedAt?`Senast kontrollerat ${swedishTime(checkedAt)}.`:"Kontrollerar källorna."} Signalerna poängsätts och grupperas lokalt i webbläsaren.</p><button className="live-refresh-button" onClick={()=>setRefreshNo(v=>v+1)} disabled={loading}>{loading?"Hämtar…":"Uppdatera nu"}</button></div></div>
  <nav className="radar-filters">{sections.map(s=><button className={selected===s?"active":""} key={s} onClick={()=>setSelected(s)}>{s}<b>{counts[s]??0}</b></button>)}</nav>
  <div className="s12-legend"><strong>Poäng:</strong> lokal relevans + aktualitet + ämnesvikt + signalord. <span>Poängen är redaktionellt beslutsstöd, inte sanningsbedömning.</span></div>
  {loading&&!stories.length?<div className="live-empty"><strong>Bygger redaktionell kö…</strong></div>:visible.slice(0,30).map((s,i)=><article className="s12-story" key={s.link+i}>
    <div className={`s12-score ${s.score>=75?"hot":s.score>=60?"warm":""}`}><strong>{s.score}</strong><span>/100</span></div>
    <div className="s12-copy"><div className="feed-meta"><span>{s.section}</span><span>{s.source}</span><span>{swedishTime(s.published)}</span>{s.cluster>1&&<span>{s.cluster} liknande signaler</span>}</div><h3><a href={s.link} target="_blank" rel="noreferrer">{s.title}</a></h3><p><b>Varför viktig:</b> {s.reason}</p><p><b>Föreslagen vinkel:</b> {s.angle}</p><small>Källkort: {s.sources.join(" · ")}</small></div>
    <div className="s12-actions"><label>Status<select value={s.state} onChange={e=>setStates(v=>({...v,[s.link]:e.target.value as DeskState}))}>{["Ny","Bevaka","Skriv","Kontrollera","Avfärda"].map(x=><option key={x}>{x}</option>)}</select></label><button onClick={()=>setDraft(s)}>Skapa artikelutkast</button></div>
  </article>)}
  </section>
  {draft&&<div className="s12-modal" role="dialog" aria-modal="true"><div><button className="s12-close" onClick={()=>setDraft(null)}>Stäng ×</button><div className="kicker">Arbetsutkast · Ej publicerat</div><h2>{draft.title}</h2><p className="s12-ingress">{draft.angle}</p><h4>Förslag till artikelstruktur</h4><p><b>Inledning:</b> {draft.title}. NackaSidan följer utvecklingen och kontrollerar uppgifterna mot originalkällorna.</p><p><b>Det här vet vi:</b> Utgå endast från verifierade uppgifter i källkortet. Lägg till bakgrund, berörda parter och konkret lokal betydelse innan publicering.</p><p><b>Redaktionell kontroll:</b> Kontrollera namn, siffror, tidpunkt, motpart och minst en originalkälla. Sök ytterligare källa vid kontroversiella eller långtgående uppgifter.</p><div className="s12-sourcecard"><strong>Källkort</strong><span>{draft.sources.join(" · ")}</span><a href={draft.link} target="_blank" rel="noreferrer">Öppna originaluppgiften ↗</a></div><button className="s12-primary" onClick={()=>{setStates(v=>({...v,[draft.link]:"Kontrollera"}));setDraft(null)}}>Skicka till faktakontroll</button></div></div>}
 </>
}
