import { NextResponse } from 'next/server';
import { publishedArticles } from '../../../content/articles';

export const dynamic = 'force-static';

export async function GET() {
  const items = publishedArticles.map((article) => ({
    slug: article.slug,
    section: article.section,
    title: article.title,
    teaserTitle: article.teaserTitle ?? article.title,
    intro: article.intro,
    teaserSummary: article.teaserSummary ?? article.intro,
    author: article.author,
    published: article.published,
    updated: article.updated,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    readingTime: article.readingTime,
    image: article.image,
    imageCaption: article.imageCaption,
    tags: article.tags,
    homepage: article.homepage,
    href: `/artikel/${article.slug}`,
  }));

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    count: items.length,
    items,
  });
}
