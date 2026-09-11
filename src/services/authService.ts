import { mockDelay, apiPost, DATA_MODE } from './apiClient';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthSession {
  token: string;
  displayName: string;
  role: 'student' | 'faculty' | 'admissions' | 'admin';
}

/**
 * Placeholder authentication service. In mock mode it always "succeeds" with a
 * demo session — no real credential is verified. In live mode it defers to a
 * Spring Security-backed /auth/login endpoint (e.g. JWT issuance).
 */
export async function login(credentials: AuthCredentials): Promise<AuthSession> {
  if (DATA_MODE === 'live') {
    return apiPost<AuthSession>('/auth/login', credentials);
  }
  return mockDelay(
    {
      token: 'demo-token',
      displayName: credentials.email.split('@')[0] || 'Demo User',
      role: 'student',
    },
    500,
  );
}

export function logout(): void {
  // No-op in mock mode. In live mode this would invalidate the session server-side.
}
