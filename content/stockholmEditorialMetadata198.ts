export type StockholmEditorialMetadata = {
  slug: string;
  districts?: string[];
  topics?: string[];
  sourceStrength?: 'primary' | 'mixed' | 'secondary';
  freshness?: 'live' | 'today' | 'current' | 'background';
  impact?: 'low' | 'medium' | 'high';
  lastVerifiedAt?: string;
};

export const stockholmEditorialMetadata198: StockholmEditorialMetadata[] = [];

export const stockholmEditorialMetadataRules198 = {
  rules: [
    'District and topic metadata should drive discovery, related stories and section pages.',
    'lastVerifiedAt should be present for time-sensitive material.',
    'sourceStrength describes the evidence base, not whether an opinion is correct.',
    'Background material must not receive live or today freshness labels.',
    'Impact is an editorial relevance signal and must not be presented as objective measurement.'
  ]
};
