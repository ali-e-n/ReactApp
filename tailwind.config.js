module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your project structure
  ],
  theme: {
    extend: {
      fontfamily: {
        sans: ["Roboto", "sans-serif"],
      },

      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
