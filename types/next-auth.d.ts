import type { DefaultSession } from 'next-auth';
import type { EditorialRole } from '../lib/roles';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      role: EditorialRole;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: EditorialRole;
  }
}
