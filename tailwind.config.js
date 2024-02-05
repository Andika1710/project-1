module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_0a": "#0000000a",
          "900_0f": "#0000000f",
          "900_0c": "#0000000c",
        },
        blue_gray: { 300: "#9ca3af", "300_01": "#94a3b8" },
        indigo: { 50: "#e2e8f0" },
        teal: {
          "800_cc": "#166752cc",
          "800_b2": "#156751b2",
          "900_16": "#00663316",
        },
        green: { 800: "#15803d" },
        gray: { 100: "#f1f5f9" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 2px  4px -1px #0000000f",
        bs1: "0px -4px  6px -2px #0000000c",
        bs2: "0px 4px  6px -2px #0000000c",
      },
      fontFamily: {
        robotoslab: "Roboto Slab",
        plusjakartasans: "Plus Jakarta Sans",
        poppins: "Poppins",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
