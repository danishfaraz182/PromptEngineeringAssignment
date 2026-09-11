import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Building2,
  Compass,
  Cpu,
  Cog,
  Globe2,
  Scale,
  Stethoscope,
  Video,
  type LucideIcon,
} from 'lucide-react';
import { schools } from '../../data/schools';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const icons: Record<string, LucideIcon> = {
  cpu: Cpu,
  cog: Cog,
  briefcase: Briefcase,
  stethoscope: Stethoscope,
  scale: Scale,
  compass: Compass,
  video: Video,
  'bar-chart-3': BarChart3,
  'globe-2': Globe2,
};

interface AcademicsGridProps {
  limit?: number;
  showFilters?: boolean;
}

export function AcademicsGrid({ limit, showFilters = false }: AcademicsGridProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const base = schools.filter(
      (s) =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.programs.some((p) => p.toLowerCase().includes(query.toLowerCase())),
    );
    return limit ? base.slice(0, limit) : base;
  }, [query, limit]);

  return (
    <section id="academics" className="relative bg-ink-950 py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Academics"
            title="Nine schools. Over 120 programs."
            description="Every school pairs foundational coursework with labs, studios, and career outcomes built around what employers and researchers actually need."
          />
          {showFilters && (
            <Reveal className="w-full sm:w-72">
              <label htmlFor="school-search" className="sr-only">Search programs or schools</label>
              <input
                id="school-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs or schools…"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-cyan-400/50 focus:outline-none"
              />
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((school, i) => {
            const Icon = icons[school.icon] ?? Compass;
            return (
              <Reveal key={school.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={`/academics/${school.slug}`}
                  className="glass-panel group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-500/15 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-parchment/30 transition-colors group-hover:text-gold-300" />
                  </div>
                  <h3 className="mt-5 text-base font-medium leading-snug text-parchment">{school.name}</h3>
                  <p className="mt-2 text-sm text-parchment/60">{school.tagline}</p>
                  <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-xs text-parchment/50">
                    <span>{school.programs.length} programs</span>
                    <span>·</span>
                    <span>{school.facultyCount} faculty</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-parchment/50">
            No schools or programs match “{query}”. Try a different search term.
          </p>
        )}
      </div>
    </section>
  );
}
