import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { schools } from '../data/schools';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { CTASection } from '../components/sections/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFoundPage } from './NotFoundPage';

export function SchoolDetailPage() {
  const { slug } = useParams();
  const school = schools.find((s) => s.slug === slug);

  usePageMeta(school ? school.name : 'School not found', school?.tagline);

  if (!school) return <NotFoundPage />;

  return (
    <>
      <PageHero eyebrow="School" title={school.name} description={school.tagline} />

      <section className="bg-ink-950 py-16">
        <div className="container-page">
          <Link to="/academics" className="inline-flex items-center gap-2 text-sm text-parchment/60 hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" /> Back to all schools
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <p className="text-base leading-relaxed text-parchment/75">{school.description}</p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal>
              <div className="glass-panel p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Programs</h3>
                <ul className="mt-3 space-y-2 text-sm text-parchment/75">
                  {school.programs.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="glass-panel p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Research</h3>
                <ul className="mt-3 space-y-2 text-sm text-parchment/75">
                  {school.research.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-panel p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Labs</h3>
                <ul className="mt-3 space-y-2 text-sm text-parchment/75">
                  {school.labs.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="glass-panel p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Career Outcomes</h3>
                <ul className="mt-3 space-y-2 text-sm text-parchment/75">
                  {school.careerOutcomes.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 flex gap-8 border-t border-white/10 pt-6 text-sm text-parchment/60">
            <span>{school.facultyCount} faculty & researchers</span>
            <span>{school.studentCount.toLocaleString()} students</span>
          </div>
        </div>
      </section>

      <CTASection
        title={`Apply to the ${school.name.replace('School of ', '')}`}
        description="Start your admissions journey and choose your preferred campus from our ten-country network."
        primary={{ label: 'Start Application', to: '/admissions' }}
      />
    </>
  );
}
