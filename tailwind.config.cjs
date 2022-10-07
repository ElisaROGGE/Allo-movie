/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content'
      }
    },
    screens: {
      'tablet-1': {'max': '800px'},
      'md' : {'max': '768px'},
      'tablet': '640px',
      's': {'max': '425px'},
      'xs': {'max':'375px'},
      'xxs': {'max':'320px'}
    }
  },
  plugins: [],
}
