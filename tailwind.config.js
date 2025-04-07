/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham', 'sans-serif'],
        gotham: ['Gotham', 'sans-serif'],
        druk: ['"Druk Wide Trial"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#6F00D9',
          700: '#5F00D9',
          800: '#4700A3',
          900: '#0504AA',
        },
      },
    },
  },
  plugins: [],
}; 