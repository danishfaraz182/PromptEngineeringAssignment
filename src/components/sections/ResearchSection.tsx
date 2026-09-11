import {
  Atom,
  Bot,
  BrainCircuit,
  Building2,
  Dna,
  Leaf,
  Rocket,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import { researchAreas } from '../../data/research';
import { researchImpactStats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const icons: Record<string, LucideIcon> = {
  'brain-circuit': BrainCircuit,
  bot: Bot,
  leaf: Leaf,
  dna: Dna,
  atom: Atom,
  rocket: Rocket,
  shield: Shield,
  'building-2': Building2,
};

export function ResearchSection() {
  return (
    <section id="research" className="relative bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Research & Innovation"
          title="Research built to leave the lab."
          description="Sixty-two active laboratories across our global network pursue work in artificial intelligence, robotics, climate technology, and beyond — much of it developed jointly with municipal, industry, and research partners."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area, i) => {
            const Icon = icons[area.icon] ?? BrainCircuit;
            return (
              <Reveal key={area.id} delay={(i % 4) * 0.06}>
                <div className="glass-panel h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-medium text-parchment">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/60">{area.description}</p>
                  <p className="mt-4 text-xs text-gold-300">
                    <AnimatedCounter value={area.stat.value} /> {area.stat.label.toLowerCase()}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {researchImpactStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.05}>
              <p className="text-3xl font-semibold text-parchment">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-parchment/55">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
