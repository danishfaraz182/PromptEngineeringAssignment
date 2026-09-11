import { mockDelay, apiGet, DATA_MODE } from './apiClient';
import { alumniProfiles } from '../data/campus';
import type { AlumniProfile } from '../data/types';

/** Returns demo alumni/student directory records. Backed by a real /students endpoint in live mode. */
export async function getAlumniDirectory(): Promise<AlumniProfile[]> {
  if (DATA_MODE === 'live') {
    return apiGet<AlumniProfile[]>('/students/alumni');
  }
  return mockDelay(alumniProfiles, 300);
}
