export type StockholmCorrection204 = {
  articleSlug: string;
  correctedAt: string;
  before: string;
  after: string;
  reason: string;
  material: boolean;
};

export const stockholmCorrections204: StockholmCorrection204[] = [];

export const stockholmCorrectionsPolicy204 = {
  title: 'Rättelser och uppdateringar',
  principles: [
    'Sakfel rättas så snart de upptäcks.',
    'Väsentliga rättelser ska beskrivas öppet i artikeln.',
    'Mindre språkändringar behöver inte loggas som sakrättelser.',
    'Publiceringsdatum får inte ändras för att få gammalt material att se nytt ut.',
    'Uppdateringstid ska ändras när innehållet har förändrats materiellt.'
  ]
};
