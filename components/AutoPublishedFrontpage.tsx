"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
type Article={id:string;title:string;lead:string;body:string;section:string;source:string;sourceUrl:string;publishedAt:string;risk:string;score:number};
export default function AutoPublishedFrontpage(){
 const[articles,setArticles]=useState<Article[]>([]);
 useEffect(()=>{const load=()=>{try{const raw=localStorage.getItem("nackasidan-published");setArticles(raw?JSON.parse(raw):[])}catch{}};load();window.addEventListener("storage",load);return()=>window.removeEventListener("storage",load)},[]);
 if(!articles.length)return null;
 return <section className="section s15-front"><div className="kicker">Live · automatiskt publicerat</div><div className="s15-heading"><h2>Senaste från Nyhetsradarn</h2><Link href="/autopublicerat">Visa alla →</Link></div><div className="s15-grid">{articles.slice(0,6).map((a,i)=><article key={a.id} className={i===0?"s15-lead":""}><div className="feed-meta"><span>{a.section}</span><span>{new Date(a.publishedAt).toLocaleString("sv-SE")}</span></div><h3><Link href={`/autonyhet?id=${encodeURIComponent(a.id)}`}>{a.title}</Link></h3><p>{a.lead}</p><div className="s15-source">Källa: {a.source}</div></article>)}</div></section>
}
