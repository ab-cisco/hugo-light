/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Jost", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
            fontSize: "1.25rem",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
