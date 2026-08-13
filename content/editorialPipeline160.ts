export type EditorialPitch = {
  sprint: number;
  slug: string;
  section: string;
  headline: string;
  angle: string;
  primarySources: string[];
  status: 'researched' | 'draft-next';
};

export const editorialPipeline160: EditorialPitch[] = [
  {
    sprint: 160,
    slug: 'val-2026-nacka-guide',
    section: 'Nacka · Val 2026',
    headline: 'Valet 2026 i Nacka – datumen, förtidsröstningen och frågorna vi ska granska',
    angle: 'Serviceguide kombinerad med lokal politisk bevakning inför valdagen 13 september.',
    primarySources: ['https://www.nacka.se/kommun--politik/delta-och-paverka/val-2026/', 'https://www.nacka.se/kommun--politik/delta-och-paverka/val-2026/fortidsrosta/'],
    status: 'researched'
  },
  {
    sprint: 161,
    slug: 'skolstart-nacka-2026',
    section: 'Nacka · Skola',
    headline: 'Skolstart i Nacka – detta gäller läsåret 2026/27',
    angle: 'Praktisk guide med skolstart, lov och vad familjer behöver hålla reda på.',
    primarySources: ['https://www.nacka.se/valfard-skola/nackas-kommunala-skolor/vara-verksamheter/terminer-och-lov/'],
    status: 'researched'
  },
  {
    sprint: 162,
    slug: 'nacka-gymnasium-renovering',
    section: 'Nacka · Skola',
    headline: 'Nacka gymnasium står inför stor renovering – detta vet vi om planen',
    angle: 'Följ investering, projektering, tidplan och påverkan på elever och verksamhet.',
    primarySources: ['https://www.nacka.se/kommun--politik/ekonomi-och-statistik/mal-och-budget/'],
    status: 'draft-next'
  },
  {
    sprint: 163,
    slug: 'nacka-val-loften-koll',
    section: 'Nacka · Politik',
    headline: 'Löfteskollen: vad lovar partierna Nackaborna inför valet?',
    angle: 'Jämför partiernas lokala löften område för område och följ dem efter valet.',
    primarySources: ['https://www.nacka.se/kommun--politik/delta-och-paverka/val-2026/'],
    status: 'draft-next'
  }
];
