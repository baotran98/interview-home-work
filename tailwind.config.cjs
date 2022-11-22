/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': `linear-gradient(-20deg, #d558c8 0%, #24d292 100%);`
      }
    }
  },
  plugins: []
}
