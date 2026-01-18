/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        lightIce: '#e2f0fd',
        primaryBlue: '#046bd2',
        accentGreen: '#8ac542',
        deepBlue: '#0e5faa',
        placeholderBorder: '#046bd230',
        placeholderText: '#0e5faa'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
