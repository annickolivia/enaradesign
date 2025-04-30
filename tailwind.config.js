/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'slide-down': 'slide-down 0.3s ease-out forwards',
        slideFade1: 'slideFade 1.8s ease-out 0s forwards',
        slideFade2: 'slideFade 1.2s ease-out 0.6s forwards',
        slideFade3: 'slideFade 0.6s ease-out 1.2s forwards',
        revealSlide: 'revealSlide 3s ease-out 2s forwards',
        expandLine: 'expandLine 1.2s ease-out 3s forwards',
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideFade: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '85%':{ opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        revealSlide: {
          '0%': { opacity: '0', transform: 'translateX(-100px)', width: '0' },
          '30%': { opacity: '1', transform: 'translateX(50px)', width:  '25rem' },
          '95%': { opacity: '1',transform: 'translateX(0)'},  
          '100%': { width:  '0' },
        },
        expandLine: {
          '0%': { opacity: '0' },
          '100%': { opacity:'1' },
        },
    },
  },
  plugins: [],
}
}
