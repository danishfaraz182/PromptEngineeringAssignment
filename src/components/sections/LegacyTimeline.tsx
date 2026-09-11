import { motion } from 'framer-motion';
import { legacyTimeline } from '../../data/leadership';
import { SectionHeading } from '../ui/SectionHeading';

const generations = [1, 2, 3, 4].map((g) => legacyTimeline.filter((p) => p.generation === g));

export function LegacyTimeline() {
  return (
    <section id="legacy" className="relative overflow-hidden bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Legacy"
          title="Four generations, one institutional story."
          align="center"
          description="Danish Faraz International University is a fictional demonstration institution. This legacy timeline is a narrative device created for the demo and does not describe real-world roles held by these individuals."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold-400 via-cyan-400 to-royal-500"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-14">
            {generations.map((gen, gi) => (
              <div key={gi} className="relative flex justify-center">
                <div className={`flex gap-6 ${gen.length > 1 ? 'flex-col sm:flex-row' : 'flex-col'}`}>
                  {gen.map((person, pi) => (
                    <motion.div
                      key={person.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: pi * 0.15 }}
                      className="glass-panel relative z-10 w-64 p-5 text-center"
                    >
                      <span className="mx-auto mb-3 flex h-2 w-2 items-center justify-center rounded-full bg-gold-400 ring-4 ring-gold-400/20" />
                      <p className="text-sm font-medium text-parchment">{person.name}</p>
                      <p className="mt-1 text-xs text-cyan-300">{person.role}</p>
                      <p className="mt-2 text-[11px] uppercase tracking-wide text-parchment/40">
                        Generation {person.generation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
