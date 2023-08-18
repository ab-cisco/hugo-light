/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
