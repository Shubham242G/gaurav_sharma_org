/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0a0e27',
        'navy-blue': '#1a1f3a',
        'accent-purple': '#5b5ff5',
        'light-purple': '#e8e9ff',
      },
    },
  },
  plugins: [],
}

