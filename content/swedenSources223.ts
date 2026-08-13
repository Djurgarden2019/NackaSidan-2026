export const swedenSources223 = [
  { id: 'val', name: 'Valmyndigheten', kind: 'myndighet', baseUrl: 'https://www.val.se/' },
  { id: 'scb', name: 'SCB', kind: 'offentlig-statistik', baseUrl: 'https://www.scb.se/' },
  { id: 'riksbanken', name: 'Riksbanken', kind: 'myndighet', baseUrl: 'https://www.riksbank.se/' },
  { id: 'riksdagen', name: 'Sveriges riksdag', kind: 'primarkalla', baseUrl: 'https://www.riksdagen.se/' },
  { id: 'regeringen', name: 'Regeringskansliet', kind: 'primarkalla', baseUrl: 'https://www.regeringen.se/' },
  { id: 'bra', name: 'Brottsförebyggande rådet', kind: 'myndighet', baseUrl: 'https://bra.se/' },
  { id: 'socialstyrelsen', name: 'Socialstyrelsen', kind: 'myndighet', baseUrl: 'https://www.socialstyrelsen.se/' },
  { id: 'forsvarsmakten', name: 'Försvarsmakten', kind: 'myndighet', baseUrl: 'https://www.forsvarsmakten.se/' },
  { id: 'energimyndigheten', name: 'Energimyndigheten', kind: 'myndighet', baseUrl: 'https://www.energimyndigheten.se/' }
] as const;

export const swedenSourcePolicy223 = {
  primaryFirst: true,
  requireSourceDate: true,
  requireCheckedAt: true,
  rules: [
    'Beslut verifieras mot ansvarig institution eller myndighet.',
    'Statistik hämtas i första hand från producenten av statistiken.',
    'Nyhetsmedier används för rapportering, intervjuer och kompletterande kontext.',
    'En källa ska inte beskrivas som oberoende om den själv är part i frågan.',
    'Gamla källor får användas som bakgrund men ska inte presenteras som dagens nyhet.'
  ]
};
