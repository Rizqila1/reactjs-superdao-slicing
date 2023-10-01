/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "1px", max: "900px" },
      md: { min: "900px", max: "1200px" },
      lg: { min: "1200px" },
    },
    extend: {
      colors: {
        customyellow: "#FFCF01",
        darkyellow: "#FFC24C",
        softyellow: "#DBE268",
        custompink: "#FF9E9E",
        palmpink: "#FFB4D3",
        custompurple: "#D387F7",
        palmpurple: "#CEAAFF",
        softpurple: "#E2C1F9",
        lightblue: "#77E6FF",
        customblue: "#23C9DE",
        darkblue: "#182632",
        softblue: "#77E6FF",
        customgrey: "#707F8D",
        customorange: "#FFA800",
        cardbg: "#121E28",
        cardborder: "#2A3744",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
