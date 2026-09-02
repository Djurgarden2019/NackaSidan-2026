import { NextRequest, NextResponse } from "next/server";
import { get, put } from "@vercel/blob";
export const dynamic = "force-dynamic";
type A={id:string;title:string;lead:string;body:string;section:string;source:string;sourceUrl:string;publishedAt:string;risk:string;score:number};
const PATH="nackasidan/autopublished.json";
async function read():Promise<A[]>{try{const r=await get(PATH,{access:"private",useCache:false});if(r?.statusCode!==200||!r.stream)return[];return await new Response(r.stream).json()}catch{return[]}}
async function write(a:A[]){await put(PATH,JSON.stringify(a),{access:"private",addRandomSuffix:false,allowOverwrite:true,cacheControlMaxAge:60,contentType:"application/json"});}
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
  } catch {
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
