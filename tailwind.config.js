import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: {
        400: 'hsl(0, 100%, 74%)',
      },
      green: {
        400: 'hsl(154, 59%, 51%)',
      },
      purple: {
        350: 'hsl(246, 25%, 77%)',
        700: 'hsl(248, 32%, 49%)',
      },
      gray: {
        900: 'hsl(249, 10%, 26%)',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      base: '16px',
    },
    maxWidth: {
      mobile: '375px',
      desktop: '1440px',
    },
  },
})
