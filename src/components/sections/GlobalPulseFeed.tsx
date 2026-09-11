import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloudRain, CloudSun, Sun, Users, Wind } from 'lucide-react';
import { subscribeToLiveFeed, getInitialFeed } from '../../services/notificationService';
import { getCampusStatuses, getCampusWeather, getLiveVisitorSeed } from '../../services/campusService';
import type { LiveFeedEvent } from '../../data/types';
import type { CampusStatus, CampusWeather } from '../../services/campusService';
import { globalCenters } from '../../data/globalNetwork';
import { LiveBadge } from '../ui/LiveBadge';
import { SectionHeading } from '../ui/SectionHeading';

const weatherIcon: Record<CampusWeather['condition'], typeof Sun> = {
  Clear: Sun,
  Cloudy: CloudSun,
  Rain: CloudRain,
  Humid: CloudSun,
  Cool: Wind,
};

export function GlobalPulseFeed() {
  const [feed, setFeed] = useState<LiveFeedEvent[]>(() => getInitialFeed());
  const [statuses, setStatuses] = useState<CampusStatus[]>([]);
  const [weather, setWeather] = useState<CampusWeather[]>([]);
  const [visitors, setVisitors] = useState(getLiveVisitorSeed());

  useEffect(() => {
    const channel = subscribeToLiveFeed();
    const unsubscribe = channel.subscribe((event) => {
      setFeed((prev) => [event, ...prev].slice(0, 6));
    });
    return () => {
      unsubscribe();
      channel.close();
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const [s, w] = await Promise.all([getCampusStatuses(), getCampusWeather()]);
      if (mounted) {
        setStatuses(s);
        setWeather(w);
      }
    }
    load();
    const interval = window.setInterval(load, 15000);
    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisitors((v) => Math.max(1200, v + Math.floor(Math.random() * 21) - 10));
    }, 3500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="global-pulse" className="relative bg-ink-900 py-24">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Global Pulse"
            title="The network, live."
            description="A simulated real-time view of activity across the university's global network — clearly demo data until connected to a live backend."
          />
          <div className="glass-panel flex items-center gap-3 px-4 py-2.5">
            <Users className="h-4 w-4 text-cyan-300" />
            <span className="text-sm text-parchment">{visitors.toLocaleString()} on site now</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Live feed */}
          <div className="glass-panel p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-parchment/70">University Live Feed</h3>
              <LiveBadge label="LIVE" />
            </div>
            <ul className="flex flex-col gap-3">
              <AnimatePresence initial={false}>
                {feed.map((event) => (
                  <motion.li
                    key={event.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3 border-l-2 border-cyan-400/30 pl-3 text-sm"
                  >
                    <span className="shrink-0 font-mono text-xs text-parchment/45">{event.time}</span>
                    <span className="text-parchment/80">{event.message}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            <p className="mt-4 text-[11px] text-parchment/35">Simulated demo events — not connected to a live backend.</p>
          </div>

          {/* Campus status + weather grid */}
          <div className="glass-panel p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-parchment/70">
              Global Campus Status
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {globalCenters.slice(0, 6).map((center) => {
                const status = statuses.find((s) => s.centerId === center.id);
                const w = weather.find((x) => x.centerId === center.id);
                const Icon = w ? weatherIcon[w.condition] : Sun;
                return (
                  <div key={center.id} className="rounded-xl border border-white/10 p-3">
                    <p className="text-xs font-medium text-parchment">{center.country}</p>
                    <p className="mt-1 text-[11px] text-cyan-300">{status?.status ?? '—'}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-parchment/55">
                      <Icon className="h-3.5 w-3.5" />
                      {w ? `${w.tempCelsius}°C` : '—'}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-[11px] text-parchment/35">
              Demo status and weather data, refreshed periodically. Not a live meteorological feed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
