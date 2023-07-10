/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumturquoise: {
          "100": "#7ed4ce",
          "200": "#78d5cf",
          "300": "#64ccc5",
        },
        gray: {
          "100": "#05253b",
          "200": "#001c30",
        },
        lightcyan: {
          "100": "#dafffb",
          "200": "#d2fffa",
          "300": "#d1fffa",
        },
        steelblue: "#176b87",
        lime: "#00e400",
        brown: "#7e0023",
        purple: "#8f3f97",
        red: "#ff0000",
        darkorange: "#ff7e00",
        yellow: "#ffff00",
      },
      fontFamily: {
        urbanist: "Urbanist",
        taviraj: "Taviraj",
        lateef: "Lateef",
      },
      borderRadius: {
        "6xl": "25px",
        "381xl": "400px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "12xl": "1.94rem",
      "56xl": "4.69rem",
      "51xl": "4.38rem",
      "11xl": "1.88rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
