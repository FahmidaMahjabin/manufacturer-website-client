module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1948A",
          secondary: "#ABEBC6",
          accent: "#85C1E9",
          neutral: "#AAB7B8",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
}
