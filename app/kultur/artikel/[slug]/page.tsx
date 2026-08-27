import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles:Record<string,{section:string,title:string,intro:string}>={
 'familjehemligheter-som-samhallsspegel':{section:'Veckans bok',title:'Romanen som gör familjens hemligheter till samhällsspegel',intro:'Familjen blir en koncentrerad bild av klass, ansvar och identitet.'},
 'sensommarens-nya-bocker':{section:'Nya böcker',title:'Sensommarens utgivning rör sig mellan spänning och självbiografi',intro:'Höstens bokperiod inleds med både breda berättelser och personliga röster.'},
 'sensommarens-filmer':{section:'Film',title:'Sensommarens filmer söker det mänskliga i det spektakulära',intro:'Stora genrefilmer möter mindre personliga berättelser när höstsäsongen börjar.'},
 'streamingserier-kortare-tatare-dyrare':{section:'TV-serier',title:'Streamingserierna blir kortare, tätare och dyrare',intro:'Färre avsnitt ska bära större kostnader och vinna en publik med mindre tid.'},
 'konsertsommaren-forlangs':{section:'Musik',title:'Konsertsommaren förlängs in i augusti',intro:'Arenor och mindre scener konkurrerar om samma publik med olika upplevelser.'},
 'bibliotekens-vaxande-roll':{section:'Bibliotek',title:'Bibliotekens roll växer när informationsmiljön blir mer splittrad',intro:'Fri tillgång, lokal närvaro och digitalt ansvar måste förenas.'},
 'public-service-demokratisk-konflikt':{section:'Public service',title:'Oberoende medier blir en allt tydligare demokratisk konflikt',intro:'Finansiering och förtroende formar det gemensamma offentliga samtalet.'},
 'generativ-ai-upphovsratt':{section:'AI & kultur',title:'Generativ AI utmanar både upphovsrätt och konstnärlig identitet',intro:'Ersättning, transparens och kreativ kontroll står i centrum.'},
 'kulturstodets-mal':{section:'Kulturpolitik',title:'Kulturstödets mål blir svårare att formulera',intro:'Bredd, kvalitet, spridning och frihet konkurrerar om samma resurser.'}
};

export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}

export default async function CultureArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const article=articles[slug]; if(!article) notFound();
 return <main><article className="shell article"><div className="page-hero"><div className="kicker">{article.section}</div><h1>{article.title}</h1><p>{article.intro}</p></div><section className="section no-top"><p className="lead">NackaSidan sätter frågan i ett större sammanhang och skiljer det aktuella skeendet från den långsiktiga utvecklingen.</p><p className="lead">Det avgörande är hur publikens vanor, branschens ekonomi och politiska beslut påverkar vilka berättelser och röster som får utrymme.</p></section><section className="section"><Link className="button" href="/kultur">Tillbaka till Kultur</Link> <Link className="text-link" href="/kulturdebatt">Kulturdebatt →</Link></section></article></main>;
}
