/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'], // Main font
        inria: ['Inria Sans', 'sans-serif'], // Other font
      },
      colors :{
        primaryColor: ['#F4E3A2']
      }
    },
  },
  plugins: [],
}
