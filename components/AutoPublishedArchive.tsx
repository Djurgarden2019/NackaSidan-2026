"use client";
import { useEffect,useState } from "react";
type Article={id:string;title:string;lead:string;body:string;section:string;source:string;sourceUrl:string;publishedAt:string;risk:string;score:number};
export default function AutoPublishedArchive(){
 const[articles,setArticles]=useState<Article[]>([]);
 useEffect(()=>{try{const raw=localStorage.getItem("nackasidan-published");if(raw)setArticles(JSON.parse(raw))}catch{}},[]);
 const remove=(id:string)=>{const next=articles.filter(a=>a.id!==id);setArticles(next);try{localStorage.setItem("nackasidan-published",JSON.stringify(next))}catch{}};
 return <section className="s14-archive">
  <div className="kicker">Sprint 14 · Pilotarkiv</div><h1>Autopublicerat</h1>
  <p className="lead">Detta är Sprint 14:s lokala pilotarkiv. Artiklarna sparas i den här webbläsaren – de är ännu inte permanenta publika artiklar för alla besökare.</p>
  {!articles.length?<div className="live-empty"><strong>Inga pilotartiklar ännu.</strong><p>Slå på autopublicering under LIVE och låt Nyhetsradarn hämta signaler.</p></div>:articles.map(a=><article className="s14-published" key={a.id}>
   <div className="feed-meta"><span>{a.section}</span><span>{a.score}/100</span><span>{new Date(a.publishedAt).toLocaleString("sv-SE")}</span></div>
   <h2>{a.title}</h2><p><strong>{a.lead}</strong></p><p className="s14-body">{a.body}</p>
   <div className="s14-pubactions"><a href={a.sourceUrl} target="_blank" rel="noreferrer">Originalkälla ↗</a><button onClick={()=>remove(a.id)}>Avpublicera pilotartikel</button></div>
  </article>)}
 </section>
}