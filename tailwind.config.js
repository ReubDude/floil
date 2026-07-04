/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // White-shell museum palette with cool accents
        shell: '#FAFAF8',   // warm museum white
        ink: '#0B0B0C',     // near-black
        graphite: '#2A2C2E',
        steel: '#6B7075',   // cool grey
        silver: '#C8CCCE',
        line: '#E7E7E3',    // hairline divider
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        widelabel: '0.22em',
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
};
