import type { LeadershipProfile } from './types';

// All biographies below are fictional and written for the demo institution
// Danish Faraz International University. No claim is made that these
// individuals hold positions at any real-world university.
export const leadershipProfiles: LeadershipProfile[] = [
  {
    id: 'abdul-huq',
    name: 'Abdul Huq',
    position: 'Founding Legacy / Honorary Chairman',
    focus: 'Institutional heritage and founding values',
    bio: 'Abdul Huq is honored within the university as the founding legacy of the family whose vision, generations later, shaped Danish Faraz International University. In this fictional institutional narrative, his life is remembered as a foundation of discipline, community service, and belief in education as a path to opportunity — values that the university now carries into a global academic mission.',
    responsibilities: ['Institutional heritage', 'Founding values and traditions', 'Honorary ceremonial role'],
    generation: 1,
    socials: [],
    photo: 'https://i.pravatar.cc/300?img=12',
  },
  {
    id: 'tanveer-hussain',
    name: 'Tanveer Hussain',
    position: 'Founder & Chairman of the Board',
    focus: 'Institutional strategy and long-term development',
    bio: 'Tanveer Hussain is presented, within this fictional institutional story, as the Founder & Chairman of the Board of Danish Faraz International University. His fictional biography emphasizes long-term institutional strategy — from the university\'s founding charter to its current ten-country footprint — and stewardship of the endowment and governance structures that support the university\'s global campuses.',
    responsibilities: ['Board governance', 'Long-term institutional strategy', 'Endowment stewardship'],
    generation: 2,
    socials: [{ label: 'Office of the Chairman', href: '#contact' }],
    photo: 'https://i.pravatar.cc/300?img=13',
  },
  {
    id: 'siddiqa-parveen',
    name: 'Siddiqa Parveen',
    position: 'Chancellor / Director of Global Relations',
    focus: 'International collaboration and community development',
    bio: 'Siddiqa Parveen serves, in this fictional institutional narrative, as Chancellor and Director of Global Relations, credited with building the network of Global Centers and research partnerships that now spans ten countries. Her fictional biography highlights work connecting the university\'s campuses through shared curricula, exchange programs, and community initiatives.',
    responsibilities: ['Global partnerships', 'International collaboration', 'Community & outreach programs'],
    generation: 2,
    socials: [{ label: 'Office of Global Relations', href: '#global-network' }],
    photo: 'https://i.pravatar.cc/300?img=47',
  },
  {
    id: 'danish-faraz',
    name: 'Danish Faraz',
    position: 'Founder / Chancellor',
    focus: 'Technology, innovation and global education',
    bio: 'Danish Faraz is presented as the founder and namesake of Danish Faraz International University, a fictional demo institution created to model what a technology-forward, internationally networked university could look like. In this narrative, his focus is on connecting classrooms, laboratories, and campuses across ten countries through a shared commitment to research, innovation, and accessible global education.',
    responsibilities: ['Institutional vision', 'Global education strategy', 'Technology & innovation direction'],
    generation: 3,
    socials: [{ label: 'Office of the Chancellor', href: '#contact' }],
    photo: 'https://i.pravatar.cc/300?img=14',
  },
  {
    id: 'salman-yaser',
    name: 'Salman Yaser',
    position: 'Vice Chancellor – Innovation & Technology',
    focus: 'Technology, digital transformation and innovation',
    bio: 'Salman Yaser leads, in this fictional institutional story, the university\'s innovation and technology portfolio — from the digital-campus platform to the network of AI and robotics laboratories described throughout this site. His fictional biography frames him as the architect of the university\'s technology roadmap and its Spring Boot-ready digital infrastructure.',
    responsibilities: ['Digital campus platform', 'Innovation labs & incubators', 'IT & technology infrastructure'],
    generation: 4,
    socials: [{ label: 'Innovation Office', href: '#research' }],
    photo: 'https://i.pravatar.cc/300?img=15',
  },
  {
    id: 'farhan-hamad',
    name: 'Farhan Hamad',
    position: 'Director of Student Experience & International Programs',
    focus: 'Student life, international programs and campus experience',
    bio: 'Farhan Hamad oversees, in this fictional institutional narrative, the student experience across all campuses and Global Centers — orientation, housing, clubs, and the international exchange programs that move thousands of students between countries each year.',
    responsibilities: ['Student life & housing', 'International exchange programs', 'Campus experience'],
    generation: 4,
    socials: [{ label: 'Student Experience Office', href: '#student-life' }],
    photo: 'https://i.pravatar.cc/300?img=17',
  },
];

export const legacyTimeline = [
  { id: 'abdul-huq', name: 'Abdul Huq', role: 'Founding Legacy', generation: 1 },
  { id: 'tanveer-hussain', name: 'Tanveer Hussain', role: 'Founder & Chairman', generation: 2 },
  { id: 'siddiqa-parveen', name: 'Siddiqa Parveen', role: 'Chancellor, Global Relations', generation: 2 },
  { id: 'danish-faraz', name: 'Danish Faraz', role: 'Founder / Chancellor', generation: 3 },
  { id: 'salman-yaser', name: 'Salman Yaser', role: 'VC — Innovation & Technology', generation: 4 },
  { id: 'farhan-hamad', name: 'Farhan Hamad', role: 'Director, Student Experience', generation: 4 },
];
