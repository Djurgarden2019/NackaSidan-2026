import {swedenArticles220,type SwedenArticle220} from './swedenArticles220';
export function swedenArticleFeed239(section?:string){return swedenArticles220.filter((a:SwedenArticle220)=>a.status==='published'&&(!section||a.section===section)).sort((a,b)=>Date.parse(b.updatedAt)-Date.parse(a.updatedAt));}
export const swedenFeed239={title:'Senaste från Sverige',emptyMessage:'Fler verifierade Sverige-artiklar publiceras löpande.',principle:'Endast publicerade och verifierade artiklar visas i det nationella flödet.'};
