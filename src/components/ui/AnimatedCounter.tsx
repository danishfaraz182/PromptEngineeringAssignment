import { useCountUp, useInView } from '../../hooks/useCountUp';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, suffix = '', duration = 1800, className }: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const animated = useCountUp({ end: value, duration, start: inView });

  return (
    <span ref={ref} className={className} aria-label={`${value.toLocaleString()}${suffix}`}>
      {animated.toLocaleString()}
      {suffix}
    </span>
  );
}
