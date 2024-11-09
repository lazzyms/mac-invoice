/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        script: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
