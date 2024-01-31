/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts}",
    "./index.html",
    "./pages/*.{html,js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo 2', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')],
  daisyui: {
    themes: ["light"],
  },
}

