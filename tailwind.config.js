/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#1D4ED8',
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
        accent: '#9333EA',
        border: '#334155',
      },
      fontFamily: {
        minecraft: ['"Press Start 2P"', 'cursive'],
        sans: ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}