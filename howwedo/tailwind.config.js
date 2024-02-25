/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg' : "url('D:/My EIS website/eis/assets/sneaker background.webp')",
      }
    },
  },
  plugins: [],
}