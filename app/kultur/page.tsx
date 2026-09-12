import DailyDeskUpdate from '../../components/DailyDeskUpdate';
import type {Metadata} from 'next';
import Link from 'next/link';
import {cultureNews,newBooks,newFilms,newMusic,cultureProfiles,cultureSlug,type CultureItem} from '../../content/cultureDesk';
import {getLiveNews} from '../../lib/liveNews';

export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Kultur',description:'Aktuella kulturnyheter, nya böcker, filmer och musik samt kulturdebatt, filosofi och psykologi.'};
const todayLabel=()=>new Intl.DateTimeFormat('sv-SE',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Stockholm'}).format(new Date());
const normalize=(url:string)=>url.replace(/[?#].*$/,'').replace(/\/$/,'');

function Shelf({id,eyebrow,title,items,imageFor}:{id:string;eyebrow:string;title:string;items:CultureItem[];imageFor:(item:CultureItem)=>string|undefined}){
 return <section className="culture-shelf" id={id}><div className="culture-shelf-head"><div><div className="kicker">{eyebrow}</div><h2>{title}</h2></div></div><div className="culture-shelf-grid">{items.map((item,index)=><article key={item.title} className={index===0?'culture-item culture-item-lead':'culture-item'}>{imageFor(item)&&<Link href={`/kultur/artikel/${cultureSlug(item.title)}`} style={{display:'block',aspectRatio:'16/9',overflow:'hidden',marginBottom:14}}><img src={imageFor(item)} alt="" loading={index===0?'eager':'lazy'} style={{width:'100%',height:'100%',objectFit:'cover'}}/></Link>}<div className="kicker">{item.section} · {item.date}</div><h3><Link href={`/kultur/artikel/${cultureSlug(item.title)}`}>{item.title}</Link></h3><p>{item.summary}</p><p className="culture-why">{item.why}</p><p className="meta">{item.source}</p><Link className="text-link" href={`/kultur/artikel/${cultureSlug(item.title)}`}>Läs artikeln →</Link></article>)}</div></section>
}

export default async function CulturePage(){
 const live=await getLiveNews();
 const imageFor=(item:CultureItem)=>live.items.find(story=>normalize(story.link)===normalize(item.href))?.image;
 return <main><div className="shell culture-desk">
  <header className="culture-head"><div className="kicker">Uppdaterad {todayLabel()}</div><h1>Kultur</h1><p className="lead">Dagens viktigaste inom film, böcker och musik – med analys och tydliga originalkällor.</p><nav aria-label="Kulturavdelningar"><a href="#nyheter">Nyheter</a><a href="#bocker">Böcker</a><a href="#filmer">Filmer</a><a href="#musik">Musik</a><Link href="/kulturdebatt">Kulturdebatt</Link><a href="#ideer">Filosofi & psykologi</a></nav></header>
  <Shelf id="nyheter" eyebrow="Senaste 72 timmarna" title="Kulturnyheter" items={cultureNews} imageFor={imageFor}/>
  <Shelf id="bocker" eyebrow="Litteratur" title="Nya böcker" items={newBooks} imageFor={imageFor}/>
  <Shelf id="filmer" eyebrow="Bio & strömning" title="Nya filmer" items={newFilms} imageFor={imageFor}/>
  <Shelf id="musik" eyebrow="Lyssna" title="Ny musik" items={newMusic} imageFor={imageFor}/>
  <section className="culture-debate-promo"><div><div className="kicker">Kulturdebatt</div><h2>Vem bestämmer över den gemensamma kulturen?</h2><p>Bibliotek, public service, kulturstöd och generativ AI handlar om makt, tillgång och vilka röster som får plats i offentligheten.</p><Link className="button" href="/kulturdebatt">Öppna kulturdebatten</Link></div><ol>{['Bibliotekens demokratiska uppdrag','Public service och politiskt oberoende','AI, upphovsrätt och konstnärlig identitet','Kulturstöd och armlängds avstånd'].map((item,index)=><li key={item}><span>0{index+1}</span>{item}</li>)}</ol></section>
  <section className="culture-ideas" id="ideer"><div className="culture-shelf-head"><div><div className="kicker">Idéer & människor</div><h2>Filosofi och psykologi</h2></div></div><div className="culture-profile-grid">{cultureProfiles.map(profile=><article key={profile.slug}><div className="kicker">{profile.role}</div><h3>{profile.name}</h3><h4>{profile.title}</h4><p>{profile.intro}</p><ul>{profile.ideas.slice(0,2).map(idea=><li key={idea}>{idea}</li>)}</ul><Link className="button" href={`/kultur/portratt/${profile.slug}`}>Läs artikeln</Link></article>)}</div></section>
 </div><DailyDeskUpdate desk="kultur"/></main>
}