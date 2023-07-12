/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.{js,ts,jsx,tsx,mdx}`,
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    /** @type {Record<Breakpoint, string>} */
    screens: {
      '3xs': '320px',
      '2xs': '360px',
      xs: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  plugins: [],
};
