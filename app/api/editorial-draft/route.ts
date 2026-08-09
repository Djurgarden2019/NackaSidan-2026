import { NextRequest, NextResponse } from 'next/server';

type RequestBody = {
  title: string;
  section: string;
  angle: string;
  reason: string;
  sources: string[];
  links: string[];
  risk: 'Grön' | 'Gul' | 'Röd';
  score: number;
};

export async function POST(req: NextRequest) {
  const input: RequestBody = await req.json();

  if (!input?.title || !Array.isArray(input.links) || !input.links.length) {
    return NextResponse.json({ error: 'Ogiltigt kandidatunderlag.' }, { status: 400 });
  }

  const publishable = input.risk === 'Grön' && input.sources.length >= 2;

  return NextResponse.json({
    headline: input.title,
    lead: input.angle,
    body: [
      input.title + '.',
      input.reason,
      'Detta är ett kontrollerat artikelutkast. Uppgifter, namn, siffror och tidpunkter ska verifieras mot källorna innan texten publiceras.',
      publishable
        ? 'Kandidatens källäge är tillräckligt för att gå vidare till redaktionell slutkontroll.'
        : 'Kandidaten saknar ännu tillräckligt källstöd för publicering.'
    ].join('\n\n'),
    status: publishable ? 'ready-for-review' : 'needs-factcheck',
    canPublish: false,
    requiredChecks: [
      'Originalkälla läst',
      'Namn och siffror kontrollerade',
      'Tidpunkt kontrollerad',
      'Minst två oberoende källor vid omstridda sakuppgifter',
      'Manuell redaktionell slutkontroll'
    ],
    sources: input.links
  });
}
