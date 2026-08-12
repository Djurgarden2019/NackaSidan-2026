export type SourceRef = {
  label: string;
  url?: string;
  type: 'Primärkälla' | 'Statistik' | 'Bakgrund' | 'Redaktionell källa';
};

export type KnowledgePoint = { label: string; text: string };
export type ArticleStatus = 'draft' | 'review' | 'published' | 'archived';
export type HomepagePlacement = { role: 'lead' | 'top' | 'feature'; order: number };

export type Article = {
  slug: string; section: string; title: string; intro: string; author: string;
  published: string; updated: string; publishedAt: string; updatedAt: string;
  status: ArticleStatus; homepage?: HomepagePlacement; teaserTitle?: string; teaserSummary?: string;
  readingTime: string; image?: string; imageCaption?: string;
  body: { heading?: string; paragraphs: string[] }[]; knowledge: KnowledgePoint[]; facts: string[];
  analysis: string; consequences: string[]; sources: SourceRef[]; tags: string[]; related: string[];
};

/*
 * Core editorial archive. New, fully sourced local longform stories are kept in
 * localArticles153.ts and appended below. This keeps the legacy archive stable
 * while the new article standard is rolled out story by story.
 */
import { localArticles153 } from './localArticles153';

export const legacyArticles: Article[] = [
  {
    slug: 'veckans-analys', section: 'Veckans stora analys', title: 'Hormuzsundet: diplomatin köper tid – men löser inte krisen',
    intro: 'En preliminär överenskommelse kan minska den omedelbara risken för militär upptrappning. Den underliggande konflikten om säkerhet, energi och regional makt består.', author: 'NackaSidans redaktion',
    published: '6 augusti 2026', updated: '6 augusti 2026 kl. 18.30', publishedAt: '2026-08-06T18:30:00+02:00', updatedAt: '2026-08-06T18:30:00+02:00', status: 'published', homepage: { role: 'lead', order: 0 }, readingTime: '9 min',
    body: [{ heading: 'En flaskhals för världsekonomin', paragraphs: ['Hormuzsundet är en av världsekonomins mest känsliga flaskhalsar. När spänningen ökar påverkas inte bara oljepriset, utan också försäkringar, fraktkostnader och företagens riskbedömningar långt utanför regionen.', 'Veckans diplomatiska signaler bör därför ses som ett andrum snarare än ett avgörande genombrott.'] }, { heading: 'Varför detta spelar roll för Sverige', paragraphs: ['För Sverige är effekten indirekt men verklig. Energipriser, inflation och industrins kostnader påverkas snabbt av störningar i globala handelsflöden.'] }],
    knowledge: [{ label: 'Vad hände?', text: 'Parterna signalerar en preliminär diplomatisk öppning.' }], facts: ['Sundet förbinder Persiska viken med Omanviken och Indiska oceanen.'], analysis: 'Det avgörande är om politiska formuleringar kan översättas till stabil sjöfart och mätbara säkerhetsförbättringar.', consequences: ['Fortsatt känslighet i energi- och fraktpriser.'], sources: [{ label: 'Offentliga lägesbilder', type: 'Bakgrund' }], tags: ['Mellanöstern'], related: []
  },
  {
    slug: 'veckan-pa-tio-minuter', section: 'NackaSidan Briefing', title: 'Veckan på 10 minuter', intro: 'Fyra skeenden som hjälper dig att förstå veckan – och vad som kan bli viktigt härnäst.', author: 'NackaSidans redaktion', published: '6 augusti 2026', updated: '6 augusti 2026 kl. 17.00', publishedAt: '2026-08-06T17:00:00+02:00', updatedAt: '2026-08-06T17:00:00+02:00', status: 'published', readingTime: '10 min', body: [{ heading: 'Veckans riktning', paragraphs: ['Ekonomi, geopolitik, teknik och kultur förändras samtidigt och kräver mer sammanhang än ett snabbt nyhetsflöde kan ge.'] }], knowledge: [{ label: 'Format', text: 'En koncentrerad veckobriefing.' }], facts: ['Fyra huvudteman'], analysis: 'Fördjupning och källtransparens ökar värdet.', consequences: ['Fortsatt fokus på verifiering.'], sources: [{ label: 'NackaSidans veckosammanställning', type: 'Redaktionell källa' }], tags: ['Briefing'], related: ['veckans-analys']
  },
  {
    slug: 'ai-och-arbetsmarknaden', section: 'Tema: AI', title: 'AI och arbetsmarknaden: från experiment till vardagsverktyg', intro: 'När generativ AI flyttar in i kontor, skolor och myndigheter förändras både arbetsuppgifter och kraven på kompetens.', author: 'NackaSidans redaktion', published: '6 augusti 2026', updated: '6 augusti 2026 kl. 16.15', publishedAt: '2026-08-06T16:15:00+02:00', updatedAt: '2026-08-06T16:15:00+02:00', status: 'published', homepage: { role: 'feature', order: 1 }, readingTime: '8 min', body: [{ heading: 'Från tester till arbetsflöden', paragraphs: ['Företag går från fristående tester till att bygga in AI i arbetsflöden.'] }], knowledge: [{ label: 'Nyckelfrågan', text: 'Ansvar, kvalitet och kompetens.' }], facts: ['AI används främst som stöd.'], analysis: 'Arbetsuppgifter omformas snarare än att alla jobb försvinner.', consequences: ['Större krav på fortbildning.'], sources: [{ label: 'Offentliga forskningsrapporter', type: 'Bakgrund' }], tags: ['AI'], related: []
  }
];

export const articles: Article[] = [...localArticles153, ...legacyArticles];
export const publishedArticles = articles.filter((article) => article.status === 'published').sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
export const articleBySlug: Record<string, Article> = Object.fromEntries(articles.map((article) => [article.slug, article]));
export function homepageArticles(role: HomepagePlacement['role']) { return publishedArticles.filter((article) => article.homepage?.role === role).sort((a, b) => (a.homepage?.order ?? 999) - (b.homepage?.order ?? 999)); }
