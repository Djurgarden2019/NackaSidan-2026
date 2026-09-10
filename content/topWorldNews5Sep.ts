export type TopWorldArticle={
 slug:string;section:string;title:string;summary:string;image:string;imageCredit:string;
 news:string[];analysis:string[];depth:string[];sources:{label:string;url:string}[];
};

export const topWorldNews5Sep:TopWorldArticle[]=[
{
 slug:'huthierna-mocka-roda-havet',section:'Jemen · Röda havet',title:'Huthierna tar hamnstaden Mocka – ny risk för världshandeln',summary:'Framryckningen för de Iranstödda huthierna närmare Bab al-Mandab, en av världens viktigaste passager för handel och energi.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bab-el-Mandeb%20map.png?width=1200',imageCredit:'Bab al-Mandab mellan Jemen och Afrikas horn · Wikimedia Commons',
 news:['Huthierna har tagit den strategiska hamnstaden Mocka och avancerat längs Jemens västkust, enligt Reuters och AP. Det är rörelsens största territoriella framgång sedan vapenvilan 2022.','Striderna har trappats upp med drönar- och robotattacker samt saudiska flyganfall. Huthierna säger att internationell sjöfart inte är målet, men har samtidigt hotat saudiska fartyg och transportleder.'],
 analysis:['Kontroll nära Bab al-Mandab ger huthierna större möjlighet att påverka trafiken mellan Röda havet och Indiska oceanen. Redan risken för angrepp kan höja kostnaderna för frakt, försäkring och energi.','För civilbefolkningen hotar en återgång till fullskaligt krig. När vägar och hamnar blir militära mål försvåras också leveranser av mat, bränsle och medicin.'],
 depth:['Jemenkonflikten är både ett inbördeskrig och en del av maktkampen mellan Iran, Saudiarabien och USA. Den kopplingen gör lokala strider till en internationell säkerhetsfråga.','Följ särskilt kontrollen över Hanishöarna, Saudiarabiens svar och om rederier åter börjar styra om fartyg runt Afrika.'],
 sources:[{label:'Reuters – Huthierna närmar sig Bab al-Mandab',url:'https://www.reuters.com/world/middle-east/saudi-says-no-danger-after-khamis-mushait-alert-amid-clashes-with-houthis-2026-09-10/'},{label:'AP – Huthierna tar den strategiska hamnstaden Mocka',url:'https://apnews.com/article/e4e799701b382799a955969c212800ea'}]
},
{
 slug:'ryssland-slar-mot-ukrainsk-ekonomi',section:'Ukraina · Kriget',title:'Ryska drönare slår mot Ukrainas bränsle- och livsmedelsinfrastruktur',summary:'En bensinstation i Kyiv och en stor solrosoljefabrik i Dnipro har träffats när angreppen mot logistik och företag intensifieras.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ukraine.svg?width=1200',imageCredit:'Ukrainas flagga · Wikimedia Commons',
 news:['En rysk drönare träffade en Ukrnafta-station i Kyiv och skadade fyra personer. I Dnipro dödades två personer och fem skadades när en anläggning som drivs av jordbruksföretaget Bunge träffades.','Även lager, butiker och transportleder har angripits de senaste veckorna. Ryssland förnekar att civila mål avsiktligt attackeras.'],
 analysis:['Angreppen riktar pressen mot ekonomins vardagsfunktioner: drivmedel, matproduktion och transporter. Skadorna kan påverka arbete och export långt efter räddningsinsatsen.','Ukraina måste fördela ett begränsat luftförsvar mellan fronten, städerna och ekonomisk infrastruktur. Det gör varje ny måltyp till ett strategiskt problem.'],
 depth:['Solrosolja är en viktig ukrainsk exportvara. Angrepp mot produktion och logistik kan påverka både Ukrainas statsinkomster och internationella livsmedelsflöden.','Det centrala framåt är om angreppen blir ett systematiskt försök att slå ut försörjningen inför vintern och om partnerländer kan förstärka luftförsvaret.'],
 sources:[{label:'Reuters – Angrepp mot bensinstation i Kyiv och fabrik i Dnipro',url:'https://www.reuters.com/world/europe/russian-forces-hit-kyiv-petrol-station-injuring-four-2026-09-10/'}]
},
{
 slug:'augusti-delat-varmerekord',section:'Klimat · Värme',title:'Augusti tangerade det globala värmerekordet',summary:'Den globala medeltemperaturen nådde 16,96 grader. Europas sommar blev den varmaste som hittills har uppmätts.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Global%20Temperature%20Anomaly.svg?width=1200',imageCredit:'Global temperaturavvikelse · Wikimedia Commons',
 news:['Augusti 2026 var tillsammans med juli 2023 den varmaste månad som har registrerats globalt, enligt EU:s klimattjänst Copernicus. Temperaturen låg 1,65 grader över den förindustriella nivån.','Månaden präglades av översvämningar och jordskred i Nepal och Tibet, bränder i Europa och Asien samt torka i delar av Centraleuropa.'],
 analysis:['En enskild månad över 1,5 grader innebär inte i sig att Parisavtalets långsiktiga gräns formellt har passerats. Den visar däremot hur nära världen ligger nivåer där extremväder blir vanligare och dyrare.','Värme påverkar samtidigt hälsa, jordbruk, elbehov, transporter och försäkringar. Klimatrisken blir därför en löpande ekonomisk fråga, inte ett avgränsat miljöområde.'],
 depth:['Den långsiktiga uppvärmningen drivs främst av utsläpp från fossila bränslen, medan naturliga variationer kan förstärka eller dämpa enskilda månader.','Nästa viktiga besked blir om havstemperaturerna förblir exceptionellt höga och hur höstens nederbörd påverkar redan utsatta områden.'],
 sources:[{label:'Reuters – Augusti tangerade globalt värmerekord',url:'https://www.reuters.com/sustainability/cop/august-was-worlds-joint-hottest-month-record-scientists-say-2026-09-10/'},{label:'The Guardian – FN:s klimatchef varnar för ekonomiska följder',url:'https://www.theguardian.com/environment/2026/sep/10/august-joint-hottest-month-recorded-globally'}]
},
{
 slug:'nato-stoppade-kabelsabotage',section:'Arktis · Säkerhet',title:'Natoallierade stoppade rysk övning nära datakablar vid Svalbard',summary:'Ryska undervattensfarkoster övade enligt Reuters med teknik som skulle kunna slå ut kritiska kablar utan tydliga spår.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Submarine%20cable%20map%20umap.png?width=1200',imageCredit:'Karta över undervattenskablar · Wikimedia Commons',
 news:['Brittiska, norska och amerikanska styrkor följde och konfronterade i våras ryska fartyg nära Svalbard, enligt två västliga tjänstemän som talat med Reuters. Ingen kabel skadades.','Operationen ska ha genomförts av den ryska undervattensenheten GUGI med djuphavsfarkoster och teknik avsedd att kunna störa kablar. Rysslands version framgår inte av uppgifterna.'],
 analysis:['Undervattenskablar bär nästan all internationell datatrafik och är svåra att övervaka. Ett avbrott kan störa kommunikation, betalningar och myndigheter utan att omedelbart avslöja vem som ligger bakom.','Händelsen visar hur gränsen mellan övning, underrättelseinhämtning och sabotage blir oklar. Den osäkerheten kan öka risken för felbedömningar mellan Nato och Ryssland.'],
 depth:['Svalbardkablarna förbinder ögruppen med norska fastlandet och förmedlar viktig satellitdata. Deras strategiska betydelse är större än deras geografiska avskildhet antyder.','Följ Natos ökade övervakning, investeringar i reservförbindelser och om alliansen tydliggör när ett kabelangrepp kan utlösa gemensamt försvar.'],
 sources:[{label:'Reuters – Natoallierade stoppade rysk kabelsabotageövning',url:'https://www.reuters.com/world/europe/nato-allies-foil-russian-subsea-cable-sabotage-plot-2026-09-10/'}]
},
{
 slug:'brics-mote-iran-kriget',section:'Indien · Diplomati',title:'Iran-kriget prövar sammanhållningen när BRICS samlas i New Delhi',summary:'Det utvidgade blocket vill tala med större tyngd men konflikter mellan de egna medlemmarna försvårar en gemensam linje.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/BRICS%202026%20Indian%20chairmanship%20logo.svg?width=1200',imageCredit:'Indiens ordförandeskap i BRICS 2026 · Wikimedia Commons',
 news:['Indien står värd för BRICS-toppmötet den 12–13 september. Kriget kring Iran, som är medlem i gruppen, väntas dominera samtidigt som även Förenade arabemiraten ingår i samarbetet.','Ledare från bland andra Kina och Ryssland väntas delta. För Indien blir mötet också en plattform för bilaterala samtal om handel, energi och säkerhet.'],
 analysis:['BRICS har vuxit i befolkning och ekonomisk tyngd, men expansionen har också samlat stater med motstridiga säkerhetsintressen. Ett urvattnat slututtalande skulle visa gränsen för blockets politiska handlingskraft.','Indien försöker samtidigt bevara relationer med väst, Ryssland och globala syd. Värdskapet blir därför ett test av landets ambition att vara en självständig diplomatisk knutpunkt.'],
 depth:['BRICS är inte en militär allians. Dess inflytande ligger främst i handel, finansiering, institutioner och möjligheten att samordna ståndpunkter i globala forum.','Följ formuleringarna om Iran, sanktioner och energihandel samt mötena mellan Narendra Modi, Xi Jinping och Vladimir Putin.'],
 sources:[{label:'Reuters – Iran-kriget prövar BRICS enighet',url:'https://www.reuters.com/world/china/india-hosts-brics-summit-iran-war-tests-bloc-unity-2026-09-10/'}]
},
{
 slug:'skolbrand-bukavu-kongo',section:'Kongo-Kinshasa · Olycka',title:'Minst 17 döda i skolbrand i Bukavu',summary:'Barn finns bland offren efter branden i den rebellkontrollerade staden. Orsaken var ännu inte fastställd när de första uppgifterna publicerades.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bukavu%20view.jpg?width=1200',imageCredit:'Bukavu i östra Kongo-Kinshasa · Wikimedia Commons',
 news:['Minst 17 människor har dött i en brand på en skola i Bukavu, enligt medicinska källor som Reuters talat med. Bland de döda finns barn.','Bukavu kontrolleras av rebellstyrkor och tillgången till tillförlitlig myndighetsinformation är begränsad. Uppgifter om dödstal och brandorsak kan därför förändras.'],
 analysis:['Katastrofen riktar ljuset mot civila institutioner i ett konfliktområde där räddningstjänst, sjukvård och säkerhet redan är hårt pressade.','När den offentliga kontrollen är splittrad blir det svårare att utreda ansvar, upprätthålla brandskydd och ge drabbade familjer stöd.'],
 depth:['Östra Kongo-Kinshasa präglas av väpnade grupper, omfattande fördrivning och konkurrens om resurser. En lokal olycka får därför konsekvenser i ett redan utsatt samhälle.','Det viktigaste närmast är en verifierad olycksutredning, identifiering av offren och besked om skolans säkerhet och evakuering.'],
 sources:[{label:'Reuters – Minst 17 döda i skolbrand i Bukavu',url:'https://www.reuters.com/world/africa/school-fire-congos-rebel-controlled-city-bukavu-kills-least-17-sources-say-2026-09-10/'}]
}
];

export function getTopWorldArticle(slug:string){return topWorldNews5Sep.find(article=>article.slug===slug)}
