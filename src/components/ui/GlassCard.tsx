import type { HTMLAttributes, ReactNode } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverLift?: boolean;
}

export function GlassCard({ children, hoverLift = true, className = '', ...rest }: GlassCardProps) {
  return (
    <div
      className={`glass-panel p-6 transition-all duration-300 ${
        hoverLift ? 'hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-gold-glow' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
