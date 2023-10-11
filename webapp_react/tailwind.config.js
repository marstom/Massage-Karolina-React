/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary colors
        primary: "#F9ECE6",
        secondary: "#e0bebd",
        lightBlue: "#00ADB5",
        textColor: "#0e0e0e",
        textColorLight: "#F9ECE6",
        menuTextColor: "#ffffff",
        // other colors
        green: "#36A18B",
        rose: "#AA6F6D",
        darkerGreen: "#2F8A83",
        lightBg: "#dadada",
        primaryOpaque: "rgba(34,40,49,0.5)",
        secondaryOpaque: "rgba(0,0,0,0.5)",
        black: "rgb(26,26,26)",

        // modified colors
        "hovered-button": "#00c8d2",
        "hold-button": "#00959b",
        "secondary-darker": "#c99b9b",
      },
    },
  },
  plugins: [],
};
