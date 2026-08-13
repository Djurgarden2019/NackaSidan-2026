export type StockholmDesk = 'Trafik' | 'Politik' | 'Bostad' | 'Näringsliv' | 'Kultur' | 'Trygghet' | 'Stadsliv' | 'Stadsdelar';
export type NewsroomStage = 'tip' | 'research' | 'verify' | 'write' | 'ready' | 'published' | 'update';

export type NewsroomAssignment = {
  id: string;
  desk: StockholmDesk;
  headline: string;
  stage: NewsroomStage;
  priority: 1 | 2 | 3;
  primarySources: string[];
  lastCheckedAt?: string;
  publishBy?: string;
  notes?: string;
};

export const stockholmNewsroomQueue181: NewsroomAssignment[] = [];

export const stockholmNewsroom181 = {
  name: 'Stockholmsdesken',
  goal: 'Publicera färre men bättre lokala nyheter med verifierbar källa, tydlig tidsstämpel och lokal konsekvens.',
  dailyFlow: [
    'Kontrollera trafik och större driftstörningar.',
    'Kontrollera Stockholms stad, Region Stockholm och relevanta myndigheter.',
    'Välj nyheter med tydlig betydelse för stockholmare.',
    'Verifiera fakta och skilj pressmeddelande från redaktionell slutsats.',
    'Skriv artikel med källa, tid och vad som händer härnäst.',
    'Uppdatera artikeln när nya beslut eller besked kommer.'
  ],
  publishingGate: [
    'Minst en verifierbar källa.',
    'Publicerings- eller kontrolltid finns.',
    'Rubriken stöds av artikelns fakta.',
    'Vanlig nyhet är normalt högst tio dagar gammal.',
    'Analys och kommentar är tydligt märkta.',
    'Personuppgifter och brottsuppgifter har redaktionell försiktighetskontroll.'
  ]
};
