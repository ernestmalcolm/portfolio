/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      red: "#F05454",
      lgray: "#DDDDDD",
      blue: "#30475E",
      darkblue: "#222831",
    },
    extend: {},
  },
  plugins: [],
};
