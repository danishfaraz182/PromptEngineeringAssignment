import { PageHero } from '../components/ui/PageHero';
import { AdmissionsJourney } from '../components/sections/AdmissionsJourney';
import { ApplicationPanel } from '../components/sections/ApplicationPanel';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function AdmissionsPage() {
  usePageMeta('Admissions', 'Start your admissions journey to Danish Faraz International University.');

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Seven steps from discovery to enrollment."
        description="Whichever campus or Global Center you're applying to, the admissions journey follows the same seven steps."
      />
      <AdmissionsJourney />
      <ApplicationPanel />
      <CTASection
        title="Funding is available at every stage."
        description="Merit, need-based, international, and research scholarships are available across all schools and campuses."
        primary={{ label: 'View Scholarships', to: '/scholarships' }}
      />
    </>
  );
}
