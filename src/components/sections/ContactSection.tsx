import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { globalCenters } from '../../data/globalNetwork';
import { SectionHeading } from '../ui/SectionHeading';
import { useToast } from '../ui/Toast';

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitting(false);
    e.currentTarget.reset();
    showToast('Message sent — this is a demo form, no message was actually delivered.', 'info');
  }

  return (
    <section id="contact" className="relative bg-ink-900 py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Reach the right office, wherever you are."
            description="General inquiries are routed from the Main Campus. Each Global Center also maintains its own local admissions and student-services desk."
          />

          <div className="mt-8 flex flex-col gap-3 text-sm text-parchment/75">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> admissions@dfiu.edu</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> +1 (555) 010-4820</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Main Campus — Bengaluru, India</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {globalCenters.map((c) => (
              <div key={c.id} className="rounded-xl border border-white/10 p-3">
                <p className="text-xs font-medium text-parchment">{c.country}</p>
                <p className="mt-1 text-[11px] text-parchment/50">{c.city}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel flex flex-col gap-4 p-6 sm:p-8">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-xs text-parchment/60">Name</label>
            <input
              id="contact-name"
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-parchment placeholder:text-parchment/35 focus:border-cyan-400/50 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-xs text-parchment/60">Email</label>
            <input
              id="contact-email"
              type="email"
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-parchment placeholder:text-parchment/35 focus:border-cyan-400/50 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-xs text-parchment/60">Message</label>
            <textarea
              id="contact-message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-parchment placeholder:text-parchment/35 focus:border-cyan-400/50 focus:outline-none"
              placeholder="How can we help?"
            />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary justify-center disabled:opacity-60">
            {submitting ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
