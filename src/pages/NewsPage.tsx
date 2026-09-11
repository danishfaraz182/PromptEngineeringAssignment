import { PageHero } from '../components/ui/PageHero';
import { NewsEventsSection } from '../components/sections/NewsEventsSection';
import { usePageMeta } from '../hooks/usePageMeta';

export function NewsPage() {
  usePageMeta('News & Events', 'The latest news and upcoming events from Danish Faraz International University.');

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening across the network."
        description="Research milestones, student achievements, and admissions updates from the Main Campus and every Global Center."
      />
      <NewsEventsSection />
    </>
  );
}
