export type StockholmSectionCard = {
  id: string;
  title: string;
  eyebrow?: string;
  summary: string;
  href?: string;
  meta?: string;
  status?: 'published' | 'verify-before-publish' | 'background';
};

export const stockholmSectionCardRules196 = {
  maxCardsPerModule: 6,
  rules: [
    'Published cards may link to an article or verified source-backed module item.',
    'verify-before-publish must not appear in public cards.',
    'Background items must be labelled as background and never presented as breaking news.',
    'Cards should expose enough context to understand why the story matters locally.'
  ]
};

export function publicStockholmCards196(cards: StockholmSectionCard[]) {
  return cards.filter((card) => card.status !== 'verify-before-publish').slice(0, stockholmSectionCardRules196.maxCardsPerModule);
}
