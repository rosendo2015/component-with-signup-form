/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'red-400': 'hsl(0, 100%, 74%)',
        'green-400': 'hsl(154, 59%, 51%)',
        
        // Accent
        'purple-700': 'hsl(248, 32%, 49%)',
        
        // Neutral
        'gray-900': 'hsl(249, 10%, 26%)',
        'purple-350': 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      maxWidth: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
};
