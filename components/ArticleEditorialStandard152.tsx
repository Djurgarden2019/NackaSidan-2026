import type { Article } from '../content/articles';

function wordCount(article: Article) {
  return article.body.reduce((sum, section) => sum + section.paragraphs.join(' ').split(/\s+/).filter(Boolean).length, 0);
}

export default function ArticleEditorialStandard152({ article }: { article: Article }) {
  const words = wordCount(article);
  const linkedSources = article.sources.filter((source) => Boolean(source.url)).length;
  const checks = [
    { label: 'Brödtext', ok: words >= 300, detail: `${words} ord` },
    { label: 'Struktur', ok: article.body.length >= 2, detail: `${article.body.length} avsnitt` },
    { label: 'Fakta', ok: article.facts.length >= 3, detail: `${article.facts.length} faktapunkter` },
    { label: 'Källor', ok: article.sources.length >= 2, detail: `${article.sources.length} källor` },
    { label: 'Direktlänkar', ok: linkedSources >= 1, detail: `${linkedSources} länkade` },
  ];
  const passed = checks.filter((check) => check.ok).length;

  return (
    <aside className="article-editorial-standard" aria-label="Artikelstandard" style={{borderTop:'1px solid #d8d1c4',borderBottom:'1px solid #d8d1c4',padding:'14px 0',margin:'18px 0 28px'}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:'16px',alignItems:'baseline',flexWrap:'wrap'}}>
        <div><div className="kicker">Artikelstandard · Main 152</div><strong>{passed}/5 kvalitetskontroller</strong></div>
        <span style={{fontSize:'.82rem',opacity:.72}}>Mål: riktiga, källbara och läsbara artiklar</span>
      </div>
      <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginTop:'10px'}}>
        {checks.map((check) => <span key={check.label} title={check.detail} style={{fontSize:'.72rem',padding:'5px 8px',border:'1px solid #d8d1c4',background:check.ok?'#eef4eb':'#f7eee9'}}>{check.ok ? '✓' : '○'} {check.label}</span>)}
      </div>
    </aside>
  );
}
