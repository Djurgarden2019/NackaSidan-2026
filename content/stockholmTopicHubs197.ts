export type StockholmTopicHub = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
};

export const stockholmTopicHubs197: StockholmTopicHub[] = [
  { slug: 'trafik', title: 'Trafik', description: 'Tunnelbana, pendeltåg, bussar, vägar, cykel och större infrastrukturprojekt.', keywords: ['trafik','sl','tunnelbana','pendeltåg','buss','väg','cykel','slussen'] },
  { slug: 'bostader', title: 'Bostäder', description: 'Detaljplaner, byggstarter, hyror, bostadsrätter och stadsutveckling.', keywords: ['bostad','bostäder','bygg','detaljplan','hyresrätt','bostadsrätt'] },
  { slug: 'politik', title: 'Politik', description: 'Stadshuset, budget, beslut, vallöften och lokal demokrati.', keywords: ['politik','stadshuset','budget','kommunfullmäktige','val'] },
  { slug: 'kultur', title: 'Kultur', description: 'Konserter, teater, konst, film, litteratur och evenemang.', keywords: ['kultur','konsert','teater','konst','film','festival'] },
  { slug: 'naringsliv', title: 'Näringsliv', description: 'Företag, jobb, tech, fastigheter, handel och besöksnäring.', keywords: ['företag','jobb','tech','fastighet','handel','näringsliv'] },
  { slug: 'trygghet', title: 'Trygghet', description: 'Polis, räddningstjänst, domstol, olyckor och förebyggande arbete.', keywords: ['polis','trygghet','olycka','domstol','räddningstjänst'] }
];

export function topicForText197(text: string) {
  const normalized = text.toLocaleLowerCase('sv-SE');
  return stockholmTopicHubs197.filter((hub) => hub.keywords.some((keyword) => normalized.includes(keyword)));
}
