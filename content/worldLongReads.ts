import {topWorldNews5Sep} from './topWorldNews5Sep';
export type WorldLongRead={eyebrow:string;title:string;lead:string;news:string[];analysis:string[];depth:string[];sources:{label:string;href:string}[]};
export const worldLongReads:WorldLongRead[]=topWorldNews5Sep.slice(0,5).map(article=>({
 eyebrow:article.section,
 title:article.title,
 lead:article.summary,
 news:article.news,
 analysis:article.analysis,
 depth:article.depth,
 sources:article.sources.map(source=>({label:source.label,href:source.url}))
}));
