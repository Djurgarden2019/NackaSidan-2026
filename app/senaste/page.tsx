import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import Link from 'next/link';
import { LatestNewsFeed } from '../../components/Newsroom';
import { type NewsFeedItem } from '../../content/news';
import { getLiveNews } from '../../lib/liveNews';
import { readArticles } from '../../lib/autoPublisher';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata={title:'Senaste Nytt',description:'Senaste nationella och internationella publiceringarna, uppdateringarna och fördjupningarna från NackaSidan.'};

const paths=[['/live','Live','Följ det löpande nationella och internationella nyhetsläget.'],['/sverige','Sverige','Fördjupa politik, ekonomi, samhälle och valet 2026.'],['/varlden','Världen','Följ säkerhet, handel, demokrati och geopolitik.']];

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
  const liveItems: NewsFeedItem[] = live.items.filter(item => within72Hours(item.published)).map(item => ({time:formatTime(item.published),section:item.section,title:item.title,summary:item.summary,href:item.link,type:'Briefing'}));
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

  return <main><div className="shell"><LatestNewsFeed items={items} showKicker={false}/><aside className="latest-note"><strong>Om flödet</strong><p>Senaste Nytt visar nationella och internationella publiceringar från de senaste 72 timmarna. Lokala nyheter från Nacka och Stockholm visas på sina egna avdelningssidor.</p><Link className="text-link" href="/principer">Så arbetar vi redaktionellt →</Link></aside><section className="section"><div className="kicker">Välj nästa steg</div><h2>Från kronologi till sammanhang</h2><p className="lead">Senaste Nytt berättar vad som är nytt. De här ingångarna hjälper dig förstå vad som är viktigast.</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:18}}>{paths.map(([href,label,text])=><Link key={href} href={href} style={{display:'block',padding:18,border:'1px solid #d4d4d4',borderRadius:10,textDecoration:'none',color:'inherit'}}><strong style={{display:'block',fontSize:20}}>{label} →</strong><span style={{display:'block',marginTop:6,fontSize:14,lineHeight:1.5,color:'#666'}}>{text}</span></Link>)}</div></section><section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Transparens</div><h2>Ser något fel ut?</h2><p className="lead">Vi vill att rättelser och betydelsefulla uppdateringar ska gå att följa.</p><div style={{display:'flex',gap:14,flexWrap:'wrap'}}><Link className="button" href="/rattelser">Rättelser & transparens</Link><Link className="text-link" href="/kontakt">Kontakta redaktionen →</Link></div></section></div><DailyDeskUpdate desk="senaste"/></main>
}
