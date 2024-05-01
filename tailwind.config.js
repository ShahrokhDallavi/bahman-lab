/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'inner-deep': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.5)',
      },
      animation: {
        'bounce-slow': 'bounce 5s infinite',
      },
      colors: {
        'primaryColor': '#28449F',
        'secondaryColor': '#00D295',
        'bgSection': '#DFE3F3',
        'bgForm': '#F3F4F6',
        'white': '#F9F9F9',
        'gray': '#CBCBCB',
        'black': '#0E0E0F',
        'red': '#CC0000',
        'textColor': '#303030',
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
      },
      fontFamily: {
        'sans': ['iranyekanwebmedium', 'sans-serif'],
      },
    }, 
  },
  plugins: [],
}