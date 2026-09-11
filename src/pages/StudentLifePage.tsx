import { PageHero } from '../components/ui/PageHero';
import { StudentLifeSection } from '../components/sections/StudentLifeSection';
import { CampusLifeGallery } from '../components/sections/CampusLifeGallery';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function StudentLifePage() {
  usePageMeta('Student Life', 'Clubs, sports, cultural festivals, and campus communities at DFIU.');

  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="A campus community from 85+ countries."
        description="Student organizations, competitive sports, and international festivals make up the day-to-day life of DFIU's global community."
      />
      <StudentLifeSection />
      <CampusLifeGallery />
      <CTASection
        title="Find your community before you even arrive."
        description="Most student organizations welcome incoming students to virtual meetups during orientation."
        primary={{ label: 'Start Admissions Journey', to: '/admissions' }}
      />
    </>
  );
}
