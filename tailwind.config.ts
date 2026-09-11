import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#04070f',
          900: '#070b18',
          800: '#0b1123',
          700: '#101a34',
          600: '#172548',
        },
        royal: {
          400: '#5b7fe0',
          500: '#3a5bc7',
          600: '#2941a3',
          700: '#1f2f7d',
        },
        cyan: {
          300: '#8fe9f5',
          400: '#4fd6ea',
          500: '#22c1dc',
        },
        gold: {
          300: '#f3d99a',
          400: '#e8c06c',
          500: '#d3a53f',
        },
        parchment: '#f6f3ec',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Sora"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        'aurora': 'radial-gradient(circle at 20% 20%, rgba(79,214,234,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(211,165,63,0.14), transparent 40%), radial-gradient(circle at 60% 80%, rgba(58,91,199,0.28), transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 40px rgba(4,7,15,0.45)',
        'gold-glow': '0 0 0 1px rgba(232,192,108,0.35), 0 20px 60px rgba(232,192,108,0.08)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.85)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(-2%,2%,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'drift': 'drift 18s ease-in-out infinite',
        'dash': 'dash 2.4s linear forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
