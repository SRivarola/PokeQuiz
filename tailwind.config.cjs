/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#FF6900",
        amarillo: "#F8FF00",
        gray: "#787878",
        purple: '#490b61',
        error: '#FF0000',
        correct: '#2BFF00'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pokehollow: ["PokeHollow", 'cursive'],
        pokesolid: ["PokeSolid", 'cursive']
      },
      boxShadow: {
        '3xl': '2px 2px 5px rgba(124, 124, 124)',
      },
      keyframes: {
        brightPulse: {
          "0%": {"filter": "brightness(1)"},
          "20%": {"filter": "brightness(0)"},
          "50%": {"filter": "brightness(0)"},
          "70%": {"filter": "brightness(1)"},
          '100%': {"filter": "brightness(1)"},
        }
      },
      animation: {
        "brightPulsing": "brightPulse 5s linear infinite"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};