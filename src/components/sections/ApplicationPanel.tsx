import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { getApplicationCounter, submitApplication } from '../../services/applicationService';
import { schools } from '../../data/schools';
import { globalCenters } from '../../data/globalNetwork';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { LiveBadge } from '../ui/LiveBadge';
import { useToast } from '../ui/Toast';

export function ApplicationPanel() {
  const [counter, setCounter] = useState<{ totalThisCycle: number; today: number } | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    let mounted = true;
    async function poll() {
      const data = await getApplicationCounter();
      if (mounted) setCounter(data);
    }
    poll();
    const interval = window.setInterval(poll, 6000);
    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const result = await submitApplication({
      fullName: String(form.get('fullName') || ''),
      email: String(form.get('email') || ''),
      program: String(form.get('program') || ''),
      campus: String(form.get('campus') || ''),
    });
    setSubmitting(false);
    setSubmitted(result.applicationId);
    showToast('Demo application received — this is simulated data, no real application was filed.', 'info');
  }

  return (
    <section className="relative bg-ink-900 py-24">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Live Admissions Activity</p>
          <h3 className="mt-3 text-2xl font-medium text-parchment">Application activity, simulated in real time.</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-parchment/65">
            This counter demonstrates how a live admissions dashboard would behave once connected to a
            real backend. All figures shown here are simulated demo data, not live submissions.
          </p>

          <div className="glass-panel mt-8 flex items-center justify-between p-6">
            <div>
              <LiveBadge label="DEMO DATA · SIMULATED" />
              <p className="mt-4 text-4xl font-semibold text-parchment">
                {counter ? <AnimatedCounter value={counter.totalThisCycle} /> : '—'}
              </p>
              <p className="mt-1 text-xs text-parchment/55">Applications this admissions cycle</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-cyan-300">
                {counter ? <AnimatedCounter value={counter.today} /> : '—'}
              </p>
              <p className="mt-1 text-xs text-parchment/55">Received today</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8">
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-cyan-300" />
              <h3 className="mt-4 text-xl font-medium text-parchment">Demo application received</h3>
              <p className="mt-2 max-w-sm text-sm text-parchment/60">
                Reference ID <span className="font-mono text-gold-300">{submitted}</span>. This is a
                simulated confirmation for demonstration purposes only.
              </p>
              <button onClick={() => setSubmitted(null)} className="btn-ghost mt-6">
                Start another demo application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-parchment">Start a demo application</h3>
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-xs text-parchment/60">Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-parchment placeholder:text-parchment/35 focus:border-cyan-400/50 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-parchment/60">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-parchment placeholder:text-parchment/35 focus:border-cyan-400/50 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="program" className="mb-1.5 block text-xs text-parchment/60">Intended program</label>
                <select
                  id="program"
                  name="program"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/15 bg-ink-900 px-3.5 py-2.5 text-sm text-parchment focus:border-cyan-400/50 focus:outline-none"
                >
                  <option value="" disabled>Select a school</option>
                  {schools.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="campus" className="mb-1.5 block text-xs text-parchment/60">Preferred campus</label>
                <select
                  id="campus"
                  name="campus"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/15 bg-ink-900 px-3.5 py-2.5 text-sm text-parchment focus:border-cyan-400/50 focus:outline-none"
                >
                  <option value="" disabled>Select a location</option>
                  {globalCenters.map((c) => (
                    <option key={c.id} value={c.country}>{c.country} — {c.type}</option>
                  ))}
                </select>
              </div>
              <button type="submit" disabled={submitting} className="btn-primary mt-2 justify-center disabled:opacity-60">
                <Send className="h-4 w-4" />
                {submitting ? 'Submitting…' : 'Submit demo application'}
              </button>
              <p className="text-center text-[11px] text-parchment/40">
                Demo form only — no real application is filed and no data leaves your browser.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
