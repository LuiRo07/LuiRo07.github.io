/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralWhite': '#f8f9fa',
        'neutralBlack': '#000814',
        'secondaryBlue': '#001D3D',
        'primaryBlue': '#003566',
        'secondaryYellow': '#FFC300',
        'primaryYellow': '#FFD60A',
      },
      screens: {
        'xs': '310px',
      },
    },
  },
  plugins: [],
}

