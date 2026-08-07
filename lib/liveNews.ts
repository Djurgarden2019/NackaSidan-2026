export type LiveNewsItem = {
  title: string;
  link: string;
  published: string;
  source: string;
  section: string;
};

type Feed = { name: string; url: string; section: string; homepage: string };

export const liveFeeds: Feed[] = [
  {
    name: 'SVT Nyheter Stockholm',
    url: 'https://www.svt.se/nyheter/lokalt/stockholm/rss.xml',
    section: 'Stockholm',
    homepage: 'https://www.svt.se/nyheter/lokalt/stockholm'
  },
  {
    name: 'Sveriges Riksbank · Nyheter',
    url: 'https://www.riksbank.se/sv/rss/nyheter/',
    section: 'Ekonomi',
    homepage: 'https://www.riksbank.se/sv/press-och-publicerat/'
  },
  {
    name: 'Sveriges Riksbank · Pressmeddelanden',
    url: 'https://www.riksbank.se/sv/rss/pressmeddelanden/',
    section: 'Ekonomi',
    homepage: 'https://www.riksbank.se/sv/press-och-publicerat/'
  }
];

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/<[^>]+>/g, '').trim();
}

function tag(block: string, names: string[]) {
  for (const name of names) {
    const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
    if (m) return decodeXml(m[1]);
  }
  return '';
}

function linkFrom(block: string) {
  const rssLink = tag(block, ['link']);
  if (rssLink.startsWith('http')) return rssLink;
  const atom = block.match(/<link[^>]+href=["']([^"']+)["']/i);
  return atom ? decodeXml(atom[1]) : rssLink;
}

function parse(xml: string, feed: Feed): LiveNewsItem[] {
  const rssItems = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];
  const atomItems = xml.match(/<entry\b[\s\S]*?<\/entry>/gi) || [];
  return [...rssItems, ...atomItems].slice(0, 12).map(block => ({
    title: tag(block, ['title']),
    link: linkFrom(block),
    published: tag(block, ['pubDate', 'published', 'updated']),
    source: feed.name,
    section: feed.section
  })).filter(x => x.title && x.link);
}

export async function getLiveNews() {
  const settled = await Promise.all(liveFeeds.map(async feed => {
    try {
      const res = await fetch(feed.url, {
        next: { revalidate: 900 },
        headers: { 'User-Agent': 'NackaSidan/1.0 editorial RSS reader' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { feed, items: parse(await res.text(), feed), ok: true as const };
    } catch {
      return { feed, items: [] as LiveNewsItem[], ok: false as const };
    }
  }));

  const items = settled.flatMap(x => x.items).sort((a,b) => {
    const at = Date.parse(a.published) || 0;
    const bt = Date.parse(b.published) || 0;
    return bt - at;
  });

  return {
    items,
    feeds: settled.map(x => ({
      name: x.feed.name,
      homepage: x.feed.homepage,
      section: x.feed.section,
      status: x.ok ? 'Ansluten' : 'Tillfälligt otillgänglig',
      count: x.items.length
    })),
    fetchedAt: new Date().toISOString()
  };
}
