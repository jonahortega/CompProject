/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aup-blue': '#003366',
        'aup-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}

