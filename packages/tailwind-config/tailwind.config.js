/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.{js,ts,jsx,tsx,mdx}`,
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
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
