module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { extend: { colors: { "accent-1": "#333" } } },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
