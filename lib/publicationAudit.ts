export type PublicationDecision = 'PUBLICERA' | 'SKICKA_TILLBAKA' | 'AVBRYT';

export type PublicationAuditEntry = {
  articleId: string;
  decision: PublicationDecision;
  editor: string;
  decidedAt: string;
  sourceTrace: string[];
  verificationScore?: number;
  note?: string;
};

export type PublishedArticle = {
  id: string;
  slug: string;
  title: string;
  ingress: string;
  body: string[];
  publishedAt: string;
  publishedBy: string;
  audit: PublicationAuditEntry;
};

export function canPublish(entry: PublicationAuditEntry) {
  return entry.decision === 'PUBLICERA' && entry.editor.trim().length > 0 && entry.sourceTrace.length > 0;
}

export function createPublishedArticle(input: Omit<PublishedArticle, 'publishedAt' | 'publishedBy'>, now = new Date()): PublishedArticle {
  if (!canPublish(input.audit)) {
    throw new Error('Publicering kräver uttryckligt PUBLICERA-beslut, redaktör och källspår.');
  }
  return {
    ...input,
    publishedAt: now.toISOString(),
    publishedBy: input.audit.editor,
  };
}
