/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        xmd: "850px",
        lg: "1024px",
        vlg: "1400px",
      },
      colors: {},
    },
  },
  plugins: [],
};
