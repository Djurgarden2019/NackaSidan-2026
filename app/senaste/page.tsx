import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import { LatestNewsFeed } from '../../components/Newsroom';
import { type NewsFeedItem } from '../../content/news';
import { getLiveNews } from '../../lib/liveNews';
import { readArticles } from '../../lib/autoPublisher';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata={title:'Senaste Nytt',description:'Senaste nationella och internationella publiceringarna, uppdateringarna och fördjupningarna från NackaSidan.'};


function formatTime(value: string) {
  const date = new Date(value);
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date).replace(',', ' ·');
}

function within72Hours(value: string) { const time=Date.parse(value); const age=Date.now()-time; return Number.isFinite(time)&&age>=0&&age<=72*60*60*1000; }

function isLocalNews(item: NewsFeedItem) {
  const section = item.section.toLocaleLowerCase('sv-SE');
  return section === 'nacka'
    || section === 'stockholm'
    || section.includes('nacka/')
    || section.includes('nacka ·')
    || section.includes('stockholm ·')
    || section.includes('lokalt')
    || item.href.startsWith('/nacka')
    || item.href.startsWith('/stockholm')
    || item.href.includes('nacka.se');
}

export default async function LatestPage(){
  const [automatic, live] = await Promise.all([readArticles(), getLiveNews()]);
  const automaticItems: NewsFeedItem[] = automatic.filter(article => within72Hours(article.publishedAt)).map((article) => ({
    time: formatTime(article.publishedAt),
    section: article.section,
    title: article.title,
    summary: article.lead,
    href: article.sourceUrl,
    type: 'Briefing'
  }));
  const liveItems: NewsFeedItem[] = live.items.filter(item => within72Hours(item.published)&&!item.local&&!['Stockholm','Nacka/Lokalt'].includes(item.sourceSection)).map(item => ({time:formatTime(item.published),section:item.section,title:item.title,summary:item.summary,href:item.link,type:'Briefing'}));
  const seen = new Set<string>();
  const items = [...automaticItems, ...liveItems]
    .filter((item) => !isLocalNews(item))
    .filter((item) => {
      const key = item.href.replace(/[?#].*$/, '');
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 50);

  return <main><div className="shell"><LatestNewsFeed items={items} showKicker={false}/></div><DailyDeskUpdate desk="senaste"/></main>
}
