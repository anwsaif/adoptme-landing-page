/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#304057',
        secondary: '#6D6D6D',
        tertiary: '#637C95',
        quarternary: '#E6E6E6',
        dark: '#151515'
      },
      dropShadow: {
        primary: '0 0 4px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}

