/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      'serif': ['Seltar', 'sans-serif'],
      'sans': ['Bona Nova', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

