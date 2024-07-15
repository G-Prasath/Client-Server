/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "320px", // Extra Extra Small
      xs: "480px", // Extra Small
      sm: "640px", // Small
      md: "768px", // Medium
      lg: "1024px", // Large
      xl: "1280px", // Extra Large
      "2xl" : "1536px", // Extra Extra Large
    },
    colors: {
      primary: "#1544AB",
      light_white: "#F7F7EA",
      gray: "#D9D9D9",
      dark_gray: "#231E1C",
      white: "#fff",
      text_color: "#686868",
      button_color: "#39D9E8",
      icon_color: '#dbdbdb',
      footer_dark_bg: '#1c1817',
      footer_bg: '#231E1C',
      error_clr: "#ff0000",
      tst: "#dfe2e7"
    },
    extend: {
      boxShadow: {
        custom:"rgba(21, 68, 171, 0.1) 0px 7px 29px 0px",
        imgShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"
      },
      backgroundImage: {
        'about_bg' : "linear-gradient(rgba(255, 255, 255,0.1), rgba(255, 255, 255,0.1)), url('/Aboutus/Aboutus-banner.jpg')"
      }
    },
  },
  plugins: [],
};
