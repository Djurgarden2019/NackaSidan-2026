import type { EditorialRole } from './roles';

export type EditorialSession = {
  userId: string;
  name: string;
  email: string;
  role: EditorialRole;
  issuedAt: string;
  expiresAt: string;
};

export function isSessionActive(session: EditorialSession, now = new Date()) {
  return new Date(session.expiresAt).getTime() > now.getTime();
}

export function requireActiveSession(session: EditorialSession | null | undefined, now = new Date()) {
  if (!session || !isSessionActive(session, now)) {
    throw new Error('Aktiv inloggad session krävs.');
  }
  return session;
}
