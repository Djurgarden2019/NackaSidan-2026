"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { liveFeeds, type FeedDefinition } from "../content/liveFeeds";

type Priority = "Hög" | "Medel" | "Låg";
type DeskState = "Ny" | "Bevaka" | "Skriv" | "Kontrollera" | "Avfärda";
type LiveItem = { title:string; link:string; published:string; source:string; section:string; priority:Priority; local:boolean };
type FeedStatus = FeedDefinition & { status:"Väntar"|"Ansluten"|"Otillgänglig"; count:number };
type Story = LiveItem & { score:number; reason:string; angle:string; cluster:number; sources:string[]; state:DeskState };
type DraftForm = { headline:string; lead:string; body:string; notes:string; checks:Record<string,boolean>; savedAt?:string };
type Risk = "Grön"|"Gul"|"Röd";
type PublishedArticle = { id:string; title:string; lead:string; body:string; section:string; source:string; sourceUrl:string; publishedAt:string; risk:Risk; score:number };

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
function scoreFor(item:LiveItem){let s=item.section==="Ekonomi"?58:item.section==="Världen"?58:item.section==="Sverige"?56:item.section==="Nacka/Lokalt"?56:50;if(item.priority==="Hög")s+=18;if(item.priority==="Medel")s+=8;const age=(Date.now()-(Date.parse(item.published)||Date.now()))/36e5;if(age<3)s+=12;else if(age<12)s+=7;else if(age<24)s+=3;return Math.min(99,Math.max(20,Math.round(s)))}
function riskFor(item:LiveItem,score:number,cluster:number):Risk{
 const text=item.title.toLowerCase();
 const sensitive=["mord","åtal","misstänkt","skjut","sexbrott","våldtäkt","terror","namngiven","död","avliden"];
 if(sensitive.some(w=>text.includes(w)))return "Röd";
 if(score>=75&&cluster>=2)return "Grön";
 return "Gul";
}
function autoArticle(s:Story){
 return {
  title:s.title,
  lead:s.angle,
  body:`${s.title}.\n\n${s.reason}\n\nNackaSidan har identifierat uppgiften via ${s.sources.join(" och ")}. Den här pilotartikeln bygger endast på den inkommande nyhetssignalen och ska inte tillföra fakta som saknas i källunderlaget.\n\nLäs originalkällan för fullständiga uppgifter och fortsatt utveckling.`,
 };
}
function editorial(item:LiveItem,score:number){if(item.section==="Ekonomi")return{reason:"Aktuell ekonomisk signal med möjlig påverkan på hushåll, företag eller samhällsekonomi.",angle:"Förklara beskedet, vilka som påverkas och vad som kan hända härnäst."};if(item.section==="Världen")return{reason:"Internationell utveckling med tydligt allmänintresse och behov av snabb verifiering.",angle:"Sammanfatta vad som har hänt, varför det spelar roll och vilka följder som är mest sannolika."};if(score>=70)return{reason:"Aktuell signal med tydligt nyhetsvärde som bör bedömas snabbt.",angle:"Verifiera kärnuppgiften och förklara varför utvecklingen är viktig just nu."};return{reason:"Relevant nyhetssignal som behöver mer kontext och källstöd före publicering.",angle:"Identifiera huvudfrågan, berörda parter och den viktigaste konsekvensen för läsaren."}}
async function fetchFeed(feed:FeedDefinition):Promise<LiveItem[]>{const endpoint=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;const r=await fetch(endpoint,{cache:"no-store"});if(!r.ok)throw new Error();const d=await r.json();if(d?.status&&d.status!=="ok")throw new Error();return (Array.isArray(d?.items)?d.items:[]).slice(0,16).map((x:any)=>{const title=String(x?.title||"").trim(),section=classify(title,feed.section);return{title,link:String(x?.link||"").trim(),published:String(x?.pubDate||x?.published||""),source:feed.name,section,priority:priorityFor(title,section),local:section==="Nacka/Lokalt"}}).filter((x:LiveItem)=>x.title&&x.link)}

