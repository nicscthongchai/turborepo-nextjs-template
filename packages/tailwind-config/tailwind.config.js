/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx,mdx}`,
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF00FF',
      },
    },
  },
  plugins: [],
};
