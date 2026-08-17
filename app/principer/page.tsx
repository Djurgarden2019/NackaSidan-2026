import Link from 'next/link';

const principles=[
 ['Källa först','Uppgifter som går att verifiera ska bygga på tydliga källor. Läsaren ska kunna förstå var informationen kommer ifrån.'],
 ['Fakta och analys isär','Verifierade uppgifter, tolkning och redaktionell analys ska inte flyta ihop. Det ska vara tydligt vad som är vad.'],
 ['Tidsstämpel och färskhet','När tid spelar roll ska publicering och uppdatering framgå. Äldre uppgifter ska inte presenteras som nya.'],
 ['Rättelser ska synas','Fel ska rättas tydligt och utan att den tidigare formuleringen försvinner spårlöst ur sammanhanget.'],
 ['Relevans före mängd','NackaSidan ska inte vinna på flest rubriker utan på att välja ut, förklara och sätta det viktigaste i sammanhang.'],
 ['Osäkerhet ska anges','När fakta är ofullständiga eller källor motsäger varandra ska det sägas uttryckligen i stället för att fylla luckor med antaganden.']
];

export const metadata={title:'Redaktionella principer | NackaSidan 2026',description:'Så arbetar NackaSidan med källor, fakta, analys, rättelser och transparens.'};

export default function PrinciplesPage(){return <main><div className="shell"><div className="page-hero"><div className="kicker">Om NackaSidan</div><h1>Redaktionella principer</h1><p>Vår ambition är enkel: göra nyheter mer begripliga utan att göra dem mindre noggranna.</p></div><section className="section no-top"><div className="article-list">{principles.map(([title,text],index)=><article className="article-row" key={title}><div className="meta">{String(index+1).padStart(2,'0')} · Princip</div><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section><section className="section" style={{borderTop:'1px solid #d4d4d4',paddingTop:24}}><div className="kicker">Transparens</div><h2>Så ska läsaren kunna kontrollera oss</h2><p className="lead">Källhänvisningar, uppdateringstid och tydlig skillnad mellan fakta och analys är en del av själva produkten – inte något som läggs till i efterhand.</p><Link className="button" href="/sverige">Se principerna i praktiken</Link></section></div></main>}
