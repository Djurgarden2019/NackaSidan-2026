'use client';
import {usePathname} from 'next/navigation';
import {currentDeskNews,swedenMoreNews} from '../content/currentNews';

export default function CurrentDeskUpdate(){
 const pathname=usePathname();
 const story=currentDeskNews[pathname];
 if(!story)return null;
 return <section className="current-desk-update" aria-label={`Aktuell huvudnyhet för ${story.section}`}><div className="current-desk-inner"><div className="kicker">{story.section}</div><h2>{story.title}</h2><div className="current-desk-grid"><div><h3>Själva nyheten</h3><p>{story.news}</p><h3>Analys och konsekvenser</h3><p>{story.analysis}</p></div><div><h3>Längre fördjupning</h3><p>{story.depth}</p><div className="current-desk-sources"><h3>Tydliga och klickbara källor</h3>{story.sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>)}</div></div></div>{pathname==='/sverige'&&<div className="sweden-more-news"><div className="sweden-more-heading"><div className="kicker">Fler aktuella Sverigeartiklar</div><h2>Politik, arbete, ekonomi och beredskap</h2></div>{swedenMoreNews.map((item,index)=><article className="sweden-more-story" key={item.title}><div className="sweden-more-number">{String(index+1).padStart(2,'0')}</div><div className="kicker">{item.section}</div><h2>{item.title}</h2><div className="current-desk-grid"><div><h3>Själva nyheten</h3><p>{item.news}</p><h3>Analys och konsekvenser</h3><p>{item.analysis}</p></div><div><h3>Längre fördjupning</h3><p>{item.depth}</p><div className="current-desk-sources"><h3>Tydliga och klickbara källor</h3>{item.sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>)}</div></div></div></article>)}</div>}</div></section>;
}
