/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        secondaryBase: 'var(--color-secondary-base)',
        primaryBtn: 'var(--color-primary-btn)',
        secondaryBtn: 'var(--color-secondary-btn)',
        primaryText: 'var(--color-primary-text)',
        secondaryText: 'var(--color-secondary-text)',
        hoverText: 'var(--color-hovers-text)',
        border: 'var(--color-border)',
        hover: 'var(--color-hover)',
        neonText: 'var(--color-neon-text)',
        neonGlow: 'var(--color-neon-glow)',
        folders: 'var(--color-folders)',
        foldersHover: 'var(--color-folders-hover)',
        switch: 'var(--color-switch)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'neon': 'neon 1.5s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 5s infinite',
      }
    },
  },
  plugins: [],
};