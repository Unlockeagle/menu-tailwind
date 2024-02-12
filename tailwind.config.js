/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./tab.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   cell: "540px",
    // },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
