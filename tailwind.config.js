// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jomhuria:['Jomhuria', "serif"],
        poppins:['Poppins', "sans-serif"],
        urbanist: "var(--font-urbanist)",
      },
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',

    }
  },
  plugins: [],
}