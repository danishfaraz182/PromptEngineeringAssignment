/**
 * websocket.ts
 * ---------------------------------------------------------------------------
 * A minimal publish/subscribe abstraction that the UI's "live" components
 * (Global Pulse feed, live counters, notifications) consume.
 *
 * DEMO vs LIVE:
 * - In "mock" mode, `createLiveChannel` returns a channel backed by a
 *   `setInterval` generator that emits realistic-looking demo events. This
 *   is CLEARLY simulated data — it never claims to be a live network feed.
 * - In "live" mode, `createLiveChannel` opens a real WebSocket to
 *   VITE_WS_URL. A production backend would speak STOMP-over-WebSocket from
 *   Spring Boot (`spring-boot-starter-websocket`), subscribing to
 *   destinations such as `/topic/campus-feed`, `/topic/notifications`, and
 *   `/topic/application-counter`. This file intentionally keeps the
 *   low-level WebSocket wiring separate from any specific STOMP client
 *   library, so a real STOMP client (e.g. @stomp/stompjs) can be dropped in
 *   without changing how components consume `LiveChannel`.
 */

import { DATA_MODE } from './apiClient';

export type LiveListener<T> = (payload: T) => void;

export interface LiveChannel<T> {
  subscribe: (listener: LiveListener<T>) => () => void;
  close: () => void;
}

interface MockChannelOptions<T> {
  intervalMs: number;
  generate: () => T;
}

/** Mock-mode channel: emits generated events on an interval. Clearly simulated. */
function createMockChannel<T>({ intervalMs, generate }: MockChannelOptions<T>): LiveChannel<T> {
  const listeners = new Set<LiveListener<T>>();

  const timer = window.setInterval(() => {
    const payload = generate();
    listeners.forEach((listener) => listener(payload));
  }, intervalMs);

  return {
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    close() {
      window.clearInterval(timer);
      listeners.clear();
    },
  };
}

/** Live-mode channel: a real WebSocket connection to VITE_WS_URL. */
function createLiveWebSocketChannel<T>(topic: string): LiveChannel<T> {
  const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:8080/ws';
  const listeners = new Set<LiveListener<T>>();
  const socket = new WebSocket(`${wsUrl}?topic=${encodeURIComponent(topic)}`);

  socket.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data) as T;
      listeners.forEach((listener) => listener(payload));
    } catch {
      // Malformed frame — ignore in this minimal abstraction layer.
    }
  };

  return {
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    close() {
      socket.close();
      listeners.clear();
    },
  };
}

/**
 * Creates a live channel for a given demo topic. In mock mode, `mockOptions`
 * drives a local generator; in live mode, `topic` is used to open a real
 * WebSocket subscription against VITE_WS_URL.
 */
export function createLiveChannel<T>(topic: string, mockOptions: MockChannelOptions<T>): LiveChannel<T> {
  if (DATA_MODE === 'live') {
    return createLiveWebSocketChannel<T>(topic);
  }
  return createMockChannel<T>(mockOptions);
}
