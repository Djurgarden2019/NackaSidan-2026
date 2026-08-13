export type StockholmExplainer202 = {
  slug: string;
  question: string;
  shortAnswer: string;
  topic: 'Trafik' | 'Bostad' | 'Politik' | 'Ekonomi' | 'Stadsutveckling';
  sourceUrls: string[];
  checkedAt: string;
  status: 'published' | 'verify-before-publish';
};

export const stockholmExplainers202: StockholmExplainer202[] = [];

export const stockholmExplainerDesk202 = {
  title: 'Så fungerar Stockholm',
  examples: [
    'Vem bestämmer över tunnelbanan?',
    'Hur går en detaljplan till?',
    'Vad bestämmer Stadshuset och vad bestämmer Regionen?',
    'Hur finansieras stora stadsbyggnadsprojekt?',
    'Vad betyder samråd och överklagande?'
  ],
  rules: [
    'Förklara institutioner och processer utan partipolitisk värdering.',
    'Länka till officiell information när det går.',
    'Ange kontrolltid när regler eller processer kan förändras.',
    'Kort svar först, fördjupning därefter.'
  ]
};
