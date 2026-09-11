import { PageHero } from '../components/ui/PageHero';
import { AcademicsGrid } from '../components/sections/AcademicsGrid';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function AcademicsPage() {
  usePageMeta('Academics', 'Explore nine schools and over 120 programs at Danish Faraz International University.');

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Nine schools. One shared standard of rigor."
        description="Every program pairs foundational theory with labs, studios, and real career outcomes — search or browse below to find yours."
      />
      <AcademicsGrid showFilters />
      <CTASection
        title="Not sure which program fits?"
        description="Our admissions counselors can help you compare programs and campuses based on your goals."
        primary={{ label: 'Talk to Admissions', to: '/contact' }}
        secondary={{ label: 'View Scholarships', to: '/scholarships' }}
      />
    </>
  );
}
