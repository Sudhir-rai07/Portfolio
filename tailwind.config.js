/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Briem-Hand": [ "PT Sans Narrow",' sans-serif'],
        "Fira Sans Condensed": [ "Fira Sans Condensed",' sans-serif']
      }
    },
  },
  plugins: [],
}
