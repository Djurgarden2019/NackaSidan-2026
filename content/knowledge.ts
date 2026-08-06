export type KnowledgeEntry = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  definition: string;
  whyItMatters: string;
  keyPoints: string[];
  timeline: { year: string; text: string }[];
  glossary: { term: string; definition: string }[];
  relatedTags: string[];
};

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    slug: 'artificiell-intelligens',
    title: 'Artificiell intelligens',
    category: 'Teknik & samhälle',
    intro: 'En samlad introduktion till hur AI fungerar, var tekniken används och varför frågor om ansvar, kvalitet och kompetens blivit centrala.',
    definition: 'Artificiell intelligens är ett samlingsnamn för datorsystem som utför uppgifter som normalt kräver mänsklig analys, igenkänning, språkförståelse eller beslutsstöd.',
    whyItMatters: 'AI påverkar redan arbetsliv, utbildning, myndigheter, kultur och informationsmiljö. Teknikens betydelse avgörs därför lika mycket av hur den styrs och granskas som av vad modellerna tekniskt kan göra.',
    keyPoints: [
      'Generativ AI skapar text, bild, ljud och kod utifrån mönster i träningsdata.',
      'AI-system kan ge övertygande men felaktiga svar och behöver därför granskas.',
      'Ansvar, dataskydd, upphovsrätt och kompetens är centrala samhällsfrågor.',
      'De största produktivitetsvinsterna uppstår när tekniken byggs in i tydliga arbetsflöden.'
    ],
    timeline: [
      { year: '1950-talet', text: 'De första moderna idéerna om tänkande maskiner och maskinell problemlösning formuleras.' },
      { year: '2010-talet', text: 'Maskininlärning och stora datamängder ger genombrott inom bild, tal och rekommendationssystem.' },
      { year: '2022–2023', text: 'Generativ AI blir tillgänglig för en bred publik genom språk- och bildmodeller.' },
      { year: '2024–2026', text: 'Företag och myndigheter går från experiment till styrda arbetsflöden och granskningskrav.' }
    ],
    glossary: [
      { term: 'LLM', definition: 'Stor språkmodell som tränats på omfattande textmängder.' },
      { term: 'Generativ AI', definition: 'AI som skapar nytt innehåll, exempelvis text, bild, ljud eller kod.' },
      { term: 'Hallucination', definition: 'När ett AI-system ger ett trovärdigt formulerat men felaktigt svar.' },
      { term: 'AI-agent', definition: 'Ett system som kan planera och genomföra flera steg mot ett mål.' }
    ],
    relatedTags: ['AI', 'Arbetsmarknad', 'Produktivitet', 'Kompetens']
  },
  {
    slug: 'inflation',
    title: 'Inflation',
    category: 'Ekonomi',
    intro: 'Vad inflation är, hur den mäts och varför prisutvecklingen påverkar räntor, löner, sparande och hushållens ekonomi.',
    definition: 'Inflation innebär att den allmänna prisnivån stiger över tid, vilket gör att pengar får lägre köpkraft.',
    whyItMatters: 'Inflationen påverkar hushållens kostnader, företagens kalkyler och centralbankernas räntebeslut. Även en fallande inflation kan innebära att priserna fortsätter öka, men i långsammare takt.',
    keyPoints: [
      'Inflation mäts genom prisförändringar i en representativ korg av varor och tjänster.',
      'Hög inflation minskar köpkraften om löner och inkomster inte ökar lika snabbt.',
      'Styrräntan används för att påverka efterfrågan och prisutveckling.',
      'Energi, valuta, löner och internationella leveranskedjor kan påverka inflationen.'
    ],
    timeline: [
      { year: '1990-talet', text: 'Sverige går över till ett tydligt inflationsmål och en mer självständig penningpolitik.' },
      { year: '2020–2021', text: 'Pandemi, flaskhalsar och ändrade konsumtionsmönster påverkar priser och leveranser.' },
      { year: '2022–2023', text: 'Energi- och livsmedelspriser driver en bred inflationsuppgång.' },
      { year: '2024–2026', text: 'Inflationen bromsar, medan hushåll och företag fortsatt anpassar sig till en högre prisnivå.' }
    ],
    glossary: [
      { term: 'KPI', definition: 'Konsumentprisindex, ett vanligt mått på prisutvecklingen.' },
      { term: 'KPIF', definition: 'KPI med fast ränta, Riksbankens målvariabel.' },
      { term: 'Köpkraft', definition: 'Hur mycket varor och tjänster en viss summa pengar kan köpa.' },
      { term: 'Inflationsmål', definition: 'Den nivå centralbanken strävar efter för en stabil prisutveckling.' }
    ],
    relatedTags: ['Ekonomi', 'Energi']
  },
  {
    slug: 'hormuzsundet',
    title: 'Hormuzsundet',
    category: 'Geopolitik & energi',
    intro: 'En strategisk passage där säkerhetspolitik, energihandel och världsekonomi möts.',
    definition: 'Hormuzsundet är den smala sjöpassagen mellan Persiska viken och Omanviken som förbinder regionens olje- och gasexport med världsmarknaden.',
    whyItMatters: 'Störningar i sundet kan snabbt påverka energipriser, fraktkostnader, försäkringspremier och politiska riskbedömningar långt utanför regionen.',
    keyPoints: [
      'Passagen är central för olje- och LNG-transporter.',
      'Militär närvaro och regional diplomati påverkar riskbilden samtidigt.',
      'Även hot utan faktisk blockad kan höja frakt- och försäkringskostnader.',
      'För Sverige märks effekterna främst genom priser, handel och konjunktur.'
    ],
    timeline: [
      { year: '1980-talet', text: 'Tankfartyg och handelsrutter blir direkt berörda av regionala konflikter.' },
      { year: '2010-talet', text: 'Återkommande spänningar kopplar samman kärnfrågan, sanktioner och sjöfart.' },
      { year: '2020-talet', text: 'Drönare, incidenter och politiska hot förstärker marknadens känslighet.' },
      { year: '2026', text: 'Diplomatiska signaler bedöms utifrån om de leder till verifierbart säkrare sjöfart.' }
    ],
    glossary: [
      { term: 'LNG', definition: 'Flytande naturgas som transporteras med specialfartyg.' },
      { term: 'Riskpremie', definition: 'Extra kostnad eller avkastningskrav på grund av osäkerhet.' },
      { term: 'Sanktioner', definition: 'Ekonomiska eller politiska begränsningar riktade mot ett land eller en aktör.' },
      { term: 'Sjöfartsled', definition: 'En etablerad passage som används av handelsfartyg.' }
    ],
    relatedTags: ['Mellanöstern', 'Energi', 'Geopolitik', 'Världshandel']
  }
];

export const knowledgeBySlug = Object.fromEntries(knowledgeEntries.map((entry) => [entry.slug, entry]));
