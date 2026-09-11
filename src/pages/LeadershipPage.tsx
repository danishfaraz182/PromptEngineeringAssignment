import { PageHero } from '../components/ui/PageHero';
import { LeadershipGrid } from '../components/sections/LeadershipGrid';
import { LegacyTimeline } from '../components/sections/LegacyTimeline';
import { usePageMeta } from '../hooks/usePageMeta';

export function LeadershipPage() {
  usePageMeta('Leadership & Legacy', 'Meet the leadership team and founding legacy of Danish Faraz International University — a fictional demonstration institution.');

  return (
    <>
      <PageHero
        eyebrow="Leadership & Legacy"
        title="The story and the people behind DFIU."
        description="Danish Faraz International University is a fictional demonstration institution. All names, positions, and biographies below are part of this demo and are not claims about real-world university roles."
      />
      <LeadershipGrid />
      <LegacyTimeline />
    </>
  );
}
