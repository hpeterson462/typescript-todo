const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
