interface LiveBadgeProps {
  label: string;
  className?: string;
}

export function LiveBadge({ label, className = '' }: LiveBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-300 ${className}`}
      role="status"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
      </span>
      {label}
    </div>
  );
}
