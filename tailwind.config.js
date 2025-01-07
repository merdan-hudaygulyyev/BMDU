export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        spin_slow: 'spin 10s linear infinite'
    },
    },
  },
  plugins: [

  ],
};
