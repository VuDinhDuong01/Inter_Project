/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xxl': '4px 2px 15px 1px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'green': '#186E25',
        'white':'#fff',
        'black':'#000',
        'grey':'#979797'
      },
      keyframes: {
        'slide-in-top': {
          '0%' :{
            '-webkit-transform': 'translateY(-50px)',
              transform: 'translateY(-50px)',
               opacity: '0'
          },
          '100%': {
            '-webkit-transform':' translateY(0)',
                    transform: 'translateY(0)',
            opacity: 1
          }
        }
      }
    },
    fontFamily: {
      'FontSan': ['San Francisco Display'],
    },
    animation: {
      'slide-in-top': 'slide-in-top 1s ease-in-out ',
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/line-clamp'),],
}