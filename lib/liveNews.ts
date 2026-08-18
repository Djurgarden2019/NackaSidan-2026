export type LiveNewsItem = {
  title: string;
  link: string;
  published: string;
  source: string;
  sourceSection: string;
  section: string;
  priority: 'Hög' | 'Medel' | 'Låg';
  local: boolean;
};

type Feed = { name: string; url: string; section: string; homepage: string; note?: string };

export const liveFeeds: Feed[] = [
  { name: 'SVT Nyheter Stockholm', url: 'https://www.svt.se/nyheter/lokalt/stockholm/rss.xml', section: 'Stockholm', homepage: 'https://www.svt.se/nyheter/lokalt/stockholm' },
  { name: 'SVT Nyheter', url: 'https://www.svt.se/nyheter/rss.xml', section: 'Sverige', homepage: 'https://www.svt.se/nyheter' },
  { name: 'Sveriges Radio · Ekot', url: 'https://api.sr.se/api/rss/program/83', section: 'Sverige', homepage: 'https://www.sverigesradio.se/ekot', note: 'Text-RSS från Sveriges Radio' },
  { name: 'Sveriges Radio · P4 Stockholm', url: 'https://api.sr.se/api/rss/program/701', section: 'Stockholm', homepage: 'https://www.sverigesradio.se/p4stockholm', note: 'Lokal RSS från Sveriges Radio' },
  { name: 'Sveriges Riksbank · Nyheter', url: 'https://www.riksbank.se/sv/rss/nyheter/', section: 'Ekonomi', homepage: 'https://www.riksbank.se/sv/press-och-publicerat/' },
  { name: 'Sveriges Riksbank · Pressmeddelanden', url: 'https://www.riksbank.se/sv/rss/pressmeddelanden/', section: 'Ekonomi', homepage: 'https://www.riksbank.se/sv/press-och-publicerat/' },
  { name: 'BBC World', url: 'https://feeds.bbci.co.uk/news/world/rss.xml', section: 'Världen', homepage: 'https://www.bbc.com/news/world' },
  { name: 'BBC Science', url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml', section: 'Vetenskap', homepage: 'https://www.bbc.com/news/science_and_environment' },
  { name: 'NASA', url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', section: 'Vetenskap', homepage: 'https://www.nasa.gov/' },
];

function decodeXml(value: string) {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<[^>]+>/g, '').trim();
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

const rules: { section: string; words: string[] }[] = [
  { section: 'Nacka/Lokalt', words: ['nacka','saltsjöbaden','sickla','älta','boo','fisksätra','orminge','värmdö'] },
  { section: 'Ekonomi', words: ['ränta','inflation','krona','kronan','riksbank','ekonomi','konjunktur','börs','bank','bolag','företag','arbetslöshet','bnp','vinst','förlust','elpris','elpriset'] },
  { section: 'Vetenskap', words: ['forskning','forskare','vetenskap','rymd','klimat','studie','universitet','karolinska','kth','nasa','space','science','climate','ai','artificiell intelligens'] },
  { section: 'Kultur', words: ['kultur','bok','böcker','musik','teater','konst','museum','författare','artist','album','festival'] },
  { section: 'Sport', words: ['sport','fotboll','hockey','allsvenskan','landslaget','os','vm','em','match','mål','simning','skidor','skidåkning'] },
  { section: 'Världen', words: ['usa','ukraina','ryssland','iran','israel','gaza','kina','eu','nato','trump','världen','utrikes','war','world','zelenskyj'] },
];

function normalizedWords(value: string) {
  return ` ${value.toLowerCase().replace(/[^a-z0-9åäö]+/g, ' ').replace(/\s+/g, ' ').trim()} `;
}

function hasWord(text: string, word: string) {
  const needle = word.toLowerCase().replace(/[^a-z0-9åäö]+/g, ' ').replace(/\s+/g, ' ').trim();
  return needle.length > 0 && text.includes(` ${needle} `);
}

function classify(title: string, link: string, fallback: string) {
  const lowerLink = link.toLowerCase();
  if (lowerLink.includes('/sport/')) return 'Sport';
  if (lowerLink.includes('/kultur/')) return 'Kultur';
  if (lowerLink.includes('/utrikes/') || lowerLink.includes('/world/')) return 'Världen';

  const text = normalizedWords(title);
  for (const rule of rules) if (rule.words.some(word => hasWord(text, word))) return rule.section;
  if (fallback === 'Ekonomi') return 'Ekonomi';
  if (fallback === 'Stockholm') return 'Sverige';
  if (['Världen','Vetenskap','Kultur','Sport'].includes(fallback)) return fallback;
  return 'Sverige';
}

function priorityFor(title: string, section: string): 'Hög' | 'Medel' | 'Låg' {
  const text = title.toLowerCase();
  const urgent = ['breaking','just nu','olycka','brand','skjut','explosion','kris','varning','ränta','reporänta','nacka'];
  if (urgent.some(word => text.includes(word))) return 'Hög';
  if (section === 'Nacka/Lokalt' || section === 'Ekonomi' || section === 'Världen') return 'Medel';
  return 'Låg';
}

function parse(xml: string, feed: Feed): LiveNewsItem[] {
  const rssItems = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];
  const atomItems = xml.match(/<entry\b[\s\S]*?<\/entry>/gi) || [];
  return [...rssItems, ...atomItems].slice(0, 30).map(block => {
    const title = tag(block, ['title']);
    const link = linkFrom(block);
    const section = classify(title, link, feed.section);
    return { title, link, published: tag(block, ['pubDate', 'published', 'updated']), source: feed.name, sourceSection: feed.section, section, priority: priorityFor(title, section), local: section === 'Nacka/Lokalt' };
  }).filter(x => x.title && x.link);
}

function sourceWeight(source: string) {
  if (source.startsWith('SVT') || source.startsWith('Sveriges Radio')) return 3;
  if (source.startsWith('Sveriges Riksbank')) return 2;
  return 1;
}

function priorityWeight(priority: LiveNewsItem['priority']) {
  return priority === 'Hög' ? 3 : priority === 'Medel' ? 2 : 1;
}

function editorialScore(item: LiveNewsItem, now: number) {
  const published = Date.parse(item.published);
  const ageHours = published ? Math.max(0, (now - published) / 3600000) : 240;
  const freshness = Math.max(0, 72 - Math.min(ageHours, 72));
  const localBoost = item.local ? 24 : 0;
  const swedishBoost = sourceWeight(item.source) * 8;
  const priorityBoost = priorityWeight(item.priority) * 12;
  return freshness + localBoost + swedishBoost + priorityBoost;
}

export async function getLiveNews() {
  const settled = await Promise.all(liveFeeds.map(async feed => {
    try {
      const res = await fetch(feed.url, { next: { revalidate: 900 }, headers: { 'User-Agent': 'NackaSidan/1.4 editorial RSS reader' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { feed, items: parse(await res.text(), feed), ok: true as const };
    } catch {
      return { feed, items: [] as LiveNewsItem[], ok: false as const };
    }
  }));

  const now = Date.now();
  const maxAgeMs = 10 * 24 * 60 * 60 * 1000;
  const fresh = settled.flatMap(x => x.items).filter(item => {
    const time = Date.parse(item.published);
    return !time || (now - time >= 0 && now - time <= maxAgeMs);
  }).sort((a,b) => {
    const scoreDiff = editorialScore(b, now) - editorialScore(a, now);
    if (scoreDiff !== 0) return scoreDiff;
    return (Date.parse(b.published) || 0) - (Date.parse(a.published) || 0);
  });

  const seen = new Set<string>();
  const seenTitles = new Set<string>();
  const items = fresh.filter(item => {
    const key = item.link.replace(/[?#].*$/, '') || item.title.toLowerCase();
    const titleKey = item.title.toLowerCase().replace(/[^a-zåäö0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    if (seen.has(key) || seenTitles.has(titleKey)) return false;
    seen.add(key);
    seenTitles.add(titleKey);
    return true;
  });

  const sections = ['Alla','Nacka/Lokalt','Sverige','Världen','Ekonomi','Kultur','Vetenskap','Sport'];
  const sectionCounts = Object.fromEntries(sections.map(section => [section, section === 'Alla' ? items.length : items.filter(i => i.section === section).length]));
  return { items, sections, sectionCounts, highPriority: items.filter(i => i.priority === 'Hög').length, localCount: items.filter(i => i.local).length, feeds: settled.map(x => ({ name: x.feed.name, homepage: x.feed.homepage, section: x.feed.section, note: x.feed.note, status: x.ok ? 'Ansluten' : 'Tillfälligt otillgänglig', count: x.items.length })), fetchedAt: new Date().toISOString() };
}
