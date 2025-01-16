/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
    // tailwind.config.js
    module:exports = {
      darkMode: 'media',
      // ...
    },
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
