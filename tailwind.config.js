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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
