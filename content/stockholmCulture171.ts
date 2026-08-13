export type StockholmCultureItem = {
  id: string;
  category: 'Konsert' | 'Teater' | 'Konst' | 'Film' | 'Litteratur' | 'Festival' | 'Familj' | 'Debatt';
  title: string;
  venue: string;
  startsAt: string;
  endsAt?: string;
  summary: string;
  sourceUrl: string;
  checkedAt: string;
};

export const stockholmCultureItems171: StockholmCultureItem[] = [];

export const stockholmCultureDesk171 = {
  title: 'Kultur & Stockholm',
  sections: ['Det händer i veckan', 'Stora premiärer', 'Gratis i Stockholm', 'Recensioner', 'Kulturdebatt', 'Familj'],
  editorialRules: [
    'Evenemang ska ha verifierat datum, plats och källa.',
    'Ta bort eller arkivera passerade evenemang automatiskt i visningen.',
    'Recensioner och kommentarer ska märkas som redaktionella bedömningar.',
    'Prioritera kultur med tydlig Stockholmsanknytning.',
    'Blanda stora institutioner med mindre scener och lokala initiativ.'
  ]
};
