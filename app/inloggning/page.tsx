import { auth, signIn, signOut } from '../../auth';

export const dynamic = 'force-dynamic';

export default async function InloggningPage() {
  const session = await auth();

  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: '72px 28px 100px' }}>
      <p style={{ color: '#a61919', fontWeight: 800, letterSpacing: 2, fontSize: 13 }}>MAIN 40 · RIKTIG AUTENTISERING</p>
      <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(52px,8vw,88px)', lineHeight: .96, margin: '12px 0 22px' }}>Säker inloggning till redaktionen</h1>
      <p style={{ maxWidth: 780, fontFamily: 'Georgia,serif', fontSize: 20, lineHeight: 1.45 }}>
        NackaSidan använder nu Auth.js med GitHub OAuth. Identiteten verifieras av GitHub och sessionens e-post kopplas därefter till rollen Läsare, Redaktör eller Administratör.
      </p>

      <section style={{ marginTop: 42, borderTop: '4px solid #111', borderBottom: '1px solid #bbb', padding: '28px 0' }}>
        {session?.user ? (
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, color: '#a61919' }}>AKTIV SESSION</div>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 34, margin: '8px 0' }}>{session.user.name ?? session.user.email}</h2>
            <p style={{ margin: '0 0 6px' }}>{session.user.email}</p>
            <p style={{ margin: '0 0 24px' }}><strong>Roll:</strong> {session.user.role}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {(session.user.role === 'REDAKTOR' || session.user.role === 'ADMINISTRATOR') && (
                <a href="/redaktion" style={{ display: 'inline-block', background: '#111', color: '#fff', padding: '12px 18px', textDecoration: 'none', fontWeight: 800 }}>ÖPPNA REDAKTIONEN</a>
              )}
              <form action={async () => { 'use server'; await signOut({ redirectTo: '/' }); }}>
                <button type="submit" style={{ border: '1px solid #111', background: '#fff', padding: '11px 18px', fontWeight: 800, cursor: 'pointer' }}>LOGGA UT</button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, color: '#a61919' }}>INTE INLOGGAD</div>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 34, margin: '8px 0 12px' }}>Logga in med GitHub</h2>
            <p style={{ maxWidth: 680, lineHeight: 1.55, marginBottom: 22 }}>Efter inloggningen kontrolleras din e-post mot redaktionens tillåtna administratörer och redaktörer. Övriga konton får rollen Läsare och kan inte öppna de interna redaktionssidorna.</p>
            <form action={async () => { 'use server'; await signIn('github', { redirectTo: '/redaktion' }); }}>
              <button type="submit" style={{ border: 0, background: '#111', color: '#fff', padding: '13px 20px', fontWeight: 800, cursor: 'pointer' }}>FORTSÄTT MED GITHUB</button>
            </form>
          </div>
        )}
      </section>

      <div style={{ marginTop: 22, padding: '14px 18px', background: '#f1eadf', borderLeft: '3px solid #a61919', fontSize: 13 }}>
        <strong>Driftsättning:</strong> GitHub OAuth kräver AUTH_GITHUB_ID, AUTH_GITHUB_SECRET och AUTH_SECRET i Vercel. Roller styrs med AUTH_ADMIN_EMAILS och AUTH_EDITOR_EMAILS som kommaseparerade e-postlistor.
      </div>

      <footer style={{ borderTop: '3px solid #111', paddingTop: 18, marginTop: 38, fontSize: 12 }}>
        GITHUB → AUTH.JS → SÄKER SESSION → ROLL → SERVERKONTROLL → REDAKTION
      </footer>
    </main>
  );
}
