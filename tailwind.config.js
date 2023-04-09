/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        platformRed: PlatformColor('systemRed', 'red'),
      },
    },
  },
  plugins: [],
};
