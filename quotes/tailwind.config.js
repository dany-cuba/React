/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'like' : "url('./assets/like.svg')",
        'refresh' : "url('./assets/refresh.svg')"
      }
    },
  },
  plugins: [],
}

