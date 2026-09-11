import { PageHero } from '../components/ui/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

function LegalPage({ eyebrow, title, paragraphs }: LegalPageProps) {
  usePageMeta(title);
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <div className="bg-ink-950 py-16">
        <div className="container-page max-w-2xl space-y-5 text-sm leading-relaxed text-parchment/70">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      paragraphs={[
        'Danish Faraz International University (DFIU) is a fictional demonstration institution built to showcase a premium university website experience. This site does not collect, store, or process real personal data beyond what is required to run the demo in your browser.',
        'Forms on this site (admissions, contact, newsletter) are demo-only: submissions are handled locally and are not transmitted to a real backend unless this project has been connected to one by a developer (see the README for backend integration details).',
        'If this site is deployed for a real institution, this page should be replaced with an accurate, jurisdiction-appropriate privacy policy prepared with legal counsel.',
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      paragraphs={[
        'This website represents a fictional demonstration institution, Danish Faraz International University, created to showcase web design and engineering practices for a premium university experience.',
        'All content — including admissions figures, research statistics, leadership biographies, and news items — is fictional demo content and should not be relied upon as fact.',
        'Public figures referenced in the "Global Icons & Inspiration" section are not affiliated with DFIU in any way and are included solely as illustrative, non-commercial examples.',
      ]}
    />
  );
}

export function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Accessibility Statement"
      paragraphs={[
        'This site aims to follow accessibility best practices, including semantic HTML, keyboard navigability, visible focus states, sufficient color contrast, and support for reduced-motion preferences.',
        'If you encounter an accessibility barrier anywhere on this demo site, please use the contact form to let us know so it can be addressed.',
      ]}
    />
  );
}
