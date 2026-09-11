import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { navGroups } from '../../data/navigation';
import { useTheme } from '../../hooks/useTheme';
import { MobileNav } from './MobileNav';

const languages = ['English', 'Español', '中文', 'العربية', '日本語'];
const regions = ['Main Campus — India', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Singapore', 'UAE', 'Japan'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [region, setRegion] = useState(regions[0]);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink-900/85 backdrop-blur-xl shadow-glass' : 'bg-transparent'
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Danish Faraz International University — Home">
            <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#0b1123" />
              <path d="M32 12 L52 22 L32 32 L12 22 Z" fill="none" stroke="#e8c06c" strokeWidth="2" />
              <path d="M20 27 V40 C20 40 26 46 32 46 C38 46 44 40 44 40 V27" fill="none" stroke="#4fd6ea" strokeWidth="2" />
              <circle cx="32" cy="32" r="2.4" fill="#e8c06c" />
            </svg>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-wide text-parchment">DANISH FARAZ</span>
              <span className="text-[11px] tracking-[0.2em] text-cyan-300/80">INTERNATIONAL UNIVERSITY</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-parchment/85 transition-colors hover:text-cyan-300"
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {openGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="glass-panel absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 p-3"
                    >
                      {group.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <span className="block text-sm font-medium text-parchment">{link.label}</span>
                          {link.description && (
                            <span className="mt-0.5 block text-xs text-parchment/55">{link.description}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <RouterNavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-cyan-300' : 'text-parchment/85 hover:text-cyan-300'
                }`
              }
            >
              Contact
            </RouterNavLink>
          </nav>

          <div className="flex items-center gap-1.5">
            <div className="relative hidden md:block">
              <button
                onClick={() => setRegionOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-parchment/70 hover:text-parchment"
                aria-haspopup="listbox"
                aria-expanded={regionOpen}
              >
                {region.split(' — ')[0]}
                <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {regionOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    role="listbox"
                    className="glass-panel absolute right-0 top-full mt-2 max-h-72 w-56 overflow-auto p-2 text-sm"
                  >
                    {regions.map((r) => (
                      <li key={r}>
                        <button
                          role="option"
                          aria-selected={region === r}
                          onClick={() => {
                            setRegion(r);
                            setRegionOpen(false);
                          }}
                          className="block w-full rounded-lg px-3 py-2 text-left text-parchment/80 hover:bg-white/5 hover:text-parchment"
                        >
                          {r}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="rounded-full px-3 py-2 text-xs font-medium text-parchment/70 hover:text-parchment"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                {language}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    role="listbox"
                    className="glass-panel absolute right-0 top-full mt-2 w-40 overflow-hidden p-2 text-sm"
                  >
                    {languages.map((l) => (
                      <li key={l}>
                        <button
                          role="option"
                          aria-selected={language === l}
                          onClick={() => {
                            setLanguage(l);
                            setLangOpen(false);
                          }}
                          className="block w-full rounded-lg px-3 py-2 text-left text-parchment/80 hover:bg-white/5 hover:text-parchment"
                        >
                          {l}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search the site"
              className="rounded-full p-2.5 text-parchment/80 hover:bg-white/5 hover:text-cyan-300"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark or light mode"
              className="rounded-full p-2.5 text-parchment/80 hover:bg-white/5 hover:text-gold-300"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link to="/admissions" className="btn-primary hidden md:inline-flex">
              Apply Now
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2.5 text-parchment lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-ink-900/95"
            >
              <div className="container-page flex items-center gap-3 py-4">
                <Search className="h-4 w-4 text-parchment/50" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search programs, research, admissions…"
                  className="w-full bg-transparent text-sm text-parchment placeholder:text-parchment/40 focus:outline-none"
                />
                <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                  <X className="h-4 w-4 text-parchment/50" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
