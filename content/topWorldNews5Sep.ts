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
 slug:'ryssland-slar-mot-ukrainsk-ekonomi',section:'Ukraina · Kriget',title:'Kanada förstärker Ukrainas luftförsvar när drönarkriget trappas upp',summary:'Kanada lovar nytt luftförsvar, energistöd och miljontals drönare när Ryssland intensifierar angreppen mot ukrainsk infrastruktur.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Ukraine.svg?width=1200',imageCredit:'Ukrainas flagga · Wikimedia Commons',
 news:['Under Volodymyr Zelenskyjs besök lovade Kanada 350 miljoner kanadensiska dollar till luftförsvar och 430 miljoner i lånegarantier för naturgas och energisäkerhet.','Kanada planerar också en kraftig ökning av sin drönarproduktion och avser att avsätta en tredjedel till Ukraina. Samtidigt fortsätter ryska angrepp mot bränsle, livsmedel och logistik.'],
 analysis:['Stödet riktas mot två av Ukrainas mest akuta behov inför vintern: att stoppa luftangrepp och att säkra energi när civil infrastruktur träffas.','Gemensam drönarproduktion kan ge större uthållighet än enstaka leveranser, men effekten beror på hur snabbt produktionen når skala.'],
 depth:['Drönarkriget utvecklas snabbt och båda sidor slår allt längre från fronten. Billigare farkoster tvingar samtidigt fram dyr och begränsad luftvärnsanvändning.','Följ leveranstiderna, Ukrainas tillgång till robotar för luftförsvaret och om energistödet hinner stärka vinterberedskapen.'],
 sources:[{label:'AP – Kanada lovar nytt militärt stöd till Ukraina',url:'https://apnews.com/article/2a74de6552061bda57a1c5aa4464db52'},{label:'Reuters – Angrepp mot bensinstation i Kyiv och fabrik i Dnipro',url:'https://www.reuters.com/world/europe/russian-forces-hit-kyiv-petrol-station-injuring-four-2026-09-10/'}]
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
 slug:'iran-pickaxe-mountain',section:'Iran · Kärnteknik',title:'Trump hotar Iran efter aktivitet vid befäst kärnteknisk anläggning',summary:'USA uppger sig se aktivitet vid tunnelsystemet Pickaxe Mountain nära Natanz. Nya angrepp kan fördjupa kriget och pressa energimarknaden.',
 image:'https://commons.wikimedia.org/wiki/Special:FilePath/Natanz%20Nuclear%20Facility.JPG?width=1200',imageCredit:'Kärnteknisk anläggning vid Natanz i Iran · Wikimedia Commons',
 news:['USA:s president Donald Trump varnade Iran efter uppgifter om aktivitet vid Pickaxe Mountain, ett befäst tunnelsystem nära den skadade anrikningsanläggningen Natanz.','Trump öppnade för nya amerikanska angrepp om verksamheten fortsätter. Iran säger att landets kärntekniska program har fredliga syften.'],
 analysis:['Tunnelsystemet har blivit en symbol för den centrala osäkerheten i konflikten: hur mycket av Irans kärntekniska kapacitet som finns kvar och vad som kan byggas upp under jord.','Ett nytt angrepp kan utlösa iranska motattacker och ytterligare störa olje- och gasflöden. Militär press och energipriser är därmed direkt sammankopplade.'],
 depth:['Satellitbilder kan visa transporter och byggaktivitet men ger inte ensamma säkra besked om vad som sker inne i ett tunnelsystem. Oberoende inspektioner är därför avgörande.','Följ om IAEA får tillträde, om USA preciserar sina underrättelseuppgifter och hur Iran svarar diplomatiskt eller militärt.'],
 sources:[{label:'Reuters – Trump varnar Iran efter aktivitet vid Pickaxe Mountain',url:'https://www.reuters.com/world/trump-says-activity-seen-irans-pickaxe-mountain-urges-tehran-not-get-cute-2026-09-10/'}]
}
];

export function getTopWorldArticle(slug:string){return topWorldNews5Sep.find(article=>article.slug===slug)}
