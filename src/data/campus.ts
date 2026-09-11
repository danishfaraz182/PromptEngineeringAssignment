import type {
  Scholarship,
  AdmissionStep,
  CampusFacility,
  StudentOrg,
  PublicFigure,
  AlumniProfile,
} from './types';

export const scholarships: Scholarship[] = [
  {
    id: 's1',
    name: 'Global Founders Scholarship',
    amount: 'Full Tuition',
    category: 'Merit',
    region: 'All Regions',
    deadline: 'January 15',
    description: 'Awarded to incoming students with exceptional academic records and demonstrated leadership potential across any school.',
  },
  {
    id: 's2',
    name: 'International Bridge Grant',
    amount: 'Up to 75% Tuition',
    category: 'International',
    region: 'Outside Main Campus Country',
    deadline: 'February 1',
    description: 'Supports students relocating internationally to study at the Main Campus or any Global Center.',
  },
  {
    id: 's3',
    name: 'Community Access Fund',
    amount: 'Up to 100% Tuition + Stipend',
    category: 'Need-Based',
    region: 'All Regions',
    deadline: 'Rolling',
    description: 'Need-based funding, including a living stipend, for admitted students demonstrating significant financial need.',
  },
  {
    id: 's4',
    name: 'Emerging Researchers Fellowship',
    amount: '$18,000 / year',
    category: 'Research',
    region: 'Graduate Programs',
    deadline: 'March 10',
    description: 'Funds graduate students joining an active laboratory within their first term, covering tuition and a research stipend.',
  },
  {
    id: 's5',
    name: 'Women in STEM Scholarship',
    amount: 'Up to 50% Tuition',
    category: 'Merit',
    region: 'All Regions',
    deadline: 'January 31',
    description: 'Supports women enrolling in Computer Science & AI, Engineering, or Data Science programs.',
  },
  {
    id: 's6',
    name: 'Regional Excellence Award — Gulf & MENA',
    amount: 'Up to 60% Tuition',
    category: 'International',
    region: 'Middle East & North Africa',
    deadline: 'February 20',
    description: 'For students applying from the Gulf and MENA region to any Global Center or the Main Campus.',
  },
];

export const admissionSteps: AdmissionStep[] = [
  { id: 'a1', step: 1, title: 'Discover', description: 'Explore schools, programs, and campuses to find the right fit for your goals.' },
  { id: 'a2', step: 2, title: 'Choose Program', description: 'Select your intended school and program, including any dual-campus or exchange track.' },
  { id: 'a3', step: 3, title: 'Check Eligibility', description: 'Review academic requirements, language proficiency, and portfolio needs for your program.' },
  { id: 'a4', step: 4, title: 'Submit Application', description: 'Complete your application, transcripts, essays, and recommendation letters online.' },
  { id: 'a5', step: 5, title: 'Interview', description: 'Meet with an admissions counselor or faculty member, in person or virtually.' },
  { id: 'a6', step: 6, title: 'Decision', description: 'Receive your admissions decision along with any scholarship offers.' },
  { id: 'a7', step: 7, title: 'Enrollment', description: 'Confirm your place, complete orientation, and prepare for arrival at your chosen campus.' },
];

export const campusFacilities: CampusFacility[] = [
  { id: 'f1', name: 'Central Library', description: 'A five-floor research library with silent study halls, archives, and 24-hour digital access.', stat: '1.2M+ volumes & digital collections' },
  { id: 'f2', name: 'AI Laboratories', description: 'GPU-equipped labs supporting applied machine learning, robotics perception, and interpretability research.', stat: '18 dedicated lab spaces' },
  { id: 'f3', name: 'Research Center', description: 'Interdisciplinary facility housing climate technology, biotechnology, and quantum computing research groups.', stat: '62 active laboratories' },
  { id: 'f4', name: 'Sports Complex', description: 'Olympic-standard pool, indoor arena, and outdoor fields supporting 24 competitive sports programs.', stat: '24 varsity programs' },
  { id: 'f5', name: 'Innovation Hub', description: 'Startup incubator space with prototyping labs, mentorship programs, and a student venture fund.', stat: '210+ alumni startups' },
  { id: 'f6', name: 'Student Residence', description: 'Mixed-international housing communities designed to bring students from different countries together.', stat: '12,000+ residence beds' },
  { id: 'f7', name: 'Grand Auditorium', description: 'A 2,400-seat venue hosting convocations, performances, and the annual Global Innovation Summit.', stat: '2,400-seat capacity' },
  { id: 'f8', name: 'Green Campus', description: 'Solar-powered facilities and native landscaping across a car-light, pedestrian-first Main Campus.', stat: '40% campus energy from solar' },
];

