/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jordanRed: '#CE1126',
        jordanDark: '#111111',
      }
    },
  },
  plugins: [],
}