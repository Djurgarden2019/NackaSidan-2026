import Link from 'next/link';
import { StoryCard } from '../components/Cards';
import { FeatureCard, FactStrip, SectionIntro } from '../components/Editorial';
import { leadStory, topStories } from '../content/home';
import { articles } from '../content/articles';
import { NewsDashboard, NewsletterSignup } from '../components/HomeModules';
import AutoPublishedFrontpage from '../components/AutoPublishedFrontpage';
import LiveFrontpage from '../components/LiveFrontpage';
import { getLiveNews } from '../lib/liveNews';

const editorial = [
  {
    section: 'Ekonomi',
    title: 'Lägre inflation ändrar hushållens kalkyl',
    summary: 'Räntor och köpkraft utvecklas åt rätt håll, men arbetsmarknaden bromsar optimismen.',
    href: '/ekonomi',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stockholm_City_Hall-147793.jpg?width=1200',
  },
  {
    section: 'Vetenskap & AI',
    title: 'AI går från experiment till samhällsinfrastruktur',
    summary: 'Frågan är inte längre om tekniken används, utan hur den granskas och styrs.',
    href: '/vetenskap',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg?width=1200',
  },
  {
    section: 'Sport',
    title: 'Resultat, ekonomi och publik hör allt tydligare ihop',
    summary: 'Den moderna idrotten måste förstås både på planen och i styrelserummet.',
    href: '/sport',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry%20Arena.jpg?width=1200',
  },
];

export const revalidate = 900;

export default async function Home() {
  const live = await getLiveNews();
  return (
    <main>
      <div className="shell">
        <section className="hero hero-sprint2">
          <div className="hero-media">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Hormuz_map.png?width=1800"
              alt="Karta över Hormuzsundet och Persiska viken"
            />
            <div className="caption">Hormuzsundet – en strategisk passage för världshandeln. Karta: Wikimedia Commons.</div>
          </div>
          <div>
            <div className="kicker">{leadStory?.section ?? 'NackaSidan'}</div>
            <Link href={leadStory?.href ?? '/artikel/veckans-analys'}><h1>{leadStory?.title ?? 'Veckans analys'}</h1></Link>
            <p className="lead">{leadStory?.summary ?? ''}</p>
            <Link className="button" href={leadStory?.href ?? '/artikel/veckans-analys'}>
              Läs hela analysen
            </Link>
          </div>
        </section>

        <section className="daily-ribbon" aria-label="Nacka Daily">
          <div>
            <span className="daily-ribbon-label">Nacka Daily · 07.00</span>
            <strong>Dagens viktigaste på fem minuter</strong>
          </div>
          <p>Huvudfrågan, fyra snabba nyheter, dagens siffra och det redaktionen följer.</p>
          <Link href="/daily" className="daily-ribbon-link">Läs dagens briefing →</Link>
        </section>

        <LiveFrontpage items={live.items} fetchedAt={live.fetchedAt} />

        <AutoPublishedFrontpage />

        <section className="section">
          <SectionIntro
            title="Veckans viktigaste"
            text="Tre händelser som tillsammans säger något om Sverige, världen och kulturen just nu."
          />
          <div className="grid-3">
            {topStories.map((story, index) => (
              <StoryCard
                key={story.title}
                story={story}
                red={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="section briefing premium-briefing">
          <div>
            <div className="kicker">NackaSidan Briefing</div>
            <h2>Veckan på 10 minuter</h2>
            <p>Fyra frågor räcker för att förstå veckans riktning – och vad som kan förändras härnäst.</p>
            <Link className="button" href="/artikel/veckan-pa-tio-minuter">
              Öppna briefingen
            </Link>
          </div>
          <div className="brief-list">
            {[
              ['01', 'Mellanöstern', 'Diplomatin har bromsat upptrappningen, men handelsvägarna är fortsatt sårbara.'],
              ['02', 'Svensk ekonomi', 'Inflationen faller, medan arbetsmarknaden återhämtar sig långsammare.'],
              ['03', 'AI och valet', 'Snabb verifiering och källkritik blir en demokratisk kärnfråga.'],
              ['04', 'Kultur', 'Litteratur, film och idédebatt flyttar fokus från tempo till eftertanke.'],
            ].map(([number, title, text]) => (
              <div className="brief-item" key={number}>
                <div className="num">{number}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionIntro
            eyebrow="Redaktionens val"
            title="Tre vägar vidare"
            text="Fördjupningar som visar hur ekonomi, teknik och sport påverkar vardagen."
          />
          <div className="feature-grid">
            {editorial.map((item, index) => (
              <FeatureCard key={item.title} item={item} large={index === 0} />
            ))}
          </div>
        </section>

        <section className="section insight-home">
          <SectionIntro eyebrow="NackaSidan Insight" title="Utforska ämnet AI" text="Ett kunskapsnav med tidslinje, ordlista, fakta och fördjupningar." />
          <div className="insight-promo">
            <div>
              <div className="kicker">Tema</div>
              <h3>AI förändrar arbete, demokrati och kultur</h3>
              <p>Gå från den senaste nyheten till bakgrund, begrepp och längre analyser – samlat på en enda temasida.</p>
              <Link className="button" href="/tema/ai">Utforska AI</Link>
            </div>
            <div className="insight-list"><span>01 · Arbetsmarknad</span><span>02 · Val & demokrati</span><span>03 · Kultur & upphovsrätt</span><span>04 · Reglering</span></div>
          </div>
        </section>


        <section className="section daily-home-promo">
          <div>
            <div className="kicker">Nyhet · Sprint 6</div>
            <h2>Nacka Daily</h2>
            <p>Det viktigaste på fem minuter: dagens huvudfråga, fyra nyheter, en siffra och det redaktionen följer härnäst.</p>
            <Link className="button" href="/daily">Öppna morgonbriefingen</Link>
          </div>
          <div className="daily-home-list"><span>07.00 · Dagens huvudfråga</span><span>Sverige · Ekonomi · AI · Kultur</span><span>Dagens siffra</span><span>Detta följer vi</span></div>
        </section>

        <NewsDashboard articles={articles} />

        <section className="section culture-home">
          <SectionIntro title="Kultur" text="Veckans utvalda böcker, filmer, TV-serier, musik och kulturdebatt." />
          <div className="culture-grid">
            <article className="culture-main">
              <div className="kicker">Veckans bok</div>
              <h3>Litteraturen återtar rollen som långsam motkraft</h3>
              <p className="lead">När nyhetsflödet blir snabbare växer intresset för berättelser som kräver tid, närvaro och eftertanke.</p>
              <Link className="button" href="/kultur">Till kulturen</Link>
            </article>
            <article className="culture-small">
              <div className="kicker">Film & TV</div>
              <h3>Nya berättelser mellan bio och streaming</h3>
              <p>Premiärer, adaptioner och en bransch i förändring.</p>
            </article>
            <article className="culture-small">
              <div className="kicker">Kulturdebatt</div>
              <h3>Vem får tillgång till offentligheten?</h3>
              <p>Bibliotek, public service, kulturstöd och AI.</p>
              <Link className="text-link" href="/kulturdebatt">Läs debatten</Link>
            </article>
          </div>
        </section>

        <NewsletterSignup />

        <section className="section">
          <SectionIntro title="Veckans siffror" text="En redaktionell ögonblicksbild – inte en livepanel." />
          <FactStrip
            items={[
              { label: 'Inflation', value: '0,7 %' },
              { label: 'Styrränta', value: '2,00 %' },
              { label: 'Huvudartiklar', value: '18' },
              { label: 'Fördjupningar', value: '12' },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
