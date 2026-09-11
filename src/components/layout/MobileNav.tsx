import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { navGroups } from '../../data/navigation';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] w-[85%] max-w-sm overflow-y-auto bg-ink-900 p-6 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wide text-parchment">MENU</span>
              <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 hover:bg-white/5">
                <X className="h-5 w-5 text-parchment" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-cyan-300/80">{group.label}</p>
                  <ul className="flex flex-col gap-1">
                    {group.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          onClick={onClose}
                          className="block rounded-lg px-2 py-2.5 text-base text-parchment/90 hover:bg-white/5"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link to="/contact" onClick={onClose} className="rounded-lg px-2 py-2.5 text-base text-parchment/90 hover:bg-white/5">
                Contact
              </Link>
            </nav>

            <Link to="/admissions" onClick={onClose} className="btn-primary mt-8 w-full justify-center">
              Apply Now
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
