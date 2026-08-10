import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import type { EditorialRole } from './lib/roles';

function parseList(value?: string) {
  return new Set((value ?? '').split(',').map(v => v.trim().toLowerCase()).filter(Boolean));
}

function roleForEmail(email?: string | null): EditorialRole {
  const normalized = email?.toLowerCase() ?? '';
  const admins = parseList(process.env.AUTH_ADMIN_EMAILS);
  const editors = parseList(process.env.AUTH_EDITOR_EMAILS);

  if (normalized && admins.has(normalized)) return 'ADMINISTRATOR';
  if (normalized && editors.has(normalized)) return 'REDAKTOR';
  return 'LASARE';
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  session: { strategy: 'jwt', maxAge: 60 * 60 * 8 },
  callbacks: {
    jwt({ token }) {
      token.role = roleForEmail(token.email);
      return token;
    },
    session({ session, token }) {
      if (session.user) session.user.role = (token.role as EditorialRole) ?? 'LASARE';
      return session;
    },
  },
  pages: {
    signIn: '/inloggning',
  },
});
