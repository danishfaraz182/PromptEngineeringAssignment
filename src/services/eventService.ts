import { mockDelay, apiGet, apiPost, DATA_MODE } from './apiClient';
import { eventItems, newsItems } from '../data/news';
import type { EventItem, NewsItem } from '../data/types';

export async function getUpcomingEvents(): Promise<EventItem[]> {
  if (DATA_MODE === 'live') {
    return apiGet<EventItem[]>('/events/upcoming');
  }
  return mockDelay(eventItems, 300);
}

export async function getNews(): Promise<NewsItem[]> {
  if (DATA_MODE === 'live') {
    return apiGet<NewsItem[]>('/news');
  }
  return mockDelay(newsItems, 300);
}

export async function subscribeToNewsletter(email: string): Promise<{ subscribed: boolean }> {
  if (DATA_MODE === 'live') {
    return apiPost<{ subscribed: boolean }>('/newsletter/subscribe', { email });
  }
  return mockDelay({ subscribed: true }, 500);
}
