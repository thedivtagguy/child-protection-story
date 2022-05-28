const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        divpurple: "#623cea",
        divorange: "#f85e00"
        // ...
      },
      fontFamily: {
        'baskerville': ['"Libre Baskerville"', 'serif'],
      }
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production // disable purge in dev
  }
};
