import type { LiveNewsItem } from './liveNews';

export type Corroboration = {
  independentSources: string[];
  matchingLinks: string[];
  matchCount: number;
  confidence: number;
  status: 'Verifierad kandidat' | 'Behöver andra källa' | 'Känslig – manuell kontroll';
};

const sensitive = ['mord','åtal','misstänkt','skjut','sexbrott','våldtäkt','terror','död','avliden','gripen','häktad'];

function words(text: string) {
  return new Set(
    text.toLowerCase()
      .replace(/[^a-zåäö0-9 ]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 5)
  );
}

function similarity(a: string, b: string) {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return 0;
  const common = [...A].filter(w => B.has(w)).length;
  return common / Math.max(1, Math.min(A.size, B.size));
}

function sourceFamily(source: string) {
  const s = source.toLowerCase();
  if (s.includes('sveriges radio') || s.includes('ekot')) return 'Sveriges Radio';
  if (s.includes('svt')) return 'SVT';
  if (s.includes('riksbank')) return 'Sveriges Riksbank';
  return source.trim();
}

export function corroborate(item: LiveNewsItem, all: LiveNewsItem[]): Corroboration {
  const matches = all.filter(other =>
    other.link !== item.link &&
    similarity(item.title, other.title) >= 0.28
  );

  const families = [...new Set([item, ...matches].map(x => sourceFamily(x.source)))];
  const matchingLinks = [...new Set([item.link, ...matches.map(x => x.link)])];
  const risky = sensitive.some(w => item.title.toLowerCase().includes(w));
  const confidence = Math.min(99, 52 + Math.max(0, families.length - 1) * 18 + Math.min(12, matches.length * 4));

  return {
    independentSources: families,
    matchingLinks,
    matchCount: matches.length,
    confidence,
    status: risky
      ? 'Känslig – manuell kontroll'
      : families.length >= 2
        ? 'Verifierad kandidat'
        : 'Behöver andra källa'
  };
}
