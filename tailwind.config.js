/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{svelte,ts}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        "primary-100": "#EDEDED",
        "primary-200": "#ACD5F2",
        "primary-300": "#7FA8C9",
        "primary-400": "#527BA0",
        "primary-500": "#254E77",
        "secondary-100": "#7C7C7C",
        "secondary-200": "#959494",
      },
      gridTemplateRows: {
        7: "repeat(7, 1rem)",
      },
      gridTemplateColumns: {
        51: "repeat(51, 1rem)",
      },
    },
  },
  plugins: [],
};
