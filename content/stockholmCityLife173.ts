export type StockholmCityLifeItem = {
  id: string;
  category: 'Restaurang' | 'Café' | 'Bar' | 'Butik' | 'Marknad' | 'Nattliv' | 'Stadsmiljö';
  name: string;
  area: string;
  headline: string;
  summary: string;
  sourceUrl: string;
  checkedAt: string;
  status: 'published' | 'verify-before-publish';
};

export const stockholmCityLifeItems173: StockholmCityLifeItem[] = [];

export const stockholmCityLifeDesk173 = {
  title: 'Stockholm Stadsliv',
  intro: 'Restauranger, caféer, butiker, marknader och förändringar i Stockholms offentliga rum – med fokus på vad som faktiskt är nytt och lokalt relevant.',
  sections: ['Nya öppningar', 'Stänger', 'Kvartersfavoriter', 'Helgens tips', 'Stadsmiljö', 'Mat & dryck'],
  editorialRules: [
    'Verifiera öppningsdatum och adress innan publicering.',
    'Skilj redaktionella rekommendationer från betalt eller sponsrat innehåll.',
    'Undvik listor som bygger på obekräftade sociala medier-rykten.',
    'Vanliga nyheter ska normalt vara högst tio dagar gamla.',
    'När en verksamhet stänger ska orsaken bara anges om den är verifierad.'
  ]
};
