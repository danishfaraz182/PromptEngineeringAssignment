import { publicFigures } from '../../data/campus';
import { SectionHeading } from '../ui/SectionHeading';

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('');
}

export function GlobalIconsSection() {
  const looped = [...publicFigures, ...publicFigures];

  return (
    <section id="global-icons" className="relative overflow-hidden bg-ink-900 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Public Figures / Inspiration"
          title="Global Icons & Inspiration"
          description="These public figures are not affiliated with Danish Faraz International University in any way — not as faculty, staff, founders, ambassadors, or partners. They're included here only as examples of excellence and discipline that students may find motivating."
        />
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {looped.map((figure, i) => (
            <div
              key={`${figure.id}-${i}`}
              className="glass-panel flex w-56 shrink-0 flex-col items-center p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-royal-500/30 to-gold-400/20 text-lg font-semibold text-parchment ring-1 ring-white/10">
                {initials(figure.name)}
              </div>
              <p className="mt-4 text-sm font-medium text-parchment">{figure.name}</p>
              <p className="mt-1 text-xs text-cyan-300">{figure.field}</p>
              <p className="mt-2 text-xs leading-relaxed text-parchment/55">{figure.note}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="container-page mt-6 text-center text-[11px] text-parchment/35">
        Portrait placeholders shown above are stylized initials, not photographs.
      </p>
    </section>
  );
}
