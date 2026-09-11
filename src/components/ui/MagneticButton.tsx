import { useRef, useState, type ReactNode, type ButtonHTMLAttributes, type MouseEvent } from 'react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
}

/**
 * A button that subtly follows the cursor within its bounds — a small,
 * deliberate "magnetic" interaction reserved for primary calls to action.
 */
export function MagneticButton({ children, strength = 14, className = '', ...rest }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setOffset({ x: relX * strength, y: relY * strength });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
