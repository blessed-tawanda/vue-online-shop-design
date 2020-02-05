module.exports = {
  theme: {
    extend: {
      spacing: {
        '72' : '18rem',
        '80' : '20rem',
        '88' : '22rem',
        '96' : '24rem',
        '104': '26rem'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
