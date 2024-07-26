/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lime: 'hsl(61, 70%, 52%)',
        red: 'hsl(4, 69%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        light:'hsl(61deg 70% 52% / 30%)',
        slate_100: 'hsl(202, 86%, 94%)',
        slate_300: 'hsl(203, 41%, 72%)',
        slate_500:' hsl(200, 26%, 54%)',
        slate_700: 'hsl(200, 24%, 40%)',
        slate_900: 'hsl(202, 55%, 16%)',
      },
      fontFamily: {
        'sans': ["Plus Jakarta Sans", 'sans-serif']
      },
    },
  },
  plugins: [],
}