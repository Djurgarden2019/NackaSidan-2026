export type StockholmSafetyStory = {
  id: string;
  category: 'Polis' | 'Trygghet' | 'Räddningstjänst' | 'Trafikolycka' | 'Domstol' | 'Förebyggande';
  area: string;
  headline: string;
  summary: string;
  occurredAt?: string;
  publishedAt: string;
  sourceUrl: string;
  sourceType: 'Polisen' | 'Räddningstjänst' | 'Domstol' | 'Stockholms stad' | 'Sekundärkälla';
  status: 'published' | 'verify-before-publish';
};

export const stockholmSafetyStories174: StockholmSafetyStory[] = [];

export const stockholmSafetyDesk174 = {
  title: 'Stockholm Trygghet',
  purpose: 'Rapportera om brott, olyckor och trygghetsfrågor sakligt, verifierat och utan sensationsspråk.',
  editorialRules: [
    'Använd i första hand Polisen, räddningstjänst, domstol eller annan verifierbar primärkälla.',
    'Skilj misstanke från åtal och dom.',
    'Publicera inte identifierande personuppgifter utan tydligt allmänintresse.',
    'Undvik spekulation om motiv innan detta är verifierat.',
    'Ange tid och plats så precist som källan tillåter.',
    'Följ även förebyggande arbete, trygghetsmätningar och långsiktiga trender – inte bara enskilda händelser.'
  ]
};
