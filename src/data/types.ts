export interface GlobalStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface School {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  programs: string[];
  research: string[];
  labs: string[];
  careerOutcomes: string[];
  facultyCount: number;
  studentCount: number;
  icon: string;
}

export interface GlobalCenter {
  id: string;
  country: string;
  city: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  type: 'Main Campus' | 'Global Center' | 'Research Partner';
  programs: string[];
  students: number;
  partnerships: string[];
  exchange: string[];
}

export interface LeadershipProfile {
  id: string;
  name: string;
  position: string;
  focus: string;
  bio: string;
  responsibilities: string[];
  generation: number;
  socials: { label: string; href: string }[];
  photo?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  stat: { label: string; value: number; suffix?: string };
  icon: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  countdownTarget: string;
}

export interface Scholarship {
  id: string;
  name: string;
  amount: string;
  category: 'Merit' | 'Need-Based' | 'International' | 'Research';
  region: string;
  deadline: string;
  description: string;
}

export interface CampusFacility {
  id: string;
  name: string;
  description: string;
  stat: string;
}

export interface AdmissionStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface StudentOrg {
  id: string;
  name: string;
  category: string;
  description: string;
  members: number;
}

export interface PublicFigure {
  id: string;
  name: string;
  field: string;
  note: string;
}

export interface LiveFeedEvent {
  id: string;
  time: string;
  message: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  program: string;
  year: string;
  role: string;
  quote: string;
  country: string;
  photo?: string;
}
