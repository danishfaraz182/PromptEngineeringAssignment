import { PageHero } from '../components/ui/PageHero';
import { GlobalNetworkMap } from '../components/sections/GlobalNetworkMap';
import { NetworkStudentsChart } from '../components/sections/NetworkStudentsChart';
import { GlobalPulseFeed } from '../components/sections/GlobalPulseFeed';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';

export function GlobalNetworkPage() {
  usePageMeta('Global Network', 'Explore DFIU campuses and global centers across ten countries.');

  return (
    <>
      <PageHero
        eyebrow="Global Network"
        title="One university, ten countries."
        description="From the Main Campus in India to Global Centers and research partners across five continents, every location is connected through shared curricula and exchange programs."
      />
      <GlobalNetworkMap />
      <NetworkStudentsChart />
      <GlobalPulseFeed />
      <CTASection
        title="Study across more than one campus."
        description="Most programs include an optional or required term at another Global Center — explore your exchange options."
        primary={{ label: 'View Programs', to: '/academics' }}
      />
    </>
  );
}
