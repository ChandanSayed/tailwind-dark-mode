/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundColor: 'rgb(var(--background-color) / <alpha-value>)',
        contentColor: 'rgb(var(--content-color) / <alpha-value>)'
      },
      animation: {
        'spin-slower': 'spin 35s ease infinite',
        'spin-slow': 'spin 25s ease-in-out infinite reverse'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
