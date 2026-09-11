import { Users } from 'lucide-react';
import { studentOrgs } from '../../data/campus';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function StudentLifeSection() {
  return (
    <section id="student-life" className="relative bg-ink-900 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Student Life"
          title="A campus community from 85+ countries."
          description="From competitive robotics to the International Cultural Festival, student life at DFIU is organized, funded, and largely run by students themselves."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studentOrgs.map((org, i) => (
            <Reveal key={org.id} delay={(i % 3) * 0.07}>
              <div className="glass-panel h-full p-6 transition-all duration-300 hover:-translate-y-1">
                <span className="eyebrow">{org.category}</span>
                <h3 className="mt-2 text-base font-medium text-parchment">{org.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-parchment/65">{org.description}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-cyan-300">
                  <Users className="h-3.5 w-3.5" />
                  <AnimatedCounter value={org.members} /> members
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
