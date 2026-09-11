import { PageHero } from '../components/ui/PageHero';
import { AboutSection } from '../components/sections/AboutSection';
import { GlobalImpactStats } from '../components/sections/GlobalImpactStats';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function AboutPage() {
  usePageMeta('About the University', 'Vision, mission, values, and academic philosophy of Danish Faraz International University.');

  return (
    <>
      <PageHero
        eyebrow="About the University"
        title="A global academic community, built on purpose."
        description="From a single founding vision to a ten-country network, DFIU was designed around one idea: education works best when it isn't limited by geography."
      />
      <AboutSection />
      <GlobalImpactStats />
      <CTASection
        title="Meet the people behind DFIU."
        description="Explore the leadership team and founding legacy that shaped the university's global network."
        primary={{ label: 'Leadership & Legacy', to: '/leadership' }}
      />
    </>
  );
}
