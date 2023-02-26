/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: '#1c1b1b',
        'dark-hover': '#373737',
        orange: '#dd7f65',
        'orange-dark': '#c5360f',
        light: '#fdeae3',
        'light-hover': '#fbd1c2',
      },
    },
    fontFamily: {
      highlighted: 'Hanken Grotesk,  sans-serif',
      body: 'Poppins, sans-serif',
    },
  },
  plugins: [],
}
