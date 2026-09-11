import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, X } from 'lucide-react';
import { leadershipProfiles } from '../../data/leadership';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import type { LeadershipProfile } from '../../data/types';

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

export function LeadershipGrid() {
  const [selected, setSelected] = useState<LeadershipProfile | null>(null);

  return (
    <section id="leadership" className="relative bg-ink-900 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Leadership"
          title="The people guiding DFIU's global network."
          description="Danish Faraz International University is a fictional demonstration institution. All biographies below are written for this demo and do not describe any real-world university roles."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipProfiles.map((profile, i) => (
            <Reveal key={profile.id} delay={(i % 3) * 0.07}>
              <button
                onClick={() => setSelected(profile)}
                className="glass-panel group flex w-full flex-col items-start p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30"
              >
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-16 w-16 rounded-full object-cover ring-1 ring-white/10"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-royal-500/40 to-cyan-400/20 text-lg font-semibold text-parchment ring-1 ring-white/10 ${profile.photo ? 'hidden' : ''}`}
                >
                  {initials(profile.name)}
                </div>
                <h3 className="mt-5 text-base font-medium text-parchment">{profile.name}</h3>
                <p className="mt-1 text-sm text-gold-300">{profile.position}</p>
                <p className="mt-3 text-sm text-parchment/60">{profile.focus}</p>
                <span className="mt-4 text-xs font-medium text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100">
                  View profile →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative max-h-[85vh] w-full max-w-lg overflow-y-auto p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close profile"
              className="absolute right-5 top-5 text-parchment/50 hover:text-parchment"
            >
              <X className="h-5 w-5" />
            </button>
            {selected.photo ? (
              <img
                src={selected.photo}
                alt={selected.name}
                className="h-20 w-20 rounded-full object-cover ring-1 ring-white/10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-royal-500/40 to-cyan-400/20 text-2xl font-semibold text-parchment ring-1 ring-white/10 ${selected.photo ? 'hidden' : ''}`}
            >
              {initials(selected.name)}
            </div>
            <h3 className="mt-5 text-2xl font-medium text-parchment">{selected.name}</h3>
            <p className="mt-1 text-sm text-gold-300">{selected.position}</p>
            <p className="mt-5 text-sm leading-relaxed text-parchment/70">{selected.bio}</p>
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-parchment/50">Areas of responsibility</p>
              <ul className="flex flex-wrap gap-2">
                {selected.responsibilities.map((r) => (
                  <li key={r} className="rounded-full border border-white/10 px-3 py-1 text-xs text-parchment/75">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            {selected.socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {selected.socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-1.5 text-xs text-parchment/60 hover:text-cyan-300"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> {s.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
