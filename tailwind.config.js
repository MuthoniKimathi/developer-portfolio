/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          white: '#FFFFFF',
          lightGray: '#D9D9D9',
          neonGreen: '#4EE14A',
          darkGray: '#151515',
          customGray: '#242424',
        },
      },
    },
    plugins: [],
  }
