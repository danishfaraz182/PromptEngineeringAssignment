import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

interface CTASectionProps {
  title: string;
  description: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export function CTASection({ title, description, primary, secondary }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-royal-700 via-ink-800 to-ink-900 py-20">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="noise-overlay" />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-medium text-parchment sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-parchment/70">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to={primary.to} className="btn-primary">
              {primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
