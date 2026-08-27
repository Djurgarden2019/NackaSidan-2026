import type { ReactNode } from 'react';
import Link from 'next/link';

export type Feature = { section:string; title:string; summary:string; href?:string; image?:string; meta?:string };

export function FeatureCard({item,large=false}:{item:Feature;large?:boolean}){
  return <article className={large?'feature-card feature-card-large':'feature-card'}>
    {item.image && (item.href?<Link href={item.href} aria-label={item.title}><img src={item.image} alt="" loading="lazy"/></Link>:<img src={item.image} alt="" loading="lazy"/>)}
    <div className="feature-body"><div className="kicker">{item.section}</div><h3>{item.href?<Link href={item.href}>{item.title}</Link>:item.title}</h3><p>{item.summary}</p>{item.meta&&<div className="meta">{item.meta}</div>}{item.href&&<Link className="text-link" href={item.href}>Läs vidare</Link>}</div>
  </article>
}

export function AnalysisBox({children}:{children:ReactNode}){return <div className="analysis-box"><strong>Redaktionens analys:</strong> {children}</div>}

export function FactStrip({items}:{items:{label:string,value:string}[]}){return <div className="fact-strip">{items.map(x=><div key={x.label}><span>{x.label}</span><strong>{x.value}</strong></div>)}</div>}

export function SectionIntro({eyebrow,title,text}:{eyebrow?:string;title:string;text:string}){return <div className="section-heading section-heading-stack">{eyebrow&&<div className="kicker">{eyebrow}</div>}<h2>{title}</h2><p>{text}</p></div>}
