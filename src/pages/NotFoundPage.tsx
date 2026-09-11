import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta('Page Not Found', 'The page you are looking for could not be found.');

  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page doesn't exist."
        description="The page you're looking for may have moved, or the address may be incorrect."
      />
      <div className="bg-ink-950 py-16">
        <div className="container-page text-center">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </div>
      </div>
    </>
  );
}
