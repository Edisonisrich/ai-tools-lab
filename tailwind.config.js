/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f9',
          100: '#d9f2f2',
          200: '#b3e6e6',
          300: '#8cd9d9',
          400: '#66cccc',
          500: '#40bfbf',
          600: '#339999',
          700: '#267373',
          800: '#1a4d4d',
          900: '#0d2626',
        },
        neutral: {
          warm: '#f5f2f0',
          cool: '#f0f2f5',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};