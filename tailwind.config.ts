/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts}",
  "./index.html",
  "./pages/*.{html,js,ts}",
],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo 2', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

