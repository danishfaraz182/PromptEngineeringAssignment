import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const pillars = [
  {
    title: 'Vision',
    text: 'A world where opportunity in higher education is shaped by ability and curiosity, not geography — a single academic community spanning ten countries.',
  },
  {
    title: 'Mission',
    text: 'To educate globally minded graduates through research-connected teaching, cross-border exchange, and programs built around real-world problems.',
  },
  {
    title: 'Values',
    text: 'Rigor without gatekeeping, collaboration across disciplines and borders, and a bias toward building things that are actually used.',
  },
  {
    title: 'Academic Philosophy',
    text: 'Foundational theory paired with studio- and lab-based practice from year one, so graduates leave able to both explain and build.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-ink-900 py-24">
      <div className="container-page grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="About the University"
          title="An academic community built for a connected world."
          description="Danish Faraz International University was founded on the premise that the most interesting problems today don't respect national borders — so neither should the education built to solve them."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="border-t border-white/10 pt-5">
                <h3 className="text-lg font-medium text-gold-300">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/70">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
