import { mockDelay, apiGet, DATA_MODE } from './apiClient';
import { researchAreas } from '../data/research';
import { researchImpactStats } from '../data/stats';
import type { ResearchArea, GlobalStat } from '../data/types';

export async function getResearchAreas(): Promise<ResearchArea[]> {
  if (DATA_MODE === 'live') {
    return apiGet<ResearchArea[]>('/research/areas');
  }
  return mockDelay(researchAreas, 300);
}

export async function getResearchImpactStats(): Promise<GlobalStat[]> {
  if (DATA_MODE === 'live') {
    return apiGet<GlobalStat[]>('/research/stats');
  }
  return mockDelay(researchImpactStats, 300);
}
