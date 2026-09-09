'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type NewsItem = {
  title: string;
  link: string;
  published: string;
  source: string;
  sourceSection: string;
  section: string;
  image?: string;
};

const sectionByRoute: Record<string, string[]> = {
  '/': ['Världen', 'Sverige'],
  '/senaste': ['Sverige', 'Världen', 'Internationella medier'],
  '/analys': ['Världen', 'Sverige'],
  '/sverige': ['Sverige'],
  '/stockholm': ['Stockholm'],
  '/varlden': ['Världen', 'Internationella medier'],
  '/internationella-medier': ['Internationella medier', 'Världen'],
  '/eu': ['Internationella medier', 'Världen'],
  '/ekonomi': ['Ekonomi'],
  '/vetenskap': ['Vetenskap'],
  '/kultur': ['Kultur'],
  '/sport': ['Sport'],
  '/helg': ['Kultur'],
};

function isFresh(value: string) {
  const time = Date.parse(value);
  const age = Date.now() - time;
  return Number.isFinite(time) && age >= 0 && age <= 72 * 60 * 60 * 1000;
}

export default function CurrentSectionImage() {
  const pathname = usePathname();
  const sections = useMemo(() => sectionByRoute[pathname], [pathname]);
  const [item, setItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    setItem(null);
    if (!sections) return;
    const controller = new AbortController();
    fetch('/api/live-news', { signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject())
      .then((data: { items?: NewsItem[] }) => {
        const items = (data.items ?? []).filter(candidate => candidate.image && isFresh(candidate.published));
        const match = sections
          .map(section => items.find(candidate => candidate.section === section || candidate.sourceSection === section))
          .find(Boolean);
        setItem(match ?? null);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [sections]);

  if (!sections || !item?.image) return null;

  return <figure className="current-section-image shell">
    <a href={item.link} target="_blank" rel="noreferrer">
      <img src={item.image} alt={item.title} />
      <figcaption><span>{item.section}</span><strong>{item.title}</strong><small>{item.source}</small></figcaption>
    </a>
  </figure>;
}
