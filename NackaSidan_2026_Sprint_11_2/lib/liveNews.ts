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
  {
    name: 'SVT Nyheter Stockholm',
    url: 'https://www.svt.se/nyheter/lokalt/stockholm/rss.xml',
    section: 'Stockholm',
    homepage: 'https://www.svt.se/nyheter/lokalt/stockholm'
  },
  {
    name: 'Sveriges Radio · Ekot',
    url: 'https://api.sr.se/api/rss/program/83',
    section: 'Sverige',
    homepage: 'https://www.sverigesradio.se/ekot',
    note: 'Text-RSS från Sveriges Radio'
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

const rules: { section: string; words: string[] }[] = [
  { section: 'Nacka/Lokalt', words: ['nacka','saltsjöbaden','sickla','älta','boo','fisksätra','orminge','värmdö','stockholm','region stockholm','slussen'] },
  { section: 'Ekonomi', words: ['ränta','inflation','krona','kronan','riksbank','ekonomi','konjunktur','börs','bank','bolag','företag','arbetslöshet','bnp'] },
  { section: 'Vetenskap', words: ['forskning','forskare','vetenskap','rymd','klimat','studie','universitet','karolinska','kth','ai ','artificiell intelligens'] },
  { section: 'Kultur', words: ['kultur','film','bok','böcker','musik','teater','konst','museum','författare'] },
  { section: 'Sport', words: ['sport','fotboll','hockey','allsvenskan','landslaget','os ','vm ','em ','match','mål'] },
  { section: 'Världen', words: ['usa','ukraina','ryssland','iran','israel','gaza','kina','eu ','nato','trump','världen','utrikes'] },
];

function classify(title: string, fallback: string) {
  const text = ` ${title.toLowerCase()} `;
  for (const rule of rules) if (rule.words.some(word => text.includes(word))) return rule.section;
  if (fallback === 'Ekonomi') return 'Ekonomi';
  if (fallback === 'Stockholm') return 'Nacka/Lokalt';
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
  return [...rssItems, ...atomItems].slice(0, 16).map(block => {
    const title = tag(block, ['title']);
    const section = classify(title, feed.section);
    return {
      title,
      link: linkFrom(block),
      published: tag(block, ['pubDate', 'published', 'updated']),
      source: feed.name,
      sourceSection: feed.section,
      section,
      priority: priorityFor(title, section),
      local: section === 'Nacka/Lokalt'
    };
  }).filter(x => x.title && x.link);
}

export async function getLiveNews() {
  const settled = await Promise.all(liveFeeds.map(async feed => {
    try {
      const res = await fetch(feed.url, {
        headers: { 'User-Agent': 'NackaSidan/11.2 static editorial RSS reader' }
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

  const sections = ['Alla','Nacka/Lokalt','Sverige','Världen','Ekonomi','Kultur','Vetenskap','Sport'];
  const sectionCounts = Object.fromEntries(sections.map(section => [section, section === 'Alla' ? items.length : items.filter(i => i.section === section).length]));

  return {
    items,
    sections,
    sectionCounts,
    highPriority: items.filter(i => i.priority === 'Hög').length,
    localCount: items.filter(i => i.local).length,
    feeds: settled.map(x => ({
      name: x.feed.name,
      homepage: x.feed.homepage,
      section: x.feed.section,
      note: x.feed.note,
      status: x.ok ? 'Ansluten' : 'Tillfälligt otillgänglig',
      count: x.items.length
    })),
    fetchedAt: new Date().toISOString()
  };
}
