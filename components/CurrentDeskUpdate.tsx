'use client';
import {usePathname} from 'next/navigation';
import {currentDeskNews} from '../content/currentNews';

export default function CurrentDeskUpdate(){
 const pathname=usePathname();
 const story=currentDeskNews[pathname];
 if(!story)return null;
 return <section className="current-desk-update" aria-label={`Aktuell huvudnyhet för ${story.section}`}><div className="current-desk-inner"><div className="kicker">{story.section}</div><h2>{story.title}</h2><div className="current-desk-grid"><div><h3>Själva nyheten</h3><p>{story.news}</p><h3>Analys och konsekvenser</h3><p>{story.analysis}</p></div><div><h3>Längre fördjupning</h3><p>{story.depth}</p><div className="current-desk-sources"><h3>Tydliga och klickbara källor</h3>{story.sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>)}</div></div></div></div></section>;
}
