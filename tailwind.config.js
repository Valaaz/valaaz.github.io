/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECE3CA',
        secondary: '#D9CBBE',
        font: '#30031D',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["retro"],
  }
}

