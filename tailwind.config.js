module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Spartan", "sans-serif"],
      },

      fontSize: {
        "primary-size": "15px",
      },

      colors: {
        primary: "hsl(333, 80%, 67%)",
        "primary-dark": "hsl(300, 43%, 22%)",
        "primary-gray": "hsl(303, 10%, 53%)",
        "primary-light": "hsl(300, 24%, 96%)",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
        100: "28rem",
      },

      backgroundImage: {
        desktop:
          "url('../images/bg-pattern-bottom-desktop.svg'), url('../images/bg-pattern-top-desktop.svg')",
        mobile:
          "url('../images/bg-pattern-bottom-mobile.svg'), url('../images/bg-pattern-top-mobile.svg')",
      },

      backgroundPosition: {
        corner: "left bottom, right top",
      },
    },
  },
  plugins: [],
};
