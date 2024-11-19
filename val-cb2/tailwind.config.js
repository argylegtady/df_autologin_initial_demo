/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./*.tsx", // Matches all .tsx files in the same directory as the config
  ],
  theme: {
    extend: {
      fontFamily: {
        clarika: ["Clarika Geometric", "sans-serif"], // Add Clarika font
      },
      colors: {
        primary: "#3067db", // Add primary color as a custom color
      },
    },
  },
  plugins: [],
};
