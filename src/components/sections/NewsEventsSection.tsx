import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { newsItems, eventItems } from '../../data/news';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function useCountdown(target: string) {
  const [remaining, setRemaining] = useState(() => new Date(target).getTime() - Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(new Date(target).getTime() - Date.now());
    }, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  if (remaining <= 0) return 'Happening now';
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  return `${days}d ${hours}h ${minutes}m`;
}

function EventCountdown({ target }: { target: string }) {
  const countdown = useCountdown(target);
  return <span className="font-mono text-xs text-gold-300">{countdown}</span>;
}

export function NewsEventsSection() {
  return (
    <section id="news" className="relative bg-ink-950 py-24">
      <div className="container-page grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading eyebrow="News" title="From across the university." />
          <div className="mt-8 flex flex-col divide-y divide-white/10">
            {newsItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04}>
                <a href="#" className="group flex flex-col gap-1.5 py-5">
                  <div className="flex items-center gap-3 text-xs text-parchment/45">
                    <span className="rounded-full bg-royal-500/15 px-2.5 py-0.5 text-cyan-300">{item.category}</span>
                    <span>{new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-base font-medium text-parchment transition-colors group-hover:text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-parchment/60">{item.excerpt}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Upcoming Events" title="What's next." />
          <div className="mt-8 flex flex-col gap-4">
            {eventItems.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.05}>
                <div className="glass-panel p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium text-parchment">{event.title}</h3>
                    <span className="shrink-0 rounded-full bg-gold-400/10 px-2.5 py-0.5 text-[11px] text-gold-300">
                      {event.category}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-parchment/55">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(event.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {event.location}</span>
                  </div>
                  <div className="mt-3 border-t border-white/10 pt-3 text-xs text-parchment/50">
                    Starts in <EventCountdown target={event.countdownTarget} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
