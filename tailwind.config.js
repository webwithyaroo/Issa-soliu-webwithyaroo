/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0rem",
        lg: "0rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "840px",
        md: "968px",
        lg: "1110px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
