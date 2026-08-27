export type DailyItem = {
  label: string;
  title: string;
  text: string;
  href?: string;
};

export const dailyEdition = {
  date: 'Fredag 28 augusti 2026',
  title: 'Det viktigaste på fem minuter',
  intro: 'En koncentrerad morgonbriefing med nyheter, analys, siffror och kultur – för dig som vill förstå dagen innan den börjar.',
  lead: {
    label: 'Dagens huvudfråga',
    title: 'Irankriget har nått ett dyrt och farligt dödläge',
    text: 'Efter sex månader har varken Washington eller Teheran nått sina mål. Blockaden, sanktionerna och den stängda sjöfarten pressar ekonomi och energimarknad.',
    href: '/artikel/veckans-analys',
  },
  items: [
    { label: 'Sverige', title: 'Regeringen höjer BNP-prognosen inför valet', text: 'Tillväxten väntas nå 2,5 procent 2026, men hushållens bild av ekonomin är fortsatt försiktig.', href: '/sverige' },
    { label: 'Val 2026', title: 'Regeringsfrågan blir allt svårare att lösa', text: 'Partiernas röda linjer kan tvinga fram oväntade kompromisser efter valdagen.', href: '/val-2026' },
    { label: 'Vetenskap & AI', title: 'AI användes under synräddande hjärnkirurgi', text: 'Ett system analyserade operationsvideo i realtid och hjälpte kirurger identifiera känsliga strukturer.', href: '/vetenskap' },
    { label: 'Kultur', title: 'Kulturpolitiken pressas om AI och arbetsvillkor', text: 'Kulturarbetare kräver tydligare besked från partierna inför valet.', href: '/kultur' },
  ] as DailyItem[],
  number: { value: '2,00 %', label: 'Styrränta', text: 'Räntenivån präglar fortfarande hushållens och företagens beslut trots lägre inflation.' },
  quote: 'Det viktigaste är inte att läsa allt – utan att förstå vad som förändrar helheten.',
  watch: ['Qatars försök att återstarta diplomatin med Iran', 'Nya besked i den svenska valrörelsen', 'Utvecklingen efter helgens stora klimatdemonstration i Stockholm'],
};
