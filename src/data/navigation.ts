export interface NavLink {
  label: string;
  to: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  to: string;
  links: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'University',
    to: '/about',
    links: [
      { label: 'About DFIU', to: '/about', description: 'Vision, mission, and academic philosophy' },
      { label: 'Leadership & Legacy', to: '/leadership', description: 'Meet the leadership and founding story' },
      { label: 'Global Network', to: '/global-network', description: 'Campuses & centers across 10 countries' },
      { label: 'News & Events', to: '/news', description: 'The latest from across the university' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    links: [
      { label: 'All Schools', to: '/academics', description: 'Nine schools, over 120 programs' },
      { label: 'Research & Innovation', to: '/research', description: 'AI, robotics, climate tech, and more' },
      { label: 'Global Exchange', to: '/global-network', description: 'Study across our worldwide network' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    links: [
      { label: 'Admissions Journey', to: '/admissions', description: 'From discovery to enrollment' },
      { label: 'Scholarships', to: '/scholarships', description: 'Merit, need-based & international awards' },
    ],
  },
  {
    label: 'Campus Life',
    to: '/student-life',
    links: [
      { label: 'Student Life', to: '/student-life', description: 'Clubs, sports, and international festivals' },
      { label: 'Alumni Network', to: '/alumni', description: 'Stories from our global graduates' },
      { label: 'Careers', to: '/careers', description: 'Outcomes and employer network' },
    ],
  },
];

export const utilityLinks: NavLink[] = [
  { label: 'Contact', to: '/contact' },
];
