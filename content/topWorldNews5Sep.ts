export type TopWorldArticle={
 slug:string;section:string;title:string;summary:string;image:string;imageCredit:string;
 news:string[];analysis:string[];depth:string[];sources:{label:string;url:string}[];
};

export const topWorldNews5Sep:TopWorldArticle[]=[
{
 slug:'israel-anfall-sodra-libanon',section:'Mellanöstern · Libanon',title:'Elva döda efter israeliska anfall i södra Libanon',summary:'Två barn och två sjukvårdare finns enligt Libanons statliga nyhetsbyrå bland de döda. Risken ökar för en ny spiral av vedergällningar.',
 image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Beirut_skyline%2C_Lebanon.jpg/1280px-Beirut_skyline%2C_Lebanon.jpg',imageCredit:'Beirut, Libanon · Wikimedia Commons',
 news:['Israeliska anfall mot Kfar Rumman i södra Libanon har enligt landets statliga nyhetsbyrå dödat minst elva människor. Nio uppges ha dödats när ett bostadshus bombades och två sjukvårdare i ett separat drönaranfall mot ett fordon.','Israels militär hade när Reuters publicerade uppgifterna inte kommenterat målen eller uppgifterna om civila offer. Uppgifterna om antal döda kommer därför i detta skede från libanesiska myndigheter.'],
 analysis:['Anfallen ökar risken för nya attacker från Hizbollah och pressar den sköra vapenvilan. För Libanon förvärras en redan djup ekonomisk och humanitär kris.','Israels mål är att minska den militära hotbilden nära gränsen, men höga civila kostnader kan samtidigt undergräva internationellt stöd och stärka viljan till vedergällning.'],
 depth:['Det viktigaste att följa är om Hizbollah svarar, om den libanesiska staten kan agera och om internationella medlare kan återupprätta en trovärdig övervakning.','Dödstal och ansvarspåståenden kan förändras när räddningsarbete och oberoende verifiering fortsätter.'],
 sources:[{label:'Reuters – Israeli strikes on southern Lebanese town kill 11',url:'https://www.reuters.com/world/middle-east/israeli-strikes-southern-lebanese-town-kill-11-state-news-agency-says-2026-09-07/'}]
},
{
 slug:'nordkorea-ryssland-vagbro',section:'Asien · Säkerhet',title:'Nordkorea och Ryssland öppnar sin första vägförbindelse',summary:'Den nya bron över Tumenfloden kompletterar järnvägen och blir en symbol för de snabbt växande banden mellan Moskva och Pyongyang.',
 image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tumen_River_between_Russia_and_North_Korea.jpg/1280px-Tumen_River_between_Russia_and_North_Korea.jpg',imageCredit:'Tumenfloden · Wikimedia Commons',
 news:['Nordkorea och Ryssland har öppnat sin första landsvägsbro över Tumenfloden, enligt den ryska nyhetsbyrån Tass. Sedan 1959 har länderna haft en järnvägsförbindelse över samma gränsområde.','Bygget inleddes efter Vladimir Putins besök i Nordkorea 2024 och ska enligt länderna stärka handel, turism och tekniskt samarbete.'],
 analysis:['Bron gör transporter mindre beroende av järnväg och sjöfart och kan därför få både ekonomisk och militär betydelse.','För omvärlden blir frågan om förbindelsen används för flöden som omfattas av internationella sanktioner. Infrastrukturens kapacitet och faktiska trafik blir viktigare än invigningens symbolik.'],
 depth:['Ryssland behöver arbetskraft, materiel och politiska partners. Nordkorea behöver energi, livsmedel, valuta och teknik. Det skapar ett ömsesidigt men ojämnt beroende.','Den nya vägen bör följas tillsammans med truppsamarbete, vapenleveranser och förändringar i gränskontrollen.'],
 sources:[{label:'Reuters – North Korea and Russia open first road bridge',url:'https://www.reuters.com/world/asia-pacific/north-korea-russia-open-their-first-road-bridge-symbol-expanding-ties-tass-2026-09-07/'}]
},
{
 slug:'fn-varnar-ai-risk',section:'AI · Mänskliga rättigheter',title:'FN:s människorättschef varnar för existentiella AI-risker',summary:'Volker Türk efterlyser internationella säkerhetsregler och varnar för att makten över avancerad AI koncentreras till ett fåtal företag och personer.',
 image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_des_Nations_Geneva_2018.jpg/1280px-Palais_des_Nations_Geneva_2018.jpg',imageCredit:'FN-palatset i Genève · Wikimedia Commons',
 news:['FN:s människorättschef Volker Türk varnar för att avancerad artificiell intelligens kan medföra mycket allvarliga risker om styrning och säkerhet inte utvecklas i samma takt.','Han efterlyser gemensamma internationella röda linjer och skydd för mänskliga rättigheter när allt mer kraftfulla system utvecklas av ett begränsat antal företag.'],
 analysis:['Varningen handlar både om framtida extrema risker och om dagens problem: diskriminering, övervakning, desinformation och koncentrerad ekonomisk makt.','Internationella regler kan skapa minimikrav, men de måste vara möjliga att kontrollera. Annars riskerar överenskommelser att bli principförklaringar utan praktisk betydelse.'],
 depth:['De mest användbara åtgärderna är oberoende tester, incidentrapportering, tydligt ansvar och möjlighet att stoppa system med stora konsekvenser.','Samtidigt måste regler utformas så att mindre företag och offentlig forskning inte slås ut av kostnader som bara de största aktörerna klarar.'],
 sources:[{label:'Reuters – UN rights chief warns about AI risks',url:'https://www.reuters.com/technology/ai-could-pose-existential-risk-humanity-un-rights-chief-warns-2026-09-07/'}]
},
{
 slug:'brandrok-luftkvalitet-wmo',section:'Klimat · Hälsa',title:'WMO: Bränder och värme hotar luftkvaliteten',summary:'Rök och marknära ozon kan spridas långt från extrema bränder. Klimatförändringen riskerar därmed att bromsa förbättringar av luftkvaliteten.',
 image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Wildfire_smoke_over_city.jpg/1280px-Wildfire_smoke_over_city.jpg',imageCredit:'Brandrök över bebyggelse · Wikimedia Commons',
 news:['Världsmeteorologiska organisationen varnar för att värmeböljor och skogsbränder gör luftföroreningar till ett växande gränsöverskridande problem.','Särskilt små partiklar och marknära ozon kan bidra till hjärt- och lungsjukdomar även långt från själva brandplatsen.'],
 analysis:['Klimat och luftföroreningar förstärker varandra. Värme ökar brandrisken, medan rök belastar sjukvård, arbetsliv och skolor.','Det gör tidiga varningar, mätningar och information till riskgrupper lika viktiga som själva brandbekämpningen.'],
 depth:['På lång sikt krävs både lägre utsläpp och robustare samhällen. Renare inomhusluft, reservkraft och lokala beredskapsplaner kan minska skadorna.','Lokala prognoser måste uppdateras ofta eftersom vind och nederbörd snabbt förändrar exponeringen.'],
 sources:[{label:'Reuters – Wildfires and heat threaten air quality',url:'https://www.reuters.com/sustainability/cop/wildfires-heat-waves-threaten-undermine-air-quality-un-weather-agency-says-2026-09-07/'}]
},
{
 slug:'taiwan-chipdiplomati',section:'Teknik · Taiwan',title:'Taiwan använder chipindustrin som diplomatisk hävstång',summary:'Taiwan söker fler internationella partnerskap samtidigt som USA och EU vill få en större del av den strategiska halvledarproduktionen.',
 image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Semiconductor_wafer.jpg/1280px-Semiconductor_wafer.jpg',imageCredit:'Halvledarskiva · Wikimedia Commons',
 news:['Taiwan lyfter fram sin halvledarindustri som grund för internationella partnerskap. TSMC:s investeringar i USA är en central del av utvecklingen, samtidigt som EU försöker locka taiwanesiska projekt.','Bakgrunden är den växande efterfrågan på AI-chip och trycket att sprida produktionen geografiskt.'],
 analysis:['Taiwan kan använda sin tekniska betydelse för att bygga politiska relationer, men möter samtidigt krav på att flytta kompetens och kapacitet utomlands.','En bredare produktion minskar vissa försörjningsrisker men kan på sikt försvaga det industriella kluster som gjort Taiwan unikt.'],
 depth:['Halvledare kräver mer än fabriker: leverantörer, vatten, energi och kvalificerad personal måste finnas samtidigt. Därför tar verklig diversifiering många år.','För Europa är möjligheten att delta beroende av stabila regler, snabb tillståndsgivning och tillgång till avancerad forskning.'],
 sources:[{label:'Reuters – Taiwan flexes chip diplomacy',url:'https://www.reuters.com/world/china/taiwan-flexes-chip-diplomacy-muscles-it-faces-pressure-share-ai-wealth-with-2026-09-07/'}]
},
{
 slug:'ecb-rantehojningar-prognos',section:'Europa · Ekonomi',title:'Ny prognos pekar mot fler räntehöjningar från ECB',summary:'Deutsche Bank räknar med fortsatt åtstramning genom december. Stigande oljepris gör inflationsbilden mer svårbedömd.',
 image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/European_Central_Bank_-_Frankfurt.jpg/1280px-European_Central_Bank_-_Frankfurt.jpg',imageCredit:'Europeiska centralbanken i Frankfurt · Wikimedia Commons',
 news:['Deutsche Bank räknar enligt Reuters med att Europeiska centralbanken fortsätter höja räntan genom december. Bedömningen är en prognos från banken, inte ett beslut från ECB.','Samtidigt pressas europeiska aktier av högre oljepris, vilket kan öka företagens kostnader och komplicera kampen mot inflationen.'],
 analysis:['Högre ränta kan dämpa prisökningarna men slår mot investeringar, bostäder och skuldsatta hushåll. Samma ränta får olika effekt i medlemsländer med olika skuld och tillväxt.','För Sverige påverkas kronan, exportefterfrågan och marknadsräntorna trots att landet står utanför euron.'],
 depth:['Det viktiga inför kommande beslut är utvecklingen för tjänsteinflation, löner och energi. En bankprognos ska inte läsas som ett säkert besked.','Om oljepriset förblir högt kan centralbanken ställas inför valet mellan svagare tillväxt och större inflationsrisk.'],
 sources:[{label:'Reuters – Deutsche Bank expects ECB rate hikes',url:'https://www.reuters.com/business/finance/deutsche-bank-expects-ecb-extend-rate-hikes-through-december-2026-09-07/'},{label:'Reuters – European shares dip as oil rises',url:'https://www.reuters.com/markets/europe/european-shares-dip-rise-oil-prices-weighs-novartis-slips-2026-09-07/'}]
}
];

export function getTopWorldArticle(slug:string){return topWorldNews5Sep.find(article=>article.slug===slug)}
