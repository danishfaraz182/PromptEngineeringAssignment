import { campusFacilities } from '../../data/campus';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function CampusLifeGallery() {
  return (
    <section id="campus-life" className="relative bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Campus Life"
          title="Facilities built for the way people actually work."
          description="From a solar-powered green campus to GPU-equipped AI laboratories, the Main Campus and every Global Center share a common design standard."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {campusFacilities.map((facility, i) => (
            <Reveal key={facility.id} delay={(i % 4) * 0.06}>
              <div className="glass-panel h-full p-5 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-sm font-medium text-parchment">{facility.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-parchment/60">{facility.description}</p>
                <p className="mt-4 border-t border-white/10 pt-3 text-[11px] text-gold-300">{facility.stat}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
