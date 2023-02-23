/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // breakpoints
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        // custom colors for the website
        bgColor: "white",
        accentColor: "black",
        primaryColor: "#B99B6B",
        secondaryColor: "#AA5656",
      },
      fontFamily: {
        // Fonts    [note:write font import link in index.css]
        defaultText: ["Cormorant Garamond", "serif"],
        secondText:['Open Sans', "sans-serif"]
      },
      boxShadow: {
        "3xl": "2px 2px 15px 1px black",
      },
      backgroundImage: {
        // we can use background image via className
      },
      animation: {
        left: "left 1s ease-in-out forward",
      },
      keyframes: {
        left: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
