/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 100px 77.3px rgba(0, 0, 0, 0.09)',
        'shoes': '0 30px 64.5px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'shoes': '0 30px 64.5px rgba(0, 0, 0, 0.25)',
        'white': '0 15px 10px rgba(0, 0, 0, 0.20)',
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        foo: 'linear-gradient(to right, white 0%, white 50%, #f3f4f6 50%, #f3f4f6 100%)',
        'diagonal-gradient-start': 'linear-gradient(45deg, #77C0E9 14%, #82c5eb 5%)',
        'diagonal-gradient-middle': 'linear-gradient(to right, white 0%, white 50%, #f3f4f6 50%, #f3f4f6 100%)',
      },

      backgroundColor: {
        'original': '#77C0E9',
        'custom': '#82c5eb',
      },
    },
  },
  plugins: [],
};
