/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundColor: 'hsl(210 40% 98%)',
        contentColor: 'hsl(217 32.6% 17.5%)'
      },
      animation: {
        'spin-slower': 'spin 35s ease infinite',
        'spin-slow': 'spin 25s ease-in-out infinite reverse'
      }
    }
  },
  plugins: []
};
