import { LatestNewsFeed } from '../../components/Newsroom';
import { latestNews } from '../../content/news';

export const metadata = {
  title: 'Senaste | NackaSidan',
  description: 'Senaste publicerade briefingarna, analyserna och fördjupningarna från NackaSidan.',
};

export default function LatestPage() {
  return (
    <main>
      <div className="shell">
        <section className="page-hero latest-page-hero">
          <div className="kicker">Senaste</div>
          <h1>Vad är nytt?</h1>
          <p>En kronologisk översikt över det som publicerats och uppdaterats i NackaSidans redaktionella innehåll.</p>
        </section>
        <LatestNewsFeed items={latestNews} />
        <aside className="latest-note">
          <strong>Om flödet</strong>
          <p>Sprint 8 hämtar flödet från NackaSidans egna innehållsfiler. Det uppdateras när redaktionen publicerar nytt. En extern livekälla eller ett CMS kan kopplas på senare utan att läsargränssnittet behöver byggas om.</p>
        </aside>
      </div>
    </main>
  );
}
