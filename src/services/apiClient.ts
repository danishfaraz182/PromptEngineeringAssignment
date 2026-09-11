/**
 * apiClient.ts
 * ---------------------------------------------------------------------------
 * A thin, typed wrapper around fetch() that every service module goes through.
 *
 * DEMO vs LIVE:
 * - In "mock" mode (default, VITE_DATA_MODE=mock), service modules never call
 *   this client — they resolve local mock data with an artificial delay to
 *   simulate network latency. This keeps the UI honestly labeled as demo data.
 * - In "live" mode (VITE_DATA_MODE=live), service modules call `apiGet` /
 *   `apiPost` below, which hit VITE_API_BASE_URL — intended to be a Java
 *   Spring Boot REST API (see README "Future Spring Boot Integration").
 *
 * Nothing in this file fabricates a working backend connection. If VITE_API_BASE_URL
 * is unreachable, requests will simply fail/reject like any real fetch call.
 */

export const DATA_MODE: 'mock' | 'live' =
  (import.meta.env.VITE_DATA_MODE as 'mock' | 'live') || 'mock';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init,
  });

  if (!res.ok) {
    throw new ApiError(`Request to ${path} failed with status ${res.status}`, res.status);
  }

  return (await res.json()) as T;
}

export function apiGet<T>(path: string): Promise<T> {
  return request<T>(path, { method: 'GET' });
}

export function apiPost<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, { method: 'POST', body: JSON.stringify(body) });
}

/** Simulated network latency helper used throughout the mock services. */
export function mockDelay<T>(value: T, ms = 400): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
