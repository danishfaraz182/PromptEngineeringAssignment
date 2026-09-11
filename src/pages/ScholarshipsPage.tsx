import { PageHero } from '../components/ui/PageHero';
import { ScholarshipsSection } from '../components/sections/ScholarshipsSection';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function ScholarshipsPage() {
  usePageMeta('Scholarships', 'Merit, need-based, international, and research scholarships at DFIU.');

  return (
    <>
      <PageHero
        eyebrow="Scholarships"
        title="Funding for students, wherever they start from."
        description="Filter scholarships by category to find funding that matches your program and background."
      />
      <ScholarshipsSection />
      <CTASection
        title="Ready to apply?"
        description="Scholarship consideration begins automatically when you submit your application."
        primary={{ label: 'Start Admissions Journey', to: '/admissions' }}
      />
    </>
  );
}
