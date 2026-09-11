import { PageHero } from '../components/ui/PageHero';
import { CareersSection } from '../components/sections/CareersSection';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function CareersPage() {
  usePageMeta('Careers', 'Career outcomes and employer network at Danish Faraz International University.');

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Outcomes built into the curriculum."
        description="Every school partners directly with employers on capstones, internships, and hiring pipelines across our global network."
      />
      <CareersSection />
      <CTASection
        title="See which programs lead where."
        description="Each school page lists the specific career outcomes graduates pursue."
        primary={{ label: 'Explore Academics', to: '/academics' }}
      />
    </>
  );
}
