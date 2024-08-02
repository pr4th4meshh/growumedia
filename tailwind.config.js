/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      bulgatti: ['Bulgatti', 'sans-serif'],
      monument: ['Monument', 'sans-serif']
    },
  },
  plugins: [],
}

