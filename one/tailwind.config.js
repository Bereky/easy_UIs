
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      sxlg: '40px',
      xlg: '34px',
      lg: '26px',
      md: '18px',
      sm: '12px',
      small: '10px',
      extraSmall: '8px'
    },
    extend: {
      colors: {
        purpleLight: '#5923BA',
        purpleParent: '#5923BA',
        darkModeText: '#B1B1B1',
        darkModeCard: '#2C2C2C',
        darkModeBody: '#242424'
      }
    },
  },
  plugins: [],
}
