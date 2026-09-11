import { careerStats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const employerCategories = [
  'Technology & AI',
  'Finance & Consulting',
  'Engineering & Manufacturing',
  'Healthcare & Life Sciences',
  'Media & Communication',
  'Public Sector & NGOs',
];

export function CareersSection() {
  return (
    <section id="careers" className="relative bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Careers"
          title="Outcomes built into the curriculum, not left to chance."
          description="Every school partners directly with employers on capstones, internships, and hiring pipelines."
        />

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {careerStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.06}>
              <p className="text-3xl font-semibold text-parchment">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-parchment/55">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-parchment/50">
            Employer network by sector
          </p>
          <div className="flex flex-wrap gap-3">
            {employerCategories.map((c) => (
              <span key={c} className="rounded-full border border-white/10 px-4 py-2 text-sm text-parchment/75">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
