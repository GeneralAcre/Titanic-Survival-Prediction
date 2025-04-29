const config = {
  plugins: ["@tailwindcss/postcss"],
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-RethinkSans)', 'sans-serif'],
      },
    },
  },
};
export default config;