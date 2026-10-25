/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        primary: '#1D2D2B',
        textPrimary: '#0F172A',
        textSecondary: '#64748B',
        accent: '#5C646B',
        border: '#E2E8F0',
      },
      fontFamily: {
        minecraft: ['"Press Start 2P"', 'cursive'],
        sans: ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}