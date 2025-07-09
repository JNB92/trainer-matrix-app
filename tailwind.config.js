/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Looks for classes in your HTML file
  ],
  theme: {
    extend: {
      colors: {
        'bca-red': '#d51f2e',
        'bca-gold': '#c39137',
        'bca-beige': '#eee6d4',
        'bca-soft-white': '#f4f0ec',
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}