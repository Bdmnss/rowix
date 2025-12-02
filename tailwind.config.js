/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#1A1A1A",
        gray: "#81807E",
        textGray: "#B3B3B2",
        orangeLight: "#E7BEB1",
        orange: "#CE7D63",
        orangeText: "#F9EFEC",
        borderColor: "#1F1F1F",
        buttonBorderColor: "#262626",
      },
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
