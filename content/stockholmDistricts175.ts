export type StockholmDistrict = {
  slug: string;
  name: string;
  borough?: string;
  focus: string[];
  latestArticleSlugs: string[];
};

export const stockholmDistricts175: StockholmDistrict[] = [
  { slug: 'sodermalm', name: 'Södermalm', focus: ['Bostäder','Kultur','Stadsliv','Trafik'], latestArticleSlugs: [] },
  { slug: 'norrmalm', name: 'Norrmalm', focus: ['Stadshuset','Näringsliv','Trafik','Stadsliv'], latestArticleSlugs: [] },
  { slug: 'ostermalm', name: 'Östermalm', focus: ['Bostäder','Stadsliv','Kultur','Trafik'], latestArticleSlugs: [] },
  { slug: 'kungsholmen', name: 'Kungsholmen', focus: ['Bostäder','Trafik','Trygghet','Stadsmiljö'], latestArticleSlugs: [] },
  { slug: 'hagersten-alvsjo', name: 'Hägersten-Älvsjö', focus: ['Älvsjö','Bostäder','Trafik','Skola'], latestArticleSlugs: ['alvsjo-stockholmsmassan-framtid'] },
  { slug: 'skarholmen', name: 'Skärholmen', focus: ['Stadsutveckling','Trygghet','Handel','Skola'], latestArticleSlugs: [] },
  { slug: 'enskede-arsta-vantor', name: 'Enskede-Årsta-Vantör', focus: ['Befolkning','Bostäder','Trafik','Skola'], latestArticleSlugs: ['stockholm-en-miljon-invanare-2026'] },
  { slug: 'farsta', name: 'Farsta', focus: ['Bostäder','Centrum','Trafik','Trygghet'], latestArticleSlugs: [] },
  { slug: 'jarva', name: 'Järva', focus: ['Befolkning','Trygghet','Bostäder','Näringsliv'], latestArticleSlugs: ['stockholm-en-miljon-invanare-2026'] },
  { slug: 'bromma', name: 'Bromma', focus: ['Stadsutveckling','Flygplats','Bostäder','Trafik'], latestArticleSlugs: ['bromma-framtid-stadsutveckling'] }
];

export const stockholmDistrictDesk175 = {
  title: 'Stockholm stadsdel för stadsdel',
  intro: 'Läsaren ska kunna följa sin egen del av Stockholm och snabbt hitta lokala beslut, byggen, trafik, kultur och trygghetsfrågor.',
  editorialRules: [
    'Varje artikel kan kopplas till en eller flera stadsdelar.',
    'Stadsdelssidor ska prioritera lokalt relevanta artiklar framför generella Stockholmstexter.',
    'Visa senaste uppdatering och tydliga ämnesfilter.',
    'Bygg inte statistik på antaganden – använd verifierade kommun- eller myndighetsdata.'
  ]
};
