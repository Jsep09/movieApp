/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      height: {
        110: "28rem",
        128: "32rem",
        136: "40rem",
      },
    },
  },
  plugins: [],
};
