import { NextRequest, NextResponse } from "next/server";
import { list, put } from "@vercel/blob";

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
    const r = await list({ prefix: PATH });
    const b = r.blobs.find((x) => x.pathname === PATH);

    if (!b) return [];

    const q = await fetch(b.url, { cache: "no-store" });
    return q.ok ? await q.json() : [];
  } catch {
    return [];
  }
}

async function write(drafts: Draft[]) {
  await put(PATH, JSON.stringify(drafts), {
   access: "public",
    addRandomSuffix: false,
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
  } catch {
    return NextResponse.json(
      { ok: false, error: "Kunde inte spara utkastet" },
      { status: 500 }
    );
  }
}
