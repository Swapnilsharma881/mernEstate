/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as necessary
  ],
  theme: {
    extend: {
      colors: {
        // Purple Shade
        'purple-95': '#FFF1E5',
        'purple-90': '#FFE4CC',
        'purple-75': '#FFCA99',
        'purple-70': '#FF9533',
        'purple-60': '#FF7A00',
        'purple-65': '#1A64FF',
        
        // White Shade
        'white-99': '#FCFCFD',
        'white-97': '#F7F7F8',
        'white-95': '#F1F1F3',
        'white-90': '#E4E4E7',
        
        // Grey Shade
        'gray-60': '#999999',
        'gray-50': '#808080',
        'gray-40': '#666666',
        'gray-30': '#4D4D4D',
        'gray-20': '#333333',
        'gray-15': '#262626',
        'gray-10': '#1A1A1A',
        'gray-08': '#141414',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
};
