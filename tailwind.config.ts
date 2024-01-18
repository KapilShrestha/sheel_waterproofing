/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts}",
  "./index.html",
],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo 2', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

