/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        backgroundColor: '#111826',
        colorYellow: '#FEEA00',
        colorPurple: '#7F3DD2',
        colorGreenLight: '#05E283',
        colorGreenDark: '#1FC77E',
        colorBlack: '#000000',
        colorWhite: '#ffffff',
        colorAll: 'rgba(255,255,255,0.2)',
      },
      width: {
        widthLg: '80%',
        widthMd: '88%',
        widthSm: '90%',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inconsolata: ['var(--font-inconsolata)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
}
