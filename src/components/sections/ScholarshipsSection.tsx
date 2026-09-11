import { useMemo, useState } from 'react';
import { scholarships } from '../../data/campus';
import type { Scholarship } from '../../data/types';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const categories: Array<Scholarship['category'] | 'All'> = ['All', 'Merit', 'Need-Based', 'International', 'Research'];

export function ScholarshipsSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? scholarships : scholarships.filter((s) => s.category === filter)),
    [filter],
  );

  return (
    <section id="scholarships" className="relative bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Scholarships"
          title="Funding for students, wherever they start from."
          description="Merit, need-based, international, and research scholarships are available across every school and campus."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                filter === c
                  ? 'border-cyan-400/60 bg-cyan-400/10 text-cyan-300'
                  : 'border-white/15 text-parchment/60 hover:text-parchment'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.06}>
              <div className="glass-panel flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium text-parchment">{s.name}</h3>
                  <span className="shrink-0 rounded-full bg-gold-400/10 px-2.5 py-1 text-[11px] font-medium text-gold-300">
                    {s.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-parchment/65">{s.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-parchment/55">
                  <span>{s.amount}</span>
                  <span>Deadline: {s.deadline}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
