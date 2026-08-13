export type StockholmSource = {
  id: string;
  name: string;
  url: string;
  desks: string[];
  authority: 'primary' | 'official' | 'secondary';
  useFor: string;
};

export const stockholmSources182: StockholmSource[] = [
  { id: 'stockholms-stad', name: 'Stockholms stad', url: 'https://start.stockholm/', desks: ['Politik','Bostad','Stadsdelar','Kultur','Stadsliv'], authority: 'primary', useFor: 'Beslut, budget, stadsutveckling, statistik och kommunal service.' },
  { id: 'region-stockholm', name: 'Region Stockholm', url: 'https://www.regionstockholm.se/', desks: ['Trafik','Vård','Kultur'], authority: 'primary', useFor: 'Regional kollektivtrafik, vård, investeringar och regionala beslut.' },
  { id: 'sl', name: 'SL', url: 'https://sl.se/', desks: ['Trafik'], authority: 'primary', useFor: 'Resenärsinformation och kollektivtrafik.' },
  { id: 'trafikverket', name: 'Trafikverket', url: 'https://www.trafikverket.se/', desks: ['Trafik'], authority: 'primary', useFor: 'Statliga vägar, järnväg, större infrastruktur och trafiklägen.' },
  { id: 'polisen', name: 'Polisen', url: 'https://polisen.se/', desks: ['Trygghet'], authority: 'primary', useFor: 'Polishändelser, pressinformation och brottsförebyggande information.' },
  { id: 'scb', name: 'SCB', url: 'https://www.scb.se/', desks: ['Bostad','Näringsliv','Stadsdelar'], authority: 'official', useFor: 'Befolkning, ekonomi, bostäder och arbetsmarknadsstatistik.' }
];
