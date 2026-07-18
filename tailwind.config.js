/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#2A3F8F',
          DEFAULT: '#1B2A6B',
          dark: '#0D1B3E',
        },
        brand: {
          orange: '#F0A500',
          light: '#F5F7FF',
          dark: '#1F2937',
          muted: '#6B7280'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
