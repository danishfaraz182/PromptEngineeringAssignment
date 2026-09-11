import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from 'lucide-react';
import { subscribeToNewsletter } from '../../services/eventService';
import { useToast } from '../ui/Toast';

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'University',
    links: [
      { label: 'About DFIU', to: '/about' },
      { label: 'Leadership & Legacy', to: '/leadership' },
      { label: 'News & Events', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Schools & Programs', to: '/academics' },
      { label: 'Research & Innovation', to: '/research' },
      { label: 'Global Network', to: '/global-network' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Admissions Journey', to: '/admissions' },
      { label: 'Scholarships', to: '/scholarships' },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Student Life', to: '/student-life' },
      { label: 'Alumni Network', to: '/alumni' },
      { label: 'Careers', to: '/careers' },
    ],
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'X (Twitter)', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await subscribeToNewsletter(email);
    setLoading(false);
    setEmail('');
    showToast('Subscribed — you will receive DFIU updates soon.');
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="noise-overlay" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
                <rect width="64" height="64" rx="14" fill="#0b1123" />
                <path d="M32 12 L52 22 L32 32 L12 22 Z" fill="none" stroke="#e8c06c" strokeWidth="2" />
                <path d="M20 27 V40 C20 40 26 46 32 46 C38 46 44 40 44 40 V27" fill="none" stroke="#4fd6ea" strokeWidth="2" />
                <circle cx="32" cy="32" r="2.4" fill="#e8c06c" />
              </svg>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-parchment">DANISH FARAZ</p>
                <p className="text-[11px] tracking-[0.2em] text-cyan-300/80">INTERNATIONAL UNIVERSITY</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-parchment/60">
              A globally networked university spanning ten countries — academics, research, and
              innovation for a new generation of global minds. DFIU is a demonstration institution.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-cyan-400/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Subscribe to newsletter"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-royal-500 text-ink-950 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-parchment/70 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-parchment/50">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-parchment/70 hover:text-cyan-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-parchment/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Danish Faraz International University. A fictional demonstration institution.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-parchment/70">Privacy</Link>
            <Link to="/terms" className="hover:text-parchment/70">Terms</Link>
            <Link to="/accessibility" className="hover:text-parchment/70">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
