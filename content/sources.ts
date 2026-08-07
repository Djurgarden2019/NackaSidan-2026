export type EditorialSource = {
  name: string;
  category: string;
  url: string;
  role: string;
  status: 'Klar att ansluta' | 'Redaktionell källa';
};

export const editorialSources: EditorialSource[] = [
  { name: 'SVT Nyheter', category: 'Sverige', url: 'https://www.svt.se/nyheter', role: 'Nationellt nyhetsläge och verifiering', status: 'Klar att ansluta' },
  { name: 'Sveriges Radio', category: 'Sverige', url: 'https://www.sverigesradio.se/nyheter', role: 'Löpande nyheter och public service', status: 'Klar att ansluta' },
  { name: 'SCB', category: 'Data', url: 'https://www.scb.se/', role: 'Primärkälla för svensk statistik', status: 'Redaktionell källa' },
  { name: 'Riksbanken', category: 'Ekonomi', url: 'https://www.riksbank.se/', role: 'Ränta, penningpolitik och prognoser', status: 'Redaktionell källa' },
  { name: 'Regeringen', category: 'Sverige', url: 'https://www.regeringen.se/', role: 'Beslut, propositioner och pressmeddelanden', status: 'Redaktionell källa' },
  { name: 'EU-kommissionen', category: 'Världen', url: 'https://commission.europa.eu/', role: 'EU-beslut, reglering och bakgrund', status: 'Redaktionell källa' },
];

export const newsroomRules = [
  'Minst två oberoende källor vid omstridda sakuppgifter.',
  'Primärkällan prioriteras när beslut, statistik eller regler återges.',
  'AI får föreslå sammanfattning och frågor – publicering kräver redaktionellt beslut.',
  'Tid, källa och ändringar ska vara synliga för läsaren.',
];
