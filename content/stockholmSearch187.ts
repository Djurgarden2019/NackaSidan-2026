export type StockholmSearchDocument = {
  id: string;
  title: string;
  summary?: string;
  tags?: string[];
  districts?: string[];
  section?: string;
  url: string;
  publishedAt?: string;
  status?: string;
};

export function buildStockholmSearchIndex187(items: StockholmSearchDocument[]) {
  return items
    .filter((item) => item.status !== 'verify-before-publish')
    .map((item) => ({ ...item, searchable: [item.title, item.summary, item.section, ...(item.tags ?? []), ...(item.districts ?? [])].filter(Boolean).join(' ').toLocaleLowerCase('sv-SE') }));
}

export function searchStockholm187(index: ReturnType<typeof buildStockholmSearchIndex187>, query: string) {
  const terms = query.trim().toLocaleLowerCase('sv-SE').split(/\s+/).filter(Boolean);
  if (!terms.length) return index;
  return index.filter((item) => terms.every((term) => item.searchable.includes(term)));
}

export const stockholmSearchRules187 = {
  placeholder: 'Sök i Stockholm',
  rules: [
    'Utkast som väntar på verifiering ska inte indexeras publikt.',
    'Sökningen ska hitta rubrik, sammanfattning, ämne, tagg och stadsdel.',
    'Resultat sorteras senare efter relevans, aktualitet och redaktionell vikt.',
    'Sökningen ska kunna utökas till Nacka utan att duplicera logik.'
  ]
};
