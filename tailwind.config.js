/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f9f7ff',
          100: '#f3efff',
          200: '#e7deff',
          300: '#d4c5ff',
          400: '#b69dff',
          500: '#9b7dff',
          600: '#8a5cff',
          700: '#7a3fff',
          800: '#6a2fff',
          900: '#5a1fff',
        },
      },
    },
  },
  plugins: [],
}