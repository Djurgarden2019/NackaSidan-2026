export type StockholmNewsletterEdition201 = {
  date: string;
  subject: string;
  intro: string;
  leadSlug?: string;
  storySlugs: string[];
  trafficNote?: string;
  status: 'draft' | 'ready' | 'sent';
};

export const stockholmNewsletter201 = {
  name: 'Stockholm i korthet',
  promise: 'Det viktigaste från Stockholm – verifierat, lokalt och begripligt.',
  cadence: 'vardagar',
  preferredTime: '07:00',
  sections: ['Morgonens viktigaste', 'Trafik', 'Stadshuset', 'Din stadsdel', 'Kultur & stadsliv'],
  editorialRules: [
    'Nyhetsbrevet får bara länka publicerade artiklar.',
    'Trafikuppgifter måste färskkontrolleras före utskick.',
    'Rubriker ska beskriva innehållet utan clickbait.',
    'Max fem huvudpunkter för att behålla hög signalnivå.'
  ]
};

export const stockholmNewsletterEditions201: StockholmNewsletterEdition201[] = [];
