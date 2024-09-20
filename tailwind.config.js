/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
      extend: {
          colors: {
              primary: '#F93B1D',
              'primary-darker': '#DF3014',
              gray: '#808A93',
          },
      },
  },
  plugins: [],
}