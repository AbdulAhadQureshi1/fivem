/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: "#4DFF74",
        lightgray: "rgba(255,255,255,0.32)",
        lightergray: "rgba(255,255,255,0.72)",
        lightred: "#FF4D4D"
      }
    },
  },
  plugins: [],
}

