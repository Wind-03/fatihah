/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B9FF66',
        'secondary': '#191A23',
        'accent': '#F3F3F3',
        'faint':'#292A32'
      }
    },
  },
  plugins: [],
}