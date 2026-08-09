import type { LiveNewsItem } from './liveNews';

export type EditorialRisk = 'Grön' | 'Gul' | 'Röd';

export type EditorialCandidate = {
  id: string;
  title: string;
  section: string;
  score: number;
  risk: EditorialRisk;
  reason: string;
  angle: string;
  sourceCount: number;
  sources: string[];
  links: string[];
  published: string;
  needsSecondSource: boolean;
  checks: string[];
};

const sensitive = [
  'mord','åtal','misstänkt','skjut','sexbrott','våldtäkt','terror',
  'död','avliden','gripen','häktad','namngiven'
];

function tokens(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-zåäö0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 4);
}

function similarity(a: string, b: string) {
  const A = new Set(tokens(a));
  const B = new Set(tokens(b));
  if (!A.size || !B.size) return 0;
  const overlap = [...A].filter(word => B.has(word)).length;
  return overlap / Math.max(1, Math.min(A.size, B.size));
}

function baseScore(item: LiveNewsItem) {
  let score = item.local ? 62 : item.section === 'Ekonomi' || item.section === 'Världen' ? 58 : 52;
  if (item.priority === 'Hög') score += 18;
  if (item.priority === 'Medel') score += 8;

  const ageHours = (Date.now() - (Date.parse(item.published) || Date.now())) / 36e5;
  if (ageHours < 2) score += 12;
  else if (ageHours < 6) score += 9;
  else if (ageHours < 12) score += 6;
  else if (ageHours < 24) score += 2;

  return Math.min(99, Math.max(20, Math.round(score)));
}

function editorialText(item: LiveNewsItem, sourceCount: number) {
  if (item.local) {
    return {
      reason: 'Lokal nyhet med direkt relevans för läsare i Nacka/Stockholmsområdet.',
      angle: 'Verifiera kärnuppgiften och förklara konsekvensen för boende, trafik eller lokal service.'
    };
  }
  if (item.section === 'Ekonomi') {
    return {
      reason: 'Ekonomisk signal som kan påverka hushåll, företag eller den svenska konjunkturbilden.',
      angle: 'Förklara beskedet, vilka som påverkas och vad läsaren bör bevaka härnäst.'
    };
  }
  if (item.section === 'Världen') {
    return {
      reason: 'Internationell utveckling med tydligt allmänintresse och behov av kontext.',
      angle: 'Sammanfatta vad som hänt, varför det är viktigt och vilka följder som är mest relevanta för Sverige.'
    };
  }
  return {
    reason: sourceCount > 1
      ? 'Nyhetssignal som stöds av mer än en ansluten källa.'
      : 'Aktuell signal som bör verifieras och sättas i sammanhang före publicering.',
    angle: 'Verifiera kärnuppgiften och bygg artikeln kring betydelse, konsekvens och nästa steg.'
  };
}

export function buildEditorialCandidates(items: LiveNewsItem[]): EditorialCandidate[] {
  const used = new Set<number>();
  const groups: LiveNewsItem[][] = [];

  items.forEach((item, index) => {
    if (used.has(index)) return;
    const group = [item];
    used.add(index);

    items.forEach((other, otherIndex) => {
      if (used.has(otherIndex)) return;
      if (similarity(item.title, other.title) >= 0.32) {
        group.push(other);
        used.add(otherIndex);
      }
    });

    groups.push(group);
  });

  return groups
    .map((group, index) => {
      const lead = group[0];
      const sources = [...new Set(group.map(item => item.source))];
      const sourceCount = sources.length;
      let score = baseScore(lead) + Math.min(12, Math.max(0, sourceCount - 1) * 6);
      score = Math.min(99, score);

      const lower = lead.title.toLowerCase();
      const highRisk = sensitive.some(word => lower.includes(word));
      const risk: EditorialRisk = highRisk ? 'Röd' : sourceCount >= 2 && score >= 76 ? 'Grön' : 'Gul';
      const copy = editorialText(lead, sourceCount);

      return {
        id: `candidate-${index}-${encodeURIComponent(lead.link).slice(-36)}`,
        title: lead.title,
        section: lead.section,
        score,
        risk,
        reason: copy.reason,
        angle: copy.angle,
        sourceCount,
        sources,
        links: group.map(item => item.link),
        published: lead.published,
        needsSecondSource: sourceCount < 2,
        checks: [
          'Öppna och läs originalkällan',
          'Kontrollera namn, siffror och tidpunkt',
          ...(sourceCount < 2 ? ['Hitta minst en oberoende andra källa'] : ['Jämför uppgifterna mellan källorna']),
          ...(highRisk ? ['Kräver manuell redaktionell granskning före publicering'] : [])
        ]
      };
    })
    .sort((a, b) => b.score - a.score);
}
