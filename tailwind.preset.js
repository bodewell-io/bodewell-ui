// bodewell-ui/tailwind.preset.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        border: 'var(--app-border-color)',
        input: 'var(--app-border-color)',
        ring: 'var(--app-primary-color)',
        background: 'var(--app-bg-color)',
        foreground: 'var(--app-text-color)',
        primary: {
          DEFAULT: 'var(--app-primary-color)',
          foreground: 'var(--app-primary-foreground-color)',
        },
        secondary: {
          DEFAULT: 'var(--app-secondary-color)',
          foreground: 'var(--app-secondary-foreground-color)',
        },
        destructive: {
          DEFAULT: 'var(--app-danger-color)',
          foreground: 'var(--app-danger-foreground-color)',
        },
        muted: {
          DEFAULT: 'var(--app-card-bg-color)',
          foreground: 'var(--app-text-color)',
        },
        accent: {
          DEFAULT: 'var(--app-accent-color)',
          foreground: 'var(--app-accent-foreground-color)',
        },
      },
      fontFamily: {
        sans: ['var(--app-font-sans)'],
        serif: ['var(--app-font-serif)'],
      },
    },
  },
  plugins: [],
};