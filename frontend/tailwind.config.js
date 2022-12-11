/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'カラー名': 'カラーコード'
        'positive': '#fa8232',
      },
    },
  },
  plugins: [],
}
