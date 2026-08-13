type Source = { label: string; type: string; url?: string };

type Props = {
  published: string;
  updated: string;
  sources: Source[];
};

export default function StockholmTrustBar({ published, updated, sources }: Props) {
  const primaryCount = sources.filter((source) => source.type === 'Primärkälla').length;
  const hasLinks = sources.some((source) => Boolean(source.url));
  return (
    <aside className="mt-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4" aria-label="Artikelns källstatus">
      <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-neutral-600">
        <span className="rounded-full border border-neutral-300 px-3 py-1">{sources.length} källor</span>
        {primaryCount > 0 && <span className="rounded-full border border-neutral-300 px-3 py-1">{primaryCount} primärkälla{primaryCount === 1 ? '' : 'or'}</span>}
        {hasLinks && <span className="rounded-full border border-neutral-300 px-3 py-1">Klickbara källor</span>}
      </div>
      <div className="mt-3 grid gap-1 text-sm text-neutral-600 sm:grid-cols-2">
        <div>Publicerad: <strong className="text-neutral-900">{published}</strong></div>
        <div>Senast uppdaterad: <strong className="text-neutral-900">{updated}</strong></div>
      </div>
    </aside>
  );
}
