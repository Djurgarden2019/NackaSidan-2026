import type { MetadataRoute } from 'next';
const baseUrl='https://nacka-sidan-2026-delta.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{
 const routes=['/','/senaste','/stockholm','/sverige','/varlden','/ekonomi','/kultur','/kulturdebatt','/vetenskap','/sport','/tema/ai','/kunskap','/sok','/om','/forfattare/redaktionen','/principer','/rattelser','/integritet','/tillganglighet','/kontakt','/artikel/veckans-analys','/artikel/veckan-pa-tio-minuter'];
 return routes.map((route,index)=>({url:`${baseUrl}${route}`,lastModified:new Date(),changeFrequency:index===0||route==='/senaste'?'daily':'weekly',priority:index===0?1:route==='/sverige'||route==='/stockholm'?0.9:0.7}));
}
