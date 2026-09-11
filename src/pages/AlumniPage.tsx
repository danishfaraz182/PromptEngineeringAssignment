import { PageHero } from '../components/ui/PageHero';
import { AlumniSection } from '../components/sections/AlumniSection';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function AlumniPage() {
  usePageMeta('Alumni Network', 'Stories from Danish Faraz International University graduates around the world.');

  return (
    <>
      <PageHero
        eyebrow="Alumni Network"
        title="Graduates working across every industry and continent."
        description="From research labs to startups to public service, DFIU alumni carry the university's global outlook into their careers."
      />
      <AlumniSection />
      <CTASection
        title="Stay connected as an alum."
        description="Join the alumni network for mentorship opportunities, reunions, and career resources."
        primary={{ label: 'Contact Alumni Relations', to: '/contact' }}
      />
    </>
  );
}
