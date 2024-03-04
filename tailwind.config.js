/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Oswald"', "sans-serif"],
        second: ['"Roboto"', "sans-serif"],
      },
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
