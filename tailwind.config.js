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
          light: '#2D3561',
          DEFAULT: '#1A1F3A',
          dark: '#0F1419',
        },
        brand: {
          primary: '#00D9FF',
          secondary: '#FF6B9D',
          accent: '#FFD93D',
          light: '#F8FAFC',
          dark: '#0F1419',
          muted: '#94A3B8',
          purple: '#A78BFA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
