import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        cream: '#F4F1E9',
        navy: '#061428',
        'navy-deep': '#062A5C',
        blue: {
          accent: '#005FE7',
          light: '#A9C9FF',
          pale: '#BFD8FF',
          link: '#E6EEFF',
        },
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
    },
  },
} satisfies Partial<Config>
