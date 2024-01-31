/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        sans: ['Comfortaa', "sans"],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'text-dark': '#f0f2f5',
        'background-dark': '#090c10',
        'primary-dark': '#9cb1ce',
        'secondary-dark': '#33527a',
        'accent-dark': '#4678be',
        'text-light': '#0a0c0f',
        'background-light': '#eff2f6',
        'primary-light': '#314663',
        'secondary-light': '#85a4cc',
        'accent-light': '#4173b9',
      },
    },
  },
  plugins: [],
}

