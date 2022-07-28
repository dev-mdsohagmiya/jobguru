/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html','./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        "mont":["Montserrat"],
        "nunito":["Nunito"],
        "lib":["Libre Franklin"]
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
