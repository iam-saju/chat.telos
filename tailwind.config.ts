import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display-2xl': [
          'var(--font-size-display-2xl)',
          {
            lineHeight: 'var(--line-height-display)',
            letterSpacing: 'var(--letter-spacing-display)',
          },
        ],
        'display-xl': [
          'var(--font-size-display-xl)',
          {
            lineHeight: 'var(--line-height-display)',
            letterSpacing: 'var(--letter-spacing-display)',
          },
        ],
        h1: [
          'var(--font-size-h1)',
          {
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-heading)',
          },
        ],
        h2: [
          'var(--font-size-h2)',
          {
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-heading)',
          },
        ],
        h3: [
          'var(--font-size-h3)',
          {
            lineHeight: 'var(--line-height-snug)',
            letterSpacing: 'var(--letter-spacing-heading)',
          },
        ],
        body: [
          'var(--font-size-body)',
          {
            lineHeight: 'var(--line-height-normal)',
            letterSpacing: 'var(--letter-spacing-body)',
          },
        ],
        'body-sm': [
          'var(--font-size-body-sm)',
          {
            lineHeight: 'var(--line-height-normal)',
            letterSpacing: 'var(--letter-spacing-body)',
          },
        ],
        caption: [
          'var(--font-size-caption)',
          {
            lineHeight: 'var(--line-height-snug)',
            letterSpacing: 'var(--letter-spacing-caption)',
          },
        ],
        label: [
          'var(--font-size-label)',
          {
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-label)',
          },
        ],
      },
      lineHeight: {
        display: 'var(--line-height-display)',
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
      },
      letterSpacing: {
        display: 'var(--letter-spacing-display)',
        heading: 'var(--letter-spacing-heading)',
        body: 'var(--letter-spacing-body)',
        caption: 'var(--letter-spacing-caption)',
        label: 'var(--letter-spacing-label)',
      },
    },
  },
  plugins: [],
};

export default config;
