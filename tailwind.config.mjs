/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
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
            '--tw-prose-body': theme('colors.ll-cream'),
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-links': theme('colors.ll-gold'),
            '--tw-prose-counters': 'rgba(255,255,255,0.5)',
            '--tw-prose-bullets': 'rgba(255,255,255,0.3)',
            '--tw-prose-hr': 'rgba(255,255,255,0.1)',
            '--tw-prose-quotes': theme('colors.ll-cream'),
            '--tw-prose-quote-borders': theme('colors.ll-gold'),
            '--tw-prose-captions': 'rgba(255,255,255,0.4)',
            '--tw-prose-code': theme('colors.ll-cream'),
            '--tw-prose-pre-code': theme('colors.ll-cream'),
            '--tw-prose-pre-bg': 'rgba(255,255,255,0.05)',
            '--tw-prose-th-borders': 'rgba(255,255,255,0.1)',
            '--tw-prose-td-borders': 'rgba(255,255,255,0.05)',
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
