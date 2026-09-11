import { mockDelay, apiGet, apiPost, DATA_MODE } from './apiClient';

export interface ApplicationCounterSnapshot {
  totalThisCycle: number;
  today: number;
}

export interface ApplicationDraft {
  fullName: string;
  email: string;
  program: string;
  campus: string;
}

export interface ApplicationSubmissionResult {
  applicationId: string;
  status: 'Received';
  submittedAt: string;
}

let simulatedTotal = 14820;

/** Demo "live application counter" — increases gently to simulate real-time admissions activity. */
export async function getApplicationCounter(): Promise<ApplicationCounterSnapshot> {
  if (DATA_MODE === 'live') {
    return apiGet<ApplicationCounterSnapshot>('/applications/counter');
  }
  simulatedTotal += Math.floor(Math.random() * 3);
  return mockDelay({ totalThisCycle: simulatedTotal, today: 40 + Math.floor(Math.random() * 25) }, 300);
}

export async function submitApplication(draft: ApplicationDraft): Promise<ApplicationSubmissionResult> {
  if (DATA_MODE === 'live') {
    return apiPost<ApplicationSubmissionResult>('/applications', draft);
  }
  return mockDelay(
    {
      applicationId: `DFIU-${Date.now().toString().slice(-8)}`,
      status: 'Received',
      submittedAt: new Date().toISOString(),
    },
    600,
  );
}
