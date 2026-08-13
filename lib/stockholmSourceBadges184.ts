export type SourceBadge184 = 'Primärkälla' | 'Myndighet' | 'Offentlig statistik' | 'Företagsuppgift' | 'Sekundärkälla' | 'Färskkontrollerad';

export type SourceEvidence184 = {
  label: string;
  url: string;
  badge: SourceBadge184;
  checkedAt?: string;
};

export function isFreshChecked184(source: SourceEvidence184, maxHours = 24, now = new Date()) {
  if (!source.checkedAt) return false;
  const hours = (now.getTime() - new Date(source.checkedAt).getTime()) / 3_600_000;
  return hours >= 0 && hours <= maxHours;
}

export const sourceTransparencyRules184 = [
  'Visa alltid källans namn och länk på fullängdsartiklar.',
  'Märk primärkällor och offentlig statistik tydligt.',
  'Färskkontrollerad får bara visas när checkedAt ligger inom angiven tidsgräns.',
  'Pressmeddelanden från företag märks som företagsuppgift och ska bearbetas journalistiskt.',
  'Sekundärkällor ska inte ensamma bära känsliga eller omstridda faktapåståenden när primärkälla finns.'
];
