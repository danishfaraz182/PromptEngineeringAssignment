import type { ResearchArea } from './types';

export const researchAreas: ResearchArea[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Foundational and applied AI research spanning interpretability, multi-agent systems, and efficient on-device models.',
    stat: { label: 'Active projects', value: 86 },
    icon: 'brain-circuit',
  },
  {
    id: 'robotics',
    title: 'Robotics',
    description: 'Autonomous mobility, micro-robotics, and human-robot collaboration developed jointly across the Engineering and AI schools.',
    stat: { label: 'Active projects', value: 54 },
    icon: 'bot',
  },
  {
    id: 'climate-tech',
    title: 'Climate Technology',
    description: 'Carbon capture materials, renewable grid integration, and climate-resilient urban design.',
    stat: { label: 'Active projects', value: 61 },
    icon: 'leaf',
  },
  {
    id: 'biotech',
    title: 'Biotechnology',
    description: 'Genomic medicine, regenerative therapies, and diagnostics developed with our global health partners.',
    stat: { label: 'Active projects', value: 47 },
    icon: 'dna',
  },
  {
    id: 'quantum',
    title: 'Quantum Computing',
    description: 'Quantum algorithms and error-correction research pursued with international research-partner laboratories.',
    stat: { label: 'Active projects', value: 22 },
    icon: 'atom',
  },
  {
    id: 'space',
    title: 'Space Technology',
    description: 'Small-satellite systems, propulsion research, and Earth-observation data science.',
    stat: { label: 'Active projects', value: 19 },
    icon: 'rocket',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Applied cryptography, secure systems design, and digital infrastructure resilience.',
    stat: { label: 'Active projects', value: 38 },
    icon: 'shield',
  },
  {
    id: 'smart-cities',
    title: 'Smart Cities',
    description: 'Urban sensing networks, mobility optimization, and civic data platforms built with municipal partners.',
    stat: { label: 'Active projects', value: 41 },
    icon: 'building-2',
  },
];
