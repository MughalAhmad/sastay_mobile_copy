/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via system setting
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        backgroundTopBanner : 'var(--background-top-banner)',
        colorTopBanner:'var(--color-top-banner)',
        backgroundNavbarMenu:'var(--background-navbar-menu)',
        backgroundTopHeader:'var(--background-top-header)',
        primaryColor:'var(--primary-color)',
        dash:'var(--dash)',
        simpleColor:'var(--simple-color)',
        aboutSale:'var(--about-sale)',
        reversSimpleColor:'var(--revers-simple-color)',
        showCaseFilter:'var(--show-case-filter)',

        zinc700: 'var(--zinc-700)',
        zinc900: 'var(--zinc-900)',
        neutral300: 'var(--neutral-300)',
        neutral500: 'var(--neutral-500)',
        stone300: 'var(--stone-300)',
        },
    },
  },
  plugins: [],
}



