import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin, Users, Handshake, Repeat } from 'lucide-react';
import { globalCenters } from '../../data/globalNetwork';
import { SectionHeading } from '../ui/SectionHeading';
import type { GlobalCenter } from '../../data/types';

const HUB_ID = 'india';

function typeColor(type: GlobalCenter['type']) {
  if (type === 'Main Campus') return '#e8c06c';
  if (type === 'Global Center') return '#4fd6ea';
  return '#8fe9f5';
}

export function GlobalNetworkMap() {
  const [activeId, setActiveId] = useState<string>(HUB_ID);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const active = globalCenters.find((c) => c.id === activeId) ?? globalCenters[0];
  const hub = globalCenters.find((c) => c.id === HUB_ID)!;

  return (
    <section id="global-network" className="relative bg-ink-900 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Global Network"
          title="Ten countries. One connected academic network."
          description="Click any location to see its programs, students, and research partnerships. Every center is linked back to the Main Campus through shared curricula and exchange terms."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Map panel */}
          <div className="glass-panel relative aspect-[16/10] overflow-hidden p-2 sm:p-4">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(143,233,245,0.18) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
              aria-hidden="true"
            />
            <svg viewBox="0 0 100 60" className="relative h-full w-full" role="img" aria-label="World map of DFIU campuses and global centers">
              {/* connecting lines from hub to every other center */}
              {globalCenters
                .filter((c) => c.id !== HUB_ID)
                .map((c) => {
                  const midX = (hub.x + c.x) / 2;
                  const midY = Math.min(hub.y, c.y) - 10;
                  const isHighlighted = activeId === c.id || hoveredId === c.id || activeId === HUB_ID;
                  return (
                    <path
                      key={c.id}
                      d={`M ${hub.x} ${hub.y} Q ${midX} ${midY} ${c.x} ${c.y}`}
                      fill="none"
                      stroke={isHighlighted ? '#4fd6ea' : '#28345c'}
                      strokeWidth={isHighlighted ? 0.4 : 0.25}
                      strokeDasharray="1.5 1.5"
                      opacity={isHighlighted ? 0.9 : 0.35}
                      className={isHighlighted ? 'animate-dash' : ''}
                    />
                  );
                })}

              {/* markers */}
              {globalCenters.map((c) => {
                const isActive = activeId === c.id;
                return (
                  <g key={c.id} transform={`translate(${c.x} ${c.y})`}>
                    <motion.circle
                      r={isActive ? 2.6 : 1.6}
                      fill={typeColor(c.type)}
                      opacity={isActive ? 1 : 0.85}
                      animate={isActive ? { r: [2.2, 3, 2.2] } : {}}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setActiveId(c.id)}
                      onMouseEnter={() => setHoveredId(c.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${c.country} — ${c.type}`}
                    />
                    {isActive && (
                      <circle r="4.4" fill="none" stroke={typeColor(c.type)} strokeWidth="0.3" opacity="0.5" />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* hover tooltip */}
            <AnimatePresence>
              {hoveredId && hoveredId !== activeId && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute left-3 top-3 rounded-lg bg-ink-950/90 px-3 py-1.5 text-xs text-parchment"
                >
                  {globalCenters.find((c) => c.id === hoveredId)?.country}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 text-[10px] text-parchment/60">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold-400" /> Main Campus</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Global Center</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-300/80" /> Research Partner</span>
            </div>
          </div>

          {/* Info panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6"
            >
              <p className="eyebrow">{active.type}</p>
              <h3 className="mt-2 text-2xl font-medium text-parchment">{active.country}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-parchment/60">
                <MapPin className="h-3.5 w-3.5" /> {active.city}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300">
                <Users className="h-4 w-4" />
                <AnimatedNumber value={active.students} /> students
              </div>

              <div className="mt-6">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-parchment/50">
                  <GraduationCap className="h-3.5 w-3.5" /> Programs offered
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.programs.map((p) => (
                    <span key={p} className="rounded-full border border-white/10 px-3 py-1 text-xs text-parchment/75">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-parchment/50">
                  <Handshake className="h-3.5 w-3.5" /> Research partnerships
                </p>
                <ul className="space-y-1 text-sm text-parchment/70">
                  {active.partnerships.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-parchment/50">
                  <Repeat className="h-3.5 w-3.5" /> Exchange opportunities
                </p>
                <ul className="space-y-1 text-sm text-parchment/70">
                  {active.exchange.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  return <span className="font-semibold">{value.toLocaleString()}</span>;
}
