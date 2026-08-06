import { articles } from '../../content/articles';

export default function EditorialPage() {
  return (
    <main>
      <div className="shell">
        <section className="page-hero editorial-admin-hero">
          <div className="kicker">Redaktionellt system</div>
          <h1>Innehållsöversikt</h1>
          <p>Den här sidan visar hur artiklarna nu hanteras centralt i <code>content/articles.ts</code>. Lägg till en artikel där, så skapas artikelsidan automatiskt.</p>
        </section>
        <section className="editorial-table-wrap">
          <table className="editorial-table">
            <thead><tr><th>Rubrik</th><th>Avdelning</th><th>Status</th><th>Uppdaterad</th><th>Lästid</th></tr></thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.slug}><td>{article.title}</td><td>{article.section}</td><td><span className="status-published">Publicerad</span></td><td>{article.updated}</td><td>{article.readingTime}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="section cms-guide">
          <div>
            <div className="kicker">Så publicerar du</div>
            <h2>En artikel på ett ställe</h2>
            <ol>
              <li>Kopiera ett artikelobjekt i <code>content/articles.ts</code>.</li>
              <li>Ändra slug, rubrik, ingress, brödtext, kunskapskort och källor.</li>
              <li>Ladda upp ändringen till GitHub.</li>
              <li>Vercel bygger och publicerar sidan automatiskt.</li>
            </ol>
          </div>
          <div className="cms-note"><strong>Nästa CMS-steg</strong><p>Detta är ett kodbaserat redaktionellt system. När innehållsmodellen är godkänd kan samma fält kopplas till Sanity eller ett annat visuellt CMS.</p></div>
        </section>
      </div>
    </main>
  );
}
