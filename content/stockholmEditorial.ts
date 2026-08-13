export type StockholmDesk = {
  name: string;
  slug: string;
  description: string;
  beats: string[];
  sourcePriority: string[];
};

export const stockholmDesk: StockholmDesk = {
  name: 'Stockholm',
  slug: 'stockholm',
  description: 'NackaSidans bevakning av Stockholms stad och Storstockholm med nyheter, analyser, guider och fördjupningar.',
  beats: [
    'Politik & Stadshuset',
    'Trafik & kollektivtrafik',
    'Bostäder & stadsutveckling',
    'Ekonomi & näringsliv',
    'Trygghet',
    'Kultur & evenemang',
    'Restaurang & stadsliv',
    'Miljö & klimat'
  ],
  sourcePriority: [
    'Stockholms stad och offentliga handlingar',
    'Region Stockholm och SL',
    'Trafikverket och andra myndigheter',
    'Polisen och räddningstjänsten',
    'Bolag och organisationers primärkällor',
    'Etablerade redaktionella medier som kompletterande verifiering'
  ]
};

export const stockholmEditorialRules = {
  maxAgeDaysForNews: 10,
  requirePublishedAt: true,
  requireSourceLinks: true,
  distinguishNewsAnalysisOpinion: true,
  noInventedFacts: true,
  preferPrimarySources: true,
  articleTargets: {
    newsWords: '300–600',
    featureWords: '600–1200',
    briefWords: '120–250'
  }
};

export const stockholmPipeline = [
  { sprint: 163, section: 'Stockholm · Politik', focus: 'Stadshuset: beslut, budget, val och kommunal service', status: 'research' },
  { sprint: 164, section: 'Stockholm · Trafik', focus: 'SL, tunnelbana, pendeltåg, vägar och större trafikprojekt', status: 'research' },
  { sprint: 165, section: 'Stockholm · Bostad', focus: 'Bostadsbyggande, hyror, detaljplaner och nya stadsdelar', status: 'research' },
  { sprint: 166, section: 'Stockholm · Kultur', focus: 'Konserter, museer, scenkonst och större evenemang', status: 'research' },
  { sprint: 167, section: 'Stockholm · Näringsliv', focus: 'Företag, handel, arbetsmarknad och cityutveckling', status: 'research' },
  { sprint: 168, section: 'Stockholm · Stadsliv', focus: 'Restauranger, öppningar, stadsrum och vardagsguider', status: 'research' }
];
