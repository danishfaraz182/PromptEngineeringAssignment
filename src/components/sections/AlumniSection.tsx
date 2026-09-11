import { alumniProfiles } from '../../data/campus';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('');
}

export function AlumniSection() {
  return (
    <section id="alumni" className="relative bg-ink-900 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Alumni Network"
          title="Graduates working across every industry and continent."
          description="Our alumni network connects graduates from the Main Campus and every Global Center — a resource for mentorship, hiring, and lifelong learning."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {alumniProfiles.map((alum, i) => (
            <Reveal key={alum.id} delay={(i % 2) * 0.08}>
              <div className="glass-panel flex h-full gap-4 p-6">
                {alum.photo ? (
                  <img
                    src={alum.photo}
                    alt={alum.name}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-white/10"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal-500/40 to-cyan-400/20 text-sm font-semibold text-parchment ring-1 ring-white/10 ${alum.photo ? 'hidden' : ''}`}
                >
                  {initials(alum.name)}
                </div>
                <div>
                  <p className="text-sm font-medium text-parchment">{alum.name}</p>
                  <p className="text-xs text-cyan-300">{alum.role}</p>
                  <p className="mt-1 text-xs text-parchment/50">{alum.program} · {alum.year} · {alum.country}</p>
                  <p className="mt-3 text-sm italic leading-relaxed text-parchment/70">&ldquo;{alum.quote}&rdquo;</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
