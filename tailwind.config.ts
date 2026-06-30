import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3E66FC',
        secondary: '#986AFE',
        background: '#000105',
        surface: '#060A13',
        white: '#FEFFFF',
      },
      boxShadow: {
        glow: '0 0 80px rgba(62, 102, 252, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
