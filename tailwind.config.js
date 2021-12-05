module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      charcoal: '#262f33',
      grey: '#EEEEEE',
      gray: '#AAAAAA',
      white: '#FFFFFF',
      orange: '#eb8900',
      green: '#74b800',
      red: '#f20',
      blue: '#78c9d7'
    },
    fontFamily: {
      sans: ['montserrat-light', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
