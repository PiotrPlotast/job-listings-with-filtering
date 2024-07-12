/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "bg-color": "#EFFAFA",
        "header-bg-color": "#5CA5A5",
        "card-main-color": "#5CA5A5",
        "card-secondary-color": "#2B3939",
        "card-details-color": "#7C8F8F",
        "card-tag-bg-color": "rgba(92, 165, 165, 0.1)",
      },
      backgroundImage: {
        "mobile-header": "url('/bg-header-mobile.svg')",
        "desktop-header": "url('/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
