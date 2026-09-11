import { mockDelay, apiGet, DATA_MODE } from './apiClient';
import { globalCenters } from '../data/globalNetwork';
import type { GlobalCenter } from '../data/types';

export interface CampusStatus {
  centerId: string;
  status: 'Open' | 'In Session' | 'Quiet Hours' | 'Event in Progress';
  localTime: string;
}

export interface CampusWeather {
  centerId: string;
  city: string;
  condition: 'Clear' | 'Cloudy' | 'Rain' | 'Humid' | 'Cool';
  tempCelsius: number;
}

const statuses: CampusStatus['status'][] = ['Open', 'In Session', 'Quiet Hours', 'Event in Progress'];
const conditions: CampusWeather['condition'][] = ['Clear', 'Cloudy', 'Rain', 'Humid', 'Cool'];

/** Returns a demo campus status for every Global Center. Clearly mock data unless VITE_DATA_MODE=live. */
export async function getCampusStatuses(): Promise<CampusStatus[]> {
  if (DATA_MODE === 'live') {
    return apiGet<CampusStatus[]>('/campus/status');
  }
  const result = globalCenters.map((center) => ({
    centerId: center.id,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    localTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  }));
  return mockDelay(result, 350);
}

/** Returns demo weather conditions for each Global Center (mock unless a real weather API is wired up server-side). */
export async function getCampusWeather(): Promise<CampusWeather[]> {
  if (DATA_MODE === 'live') {
    return apiGet<CampusWeather[]>('/campus/weather');
  }
  const result = globalCenters.map((center) => ({
    centerId: center.id,
    city: center.city,
    condition: conditions[Math.floor(Math.random() * conditions.length)],
    tempCelsius: Math.round(12 + Math.random() * 22),
  }));
  return mockDelay(result, 350);
}

export async function getGlobalCenters(): Promise<GlobalCenter[]> {
  if (DATA_MODE === 'live') {
    return apiGet<GlobalCenter[]>('/campus/centers');
  }
  return mockDelay(globalCenters, 250);
}

/** A slowly-drifting demo "live visitor counter" for the site itself. */
export function getLiveVisitorSeed(): number {
  return 1800 + Math.floor(Math.random() * 400);
}
