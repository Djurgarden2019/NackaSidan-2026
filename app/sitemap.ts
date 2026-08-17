import type { MetadataRoute } from 'next';

const baseUrl='https://nacka-sidan-2026-delta.vercel.app';

export default function sitemap():MetadataRoute.Sitemap{
 const routes=[
  '/',
  '/daily',
  '/senaste',
  '/live',
  '/stockholm',
  '/sverige',
  '/varlden',
  '/ekonomi',
  '/kultur',
  '/kulturdebatt',
  '/vetenskap',
  '/sport',
  '/tema/ai',
  '/kunskap',
  '/artikel/veckans-analys',
  '/artikel/veckan-pa-tio-minuter',
 ];
 return routes.map((route,index)=>({
  url:`${baseUrl}${route}`,
  lastModified:new Date(),
  changeFrequency:index===0||route==='/daily'||route==='/senaste'?'daily':'weekly',
  priority:index===0?1:route==='/sverige'||route==='/stockholm'?0.9:0.7,
 }));
}
