/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Hitchcut: ['Hitchcut', 'sans-serif'],
        Bernier: ['Bernier', 'sans-serif'],
        Skere: [`Skere`, 'sans-serif'],
        Codec: ['Codec', 'sans-serif'],
        Edmund: ['Edmund', 'sans-serif']
      },
      colors: {
        'pink-lady': {
          50: '#fff9ed',
          100: '#FFF2D9',
          200: '#fedeaa',
          300: '#fdc674',
          400: '#fba33c',
          500: '#f98716',
          600: '#ea6b0c',
          700: '#c2510c',
          800: '#9a4012',
          900: '#7c3612',
          950: '#431907'
        },
        meros: {
          red: '#ed0505',
          green: '#059620'
        }
      }
    }
  },
  plugins: [animations]
}
