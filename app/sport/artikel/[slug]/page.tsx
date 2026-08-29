import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sportArticleBySlug, sportArticles } from '../../../../content/sportArticles';

type PageProps = { params: Promise<{ slug: string }> };

const matchDetails: Record<string, {
  report: string[];
  consequences: string[];
  perspective: string[];
}> = {
  'mjallby-europa-salzburg': {
    report: [
      'Mjällby kom till returen mot Slovan Bratislava med ett 1–2-underläge och behövde därför göra mål. Slovan höll nollan, vann med 2–0 och tog dubbelmötet med sammanlagt 4–1.',
      'Siffrorna speglar framför allt skillnaden i europeisk rutin och förmågan att avgöra i de kritiska lägena. Mjällby skapade sig en nivåmätare men lyckades inte vända matchbilden på bortaplan.'
    ],
    consequences: [
      'Uttåget innebär att Mjällby slipper höstens extra Europamatcher och kan lägga mer träningstid på Allsvenskan. På kort sikt kan det ge friskare ben och en tydligare veckorytm i den nationella slutspurten.',
      'Samtidigt fortsatte Mjällby till Europa League-kvalets playoff, vilket gav fler internationella minuter och nya intäktsmöjligheter. Ledningen behöver väga kontinuitet mot risken att spelare som visat sig i kvalet blir transfermål.'
    ],
    perspective: [
      'För klubben blir dubbelmötet ett konkret underlag för rekrytering, fysisk träning och matchplanering. Nästa steg är att höja tempot i den egna modellen och återinvestera Europaintäkterna klokt.',
      'För svensk fotboll visar mötet hur stort steget fortfarande är från en stark allsvensk vardag till etablerade europeiska utvecklingsmiljöer. Fler svenska lag behöver nå ligafaser återkommande om rankning, intäkter och vana vid internationellt tempo ska förbättras.'
    ]
  }
};

const deepDive: Record<string, string[]> = {
  'champions-league-lottningen-2026': [
    'Det nya ligasystemet gör motståndarnas samlade styrka till en viktig men ojämnt fördelad faktor. Två lag kan sluta på samma poäng trots att vägen dit har sett helt olika ut. Därför behöver resultaten bedömas tillsammans med resor, vilodagar och motståndets kvalitet.',
    'För tränarna blir resurshanteringen nästan lika viktig som taktiken i en enskild match. Klubbar med två jämnstarka spelare på varje position kan rotera utan att tappa lika mycket kvalitet. Mindre klubbar måste oftare välja mellan maximal kraft i Europa och stabilitet i den nationella ligan.'
  ],
  'mjallby-europa-salzburg': [
    'Mjällbys europeiska matcher ger klubben ett ovanligt tydligt mått på vilka delar av spelet som håller internationellt. Presspelet måste fungera även när motståndaren spelar sig ur den första vågen, och bolltappen får inte lämna stora ytor bakom mittfältet.',
    'Den långsiktiga vinsten kan bli större än själva prispengarna om erfarenheten används i rekrytering och träning. För svensk fotboll är utmaningen att fler klubbar samlar den erfarenheten flera år i rad, så att Europaspel blir en del av verksamheten och inte ett tillfälligt undantag.'
  ],
  'svenska-cupen-omgang-tva': [
    'För elitlagen är cupmatchen ett test av professionalism. De förväntas styra spelet på en ovan arena mot ett lag som kan koncentrera mycket av sin säsong till just denna kväll. Ett tidigt baklängesmål kan snabbt förändra både matchplan och publikens energi.',
    'För de mindre föreningarna kan en fullsatt arena stärka ekonomin, locka nya ideella krafter och ge ungdomsverksamheten förebilder på nära håll. Därför har spelplatsen betydelse. När matchen flyttas till en större arena kan kvaliteten på arrangemanget öka, men en del av cupens lokala värde försvinner.'
  ],
  'norden-fifa-infantino': [
    'De nordiska förbunden har stark trovärdighet i frågor om öppenhet och föreningsdemokrati, men begränsad röstmakt på egen hand. Ett verkligt maktskifte kräver därför att kritiken översätts till konkreta reformförslag som även mindre och ekonomiskt svagare förbund tjänar på.',
    'Konflikten påverkar mer än ledarskapet i FIFA. Den handlar också om hur framtida medieintäkter ska fördelas, hur stora turneringarna ska bli och vem som bär risken när kalendern växer. Om kontrollen flyttas från medlemsförbunden kan kortsiktiga intäkter komma på bekostnad av långsiktig insyn.'
  ],
  'us-open-damfavoriter-2026': [
    'På hardcourt blir balansen mellan första slagets kraft och förmågan att försvara sig särskilt viktig. Sabalenka kan dominera när serven och returen fungerar, Swiatek kan pressa tempot från baslinjen och Gauff kan vinna matcher genom sin rörelse och sitt försvar även när offensiven varierar.',
    'En tvåveckorsturnering avgörs också av energiförbrukningen. Favoriter som behöver tre långa set tidigt riskerar att bära med sig belastningen till den andra veckan. Därför är förmågan att vinna på en normal nivå, inte bara på toppnivå, ofta det tydligaste mästarprovet.'
  ],
  'diamond-league-zurich-svenskar': [
    'För Pihlström blir loppets karaktär avgörande. Ett långsamt öppningsvarv ställer krav på position och acceleration, medan hög fart från start testar den aeroba kapaciteten. Båda scenarierna ger värdefull information inför kommande mästerskapslopp.',
    'Duplantis befinner sig i en annan situation eftersom varje tävling också bedöms mot hans egen extrema standard. För honom handlar ett formbesked inte bara om seger, utan om ansatsens stabilitet, höjden över ribban och hur många försök som krävs. Den svenska bredden syns samtidigt i hur många aktiva som kan nå finalfält, inte bara i medaljerna från den största stjärnan.'
  ]
};

