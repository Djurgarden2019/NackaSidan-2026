import { NextRequest, NextResponse } from "next/server";
import { get, put } from "@vercel/blob";

export const dynamic = "force-dynamic";

type Draft = {
  id: string;
  headline: string;
  lead: string;
  body: string;
  notes: string;
  sourceUrl: string;
  savedAt: string;
};

const PATH = "nackasidan/drafts.json";

async function read(): Promise<Draft[]> {
  try {
    const result = await get(PATH, {
      access: "private",
      useCache: false,
    });

   if (!result || result.statusCode !== 200) return [];

    const text = await new Response(result.stream).text();
    return JSON.parse(text);
  } catch {
    return [];
  }
}

async function write(drafts: Draft[]) {
  await put(PATH, JSON.stringify(drafts), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function GET() {
  return NextResponse.json(await read(), {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req: NextRequest) {
  try {
    const draft: Draft = await req.json();
    const drafts = await read();

    const next = [
      draft,
      ...drafts.filter((x) => x.id !== draft.id),
    ];

    await write(next);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Draft save error:", error);

    return NextResponse.json(
      { ok: false, error: "Kunde inte spara utkastet" },
      { status: 500 }
    );
  }
}
