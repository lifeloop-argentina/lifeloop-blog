/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'll-black': '#0d0d0d',
        'll-dark': '#1a1a1a',
        'll-cream': '#f5f2ee',
        'll-white': '#ffffff',
        'll-gold': '#c9a84c',
        'll-gold-light': '#d4b86a',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '720px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ll-dark'),
            '--tw-prose-headings': theme('colors.ll-black'),
            maxWidth: '720px',
            fontFamily: 'Inter, system-ui, sans-serif',
            lineHeight: '1.6',
            h1: { fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1' },
            h2: { fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.1' },
            h3: { fontWeight: '700', letterSpacing: '-0.01em', lineHeight: '1.2' },
            a: { color: theme('colors.ll-gold'), textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            img: { borderRadius: '0.25rem' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