export function generateStaticParams() {
  return sportArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = sportArticleBySlug[slug];
  return article ? { title: `${article.title} | NackaSidan`, description: article.dek } : {};
}

export default async function SportArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = sportArticleBySlug[slug];
  if (!article) notFound();

  const special = matchDetails[slug];
  const isMatch = Boolean(special);
  const report = special?.report ?? [article.dek, ...(article.body[0]?.paragraphs ?? [])];
  const consequences = special?.consequences ?? (article.body[1]?.paragraphs ?? [article.analysis]);
  const perspective = special?.perspective ?? [
    article.analysis
  ];
  const extendedAnalysis = deepDive[slug] ?? [];

  return (
    <main>
      <article className="shell article match-article-body">
        <header className="page-hero">
          <div className="article-part-label">01 · Rubrik</div>
          <div className="kicker">{article.sport}</div>
          <h1>{article.title}</h1>
          <p className="meta">Publicerad {article.date}</p>
        </header>

        <section className="article-section">
          <div className="match-section-number">02 · Själva nyheten</div>
          <h2>{isMatch ? 'Matchrapport' : 'Nyheten'}</h2>
          {report.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {!isMatch && (
            <ul className="standard-facts">
              {article.facts.map(fact => <li key={fact}>{fact}</li>)}
            </ul>
          )}
        </section>

        <section className="article-section">
          <div className="match-section-number">03 · Analys och konsekvenser</div>
          <h2>{isMatch ? 'Konsekvenser för laget' : 'Konsekvenser för de berörda'}</h2>
          {consequences.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <h2>{isMatch ? 'Ett större perspektiv för klubben och svensk fotboll' : 'Ett större perspektiv'}</h2>
          {perspective.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <h3>Det här följer vi</h3>
          <ul>
            {article.watch.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {extendedAnalysis.length > 0 && (
          <section className="article-section sport-deep-dive">
            <div className="match-section-number">04 · Längre fördjupning</div>
            <h2>Vad utvecklingen betyder på längre sikt</h2>
            {extendedAnalysis.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>
        )}

        <section className="article-section sport-article-sources">
          <div className="match-section-number">05 · Källor</div>
          <h2>Tydliga och klickbara källor</h2>
          <ul>
            {article.sources.map(source => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Fler sportartiklar</h2>
          <ul>
            {sportArticles.filter(item => item.slug !== slug).slice(0, 3).map(item => (
              <li key={item.slug}><Link href={`/sport/artikel/${item.slug}`}>{item.title} →</Link></li>
            ))}
          </ul>
          <p><Link className="button" href="/sport">Tillbaka till Sport</Link></p>
        </section>
      </article>
    </main>
  );
}
