export type NewsFeedItem = {
  time: string;
  section: string;
  title: string;
  summary: string;
  href: string;
  type: 'Briefing' | 'Analys' | 'Fördjupning';
};

export const latestNews: NewsFeedItem[] = [
  {
    time: '29 aug · 10.30',
    section: 'Världen',
    title: 'Dagens sex viktigaste världsnyheter är genomgångna',
    summary: 'Startsidan samlar det avgörande läget kring Iran och Hormuz, Ukraina, Gaza, europeisk diplomati och EU:s budgetstrid – med längre analyser och källor.',
    href: '/',
    type: 'Briefing',
  },
  {
    time: '29 aug · 10.20',
    section: 'Sport',
    title: 'Sporthelgen: Finnkampen inleds och Damallsvenskan fortsätter',
    summary: 'Dagens agenda är framflyttad till lördagens tävlingar. Resultat, matchartiklar och analyser ligger kvar med sina ursprungliga publiceringsdatum.',
    href: '/sport',
    type: 'Briefing',
  },
  {
    time: '28 aug · 15.20',
    section: 'Sverige',
    title: 'Regeringen höjer BNP-prognosen inför valet',
    summary: 'Prognosen har kompletterats med konsekvenser för hushåll, företag och offentlig sektor samt en större valekonomisk analys.',
    href: '/sverige/artikel/regeringen-hojer-bnp-prognosen-2026',
    type: 'Fördjupning',
  },
  {
    time: '28 aug · 15.20',
    section: 'Sverige · Politik',
    title: 'Regeringsfrågan skärps när valdagen närmar sig',
    summary: 'En fördjupning om partiernas röda linjer, mandatfördelningen och varför regeringsbildningen kan bli valets verkliga prövning.',
    href: '/sverige/artikel/valrorelsen-regeringsfragan-skarps',
    type: 'Analys',
  },
  {
    time: '28 aug · 15.20',
    section: 'Sverige · EU',
    title: 'Sverige kräver nedskärningar i EU:s långtidsbudget',
    summary: 'Artikeln granskar vad en mindre EU-budget betyder för Sveriges avgift, forskning, regional utveckling och försvar.',
    href: '/sverige/artikel/sverige-kraver-mindre-eu-budget',
    type: 'Fördjupning',
  },
  {
    time: '28 aug · 15.20',
    section: 'Sverige · Ekonomi',
    title: 'Så läser du de viktigaste svenska ekonomiska siffrorna',
    summary: 'BNP, konsumtion, export, arbetsmarknad, inflation och räntor sätts ihop till en tydligare bild av konjunkturen.',
    href: '/sverige/artikel/sverige-ekonomi-laget-2026',
    type: 'Fördjupning',
  },
  {
    time: '28 aug · 15.20',
    section: 'Sverige · Arbetsmarknad',
    title: 'Därför kan två officiella arbetslöshetstal skilja sig',
    summary: 'AKU och BAS jämförs, tillsammans med en analys av hur statistikval påverkar den politiska debatten.',
    href: '/sverige/artikel/arbetsloshet-varfor-siffrorna-skiljer-sig',
    type: 'Analys',
  },
  {
    time: '28 aug · 15.20',
    section: 'Sverige · Regioner',
    title: 'Miljardinvesteringar prövar hela samhällsbygget i norra Sverige',
    summary: 'Industriinvesteringarna analyseras tillsammans med bostäder, kompetensförsörjning, elnät och kommunal service.',
    href: '/sverige/artikel/norrland-regionbevakning',
    type: 'Analys',
  },
];
