/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        'custom-shadow': '0 100px 77.3px rgba(0, 0, 0, 0.09)',
        'shoes': '0 30px 64.5px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'shoes': '0 30px 64.5px rgba(0, 0, 0, 0.25)', // Custom drop shadow
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      backgroundColor: {
        'original': '#77C0E9',
        'custom': '#77C0E9', // Custom background color
      },
    },
  },
  plugins: [],
};
