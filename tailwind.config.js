/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      }
    }
  },
  plugins: [],
}