export default function LiveRadarBrowser(){
 const[items,setItems]=useState<LiveItem[]>([]),[feeds,setFeeds]=useState<FeedStatus[]>(liveFeeds.map(f=>({...f,status:"Väntar",count:0})));
 const[selected,setSelected]=useState("Alla"),[loading,setLoading]=useState(true),[checkedAt,setCheckedAt]=useState(""),[refreshNo,setRefreshNo]=useState(0);
 const[states,setStates]=useState<Record<string,DeskState>>({}),[draft,setDraft]=useState<Story|null>(null);
 const[draftForm,setDraftForm]=useState<DraftForm|null>(null),[saveMessage,setSaveMessage]=useState("");
 const[autoPublish,setAutoPublish]=useState(false),[published,setPublished]=useState<PublishedArticle[]>([]);
 const load=useCallback(async()=>{setLoading(true);const results=await Promise.all(liveFeeds.map(async feed=>{try{return{feed,items:await fetchFeed(feed),ok:true as const}}catch{return{feed,items:[] as LiveItem[],ok:false as const}}}));const merged=results.flatMap(r=>r.items);setItems(Array.from(new Map(merged.map(i=>[i.link||i.title,i])).values()).sort((a,b)=>(Date.parse(b.published)||0)-(Date.parse(a.published)||0)));setFeeds(results.map(r=>({...r.feed,status:r.ok?"Ansluten":"Otillgänglig",count:r.items.length})));setCheckedAt(new Date().toISOString());setLoading(false)},[]);
 useEffect(()=>{load();const timer=window.setInterval(load,15*60*1000);return()=>window.clearInterval(timer)},[load,refreshNo]);
 useEffect(()=>{try{setAutoPublish(localStorage.getItem("nackasidan-autopublish")==="on")}catch{};fetch("/api/autopublished",{cache:"no-store"}).then(r=>r.ok?r.json():[]).then(setPublished).catch(()=>{})},[]);
 const persistPublished=async(next:PublishedArticle[])=>{try{const r=await fetch("/api/autopublished",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(next)});const d=await r.json();if(r.ok)setPublished(d.articles||[])}catch{}};
 const toggleAuto=()=>setAutoPublish(v=>{const n=!v;try{localStorage.setItem("nackasidan-autopublish",n?"on":"off")}catch{};return n});
 const stories=useMemo(()=>items.map((item,i)=>{const score=scoreFor(item);const peers=items.filter((x,j)=>j!==i&&similarity(item.title,x.title)>=.30);const ed=editorial(item,score);return{...item,score,...ed,cluster:1+peers.length,sources:Array.from(new Set([item.source,...peers.map(x=>x.source)])),state:states[item.link]||"Ny"} as Story}).sort((a,b)=>b.score-a.score),[items,states]);
 useEffect(()=>{
   if(!autoPublish||!stories.length)return;
   const existing=new Set(published.map(a=>a.sourceUrl));
   const additions:PublishedArticle[]=[];
   stories.forEach(s=>{
     const risk=riskFor(s,s.score,s.cluster);
     if(risk==="Grön"&&!existing.has(s.link)){
       const a=autoArticle(s);
       additions.push({id:`auto-${Date.now()}-${additions.length}`,title:a.title,lead:a.lead,body:a.body,section:s.section,source:s.sources.join(" · "),sourceUrl:s.link,publishedAt:new Date().toISOString(),risk,score:s.score});
       existing.add(s.link);
     }
   });
   if(additions.length)persistPublished(additions);
 },[autoPublish,stories.length]);
 const visible=selected==="Alla"?stories:stories.filter(i=>i.section===selected);const counts=Object.fromEntries(sections.map(s=>[s,s==="Alla"?stories.length:stories.filter(i=>i.section===s).length]));
 const high=stories.filter(i=>i.score>=75).length,local=stories.filter(i=>i.local).length,connected=feeds.filter(f=>f.status==="Ansluten").length;
 const openWorkshop=(s:Story)=>{
   setDraft(s); setStates(v=>({...v,[s.link]:"Skriv"})); setSaveMessage("");
   const key=`nackasidan-draft-${s.link}`;
   let saved:DraftForm|null=null;
   try{const raw=localStorage.getItem(key); if(raw)saved=JSON.parse(raw)}catch{}
   setDraftForm(saved||{
     headline:s.title,
     lead:s.angle,
     body:`${s.title}.\n\nDetta är ett redaktionellt arbetsutkast baserat på den anslutna originalkällan. Skriv om och komplettera texten till en självständig artikel.\n\nBakgrund och betydelse: ${s.reason}\n\nNästa steg: kontrollera kärnuppgiften, namn, siffror, tidpunkt och berörda parter mot originalkällan och helst ytterligare en oberoende källa.`,
     notes:"",
     checks:{source:false,names:false,numbers:false,time:false,secondSource:false}
   });
   setTimeout(()=>document.getElementById("artikelverkstad")?.scrollIntoView({behavior:"smooth",block:"start"}),50);
 };
 const saveDraft=async()=>{
  if(!draft||!draftForm)return;

  const saved={
    ...draftForm,
    id:draft.link,
    sourceUrl:draft.link,
    savedAt:new Date().toISOString()
  };

  try{
    const r=await fetch("/api/drafts",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(saved)
    });

    if(!r.ok) throw new Error();

    setDraftForm(saved);
    setSaveMessage("Utkast sparat permanent.");
  }catch{
    setSaveMessage("Kunde inte spara utkastet.");
  }
};
 const allChecked=Boolean(draftForm&&Object.values(draftForm.checks).every(Boolean));
 return <>
  <section className="radar-stats"><article><strong>{loading?"…":stories.length}</strong><span>signaler inne</span></article><article><strong>{loading?"…":local}</strong><span>lokala signaler</span></article><article><strong>{loading?"…":high}</strong><span>redaktionell prio 75+</span></article><article><strong>{loading?"…":`${connected}/${feeds.length}`}</strong><span>källor anslutna</span></article></section>
  <section className="live-status-grid live-status-grid-s11">{feeds.map(f=><article key={f.name}><span className={f.status==="Ansluten"?"live-dot live-dot-ok":f.status==="Väntar"?"live-dot live-dot-wait":"live-dot"}/><div><strong>{f.name}</strong><small>{f.section} · {f.status} · {f.count} poster</small>{f.note&&<small>{f.note}</small>}<a href={f.homepage} target="_blank" rel="noreferrer">Originalkälla ↗</a></div></article>)}</section>
  <section className="s14-control">
    <div><div className="kicker">Sprint 16 · Permanent autopublicering</div><h2>Automatisk publiceringsmotor</h2><p>Gröna signaler publiceras till ett gemensamt permanent arkiv för alla besökare. Dubbletter stoppas centralt. Gula och röda signaler publiceras inte automatiskt.</p></div>
    <button type="button" className={autoPublish?"s14-toggle on":"s14-toggle"} onClick={toggleAuto}>{autoPublish?"Autopublicering PÅ":"Autopublicering AV"}</button>
    <div className="s14-count"><strong>{published.length}</strong><span>permanent publicerade</span></div>
  </section>
  <section className="live-stream"><div className="section-heading section-heading-stack"><div><div className="kicker">Sprint 12 · Redaktionell AI-motor</div><h2>Redaktionens nyhetskö</h2></div><div className="live-refresh-box"><p>{checkedAt?`Senast kontrollerat ${swedishTime(checkedAt)}.`:"Kontrollerar källorna."} Signalerna poängsätts och grupperas lokalt i webbläsaren.</p><button className="live-refresh-button" onClick={()=>setRefreshNo(v=>v+1)} disabled={loading}>{loading?"Hämtar…":"Uppdatera nu"}</button></div></div>
  <nav className="radar-filters">{sections.map(s=><button className={selected===s?"active":""} key={s} onClick={()=>setSelected(s)}>{s}<b>{counts[s]??0}</b></button>)}</nav>
  <div className="s12-legend"><strong>Poäng:</strong> nyhetsvärde + aktualitet + samhällsbetydelse + signalord. <span>Geografi ger inte längre automatisk förtur.</span></div>
  {loading&&!stories.length?<div className="live-empty"><strong>Bygger redaktionell kö…</strong></div>:visible.slice(0,30).map((s,i)=><article className="s12-story" key={s.link+i}>
    <div className={`s12-score ${s.score>=75?"hot":s.score>=60?"warm":""}`}><strong>{s.score}</strong><span>/100</span><em className={`s14-risk risk-${riskFor(s,s.score,s.cluster).toLowerCase().replace("ö","o")}`}>{riskFor(s,s.score,s.cluster)}</em></div>
    <div className="s12-copy"><div className="feed-meta"><span>{s.section}</span><span>{s.source}</span><span>{swedishTime(s.published)}</span>{s.cluster>1&&<span>{s.cluster} liknande signaler</span>}</div><h3><a href={s.link} target="_blank" rel="noreferrer">{s.title}</a></h3><p><b>Varför viktig:</b> {s.reason}</p><p><b>Föreslagen vinkel:</b> {s.angle}</p><small>Källkort: {s.sources.join(" · ")}</small></div>
    <div className="s12-actions"><label>Status<select value={s.state} onChange={e=>setStates(v=>({...v,[s.link]:e.target.value as DeskState}))}>{["Ny","Bevaka","Skriv","Kontrollera","Avfärda"].map(x=><option key={x}>{x}</option>)}</select></label><button type="button" onClick={()=>openWorkshop(s)}>Skapa artikelutkast</button></div>
  </article>)}
  </section>
  {draft&&draftForm&&<section className="s121-workshop s131-workshop" id="artikelverkstad">
    <div className="kicker">Sprint 13.1 · Artikelverkstad · Ej publicerat</div>
    <div className="s121-head"><div><h2>Artikelverkstad</h2><p>Signal → utkast → faktakontroll. Alla fält är redigerbara.</p></div><button type="button" onClick={()=>{setDraft(null);setDraftForm(null)}}>Stäng verkstaden ×</button></div>
    <div className="s131-grid">
      <div className="s131-editor">
        <label>Rubrik<input value={draftForm.headline} onChange={e=>setDraftForm(v=>v?{...v,headline:e.target.value}:v)}/></label>
        <label>Ingress<textarea value={draftForm.lead} onChange={e=>setDraftForm(v=>v?{...v,lead:e.target.value}:v)}/></label>
        <label>Artikelutkast<textarea className="s121-body" value={draftForm.body} onChange={e=>setDraftForm(v=>v?{...v,body:e.target.value}:v)}/></label>
        <label>Redaktionella anteckningar<textarea value={draftForm.notes} placeholder="Intervjuer att göra, frågor, bakgrund, länkar…" onChange={e=>setDraftForm(v=>v?{...v,notes:e.target.value}:v)}/></label>
        <div className="s121-buttons">
          <button type="button" className="s12-primary" onClick={saveDraft}>Spara utkast</button>
          <button type="button" onClick={()=>setStates(v=>({...v,[draft.link]:"Kontrollera"}))}>Skicka till faktakontroll</button>
          {saveMessage&&<span>{saveMessage}</span>}
        </div>
      </div>
      <aside className="s131-sidebar">
        <div className="s12-sourcecard"><strong>Källkort</strong><span>{draft.sources.join(" · ")}</span><a href={draft.link} target="_blank" rel="noreferrer">Öppna originaluppgiften ↗</a><small>{draft.cluster>1?`${draft.cluster} liknande signaler hittades.`:"En signal hittad – sök gärna en oberoende andrakälla."}</small></div>
        <div className="s131-factcheck"><strong>Faktakontroll före publicering</strong>
          {[
            ["source","Kärnuppgiften kontrollerad mot originalkällan"],
            ["names","Namn, titlar och organisationer kontrollerade"],
            ["numbers","Siffror, belopp och procent kontrollerade"],
            ["time","Datum, tid och händelseförlopp kontrollerade"],
            ["secondSource","Oberoende andrakälla sökt/kontrollerad"]
          ].map(([key,label])=><label key={key}><input type="checkbox" checked={Boolean(draftForm.checks[key])} onChange={e=>setDraftForm(v=>v?{...v,checks:{...v.checks,[key]:e.target.checked}}:v)}/><span>{label}</span></label>)}
        </div>
        <div className={`s131-readiness ${allChecked?"ready":""}`}><strong>{allChecked?"Klar för redaktionell slutgranskning":"Inte klar för publicering"}</strong><p>{allChecked?"Checklistan är komplett. En människa måste fortfarande slutgranska och fatta publiceringsbeslut.":"Slutför faktakontrollen. Röda och gula signaler kräver fortfarande kontroll. Gröna signaler kan hanteras av autopubliceringspiloten."}</p></div>
      </aside>
    </div>
  </section>}
 </>
}
