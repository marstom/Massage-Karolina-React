/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hovered-button": "#00c8d2",
        "hold-button": "#00959b",
        secondary: "#e0bebd",
        "secondary-darker": "#c99b9b",
      },
    },
  },
  plugins: [],
};
