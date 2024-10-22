/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#ed3237',
        primaryBlue: '#012060' // You can name this color anything, e.g., 'customRed'
      },
    },
  },
  plugins: [],
}