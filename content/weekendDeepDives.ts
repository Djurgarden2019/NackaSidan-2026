export type WeekendDeepDive = {
  sections: { heading: string; paragraphs: string[] }[];
  analysis: string[];
  questions: string[];
};

export const weekendDeepDives: Record<string, WeekendDeepDive> = {
  'helg-stockholmskrogar-kvarterskrogen-aterkomst': {
    sections: [
      { heading:'Ekonomin bakom en full matsal', paragraphs:[
        'Restaurangens ekonomi är ovanligt känslig för små förändringar. En full fredag kan inte alltid kompensera för svaga måndagar, och råvaror som inte säljs i tid förlorar snabbt sitt värde. Därför arbetar många krogar med kortare menyer, gemensamma komponenter och bokningsregler som minskar sena avhopp.',
        'Personalkostnaden är inte bara en utgift utan en kvalitetsfråga. Erfaren servis kan läsa bordet, förklara råvaror och förebygga missförstånd. När bemanningen pressas märks det ofta först i väntetider och därefter i helhetsupplevelsen.',
        'Den höga lokalhyran påverkar vilka kök som överlever i centrala lägen. Koncept med snabb omsättning eller hög snittnota får en fördel, medan lågmälda kvarterskrogar riskerar att flytta längre ut.'
      ]},
      { heading:'Så ska Helg recensera', paragraphs:[
        'Varje recension ska skilja mellan verifierbara uppgifter och redaktionella omdömen. Meny, pris, adress och öppettider kontrolleras mot restaurangen. Bedömningen av smak, atmosfär och värde markeras som just en bedömning.',
        'Krogen ska prövas mot sitt eget löfte. En enkel nudelbar ska inte kritiseras för att sakna högtidlig servis, och en dyr avsmakningsmeny måste bedömas hårdare när den lovar en fullständig upplevelse.',
        'Helg redovisar därför styrka, svaghet, prisnivå och vilket tillfälle restaurangen passar för. Det gör guiden mer användbar än en enda siffra.'
      ]}
    ],
    analysis:[
      'Restaurangmarknaden speglar stadens ekonomi. När hushållen blir försiktigare försvinner inte nödvändigtvis krogbesöken, men gästerna byter frekvens, prisnivå och tillfälle.',
      'Ett levande krogutbud kräver både nya idéer och rimliga villkor för långsiktighet. Om varje lokal måste bära maximal omsättning blir stadens matliv mer enhetligt.',
      'Kommande artiklar bör följa faktiska menypriser över tid och undersöka hur lokalhyror och arbetsvillkor påverkar utbudet.'
    ],
    questions:['Hur förändras notan jämfört med hushållens inkomster?','Vilka stadsdelar får fler respektive färre självständiga krogar?','Kan mindre menyer förena kvalitet, lönsamhet och lägre svinn?']
  },
  'helg-mat-smak-forst-mindre-svinn': {
    sections:[
      {heading:'Smakens byggstenar',paragraphs:[
        'Syra, sälta, sötma, beska och umami fungerar som ett system. En tung gryta kan behöva syra, en bitter grönsak kan behöva fett och sälta, och en tunn soppa kan få djup av rostning eller fermentering.',
        'Konsistens är lika viktig som smak. Något krispigt gör en mjuk rätt mer intressant, medan en krämig komponent kan binda samman torra ingredienser.',
        'När hemmakocken förstår funktionen bakom ingrediensen blir receptet flexiblare. Citron kan ersättas med vinäger och nötter med rostade frön om rollen i rätten är densamma.'
      ]},
      {heading:'Matplanering utan trist upprepning',paragraphs:[
        'En veckoplan behöver inte bestå av sju färdiga recept. Det räcker ofta att planera några baser: kokta gryn, en rostad plåt, en sås och en baljväxt. Komponenterna kan sedan kombineras på nya sätt.',
        'Förvaring är en del av matlagningen. Snabb nedkylning, rena kärl och tydliga datum minskar både risk och onödigt svinn. Livsmedelsverkets råd ska väga tyngre än spontana tumregler.',
        'Ekonomin förbättras mest när de dyraste inköpen verkligen används. Att rädda en billig morot men kasta kött, ost eller färdigmat ger liten total effekt.'
      ]}
    ],
    analysis:[
      'Klimatsmart mat blir varaktig först när den också är god, enkel och ekonomiskt rimlig.',
      'Kunskap om grundteknik minskar beroendet av exakta recept och gör det lättare att använda rester säkert.',
      'Matsvinn bör mätas i både vikt och kronor eftersom olika råvaror har mycket olika klimat- och budgeteffekt.'
    ],
    questions:['Vilka råvaror kastar hushållet oftast?','Kan samma bas bli tre tydligt olika måltider?','Hur kombineras minskat svinn med livsmedelssäkerhet?']
  },
  'helg-vin-syra-struktur-mat': {
    sections:[
      {heading:'Druvan är bara början',paragraphs:[
        'Samma druva kan ge helt olika vin beroende på klimat, jordmån, skördetid och vinmakning. Därför räcker det inte att säga att chardonnay passar till fisk eller cabernet till kött.',
        'Tannin reagerar med protein och fett, medan hög syra rensar gommen. Ekfatskaraktär kan passa rostade smaker men dominera en finstämd rätt.',
        'En användbar rekommendation beskriver därför vinets kropp, syra, sötma och tannin innan den nämner prestige eller poäng.'
      ]},
      {heading:'Pris, ursprung och hållbarhet',paragraphs:[
        'Ett högre pris kan spegla lägre skördeuttag, mer handarbete och längre lagring, men garanterar inte att vinet passar maten eller gästens smak.',
        'Förpackningen påverkar klimatavtrycket. Lättare glas, burk eller box kan vara rationellt för vin som ska drickas ungt, även om förpackningen har lägre status.',
        'Helg anger pris som ett intervall och kontrollerar alltid aktuell årgång. Rekommendationer ska också innehålla ett seriöst alkoholfritt alternativ.'
      ]}
    ],
    analysis:[
      'Vinjournalistik blir mer användbar när den lär ut valprinciper i stället för att bara rangordna flaskor.',
      'Producent och årgång kan vara viktigare än druvnamnet, vilket gör ständig aktualitetskontroll nödvändig.',
      'Hälsoriskerna med alkohol ska framgå utan att smakdiskussionen blir moraliserande.'
    ],
    questions:['Vilken del av maträtten dominerar?','Är vinet balanserat vid rätt serveringstemperatur?','Finns ett alkoholfritt alternativ med samma funktion?']
  },
  'helg-stockholm-staden-mellan-barn-och-aldre': {
    sections:[
      {heading:'Bostaden som nav',paragraphs:[
        'Bostadsbeståndets storlek räcker inte som mått. En lägenhet kan finnas men vara för dyr, för trång eller otillgänglig för den som behöver den. Matchningen mellan hushåll och bostad är därför central.',
        'Äldre som vill flytta från en villa behöver alternativ i samma område. Om tillgängliga mindre bostäder saknas stannar flyttkedjan och större bostäder frigörs inte.',
        'För unga avgör kötid, kontantinsats och inkomst vilken del av marknaden som över huvud taget är möjlig. Skillnaderna förstärker föräldrarnas ekonomiska betydelse.'
      ]},
      {heading:'En regional vardag',paragraphs:[
        'Stockholm fungerar över kommungränser. En bostad i Nacka, ett arbete i Solna och en utbildning i innerstaden binds samman av samma transportsystem.',
        'När bostäder färdigställs innan kollektivtrafiken får kapacitet uppstår trängsel. När trafiken byggs utan tillräckligt bostadsunderlag kan investeringen användas sämre än planerat.',
        'Planeringen måste därför redovisa gemensamma tidlinjer för bostäder, skolor, vård och resor, inte separata projektlistor.'
      ]}
    ],
    analysis:[
      'Stockholms viktigaste utmaning är samordning mellan kommun, region och stat.',
      'Demografin förändras olika i stadsdelarna, vilket kräver mer detaljerad och ofta uppdaterad statistik.',
      'Politiska mål bör följas genom färdigställda bostäder och fungerande service, inte bara planbesked.'
    ],
    questions:['Var ökar gruppen över 80 år snabbast?','Vilka skolområden får minskande elevunderlag?','Följer kollektivtrafikens kapacitet bostadsbyggandet?']
  },
  'helg-kulturdebatt-vem-far-ta-plats': {
    sections:[
      {heading:'Kulturens dubbla uppdrag',paragraphs:[
        'Offentligt finansierad kultur förväntas både hålla hög konstnärlig kvalitet och nå en bred publik. Målen kan stödja varandra, men de kan också komma i konflikt när det experimentella har liten publik.',
        'En institution behöver kunna ta risker utan att varje projekt bedöms efter biljettintäkten. Samtidigt måste den kunna förklara varför resurserna används och vilka grupper som faktiskt nås.',
        'Armlängds avstånd skyddar innehållet från direkt politisk styrning men befriar inte verksamheten från transparens.'
      ]},
      {heading:'Geografi och deltagande',paragraphs:[
        'Kulturutbudet koncentreras ofta till centrala platser där scener och publik redan finns. Lokala bibliotek, samlingslokaler och mindre scener kan sänka tröskeln i andra delar av staden.',
        'Digital tillgång breddar räckvidden men ersätter inte den gemensamma erfarenheten av ett rum, ett samtal eller en föreställning.',
        'En genomtänkt kulturpolitik behöver följa både var pengar används och vilka som deltar, utan att reducera människor till målgruppsstatistik.'
      ]}
    ],
    analysis:[
      'Den svåraste kulturpolitiska frågan är hur frihet, kvalitet och tillgänglighet ska vägas när resurserna är begränsade.',
      'Publiksiffror är nödvändiga men otillräckliga som kvalitetsmått.',
      'Kulturdebatt behöver redovisa vem som bär kostnaden när stöd minskar eller biljettpriser höjs.'
    ],
    questions:['Vilka invånare nås inte av dagens kulturutbud?','Hur mäts konstnärlig förnyelse?','Vilken långsiktighet behöver fria aktörer?']
  },
  'helg-usa-mellanarsvalet-som-maktprov': {
    sections:[
      {heading:'Valets geografi',paragraphs:[
        'Nationella opinionsmätningar kan visa stämningen men avgör inte mandatfördelningen. Representanthuset bestäms distrikt för distrikt och senaten delstat för delstat.',
        'Små väljarförflyttningar i ett begränsat antal jämna områden kan därför förändra kontrollen över kongressen även om den nationella röstandelen rör sig lite.',
        'Valdeltagandet är särskilt viktigt i ett mellanårsval, där entusiasmen ofta skiljer sig mellan partiernas väljargrupper.'
      ]},
      {heading:'Efter valnatten',paragraphs:[
        'Om oppositionen tar representanthuset får den kontroll över utskott och dagordning. Det ökar möjligheten att granska regeringen och blockera lagförslag.',
        'Senaten har särskild betydelse för utnämningar och domstolar. Delad kontroll kan därför ge olika resultat beroende på vilken kammare som byter majoritet.',
        'Ett jämnt val kan följas av rättsprocesser och konflikter om rösträkning. Redaktionell rapportering måste skilja verifierade resultat från politiska påståenden.'
      ]}
    ],
    analysis:[
      'Mellanårsvalet är både ett omdöme om presidenten och 470 separata kongressval med lokala kandidater.',
      'Ekonomisk oro påverkar regeringspartiet, men utrikespolitiken kan ändra vilka väljare som mobiliseras.',
      'Institutionella följder är viktigare än den symboliska berättelsen om vinnare och förlorare.'
    ],
    questions:['Vilka distrikt har verkligt jämna marginaler?','Hur påverkar valdeltagandet mandatbilden?','Vad kan en ny majoritet faktiskt genomföra?']
  },
  'helg-eu-tillvaxt-utan-fart': {
    sections:[
      {heading:'En union med olika konjunkturer',paragraphs:[
        'Ett genomsnitt för EU döljer stora skillnader. Exportberoende industriländer påverkas annorlunda av energipriser än tjänsteekonomier och länder med stark inhemsk efterfrågan.',
        'Den gemensamma penningpolitiken möter därför ekonomier med olika inflation, skuldsättning och bostadsmarknad. Samma ränta kan vara stram i ett land och mindre stram i ett annat.',
        'Nationell finanspolitik får jämna ut skillnaderna, men höga skulder begränsar handlingsutrymmet.'
      ]},
      {heading:'Investeringarnas kvalitet',paragraphs:[
        'Europa behöver investera i energi, försvar, digital kapacitet och infrastruktur. Den centrala frågan är inte bara hur mycket som spenderas utan om satsningarna höjer produktiviteten.',
        'Gemensam finansiering kan sänka kostnaden och minska dubbelarbete, men väcker konflikter om ansvar och kontroll.',
        'Om medborgarna upplever högre kostnader före nya nyttor riskerar den politiska uthålligheten att försvagas.'
      ]}
    ],
    analysis:[
      'EU:s återhämtning blir trovärdig först när produktivitet och realinkomster förbättras.',
      'En gemensam ränta kan inte lösa strukturella skillnader mellan medlemsländerna.',
      'Politiskt stöd kräver att investeringarnas resultat kan mätas och förklaras.'
    ],
    questions:['Vilka länder driver tillväxten?','Ökar investeringarna produktiviteten?','Hur fördelas kostnaderna mellan generationer och länder?']
  },
  'helg-nya-trender-ai-blir-osynlig': {
    sections:[
      {heading:'När beslutet flyttar in i systemet',paragraphs:[
        'AI används allt oftare för att sortera, prioritera och föreslå snarare än för att skriva ett synligt svar. Den påverkar vilka ärenden som granskas först och vilken information användaren får se.',
        'Det skapar en ny ansvarssituation. Den som använder systemet kan tro att rangordningen är neutral trots att den bygger på data, mål och trösklar som någon har valt.',
        'Organisationen måste därför dokumentera både modellen och den mänskliga process som omger den.'
      ]},
      {heading:'Produktivitetens baksida',paragraphs:[
        'När en uppgift går snabbare kan organisationen producera mer, men också sprida fel i större skala. Effektivitet ska därför mätas efter kvalitetskontroll, inte före.',
        'Automatisering kan flytta arbete från produktion till granskning. Om granskningstiden inte budgeteras blir människan en symbolisk säkerhetsventil utan verklig möjlighet att ingripa.',
        'De bästa systemen gör osäkerhet synlig och ger användaren ett tydligt sätt att rätta eller överklaga.'
      ]}
    ],
    analysis:[
      'Den mest betydelsefulla AI-trenden är osynlig integration, inte spektakulära demonstrationer.',
      'Ansvar måste kunna följas från datakälla till beslut och rättelse.',
      'Produktivitetsvinster är verkliga först när kostnaden för fel räknats in.'
    ],
    questions:['Vet användaren när AI påverkar beslutet?','Finns loggar och möjlighet till rättelse?','Mäts fel efter att systemet satts i drift?']
  },
  'helg-politisk-debatt-loften-och-finansiering': {
    sections:[
      {heading:'Kostnaden över tid',paragraphs:[
        'Ett förslag kan vara billigt första året och dyrt när det byggts ut. Engångsinvesteringar och permanenta driftskostnader måste därför redovisas separat.',
        'Finansiering genom lån kan vara rimlig för långlivad infrastruktur men mer problematisk för löpande verksamhet. Vem som betalar beror också på skatter, avgifter och framtida budgetutrymme.',
        'Dynamiska effekter kan finnas, men de ska beskrivas som antaganden och inte som garanterade intäkter.'
      ]},
      {heading:'Genomförandets politik',paragraphs:[
        'Lagar och budgetbeslut räcker inte om kommuner, myndigheter eller företag saknar personal och kapacitet. Reformer behöver en ansvarig aktör och realistiska delmål.',
        'Motstånd kan uppstå från grupper som bär en koncentrerad kostnad även när samhällsnyttan är bred. En hållbar plan måste hantera övergången, inte bara slutläget.',
        'Utvärdering bör beslutas samtidigt som reformen. Annars väljs mått i efterhand för att passa den politiska berättelsen.'
      ]}
    ],
    analysis:[
      'Den stora skillnaden går mellan finansierade mål och genomförbara planer.',
      'Övergångsregler avgör ofta reformens legitimitet.',
      'Samma krav på kostnad och evidens ska gälla regering och opposition.'
    ],
    questions:['Är kostnaden tillfällig eller permanent?','Vem ansvarar för genomförandet?','Vilket mått avgör om reformen lyckats?']
  },
  'helg-makroekonomi-fem-ekonomier': {
    sections:[
      {heading:'Räntan träffar olika',paragraphs:[
        'I Sverige går ränteförändringar snabbt genom korta bolånebindningar och bostadsrättsföreningars lån. I USA är långa bundna bolån vanligare, vilket skyddar befintliga låntagare men kan låsa in dem i sina bostäder.',
        'I euroområdet varierar både skuldsättning och bankstruktur mellan länder. Japan lämnar en lång period av extremt låg ränta, medan Kina använder andra kreditkanaler för att stödja investeringar.',
        'Därför kan samma globala inflationschock ge olika reaktioner från centralbankerna.'
      ]},
      {heading:'Energi, handel och valuta',paragraphs:[
        'Dyrare olja flyttar inkomster från importörer till exportörer och höjer kostnaden för transport och produktion. Effekten på inflation beror på valuta och hur snabbt företag för priser vidare.',
        'Handelsrestriktioner kan skydda en sektor men höja kostnader för andra företag som använder importerade insatsvaror. Vinsten syns lokalt medan kostnaden sprids.',
        'Valutor fungerar som stötdämpare men kan också förstärka inflationen. En svag krona hjälper exportörer och gör import dyrare samtidigt.'
      ]}
    ],
    analysis:[
      'Makroekonomin 2026 präglas mer av skillnader mellan länder än av en gemensam konjunktur.',
      'Skuldens löptid avgör hur snabbt penningpolitiken når hushåll och företag.',
      'Geopolitik påverkar inflationen genom energi, frakt, handel och förtroende.'
    ],
    questions:['Hur snabbt slår räntan igenom?','Vilka länder är mest energi- och handelsberoende?','Är tillväxten driven av produktivitet eller skuld?']
  },
  'helg-bocker-lasning-som-motstand': {
    sections:[
      {heading:'Att läsa en bok mot sin tid',paragraphs:[
        'Äldre litteratur bär både insikter och blinda fläckar från sin epok. Läsaren behöver varken avvisa verket eller acceptera dess världsbild oförändrad.',
        'Historisk kontext förklarar varför en text ser ut som den gör, men ursäktar inte automatiskt dess begränsningar. Kritisk läsning håller båda tankarna levande.',
        'Klassikerns värde ligger ofta i att den fortsätter skapa friktion, inte i att varje sida känns tidlös.'
      ]},
      {heading:'Recensionens ansvar',paragraphs:[
        'En recension ska ge läsaren tillräckligt med innehåll för att förstå bedömningen men inte ersätta hela boken. Citat används sparsamt och med tydlig funktion.',
        'Författarens avsikt är relevant men inte ensam avgörande. Struktur, språk, belägg och verkan kan bedömas självständigt.',
        'Helg kommer att återvända till böcker efter publiceringsveckan och fråga vilka som fortfarande är värda uppmärksamhet.'
      ]}
    ],
    analysis:[
      'Litterär kvalitet och samtidens relevans är två olika bedömningar.',
      'Kontext gör kritiken mer precis, inte mindre skarp.',
      'Bokbevakning bör motstå förlagens snabba lanseringscykel.'
    ],
    questions:['Vad försöker boken göra?','Vilka röster eller belägg saknas?','Håller argumentet eller formen efter den första aktualiteten?']
  },
  'helg-psykologi-oro-och-kontroll': {
    sections:[
      {heading:'Undvikandets korta belöning',paragraphs:[
        'När en människa undviker det som väcker oro sjunker obehaget ofta direkt. Den lättnaden lär hjärnan att undvikandet fungerade, även om hotet aldrig prövades.',
        'På längre sikt kan livsutrymmet krympa. Fler platser, samtal eller beslut börjar kännas farliga eftersom personen inte får erfarenhet av att klara dem.',
        'Behandling arbetar ofta gradvis med att närma sig det svåra på ett säkert och planerat sätt.'
      ]},
      {heading:'Nyhetsflödet och nervsystemet',paragraphs:[
        'Ständig kontroll av nyheter kan ge en känsla av beredskap, men varje ny uppdatering kan också återaktivera oron. Informationen saknar en naturlig slutpunkt.',
        'En bestämd tid för nyheter och tydliga källor kan minska upprepningen utan att personen behöver blunda för verkliga risker.',
        'Råd måste anpassas till individen. Svår ångest, panik, depression eller självmordstankar kräver kontakt med vården.'
      ]}
    ],
    analysis:[
      'Kortvarig lättnad kan förstärka långvarigt undvikande.',
      'Informationssökning är hjälpsam när den leder till handling och problematisk när den bara reglerar känslan för stunden.',
      'Psykologiska texter ska vara tydliga med gränsen mellan allmän kunskap och vård.'
    ],
    questions:['Leder kontrollen till ett beslut?','Har undvikandet börjat begränsa vardagen?','Behövs professionell bedömning?']
  },
  'helg-filosofi-vad-ar-ett-gott-liv': {
    sections:[
      {heading:'Mening och gemenskap',paragraphs:[
        'Ett gott liv är sällan helt individuellt. Relationer, samhällsinstitutioner och materiella villkor påverkar vilka val som faktiskt är möjliga.',
        'Filosofiska råd som bara betonar attityd riskerar att göra strukturella problem till personliga misslyckanden. Samtidigt kan ingen samhällsordning fatta alla livsval åt individen.',
        'Spänningen mellan personligt ansvar och gemensamma villkor är därför central.'
      ]},
      {heading:'Döden som måttstock',paragraphs:[
        'Medvetenheten om livets slut kan göra vissa mål mindre viktiga och andra mer akuta. Den behöver inte leda till pessimism utan kan skärpa prioriteringen.',
        'Stoiker och existentialister använder dödligheten på olika sätt, men båda riktar uppmärksamheten mot hur människan lever nu.',
        'Frågan är inte bara vad man vill uppnå, utan vilken människa man blir genom sina upprepade val.'
      ]}
    ],
    analysis:[
      'Filosofin motverkar föreställningen att effektivitet automatiskt är ett gott värde.',
      'Individuellt ansvar måste förstås tillsammans med verkliga sociala begränsningar.',
      'Ett genomtänkt liv kräver prioritering, eftersom alla värden inte kan maximeras samtidigt.'
    ],
    questions:['Vilka mål är medel och vilka är mål i sig?','Vad ligger inom min kontroll?','Vilka skyldigheter har jag mot andra?']
  },
  'helg-historia-skotten-i-sarajevo': {
    sections:[
      {heading:'Människorna bakom besluten',paragraphs:[
        'Ledarna 1914 arbetade med ofullständig information och starka föreställningar om prestige. De fruktade att eftergifter skulle uppmuntra motståndaren och att väntan skulle försämra den militära positionen.',
        'Diplomater försökte hitta kompromisser, men meddelanden färdades långsammare än mobiliseringsplanerna. När arméerna började röra sig förändrades varje beslut från politisk signal till praktisk krigsförberedelse.',
        'Ingen enskild ledare kontrollerade hela kedjan, men ansvaret försvinner inte för att besluten var ömsesidigt beroende.'
      ]},
      {heading:'Kriget som de missbedömde',paragraphs:[
        'Många beslutsfattare räknade med ett kort krig. De underskattade industrisamhällets förmåga att mobilisera miljoner soldater och producera vapen under flera år.',
        'Skyttegravarna på västfronten blev symbolen för låsningen, men kriget var globalt och omfattade sjövägar, kolonier, Mellanöstern och östra Europa.',
        'När kriget slutade hade imperier fallit och samhällen skuldsatts. Freden skapade nya stater men också nya minoritetsproblem och konflikter.'
      ]},
      {heading:'Vad historien faktiskt lär',paragraphs:[
        'Historien upprepar sig inte mekaniskt. Dagens institutioner, kärnvapen och informationsmiljö skiljer sig radikalt från 1914.',
        'Men julikrisen visar hur allianser, tidspress och missuppfattningar kan göra en begränsad konflikt större. Den visar också att mobilisering och retorik kan minska handlingsutrymmet innan någon formellt har valt storkrig.',
        'Den viktigaste lärdomen är därför att kriser måste bedömas som system av reaktioner, inte som isolerade beslut.'
      ]}
    ],
    analysis:[
      'Attentatet var en utlösande händelse, men kriget krävde en kedja av politiska beslut.',
      'Militär tidspress begränsade diplomatin och gjorde försiktighet svårare att signalera.',
      'Efterhandskunskap får inte dölja att aktörerna hade val, även om alternativen uppfattades som riskabla.'
    ],
    questions:['När blev en lokal konflikt ett europeiskt systemproblem?','Vilka beslut kunde ha brutit kedjan?','Hur förändrade kriget Europas politiska karta?']
  }
};
