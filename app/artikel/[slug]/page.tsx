import { notFound } from 'next/navigation';

type ArticleData = {
  kicker: string;
  title: string;
  intro: string;
  body: string[];
};

const articles: Record<string, ArticleData> = {
  'veckans-analys': {
    kicker: 'Veckans stora analys',
    title: 'Hormuzsundet: diplomatin köper tid – men löser inte krisen',
    intro: 'En preliminär överenskommelse kan minska den omedelbara risken för militär upptrappning. Den underliggande konflikten om säkerhet, energi och regional makt består.',
    body: [
      'Hormuzsundet är en av världsekonomins mest känsliga flaskhalsar. När spänningen ökar påverkas inte bara oljepriset, utan också försäkringar, fraktkostnader och företagens riskbedömningar långt utanför regionen.',
      'Veckans diplomatiska signaler bör därför ses som ett andrum snarare än ett avgörande genombrott. De viktigaste frågorna är om sjöfarten kan fungera stabilt, om parterna accepterar en verifierbar ordning och om regionala aktörer lyckas hålla kommunikationen öppen.',
      'För Sverige är effekten indirekt men verklig. Energipriser, inflation och industrins kostnader påverkas snabbt av störningar i globala handelsflöden. Därför är utvecklingen också en svensk ekonomisk fråga.',
    ],
  },
  'veckan-pa-tio-minuter': {
    kicker: 'NackaSidan Briefing',
    title: 'Veckan på 10 minuter',
    intro: 'Fyra skeenden som hjälper dig att förstå veckan – och vad som kan bli viktigt härnäst.',
    body: [
      'Diplomatin kring Hormuzsundet har dämpat den omedelbara risken, men marknaden väntar på konkreta bevis på att trafiken normaliseras.',
      'I Sverige har den lägre inflationen stärkt hushållens utsikter, medan den sega arbetsmarknaden fortfarande präglar den politiska debatten.',
      'Generativ AI blir en tydlig del av valrörelsens infrastruktur. Frågan är inte längre om manipulerat material förekommer, utan hur snabbt det kan verifieras och bemötas.',
      'Kulturveckan präglas av nya böcker och filmatiseringar, men också av en större debatt om vem som får synas och höras i offentligheten.',
    ],
  },
  kulturdebatt: {
    kicker: 'Kulturdebatt',
    title: 'Kulturen är också en fråga om tillgång och makt',
    intro: 'Bibliotek, public service, kulturstöd och AI diskuteras ofta var för sig. I grunden handlar de om samma sak: vem som får tillgång till berättelser, kunskap och offentlighet.',
    body: [
      'Kulturdebatt blir lätt en strid om enskilda verk, institutioner eller budgetposter. Men den större frågan gäller infrastrukturen bakom ett öppet samhälle.',
      'När bibliotekens uppdrag förändras, public service ifrågasätts och AI producerar allt mer text och bild förskjuts makten över vad som blir synligt. Därför behöver kulturpolitiken diskuteras tillsammans med teknik, utbildning och demokrati.',
      'Ett starkt kulturliv kräver både konstnärlig frihet och praktiska institutioner som gör deltagande möjligt. Utan den balansen riskerar offentligheten att bli bred i teorin men smal i praktiken.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <main>
      <div className="shell">
        <article className="article">
          <div className="kicker">{article.kicker}</div>
          <h1>{article.title}</h1>
          <p className="intro">{article.intro}</p>
          <div className="factbox">
            <strong>Om texten</strong>
            <p>Fördjupande magasintext · cirka 8 minuters läsning · NackaSidan 2026</p>
          </div>
          {article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <h2>Redaktionens slutsats</h2>
          <p>Den viktigaste uppgiften för ett veckomagasin är att skilja tillfälliga rubriker från långsiktiga förändringar. Den här frågan bör därför följas både genom nya besked och genom de strukturer som formar utvecklingen över tid.</p>
        </article>
      </div>
    </main>
  );
}
