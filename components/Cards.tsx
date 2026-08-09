import type { ReactNode } from 'react';
import Link from 'next/link';
export type Story={section:string;title:string;summary:string;href?:string;meta?:string;image?:string;imageCaption?:string};
export function StoryCard({story,red=false}:{story:Story;red?:boolean}){return <article className={`card ${red?'red':''}`}>{story.image && <figure className="story-card-image"><img src={story.image} alt={story.imageCaption || story.title} />{story.imageCaption && <figcaption>{story.imageCaption}</figcaption>}</figure>}<div className="kicker">{story.section}</div><h3><Link href={story.href || '/'}>{story.title}</Link></h3><p>{story.summary}</p><Link className="button" href={story.href||'/artikel/veckans-analys'}>Läs vidare</Link></article>}
export function AnalysisBox({children}:{children:ReactNode}){return <div className="analysis-box"><strong>Redaktionens analys: </strong>{children}</div>}