export const studentOrgs: StudentOrg[] = [
  { id: 'o1', name: 'Global Innovation Society', category: 'Innovation', description: 'Runs the annual Global Innovation Summit and student venture showcase.', members: 640 },
  { id: 'o2', name: 'International Students Union', category: 'Culture', description: 'Represents students from 85+ countries and organizes the International Cultural Festival.', members: 4100 },
  { id: 'o3', name: 'Robotics & Mechatronics Club', category: 'Innovation', description: 'Builds competition robots and hosts open build nights for all skill levels.', members: 310 },
  { id: 'o4', name: 'Model United Nations Society', category: 'Global Studies', description: 'Competes at regional and international MUN conferences year-round.', members: 220 },
  { id: 'o5', name: 'University Athletics Association', category: 'Sports', description: 'Oversees 24 varsity teams and intramural leagues across all campuses.', members: 1800 },
  { id: 'o6', name: 'Design & Architecture Collective', category: 'Design', description: 'Hosts studio crits, design competitions, and the annual Design Week exhibition.', members: 280 },
];

// Public figures used purely as inspirational examples. They are NOT university
// faculty, staff, founders, ambassadors, partners, or affiliated with DFIU in any way.
export const publicFigures: PublicFigure[] = [
  { id: 'pf1', name: 'Lionel Messi', field: 'Football', note: 'Sustained excellence and discipline in professional sport.' },
  { id: 'pf2', name: 'Cristiano Ronaldo', field: 'Football', note: 'Relentless work ethic across a two-decade career.' },
  { id: 'pf3', name: 'Serena Williams', field: 'Tennis', note: 'Dominance and resilience at the highest level of competition.' },
  { id: 'pf4', name: 'LeBron James', field: 'Basketball', note: 'Longevity and leadership on and off the court.' },
  { id: 'pf5', name: 'Lewis Hamilton', field: 'Motorsport', note: 'Precision engineering mindset applied under extreme pressure.' },
  { id: 'pf6', name: 'Elon Musk', field: 'Technology & Industry', note: 'Ambitious, first-principles approaches to hard engineering problems.' },
  { id: 'pf7', name: 'Bill Gates', field: 'Technology & Philanthropy', note: 'Applying technology and resources toward global-scale problems.' },
];

export const alumniProfiles: AlumniProfile[] = [
  {
    id: 'al1',
    name: 'Amara Osei',
    program: 'B.Sc. Artificial Intelligence & Machine Learning',
    year: 'Class of 2022',
    role: 'Research Scientist, applied ML',
    quote: 'The Applied AI Lab is where I learned to ship research, not just publish it.',
    country: 'Main Campus, India',
    photo: 'https://i.pravatar.cc/300?img=44',
  },
  {
    id: 'al2',
    name: 'Mateus Ribeiro',
    program: 'MBA — Global Management',
    year: 'Class of 2020',
    role: 'Founder, logistics startup',
    quote: 'Studying across two campuses gave me a genuinely global view of how markets connect.',
    country: 'USA Global Center',
    photo: 'https://i.pravatar.cc/300?img=51',
  },
  {
    id: 'al3',
    name: 'Hana Kobayashi',
    program: 'M.Eng. Renewable Energy Systems',
    year: 'Class of 2023',
    role: 'Energy Systems Engineer',
    quote: 'The exchange term at the Germany research partner shaped the direction of my entire career.',
    country: 'Japan Research Partner',
    photo: 'https://i.pravatar.cc/300?img=32',
  },
  {
    id: 'al4',
    name: 'Layla Haddad',
    program: 'LL.M. International Law',
    year: 'Class of 2021',
    role: 'International Legal Consultant',
    quote: 'The Legal Clinic put me in front of real cases before I ever graduated.',
    country: 'UAE Global Center',
    photo: 'https://i.pravatar.cc/300?img=25',
  },
];
