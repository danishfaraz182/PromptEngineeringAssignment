import { PageHero } from '../components/ui/PageHero';
import { ResearchSection } from '../components/sections/ResearchSection';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function ResearchPage() {
  usePageMeta('Research & Innovation', 'Explore research at DFIU in AI, robotics, climate technology, biotechnology, and more.');

  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Research designed to leave the laboratory."
        description="Sixty-two active laboratories across our global network — many developed jointly with municipal, industry, and academic partners."
      />
      <ResearchSection />
      <CTASection
        title="Join a research group as a graduate student."
        description="The Emerging Researchers Fellowship funds tuition and a research stipend for students joining an active lab in their first term."
        primary={{ label: 'View Scholarships', to: '/scholarships' }}
        secondary={{ label: 'Explore Programs', to: '/academics' }}
      />
    </>
  );
}
