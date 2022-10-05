/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray2: "rgb(189, 189, 189)",
        darkgray: "#1C1F1C",
        darkergray: "#171A17",
      },
      minHeight: {
        hero_sm: "340px",
        hero_md: "500px",
        hero_lg: "600px",
        hero_xl: "700px",
        hero_2xl: "800px",
      },
    },
  },
  plugins: [],
};
