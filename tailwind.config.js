module.exports = {
  content: ["./index.html", "./**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        black: "#000000",
        white: "#ffffff",
        red: {
          500: "#ff0000", // Bright red for key elements
          600: "#e00000", // Slightly darker red
          700: "#c00000", // Even darker red for different shades
        },
      },
      fontFamily: {
        // Custom fonts can be added here
        sans: ["Arial", "sans-serif"],
        serif: ["Times New Roman", "serif"],
      },
      spacing: {
        // Custom spacing if needed
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        // Additional borderRadius options
        xl: "1rem",
      },
      // Any other theme extensions you need
    },
  },
  variants: {
    extend: {
      // Extend variants here if needed
    },
  },
  plugins: [],
};
