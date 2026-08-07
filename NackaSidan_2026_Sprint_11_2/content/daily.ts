export type DailyItem = {
  label: string;
  title: string;
  text: string;
  href?: string;
};

export const dailyEdition = {
  date: 'Fredag 7 augusti 2026',
  title: 'Det viktigaste på fem minuter',
  intro: 'En koncentrerad morgonbriefing med nyheter, analys, siffror och kultur – för dig som vill förstå dagen innan den börjar.',
  lead: {
    label: 'Dagens huvudfråga',
    title: 'Kan diplomatin kring Hormuzsundet hålla?',
    text: 'Den omedelbara risken har minskat, men marknaden väntar fortfarande på konkreta bevis på säkrare sjöfart och stabilare energiflöden.',
    href: '/artikel/veckans-analys',
  },
  items: [
    { label: 'Sverige', title: 'AI blir en del av valrörelsens infrastruktur', text: 'Verifiering, ansvar och snabb rättelse blir lika viktiga som traditionell politisk kommunikation.', href: '/sverige' },
    { label: 'Ekonomi', title: 'Lägre inflation ger andrum – inte full fart', text: 'Hushållens kalkyl förbättras, men arbetsmarknaden fortsätter att bromsa återhämtningen.', href: '/ekonomi' },
    { label: 'Vetenskap & AI', title: 'Från experiment till vardagsverktyg', text: 'Organisationer går från enskilda tester till styrda arbetsflöden med tydligare ansvar.', href: '/artikel/ai-och-arbetsmarknaden' },
    { label: 'Kultur', title: 'Den långsamma läsningen gör motstånd', text: 'Böcker och essäer får ny tyngd när nyhetsflödet blir snabbare och mer fragmenterat.', href: '/kultur' },
  ] as DailyItem[],
  number: { value: '2,00 %', label: 'Styrränta', text: 'Räntenivån präglar fortfarande hushållens och företagens beslut trots lägre inflation.' },
  quote: 'Det viktigaste är inte att läsa allt – utan att förstå vad som förändrar helheten.',
  watch: ['Verifierbara besked om sjöfarten i Hormuzsundet', 'Nya signaler från svensk arbetsmarknad', 'Hur medier hanterar AI-genererat material inför valet'],
};
