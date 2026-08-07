export type FeedDefinition = {
  name: string;
  url: string;
  section: string;
  homepage: string;
  note?: string;
};

export const liveFeeds: FeedDefinition[] = [
  {
    name: "SVT Nyheter Stockholm",
    url: "https://www.svt.se/nyheter/lokalt/stockholm/rss.xml",
    section: "Stockholm",
    homepage: "https://www.svt.se/nyheter/lokalt/stockholm"
  },
  {
    name: "Sveriges Radio · Ekot",
    url: "https://api.sr.se/api/rss/program/83",
    section: "Sverige",
    homepage: "https://www.sverigesradio.se/ekot",
    note: "Text-RSS från Sveriges Radio"
  },
  {
    name: "Sveriges Riksbank · Nyheter",
    url: "https://www.riksbank.se/sv/rss/nyheter/",
    section: "Ekonomi",
    homepage: "https://www.riksbank.se/sv/press-och-publicerat/"
  },
  {
    name: "Sveriges Riksbank · Pressmeddelanden",
    url: "https://www.riksbank.se/sv/rss/pressmeddelanden/",
    section: "Ekonomi",
    homepage: "https://www.riksbank.se/sv/press-och-publicerat/"
  }
];
