module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        'pink': {
          DEFAULT: 'rgb(255, 63, 208)',
        },
        'green': {
          DEFAULT: 'rgb(47, 250, 0)'
        }
      },
      screens: {
        'lg+': '1190px',
        '3xl': "1734px"
      },
      fontFamily: {
        'graffiti': "'Graffiti City', sans-serif"
      },
      boxShadow: {
        'count': 'inset 0px 3px 6px #000000E3;',
        'mint': 'inset 0px 3px 6px #000000B7;'
      }
    }
  },
  plugins: [],
}
