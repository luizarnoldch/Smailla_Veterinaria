/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marron': '#C5B086',
        'naranja': '#E39800',
      },
    },
    screens: {
      'sm': {'max': '720px'},
      'md': {'min': '720px', 'max': '1080px'},
      'lg': {'min': '1080px'},
    },
  },
  plugins: [],
}
