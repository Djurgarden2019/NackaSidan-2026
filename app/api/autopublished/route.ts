import { NextRequest, NextResponse } from "next/server";
import { list, put } from "@vercel/blob";
export const dynamic = "force-dynamic";
type A={id:string;title:string;lead:string;body:string;section:string;source:string;sourceUrl:string;publishedAt:string;risk:string;score:number};
const PATH="nackasidan/autopublished.json";
const norm=(s:string)=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9åäö]+/g," ").trim();
async function read():Promise<A[]>{try{const r=await list({prefix:PATH});const b=r.blobs.find(x=>x.pathname===PATH);if(!b)return[];const q=await fetch(b.url,{cache:"no-store"});return q.ok?await q.json():[]}catch{return[]}}
async function write(a:A[]){await put(PATH,JSON.stringify(a),{access:"public",addRandomSuffix:false,contentType:"application/json"});}
export async function GET(){return NextResponse.json(await read(),{headers:{"Cache-Control":"no-store"}})}
export async function POST(req: NextRequest) {
  try {
    const incoming: A[] = await req.json();
    const old = await read();

    const updates = new Map(
      incoming.map(article => [
        article.sourceUrl.split("?")[0],
        article
      ])
    );

    const remainingOld = old.filter(article =>
      !updates.has(article.sourceUrl.split("?")[0])
    );

    const next = [
      ...incoming,
      ...remainingOld
    ]
      .sort(
        (a, b) =>
          Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
      )
      .slice(0, 500);

    await write(next);

    return NextResponse.json({
      updated: incoming.length,
      total: next.length,
      articles: next
    });
  } catch (e) {
    return NextResponse.json(
      {
        error:
          "Persistent lagring är inte ansluten. Skapa en Vercel Blob store och koppla den till projektet."
      },
      { status: 503 }
    );
  }
}
export async function DELETE(req:NextRequest){try{const id=new URL(req.url).searchParams.get("id");const next=(await read()).filter(x=>x.id!==id);await write(next);return NextResponse.json({ok:true,total:next.length})}catch{return NextResponse.json({error:"Kunde inte uppdatera arkivet"},{status:503})}}
