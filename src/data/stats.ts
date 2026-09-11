import type { GlobalStat } from './types';

export const globalImpactStats: GlobalStat[] = [
  { id: 'students', label: 'Students', value: 25000, suffix: '+' },
  { id: 'programs', label: 'Programs', value: 120, suffix: '+' },
  { id: 'countries', label: 'Countries Represented', value: 85, suffix: '+' },
  { id: 'research', label: 'Active Research Projects', value: 450, suffix: '+' },
  { id: 'faculty', label: 'Faculty & Researchers', value: 1200, suffix: '+' },
  { id: 'partnerships', label: 'Global Partnerships', value: 35, suffix: '+' },
];

export const careerStats: GlobalStat[] = [
  { id: 'employment', label: 'Graduate Employment Rate', value: 94, suffix: '%' },
  { id: 'employers', label: 'Partner Employers', value: 620, suffix: '+' },
  { id: 'avgTimeToOffer', label: 'Avg. Days to First Offer', value: 68 },
  { id: 'startups', label: 'Alumni-Founded Startups', value: 210, suffix: '+' },
];

export const researchImpactStats: GlobalStat[] = [
  { id: 'funding', label: 'Annual Research Funding (USD M)', value: 180, suffix: '+' },
  { id: 'patents', label: 'Patents Filed', value: 96 },
  { id: 'publications', label: 'Peer-Reviewed Publications', value: 1450, suffix: '+' },
  { id: 'labs', label: 'Active Laboratories', value: 62 },
];
