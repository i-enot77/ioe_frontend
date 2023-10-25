/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "text-color": "#808080",
      },
      backgroundColor: {
        "light-gray": "#EEF3F8",
        "light-neutral": "#F7F7F7",
      },
      keyframes: {
        tabColor: {
          "0%": { "border-color": "#87C4E7" },
          "100%": { "border-color": "#3382B0" },
        },
      },
      animation: {
        tabColor: "tabColor .25s ease-in-out 1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
