/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        primary: '#191919',
        primaryDark:'primary',
        secondary: '#3F51B5',
        button:'#FF7A00',
        lightButton:'#FFE4CC',
        // Add more colors as needed
      },
    },
  },
}
