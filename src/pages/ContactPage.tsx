import { PageHero } from '../components/ui/PageHero';
import { ContactSection } from '../components/sections/ContactSection';
import { usePageMeta } from '../hooks/usePageMeta';

export function ContactPage() {
  usePageMeta('Contact', 'Get in touch with Danish Faraz International University admissions and campus offices.');

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the right office, wherever you are."
        description="General inquiries are routed from the Main Campus. Each Global Center also maintains its own local admissions and student-services desk."
      />
      <ContactSection />
    </>
  );
}
