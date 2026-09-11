import { createLiveChannel, type LiveChannel } from './websocket';
import type { LiveFeedEvent } from '../data/types';

const demoMessages = [
  'New research project started in the Applied AI Lab',
  'Student team won the regional innovation challenge',
  'International application received from Nairobi',
  'AI laboratory session started at Main Campus',
  'New exchange placement confirmed for Singapore Global Center',
  'Guest lecture scheduled at UK Global Center',
  'Robotics club begins build session ahead of the challenge',
  'Scholarship committee reviewing January intake applications',
  'Library extends hours for exam preparation week',
  'Climate Technology lab reports pilot milestone reached',
];

let counter = 0;

function generateEvent(): LiveFeedEvent {
  counter += 1;
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return {
    id: `live-${Date.now()}-${counter}`,
    time,
    message: demoMessages[Math.floor(Math.random() * demoMessages.length)],
  };
}

/**
 * Subscribes to the "campus feed" topic. In mock mode this generates
 * clearly-simulated demo events every few seconds; in live mode it opens a
 * WebSocket subscription to the Spring Boot backend's /topic/campus-feed.
 */
export function subscribeToLiveFeed(): LiveChannel<LiveFeedEvent> {
  return createLiveChannel<LiveFeedEvent>('campus-feed', {
    intervalMs: 5200,
    generate: generateEvent,
  });
}

export function getInitialFeed(count = 4): LiveFeedEvent[] {
  return Array.from({ length: count }, () => generateEvent()).reverse();
}
