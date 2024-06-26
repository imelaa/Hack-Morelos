/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "customGreen": '#527472',
        "color-1": "#CB997E",
        "color-2": "#DDBEA9",
        "color-3": "#FFE8D6",
        "color-4": "#B7B7A4",
        "color-5": "#A5A58D",
        "color-6": "#6B705C",
        "color-7": "#F1F0EC",
        "color-8": "#F5F5F5",
      }
    },
  },
  plugins: [],
};
