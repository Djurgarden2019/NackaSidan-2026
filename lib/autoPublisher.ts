import { get, put } from '@vercel/blob';
import { getLiveNews, type LiveNewsItem } from './liveNews';

export type AutomaticArticle = {
  id: string;
  title: string;
  lead: string;
  body: string;
  section: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  risk: 'Grön';
  score: number;
};

const PATH = 'nackasidan/autopublished.json';
const BLOCKED = ['mord','död','avliden','misstänkt','åtal','skjut','våldtäkt','terror','gisslan','krig','bomb','explosion','valet','parti','minister'];
const AUTOMATIC_SOURCES = ['Nacka kommun', 'Sveriges Riksbank', 'SVT Nyheter', 'Sveriges Radio', 'NASA'];

function clean(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function safe(item: LiveNewsItem) {
  const text = `${item.title} ${item.summary}`.toLowerCase();
  const published = Date.parse(item.published);
  const fresh = published > 0 && Date.now() - published <= 36 * 60 * 60 * 1000 && published <= Date.now() + 5 * 60 * 1000;
  return fresh && AUTOMATIC_SOURCES.some(source => item.source.startsWith(source)) && !BLOCKED.some(word => text.includes(word));
}

function article(item: LiveNewsItem): AutomaticArticle {
  const sourceSummary = clean(item.summary) || `Källan har publicerat uppgiften under rubriken ”${item.title}”.`;
  const lead = sourceSummary.length > 280 ? `${sourceSummary.slice(0, 277).trim()}…` : sourceSummary;
  const publishedAt = new Date().toISOString();
  const consequence = item.section === 'Ekonomi'
    ? 'Beskedet kan påverka hushållens och företagens planering. Den faktiska effekten beror på kommande statistik, marknadsreaktioner och eventuella följdbesked.'
    : item.section === 'Nacka/Lokalt'
      ? 'För Nackaborna blir nästa steg att följa hur beslutet eller förändringen genomförs, vilka områden som berörs och om tidsplanen ändras.'
      : item.section === 'Vetenskap'
        ? 'Resultatet behöver bedömas tillsammans med metod, osäkerheter och fortsatt forskning innan långtgående slutsatser dras.'
        : 'Betydelsen avgörs av vad som bekräftas i nästa steg och hur berörda aktörer agerar.';

  return {
    id: `auto-${Buffer.from(item.link).toString('base64url').slice(0, 48)}`,
    title: item.title,
    lead,
    section: item.section,
    source: item.source,
    sourceUrl: item.link,
    publishedAt,
    risk: 'Grön',
    score: item.priority === 'Hög' ? 82 : item.priority === 'Medel' ? 74 : 66,
    body: `Själva nyheten\n\n${sourceSummary}\n\nAnalys och konsekvenser\n\n${consequence} NackaSidan skiljer här mellan källans verifierbara uppgifter och vår försiktiga bedömning av möjliga följder.\n\nLängre fördjupning\n\nNyheten bör ses som en del av ett pågående förlopp. Uppgifter kan förändras när källan publicerar mer information. Därför visas publiceringstid och en direktlänk till originalet. Artikeln uppdateras inte genom att nya fakta antas, utan ersätts eller kompletteras först när en ansluten källa lämnar ett nytt verifierbart besked.\n\nTydlig och klickbar källa\n\n${item.source}: ${item.link}`
  };
}

export async function readArticles(): Promise<AutomaticArticle[]> {
  try {
    const result = await get(PATH, { access: 'private', useCache: false });
    if (result?.statusCode !== 200 || !result.stream) return [];
    return await new Response(result.stream).json();
  } catch {
    return [];
  }
}

export async function runAutomaticPublishing() {
  const live = await getLiveNews();
  const previous = await readArticles();
  const known = new Set(previous.map(item => item.sourceUrl.replace(/[?#].*$/, '')));
  const candidates = live.items.filter(safe).filter(item => !known.has(item.link.replace(/[?#].*$/, ''))).slice(0, 12);
  const additions = candidates.map(article);
  const next = [...additions, ...previous]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 500);

  if (additions.length) {
    await put(PATH, JSON.stringify(next), {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
      contentType: 'application/json'
    });
  }

  return { checked: live.items.length, published: additions.length, heldForReview: live.items.length - candidates.length, total: next.length };
}
