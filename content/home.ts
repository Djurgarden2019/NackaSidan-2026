import type { Story } from '../components/Cards';
import type { Article } from './articles';
import { homepageArticles } from './articles';

export function articleToStory(article: Article): Story {
  return {
    section: article.section,
    title: article.teaserTitle ?? article.title,
    summary: article.teaserSummary ?? article.intro,
    href: `/artikel/${article.slug}`,
    image: article.image,
    imageCaption: article.imageCaption,
    meta: article.readingTime,
  };
}

export const leadArticle = homepageArticles('lead')[0];
export const leadStory = leadArticle ? articleToStory(leadArticle) : undefined;

export const topStoryArticles = homepageArticles('top');
export const topStories = topStoryArticles.map(articleToStory);

export const featureArticles = homepageArticles('feature');
export const featureStories = featureArticles.map(articleToStory);
