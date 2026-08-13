export type StockholmEditorialPitch = {
  sprint: number;
  slug: string;
  section: string;
  headline: string;
  angle: string;
  sourcePriority: string[];
  status: 'researched' | 'verify-before-publish';
};

export const stockholmEditorial164: StockholmEditorialPitch[] = [
  {
    sprint: 164,
    slug: 'stockholm-budget-2026-stadsutveckling',
    section: 'Stockholm · Ekonomi',
    headline: 'Stockholms budget 2026: projekten som förändrar staden',
    angle: 'Fördjupning om stadens investeringar, Slussen, Bromma, Älvsjö och Årsta med fokus på kostnader, tidplan och konsekvenser för stockholmarna.',
    sourcePriority: ['Stockholms stads budget 2026', 'Stockholms stads projekt- och beslutsunderlag'],
    status: 'researched'
  },
  {
    sprint: 165,
    slug: 'stockholm-slussen-laget-2026',
    section: 'Stockholm · Stadsutveckling',
    headline: 'Slussen 2026: vad är klart, vad återstår och vad kostar det?',
    angle: 'Statusartikel som skiljer färdigställda delar från återstående arbeten och följer kostnadsutvecklingen.',
    sourcePriority: ['Stockholms stad', 'Trafikkontoret'],
    status: 'verify-before-publish'
  },
  {
    sprint: 166,
    slug: 'bromma-parkstad-framtid',
    section: 'Stockholm · Bostäder',
    headline: 'Brommas nästa kapitel: så kan flygplatsområdet bli en ny stadsdel',
    angle: 'Förklarande artikel om planeringen, bostäder, kollektivtrafik, arbetsplatser och de politiska vägvalen.',
    sourcePriority: ['Stockholms stad', 'Stadsbyggnadskontoret'],
    status: 'verify-before-publish'
  },
  {
    sprint: 167,
    slug: 'alvsjo-stadsutveckling-2026',
    section: 'Stockholm · Söderort',
    headline: 'Älvsjö växer: planerna som kan förändra området kring mässan',
    angle: 'Lokal fördjupning om bostäder, arbetsplatser, trafik och stadsstruktur.',
    sourcePriority: ['Stockholms stad', 'Stadsbyggnadskontoret'],
    status: 'verify-before-publish'
  },
  {
    sprint: 168,
    slug: 'stockholm-trafikbevakning',
    section: 'Stockholm · Trafik',
    headline: 'Trafikkollen Stockholm: besluten och störningarna som påverkar vardagen',
    angle: 'Återkommande bevakningsformat för tunnelbana, buss, pendeltåg, vägar och cykel.',
    sourcePriority: ['Region Stockholm', 'SL', 'Trafikverket', 'Stockholms stad'],
    status: 'verify-before-publish'
  }
];
