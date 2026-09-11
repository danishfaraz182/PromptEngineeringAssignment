import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { LiveBadge } from '../ui/LiveBadge';
import { MagneticButton } from '../ui/MagneticButton';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pt-20">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 animate-drift bg-[radial-gradient(circle_at_30%_40%,rgba(79,214,234,0.12),transparent_55%)]" />
      <div className="noise-overlay" />

      {/* Floating data points */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          { top: '18%', left: '12%', delay: 0 },
          { top: '30%', left: '82%', delay: 0.6 },
          { top: '68%', left: '20%', delay: 1.1 },
          { top: '75%', left: '70%', delay: 0.3 },
          { top: '45%', left: '55%', delay: 0.9 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_12px_2px_rgba(79,214,234,0.5)]"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-page relative z-10 grid gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <LiveBadge label="CAMPUS NETWORK ONLINE" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
          >
            Danish Faraz International University
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 max-w-3xl text-[2.6rem] font-medium leading-[1.08] text-parchment sm:text-6xl lg:text-[4.2rem]"
          >
            Where global minds shape tomorrow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-parchment/70"
          >
            A new generation of international education, research, innovation and human
            possibility — across a network of campuses and global centers spanning ten countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton className="btn-primary">
              <Link to="/about" className="flex items-center gap-2">
                Explore the University <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <Link to="/admissions" className="btn-ghost">
              Apply Now
            </Link>
            <Link to="/global-network" className="inline-flex items-center gap-2 text-sm font-medium text-parchment/80 hover:text-gold-300">
              <PlayCircle className="h-5 w-5" />
              Take a Virtual Tour
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-16 rounded-full border border-gold-400/20" />
          <svg viewBox="0 0 200 200" className="relative h-40 w-40 drop-shadow-[0_0_30px_rgba(79,214,234,0.25)]">
            <motion.path
              d="M100 30 L165 62 L100 94 L35 62 Z"
              fill="none"
              stroke="#e8c06c"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.6 }}
            />
            <motion.path
              d="M60 78 V125 C60 125 78 148 100 148 C122 148 140 125 140 125 V78"
              fill="none"
              stroke="#4fd6ea"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.9 }}
            />
            <circle cx="100" cy="94" r="4" fill="#e8c06c" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}
