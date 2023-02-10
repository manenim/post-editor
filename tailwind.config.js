/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#2F327D',
        'outline': '#D2D2D2',
        'grey': '#F9F9F9',
        'text': '#646464'
      },
      boxShadow: {
        'shad': '1px 2px 13px -1px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}