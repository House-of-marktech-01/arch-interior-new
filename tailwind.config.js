/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ethereal: ["Ethereal", "sans-serif"], 
        cormorant: ["'Cormorant Garamond'", "serif"],
      },
      colors: {
        primaryRed: "#ed3237",
        primaryBlue: "#012060",
      },
    },
  },
  plugins: [],
};
