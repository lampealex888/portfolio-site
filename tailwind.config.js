/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["winter", "business"],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}