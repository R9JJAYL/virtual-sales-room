/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neutonic: {
          bg: '#0F0F0F',
          surface: '#1A1A1A',
          border: '#2A2A2A',
          orange: '#FF6B00',
        },
        flavour: {
          tropical: '#06B6D4',
          orange: '#FF8C00',
          strawberry: '#F43F5E',
          bluerazz: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
