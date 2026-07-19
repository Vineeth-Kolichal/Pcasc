/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#a8c7fa',
          300: '#7cacf8',
          400: '#4c8df6',
          500: '#1a73e8',
          600: '#1a5fb4',
          700: '#1a4f8b',
          800: '#143d6b',
          900: '#0d2b4d',
          950: '#091c33',
        },
        surface: {
          50: '#f8f9fb',
          100: '#f1f3f7',
          200: '#e8ebf0',
          300: '#dadee5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
