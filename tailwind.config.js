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
        140: "48rem",
        142: "52rem",
        200: "72rem",
      },
    },
  },
  plugins: [],
};
