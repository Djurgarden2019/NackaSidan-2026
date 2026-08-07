export type NewsFeedItem = {
  time: string;
  section: string;
  title: string;
  summary: string;
  href: string;
  type: 'Briefing' | 'Analys' | 'Fördjupning';
};

// Sprint 8 använder endast innehåll som redan finns i NackaSidans redaktionella register.
// Flödet är därför ett publiceringsflöde, inte en extern livewire.
export const latestNews: NewsFeedItem[] = [
  {
    time: '7 aug · 07.00',
    section: 'Nacka Daily',
    title: 'Det viktigaste på fem minuter',
    summary: 'Dagens briefing samlar huvudfrågan, Sverige, ekonomi, AI, kultur och det redaktionen följer under dagen.',
    href: '/daily',
    type: 'Briefing',
  },
  {
    time: '6 aug · 18.30',
    section: 'Världen',
    title: 'Hormuzsundet: diplomatin köper tid – men löser inte krisen',
    summary: 'En preliminär öppning kan minska den omedelbara risken, men de strukturella konflikterna består.',
    href: '/artikel/veckans-analys',
    type: 'Analys',
  },
  {
    time: '6 aug · 17.00',
    section: 'Briefing',
    title: 'Veckan på 10 minuter',
    summary: 'Fyra skeenden som hjälper läsaren att förstå veckans riktning och vad som kan bli viktigt härnäst.',
    href: '/artikel/veckan-pa-tio-minuter',
    type: 'Briefing',
  },
  {
    time: '6 aug · 16.15',
    section: 'AI',
    title: 'AI och arbetsmarknaden: från experiment till vardagsverktyg',
    summary: 'När generativ AI flyttar in i arbetsflöden förändras både arbetsuppgifter och kompetenskrav.',
    href: '/artikel/ai-och-arbetsmarknaden',
    type: 'Fördjupning',
  },
];
