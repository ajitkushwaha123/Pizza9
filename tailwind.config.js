/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#5271ff",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "pattern1": "url('https://shuffle.dev/saturn-assets/images/testimonials/orange-light.png')",
        "pattern2" : "url('https://shuffle.dev/saturn-assets/images/testimonials/blue-light.png')",
        "pattern3" : "url('./assets/background/hero.png')",
        "pattern4" : "url('https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_bg01-1-50x100.jpg')"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};