import { Hero } from '../components/sections/Hero';
import { GlobalImpactStats } from '../components/sections/GlobalImpactStats';
import { AboutSection } from '../components/sections/AboutSection';
import { AcademicsGrid } from '../components/sections/AcademicsGrid';
import { GlobalNetworkMap } from '../components/sections/GlobalNetworkMap';
import { ResearchSection } from '../components/sections/ResearchSection';
import { GlobalPulseFeed } from '../components/sections/GlobalPulseFeed';
import { NewsEventsSection } from '../components/sections/NewsEventsSection';
import { GlobalIconsSection } from '../components/sections/GlobalIconsSection';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta(
    'Where Global Minds Shape Tomorrow',
    'Danish Faraz International University spans ten countries with 120+ programs, 450+ research projects, and a globally networked academic community.',
  );

  return (
    <>
      <Hero />
      <GlobalImpactStats />
      <AboutSection />
      <AcademicsGrid limit={6} />
      <GlobalNetworkMap />
      <ResearchSection />
      <GlobalPulseFeed />
      <NewsEventsSection />
      <GlobalIconsSection />
      <CTASection
        title="Ready to begin your global academic journey?"
        description="Explore programs across nine schools and ten countries, then start your admissions journey in minutes."
        primary={{ label: 'Start Admissions Journey', to: '/admissions' }}
        secondary={{ label: 'Explore Scholarships', to: '/scholarships' }}
      />
    </>
  );
}
