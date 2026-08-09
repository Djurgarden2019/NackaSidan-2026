import type { LiveNewsItem } from './liveNews';

export type HuntMatch = {
  title: string;
  link: string;
  source: string;
  published: string;
  score: number;
};

export type HuntResult = {
  query: string;
  matches: HuntMatch[];
  independentSources: string[];
  status: 'Stöd hittat' | 'Ingen andra källa hittad' | 'Generisk rubrik – ignorerad';
};

const genericPatterns = [
  /^nyheter från dagen/i,
  /^senaste nytt/i,
  /^nyhetssammanfattning/i,
  /^dagens nyheter/i,
  /^morgonekot/i,
  /^ekot senaste/i
];

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/<[^>]+>/g, '').trim();
}

function tag(block: string, name: string) {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return m ? decodeXml(m[1]) : '';
}

function atomLink(block: string) {
  const rss = tag(block, 'link');
  if (rss.startsWith('http')) return rss;
  const atom = block.match(/<link[^>]+href=["']([^"']+)["']/i);
  return atom ? decodeXml(atom[1]) : rss;
}

function cleanSource(title: string, sourceTag: string) {
  if (sourceTag) return sourceTag;
  const parts = title.split(' - ');
  return parts.length > 1 ? parts[parts.length - 1].trim() : 'Extern källa';
}

function words(text: string) {
  return new Set(
    text.toLowerCase()
      .replace(/[^a-zåäö0-9 ]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 5)
  );
}

function similarity(a: string, b: string) {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return 0;
  const common = [...A].filter(w => B.has(w)).length;
  return common / Math.max(1, Math.min(A.size, B.size));
}

export function isGenericHeadline(title: string) {
  return genericPatterns.some(pattern => pattern.test(title.trim()));
}

function searchQuery(title: string) {
  const stop = new Set(['efter','under','över','från','med','som','inte','säger','nytt','kring','flera','stora','dagens']);
  return title
    .replace(/[“”"'–—:;,!?()]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 4 && !stop.has(w.toLowerCase()))
    .slice(0, 8)
    .join(' ');
}

function sourceFamily(source: string) {
  const s = source.toLowerCase();
  if (s.includes('svt')) return 'SVT';
  if (s.includes('sveriges radio') || s.includes('ekot')) return 'Sveriges Radio';
  if (s.includes('riksbank')) return 'Sveriges Riksbank';
  if (s.includes('aftonbladet')) return 'Aftonbladet';
  if (s.includes('expressen')) return 'Expressen';
  if (s.includes('dn') || s.includes('dagens nyheter')) return 'Dagens Nyheter';
  if (s.includes('svenska dagbladet') || s.includes('svd')) return 'Svenska Dagbladet';
  if (s.includes('reuters')) return 'Reuters';
  if (s.includes('associated press') || s === 'ap') return 'AP';
  if (s.includes('tt')) return 'TT';
  return source.trim();
}

export async function huntSecondSources(item: LiveNewsItem): Promise<HuntResult> {
  if (isGenericHeadline(item.title)) {
    return { query: '', matches: [], independentSources: [], status: 'Generisk rubrik – ignorerad' };
  }

  const query = searchQuery(item.title);
  if (!query) return { query: '', matches: [], independentSources: [], status: 'Ingen andra källa hittad' };

  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=sv&gl=SE&ceid=SE:sv`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
    const res = await fetch(url, {
      next: { revalidate: 900 },
      signal: controller.signal,
      headers: { 'User-Agent': 'NackaSidan/1.2 source-verification reader' }
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const xml = await res.text();
    const blocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];

    const originFamily = sourceFamily(item.source);
    const matches = blocks
      .slice(0, 18)
      .map(block => {
        const rawTitle = tag(block, 'title');
        const source = cleanSource(rawTitle, tag(block, 'source'));
        const title = rawTitle.replace(new RegExp(`\\s+-\\s+${source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i'), '');
        return {
          title,
          link: atomLink(block),
          source,
          published: tag(block, 'pubDate'),
          score: Math.round(similarity(item.title, title) * 100)
        };
      })
      .filter(match =>
        match.link &&
        match.score >= 28 &&
        sourceFamily(match.source) !== originFamily
      )
      .sort((a,b) => b.score - a.score)
      .slice(0, 5);

    const independentSources = [...new Set(matches.map(match => sourceFamily(match.source)))];

    return {
      query,
      matches,
      independentSources,
      status: independentSources.length ? 'Stöd hittat' : 'Ingen andra källa hittad'
    };
  } catch {
    return { query, matches: [], independentSources: [], status: 'Ingen andra källa hittad' };
  }
}
