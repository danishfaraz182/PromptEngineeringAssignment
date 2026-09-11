import { globalImpactStats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Reveal } from '../ui/Reveal';

export function GlobalImpactStats() {
  return (
    <section className="relative border-y border-white/5 bg-ink-950 py-20">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Global Impact</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-parchment sm:text-4xl">
            A footprint measured across countries, not just campuses.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {globalImpactStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.05}>
              <div className="border-l-2 border-cyan-400/30 pl-4">
                <p className="text-3xl font-semibold text-parchment sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-parchment/55 sm:text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
