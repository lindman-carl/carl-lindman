/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: {
          background: "hsla(209, 40%, 30%, 1)",
          text: "hsla(209, 100%, 95%, 1)",
          contrast: "hsla(24, 100%, 60%, 1)",
        },
        content: {
          background: "hsla(0, 0%, 90%, 1)",
          text: "hsla(209, 100%, 18%, 1)",
          contrast: "hsla(24, 100%, 45%, 1)",
        },
      },
      backgroundImage: {
        header: "url('/images/az-subtle.png')",
        content: "url('/images/circles.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
