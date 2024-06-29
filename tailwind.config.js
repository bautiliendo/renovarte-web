/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "1050px": "1050px",
        "400px" : "400px"
      },
    },
  },
  plugins: [],
};
